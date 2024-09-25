import { render } from '@testing-library/react';
import { format } from 'date-fns';
import { MiniCalender } from '@/components/elements/MiniCalender';

describe('MiniCalender component', () => {
  it('renders recurring dates correctly', () => {
    const recurringDates = [
      new Date(2024, 0, 1), // Jan 1, 2024
      new Date(2024, 0, 2), // Jan 2, 2024
      new Date(2024, 0, 3), // Jan 3, 2024
    ];

    const { getByText } = render(<MiniCalender recurringDates={recurringDates} />);

    // Check if the header is rendered
    expect(getByText('Recurring Dates:')).toBeInTheDocument();

    // Check if each date is formatted and rendered correctly
    recurringDates.forEach((date) => {
      const formattedDate = format(date, 'dd-MMM-yyyy');
      expect(getByText(formattedDate)).toBeInTheDocument();
    });
  });
});
