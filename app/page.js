"use client"

import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import DatePicker from '@/components/elements/DatePicker';

export default function Home() {
  return (
    <Provider store={store}>
      <div className="p-4 bg-background space-y-6">
        <DatePicker />
      </div>
    </Provider>
  );
}
