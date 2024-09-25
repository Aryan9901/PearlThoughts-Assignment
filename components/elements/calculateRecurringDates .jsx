import { addDays, addWeeks, addMonths, addYears, format } from 'date-fns';

// Calculate recurring dates based on the pattern
export const calculateRecurringDates = (startDate, pattern, interval = 1, count = 50) => {
  const dates = [startDate];
  for (let i = 1; i < count; i++) {
    let nextDate;
    switch (pattern) {
      case 'daily':
        nextDate = addDays(startDate, i * interval);
        break;
      case 'weekly':
        nextDate = addWeeks(startDate, i * interval);
        break;
      case 'monthly':
        nextDate = addMonths(startDate, i * interval);
        break;
      case 'yearly':
        nextDate = addYears(startDate, i * interval);
        break;
      default:
        break;
    }
    dates.push(nextDate);
  }
  return dates;
};
