"use client"

import { useDispatch, useSelector } from 'react-redux';
import { setStartDate, setEndDate } from '@/redux/recurrenceSlice';
import DateRangePicker from './DateRangePicker';

export default function DatePicker() {
  const dispatch = useDispatch();
  const { startDate, endDate } = useSelector((state) => state.recurrence);


  return (
    <div className="flex flex-col space-y-4">
      <DateRangePicker
        start={startDate}
        end={endDate}
        onRangeChange={({ start, end }) => {
          dispatch(setStartDate(start));
          dispatch(setEndDate(end));
        }}
      />
    </div>
  );
}
