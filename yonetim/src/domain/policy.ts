// Bölüm 7'deki ÖNERİLEN başlangıç süreleri. İşletmenin kesin taahhüdü değildir;
// organization_settings.policy ile değiştirilebilir, her işte kullanılan sürüm saklanır.
export interface Policy {
  customerInfoReminderWorkingHours: number;
  customerDormantHours: number;
  interpreterReminder1WorkingHours: number;
  interpreterReminder2WorkingHours: number;
  interpreterExpireWorkingHours: number;
  urgentInterpreterExpireWorkingHours: number;
  urgentParallelInquiries: number;
  parallelInquiries: number;
  contactCheckWorkingHours: number;
  contactReminderWorkingHours: number;
  contactEscalateWorkingHours: number;
  completionSecondFollowupHours: number;
  holdExpiryDays: number;
  maxProactivePer24h: number;
  maxRemindersPerInquiry: number;
  paymentReportGraceDays: number;
  sendWindowStartHour: number;
  sendWindowEndHour: number;
  dailySummaryHour: number;
}

export const DEFAULT_POLICY: Policy = {
  customerInfoReminderWorkingHours: 4,
  customerDormantHours: 72,
  interpreterReminder1WorkingHours: 2,
  interpreterReminder2WorkingHours: 8,
  interpreterExpireWorkingHours: 24,
  urgentInterpreterExpireWorkingHours: 3,
  urgentParallelInquiries: 2,
  parallelInquiries: 1,
  contactCheckWorkingHours: 2,
  contactReminderWorkingHours: 4,
  contactEscalateWorkingHours: 8,
  completionSecondFollowupHours: 48,
  holdExpiryDays: 7,
  maxProactivePer24h: 4,
  maxRemindersPerInquiry: 2,
  paymentReportGraceDays: 3,
  sendWindowStartHour: 9,
  sendWindowEndHour: 20,
  dailySummaryHour: 9,
};

export function policyFrom(stored: Partial<Policy> | null | undefined): Policy {
  return { ...DEFAULT_POLICY, ...(stored || {}) };
}
