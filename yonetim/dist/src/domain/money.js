// Para: en küçük birimde tamsayı. Kayan noktalı hesap yok. Her para biriminin basamak sayısı ayrı.
export const CURRENCY_EXPONENT = {
    TRY: 2, USD: 2, EUR: 2, CNY: 2, GBP: 2, JPY: 0, KRW: 0, AZN: 2,
};
export function exponent(cur) {
    const e = CURRENCY_EXPONENT[cur.toUpperCase()];
    if (e === undefined)
        throw new Error(`Desteklenmeyen para birimi: ${cur}`);
    return e;
}
/** "250", "250.5", "250,50" -> en küçük birim (bigint yerine güvenli tamsayı). */
/** "1.234,56", "1,234.56", "1.250" (binlik) ve "250,5" yazımlarını tek biçime çevirir. */
function normalizeAmount(input) {
    let s = input.trim().replace(/\s/g, '');
    const lastDot = s.lastIndexOf('.');
    const lastComma = s.lastIndexOf(',');
    if (lastDot >= 0 && lastComma >= 0) {
        const dec = lastDot > lastComma ? '.' : ',';
        const grp = dec === '.' ? ',' : '.';
        return s.split(grp).join('').replace(dec, '.');
    }
    const sep = lastComma >= 0 ? ',' : lastDot >= 0 ? '.' : null;
    if (!sep)
        return s;
    const parts = s.split(sep);
    if (parts.length > 2 || (sep === '.' && parts[1].length === 3))
        return parts.join('');
    return parts.join('.');
}
export function parseAmount(input, cur) {
    const e = exponent(cur);
    const s = normalizeAmount(input);
    if (!/^\d+(\.\d+)?$/.test(s))
        throw new Error('Geçersiz tutar');
    const [int, frac = ''] = s.split('.');
    if (frac.length > e)
        throw new Error(`${cur} için en fazla ${e} ondalık basamak`);
    return Number(int) * 10 ** e + Number((frac + '0'.repeat(e)).slice(0, e) || '0');
}
export function formatAmount(minor, cur) {
    const e = exponent(cur);
    const neg = minor < 0;
    const abs = Math.abs(minor);
    const int = Math.floor(abs / 10 ** e);
    const frac = e ? '.' + String(abs % 10 ** e).padStart(e, '0') : '';
    return `${neg ? '-' : ''}${int.toLocaleString('en-US')}${frac} ${cur}`;
}
/** a * bp / 10000, tamsayı aritmetiği ve sözleşmedeki yuvarlama kuralıyla. */
export function applyBasisPoints(baseMinor, bp, rounding = 'HALF_UP') {
    const num = BigInt(baseMinor) * BigInt(bp);
    const den = 10000n;
    const q = num / den;
    const r = num % den;
    if (r === 0n)
        return Number(q);
    if (rounding === 'DOWN')
        return Number(q);
    if (rounding === 'UP')
        return Number(q + 1n);
    return Number(r * 2n >= den ? q + 1n : q);
}
/** Bölüm 10.2. Ayrı masraflar matraha dahil edilmez. */
export function computeCommission(a, inp) {
    switch (a.commission_type) {
        case 'FIXED_JOB':
            if (a.fixed_amount_minor == null)
                return { ok: false, reason: 'Sabit tutar tanımsız' };
            return { ok: true, amountMinor: a.fixed_amount_minor, currency: a.currency, explanation: 'Sabit iş komisyonu' };
        case 'FIXED_SERVICE_DAY':
            if (a.per_day_amount_minor == null)
                return { ok: false, reason: 'Günlük tutar tanımsız' };
            if (!inp.verifiedDays)
                return { ok: false, reason: 'Doğrulanmış hizmet günü yok' };
            return {
                ok: true, amountMinor: a.per_day_amount_minor * inp.verifiedDays, currency: a.currency,
                explanation: `${inp.verifiedDays} gün × günlük komisyon`,
            };
        case 'PERCENT_OF_BASE': {
            if (a.percentage_basis_points == null)
                return { ok: false, reason: 'Oran tanımsız' };
            if (inp.dailyRateMinor == null || !inp.rateCurrency)
                return { ok: false, reason: 'Doğrulanmış günlük ücret yok' };
            if (inp.rateCurrency !== a.currency)
                return { ok: false, reason: 'Ücret ve komisyon para birimi farklı; kur işlemi yapılmaz' };
            if (!inp.verifiedDays)
                return { ok: false, reason: 'Doğrulanmış hizmet günü yok' };
            const base = inp.dailyRateMinor * inp.verifiedDays;
            const amt = applyBasisPoints(base, a.percentage_basis_points, a.rounding || 'HALF_UP');
            return {
                ok: true, amountMinor: amt, currency: a.currency, base,
                explanation: `%${a.percentage_basis_points / 100} × ${formatAmount(base, a.currency)} (masraflar hariç)`,
            };
        }
    }
}
/** Bölüm 10.3 bakiye hesabı. */
export function balanceOf(entries) {
    let receivable = 0;
    let collected = 0;
    for (const e of entries) {
        switch (e.kind) {
            case 'ACCRUAL':
            case 'ADJUSTMENT_INCREASE':
                receivable += e.amount_minor;
                break;
            case 'ADJUSTMENT_DECREASE':
            case 'WAIVER':
            case 'CANCELLATION':
                receivable -= e.amount_minor;
                break;
            case 'COLLECTION':
                collected += e.amount_minor;
                break;
            case 'REFUND':
                collected -= e.amount_minor;
                break;
        }
    }
    return { receivable, collected, balance: receivable - collected };
}
export function paymentState(b) {
    if (b.balance < 0)
        return 'OVERPAID';
    if (b.receivable > 0 && b.balance === 0)
        return 'PAID';
    if (b.collected > 0)
        return 'PARTIAL';
    return 'UNPAID';
}
export function dueState(balance, dueDate, todayLocal) {
    if (balance <= 0 || !dueDate)
        return null;
    if (todayLocal < dueDate)
        return 'NOT_DUE';
    if (todayLocal === dueDate)
        return 'DUE_TODAY';
    return 'OVERDUE';
}
