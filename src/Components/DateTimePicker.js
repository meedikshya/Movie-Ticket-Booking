import React, { useState } from 'react'

import DatePicker from 'react-date-picker';


export const MyDateTimePicker = () => {
    const [value,setValue] = useState(new Date());

    const onChange = (newValue) => {
        setValue(newValue);
      };

  return (
    <div className=''>
     <DatePicker onChange={onChange}
      value={value}
      format="MM/dd/yyyy"
       />
    </div>
  )
}
