/**
 * Remove spaces
 * @param date unsafe date string
 */
export const parseDate = (date?: string) => {
  let safeDate = date?.replace(' ', 'T') || Date.now();

  if (typeof safeDate === 'string' && safeDate.includes('-')) {
    // Split it, if it starts with not a year (4 digits)
    const splittedDate = safeDate.split('T')[0];
    const [day, month, year] = splittedDate.split('-');
    if (day.length <= 2) {
      safeDate = `${year}-${month}-${day}`;
    }
  }

  try {
    const dateObj = new Date(safeDate);
    return dateObj;
  } catch (error) {
    return new Date();
  }
};

/**
 *
 * @param date Date in string format or Milli/Epoch which will be multiplied by 1000
 * @param locale Locale of formatted string
 * @param options Native JS Intl.DateTimeFormatOptions
 * @returns `string` formatted date
 */
export const formatDate = (
  date: number | string | Date,
  locale: string,
  options?: Intl.DateTimeFormatOptions
) => {
  const defaultoptions = {
    numberingSystem: 'latn',
  };

  let safeDate;
  if (typeof date === 'string') {
    safeDate = parseDate(date);
  } else if (typeof date === 'number') {
    safeDate = new Date(date * 1000);
  } else {
    safeDate = date;
  }

  return new Intl.DateTimeFormat(locale, Object.assign(defaultoptions, options)).format(safeDate);
};

/**
 *
 * @param firstDate Date in Milli/Epoch which will be multiplied by 1000
 * @param secondDate Date in Milli/Epoch which will be multiplied by 1000
 * @returns `true` if it's the same day
 */
export const isSameDayFromMilli = (firstDate: number, secondDate: number) => {
  const first = new Date(firstDate * 1000);
  const second = new Date(secondDate * 1000);

  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
};

/**
 *
 * @param firstDate Date in Milli/Epoch which will be multiplied by 1000
 * @param secondDate Date in Milli/Epoch which will be multiplied by 1000
 * @returns `true` if it's the same month
 */
export const isSameMonthFromMilli = (firstDate: number, secondDate: number) => {
  const first = new Date(firstDate * 1000);
  const second = new Date(secondDate * 1000);

  return first.getFullYear() === second.getFullYear() && first.getMonth() === second.getMonth();
};

/**
 *
 * @param firstDate Date in Milli/Epoch which will be multiplied by 1000
 * @param secondDate Date in Milli/Epoch which will be multiplied by 1000
 * @returns `true` if it's the same year
 */
export const isSameYearFromMilli = (firstDate: number, secondDate: number) => {
  const first = new Date(firstDate * 1000);
  const second = new Date(secondDate * 1000);

  return first.getFullYear() === second.getFullYear();
};

/**
 * Return if date is within weekend
 * Weekends are: 5 & 6
 * @param dateString Date string
 * @returns
 */
export const isWeekened = (dateString: string) => {
  // if (!dateString) return 'na';

  const date = new Date(parseDate(dateString));
  const day = date.getDay();

  return day > 4 ? 'Weekend' : 'Week Day';
};
