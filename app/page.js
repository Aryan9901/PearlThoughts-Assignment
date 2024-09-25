"use client"
// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       hello
//     </div>
//   );
// }

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
