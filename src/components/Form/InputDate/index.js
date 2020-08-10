import React, { useState, useEffect, useRef } from 'react';
import DatePicker from 'react-datepicker';
import propTypes from 'prop-types';

import "react-datepicker/dist/react-datepicker.css";


export default function InputDate() {

    const [date, setDate] = useState(new Date())

    return (
        <DatePicker
            selected={date}
            onChange={date => setDate(date)}
        />
    )
}


InputDate.propTypes = {
    selected: propTypes.object,
    onChange: propTypes.func
}