import { useEffect, useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover';
import { format } from 'date-fns';
import RecurrenceOptions from './RecurrenceOptions';
import RecurrenceCustomization from './RecurrenceCustomization';
import { MiniCalender } from './MiniCalender';
import { calculateRecurringDates } from './calculateRecurringDates ';
import { useSelector } from 'react-redux';

export default function DateRangePicker() {
  const interval = useSelector((state) => state.recurrence.interval);
  const recurrence = useSelector((state) => state.recurrence.recurrence);
  const bool = useSelector((state) => state.recurrence.bool);
  const [startDate, setStartDate] = useState(null);
  // const [recurrencePattern, setRecurrencePattern] = useState('daily');
  // const [recurrenceInterval, setRecurrenceInterval] = useState(1);
  const [recurringDates, setRecurringDates] = useState([]);

  const handleSelectDate = (date) => {
    console.log(date)
    if(date){
      setStartDate(new Date(date));
      const dates = calculateRecurringDates(date, recurrence, interval);
      setRecurringDates(dates);
    }
  };

  useEffect(()=>{
      if(startDate){
        const dates = calculateRecurringDates(startDate, recurrence, interval);
        setRecurringDates(dates);
      }
  },[recurrence])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="border px-4 py-2">
          {startDate ? format(startDate, 'MM/dd/yyyy') : 'Select Start Date'}
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar mode="single" selected={startDate} onSelect={handleSelectDate} />
      </PopoverContent>
      <RecurrenceOptions />
      <RecurrenceCustomization />
      <MiniCalender recurringDates={recurringDates} />
    </Popover>
  );
}
