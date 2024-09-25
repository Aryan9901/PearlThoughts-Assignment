import recurrenceReducer, { setRecurrence, setStartDate, setBoolean, setEndDate, setInterval } from '@/redux/recurrenceSlice';

describe('recurrenceSlice reducer', () => {
  const initialState = {
    recurrence: 'daily',
    startDate: null,
    endDate: null,
    interval: 1,
  };

  it('should handle setRecurrence', () => {
    const nextState = recurrenceReducer(initialState, setRecurrence('weekly'));
    expect(nextState.recurrence).toBe('weekly');
  });

  it('should handle setStartDate', () => {
    const nextState = recurrenceReducer(initialState, setStartDate('2024-01-01'));
    expect(nextState.startDate).toBe('2024-01-01');
  });

  it('should handle setEndDate', () => {
    const nextState = recurrenceReducer(initialState, setEndDate('2024-01-10'));
    expect(nextState.endDate).toBe('2024-01-10');
  });

//   it('should handle setBoolean', () => {
//     const nextState = recurrenceReducer(initialState, setBoolean(true));
//     expect(nextState.bool).toBe(true);
//   });

  it('should handle setInterval', () => {
    const nextState = recurrenceReducer(initialState, setInterval(5));
    expect(nextState.interval).toBe(5);
  });
});
