import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateTimePicker() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [isPickerOpen, setIsPickerOpen] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <div>
        {/* <label>Select Date and Time:</label> */}
        {/* <div onClick={() => setIsPickerOpen(!isPickerOpen)}>
          <span style={{ cursor: 'pointer' }}>
            {selectedDate
              ? selectedDate.toString()
              : 'Click here to select date and time'}
          </span>
        </div> */}
      </div>
      {/* {isPickerOpen && ( */}
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Select date and time"
        />
      {/* )} */}
    
    </div>
  );
}

export default DateTimePicker;
