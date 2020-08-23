import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const RouteForm = ({ getpark }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [recordDate, setDate] = useState('');
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDate = (date) => {
    setDate(date);
  };

  const handleSubmit = (event) => {
    console.log(event.target.value, 'BOOOM');
  };

  const onKeyUp = (event) => {
    if (event.keyCode === 13) {
      getpark(searchTerm);
      setSearchTerm('');
    }
  };

  return (
    <div>
      <br />
      <div>
        <label>
          What States Are You Visiting?
          <br />
          <br />
          <input type="text" placeholder="State Name" value={searchTerm} onChange={handleChange} onKeyUp={onKeyUp} />
        </label>
        <label>
          Select a startDate:
        </label>
        <button
          type="submit"
          onClick={() => {
            getpark(searchTerm);
            setSearchTerm('');
          }}
        >
          Add To Trip!
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <DatePicker
            selected={recordDate}
            onChange={handleDate}
            name="startDate"
            dateFormat="MM-dd-yyyy hh:mm aa"
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={20}
            timeCaption="time"
          />
          <button className="btn btn-primary">Show Date</button>
        </div>
      </form>
    </div>
  );
};

export default RouteForm;
