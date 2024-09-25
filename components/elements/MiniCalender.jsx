import { format } from 'date-fns';

export const MiniCalender = ({recurringDates}) => {

    console.log(recurringDates)

    return <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Recurring Dates:</h3>
        <div className="grid grid-cols-7 gap-2">
            {recurringDates.map((date, idx) => (
                <div key={idx} className="border p-2">
                    {format(date, 'dd-MMM-yyyy')}
                </div>
            ))}
        </div>
    </div>
}