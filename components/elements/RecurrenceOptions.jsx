"use client"

import { useDispatch, useSelector } from 'react-redux';
import { setRecurrence, setStartDate, setBoolean, setEndDate, setInterval } from '@/redux/recurrenceSlice';

export default function RecurrenceOptions() {
  const dispatch = useDispatch();
  const recurrence = useSelector((state) => state.recurrence.recurrence);

  const options = ['daily', 'weekly', 'monthly', 'yearly'];

  return (
    <div className="flex space-x-4">
      {options.map(option => (
        <button
          key={option}
          className={`px-4 py-2 ${recurrence === option ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => {
            dispatch(setRecurrence(option));
            dispatch(setStartDate(null))
            setEndDate(null)
            setBoolean(true)
            setInterval(1)
          }}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
}
