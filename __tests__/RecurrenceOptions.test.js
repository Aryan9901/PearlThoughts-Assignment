import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import RecurrenceOptions from '@/components/elements/RecurrenceOptions';
import { setRecurrence, setStartDate, setBoolean, setEndDate, setInterval } from '@/redux/recurrenceSlice';

const mockStore = configureStore([]);

describe('RecurrenceOptions component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      recurrence: {
        recurrence: 'daily',
      },
    });
    store.dispatch = jest.fn();
  });

  it('renders buttons correctly', () => {
    const { getByText } = render(
      <Provider store={store}>
        <RecurrenceOptions />
      </Provider>
    );

    const options = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

    options.forEach(option => {
      expect(getByText(option)).toBeInTheDocument();
    });
  });

  it('dispatches actions on button click', () => {
    const { getByText } = render(
      <Provider store={store}>
        <RecurrenceOptions />
      </Provider>
    );

    const weeklyButton = getByText('Weekly');

    // Simulate clicking the "Weekly" button
    fireEvent.click(weeklyButton);

    // Check if the correct actions were dispatched
    expect(store.dispatch).toHaveBeenCalledWith(setRecurrence('weekly'));
    expect(store.dispatch).toHaveBeenCalledWith(setStartDate(null));
    expect(store.dispatch).toHaveBeenCalledWith(setEndDate(null));
    expect(store.dispatch).toHaveBeenCalledWith(setBoolean(true));
    expect(store.dispatch).toHaveBeenCalledWith(setInterval(1));
  });

  it('highlights the selected recurrence option', () => {
    const { getByText } = render(
      <Provider store={store}>
        <RecurrenceOptions />
      </Provider>
    );

    const dailyButton = getByText('Daily');
    expect(dailyButton).toHaveClass('bg-blue-500');
  });
});
