import React, { useContext, useState } from 'react';
import './individualPage.css';
import { useNavigate, useParams } from 'react-router';
import { DataContext } from '../../contexts/DataContext';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Avatar, Button } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const IndividualEvent = () => {


    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const navigate = useNavigate();
    const { eventId } = useParams();
    const { state } = useContext(DataContext);

    const selectedEvent = state.data.meetups.find(({ id }) => id === eventId);

    const { title, isPaid, location, price, speakers, hostedBy, eventThumbnail, eventTags, eventStartTime, eventEndTime, eventDescription, address, additionalInformation } = selectedEvent;

    return (
        <div className='individual-div'>
            <div className='back-btn' onClick={() => {
                navigate('/')
            }}>
                <ArrowBackIcon style={{ padding: '2rem' }} />
            </div>
            <div className='eventdetails-left'>
                <h1>{title}</h1>
                <p>Hosted by: <b>{hostedBy}</b></p>
                <img src={eventThumbnail} alt={title} className='eventleft-img' />
                <p><b>Details: </b>{eventDescription}</p>
                <p><b>Additional Information: </b> <br /> <span><b>Dress code: </b>{additionalInformation.dressCode}</span> <br /><span><b>Age Restrictions: </b>{additionalInformation.ageRestrictions}</span></p>
                <h2>Event Tags:</h2>
                {
                    eventTags.map((tag) => (<span className='event-tag'>{tag}</span>))
                }
            </div>
            <div className='eventdetails-right'>
                <div className='event-times'>
                    <div className='event-time-inner-divs'>
                        {/* <span><AccessTimeIcon /> {formatDate(eventStartTime)} to {formatDate(eventEndTime)}</span> */}
                        <span><AccessTimeIcon /> {new Date(eventStartTime).toUTCString()} to {new Date(eventEndTime).toUTCString()}</span>
                    </div>
                    <div className='event-time-inner-divs'>
                        <span><LocationOnIcon /> {location}, {address}</span>
                    </div>
                    <div className='event-time-inner-divs'>
                        <span><CurrencyRupeeIcon /> {price}</span>
                    </div>
                </div>
                <div className='speakers-main-div'>
                    <h1><b>Speakers: </b>({speakers.length})</h1>
                    <div className='speakers-div'>
                        {
                            speakers.map((speaker) => {
                                return (
                                    <div className='speaker-info' key={speaker.name}>
                                        <Avatar src={speaker.image} />
                                        <p><b>{speaker.name}</b></p>
                                        <p>{speaker.designation}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className='rsvp-btn-div'>
                    <div>
                        <Button variant='contained' onClick={handleOpen}>Rsvp</Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <div className='text-inputs'>
                                    <div style={{ margin: '15px 0px 15px 0px' }}>
                                        <h2><b>Complete your RSVP</b></h2>
                                        <p style={{ color: 'silver' }}>Fill in your personal information</p>
                                        <TextField fullWidth label="Name" id="fullWidth" />
                                    </div>
                                    <div style={{ margin: '15px 0px 15px 0px' }}>
                                        <TextField fullWidth label="Email" id="fullWidth" />
                                    </div>
                                    <Button fullWidth variant='contained'>RSVP</Button>
                                    <p>{!isPaid && (<p style={{ color: 'silver' }}>*You have to make payment at the vanue</p>)}</p>
                                </div>
                            </Box>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndividualEvent;
