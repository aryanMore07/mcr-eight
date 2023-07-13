import React, { useContext } from 'react';
import './landingPage.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { DataContext } from '../../contexts/DataContext';
import dayjs from "dayjs";
const LandingPage = () => {

  const { searchedData } = useContext(DataContext);
  var date = new Date();

  const getEventData = (eventDate) => {
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const event = dayjs(eventDate);
    const event_date = date.getDate(event);
    const event_month = date.getMonth(event) + 1;
    const event_year = date.getFullYear(event);
    return `${event_date}-${months[event_month]}-${event_year}`;
  }
  // console.log(date.getDate(eventdate))
  // console.log(date.getMonth(eventdate) + 1)
  // console.log(date.getFullYear(eventdate))

  // const getDate = (eventDate) => {
  //   return new Date(eventDate)
  // }

  return (
    <div className='landing-page-div'>
      <div className='landing-header'>
        <h1>Meetup Events</h1>
        <TextField
          id="outlined-select-types"
          select
          label="Select"
          defaultValue="Both"
          helperText="Please select event type"
        >
          <MenuItem value='both'>Both</MenuItem>
          <MenuItem value='online'>Online</MenuItem>
          <MenuItem value='offline'>Offline</MenuItem>
        </TextField>
      </div>
      <hr />
      <div className='landing-body'>
        {
          searchedData.map((events) => {
            const { id, title, eventThumbnail, eventStartTime, eventType, } = events;
            return (
              <div key={id} className='event-card'>
              <div className='event-card-header'>
                <img src={eventThumbnail} alt={title} className='event-img' />
                <span className='event-type'>{eventType}</span>
              </div>
              <div className='event-card-body'>
              {/* {console.log(dayjs(eventStartTime).$d)} */}
                <p>{getEventData(eventStartTime)}</p>
                <p style={{fontSize:'25px', fontWeight: '600'}}>{title}</p>
              </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default LandingPage
