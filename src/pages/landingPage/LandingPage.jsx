import React, { useContext } from 'react';
import './landingPage.css';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { DataContext } from '../../contexts/DataContext';
import { useNavigate } from 'react-router';

const LandingPage = () => {

  const { dispatch, dropdownFilter } = useContext(DataContext);

  const navigate = useNavigate();

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
          onChange={(event) => {
            dispatch({ type: 'DROPDOWN_INPUT', payload: event.target.value });
          }}
        >
          <MenuItem value='both'>Both</MenuItem>
          <MenuItem value='Online'>Online</MenuItem>
          <MenuItem value='Offline'>Offline</MenuItem>
        </TextField>
      </div>
      <hr />
      <div className='landing-body'>
        {
          dropdownFilter.map((events) => {
            const { id, title, eventThumbnail, eventStartTime, eventType, } = events;
            return (
              <div key={id} className='event-card' onClick={() => {
                navigate(`/event/${id}`)
              }}>
                <div className='event-card-header'>
                  <img src={eventThumbnail} alt={title} className='event-img' />
                  <span className='event-type'>{eventType}</span>
                </div>
                <div className='event-card-body'>
                  <p style={{color: 'silver', fontSize: '15px'}}>{new Date(eventStartTime).toUTCString()}</p>
                <p style={{ fontSize: '25px', fontWeight: '600' }}>{title}</p>
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
