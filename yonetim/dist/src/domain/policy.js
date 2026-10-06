export const DEFAULT_POLICY = {
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
export function policyFrom(stored) {
    return { ...DEFAULT_POLICY, ...(stored || {}) };
}
