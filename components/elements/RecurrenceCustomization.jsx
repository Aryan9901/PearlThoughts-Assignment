"use client"

import { useDispatch, useSelector } from 'react-redux';
import { setInterval } from '@/redux/recurrenceSlice';

export default function RecurrenceCustomization() {
  const dispatch = useDispatch();
  const interval = useSelector((state) => state.recurrence.interval);
  const recurrence = useSelector((state) => state.recurrence.recurrence);

  return (
    <div className="flex items-center justify-center space-x-4">
      {recurrence !== 'daily' && (
        <>
          <label>Every</label>
          <input
            type="number"
            value={interval}
            onChange={(e) => dispatch(setInterval(Number(e.target.value)))}
            className="border px-3 rounded-md py-1"
            min={1} // To ensure positive interval
          />
          <span>{recurrence.split('ly')[0]}</span>
        </>
      )}
    </div>
  );
}
