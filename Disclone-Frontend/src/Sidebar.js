import React from 'react'
import './Sidebar.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import AddIcon from '@material-ui/icons/Add'
import SidebarChannel from './SidebarChannel'
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined'
import CallIcon from '@material-ui/icons/Call'
import { Avatar } from '@material-ui/core'
import MicIcon from '@material-ui/icons/Mic'
import HeadsetIcon from '@material-ui/icons/Headset'
import SettingsIcon from '@material-ui/icons/Settings'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import { auth, db } from './firebase'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from './axios'
import Pusher from 'pusher-js'

const pusher = new Pusher('4f5c5e9997c6a799cffe', {
    cluster: 'us3'
  });


const Sidebar = () => {
    const user = useSelector(selectUser)
    const [channels, setChannels] = useState([])

    //download all channel data from the database
    const getChannels = () => {
        console.log('in getChannels');

        axios.get('/get/channelList')
            .then((res) => {
                console.log(res.data)
                setChannels(res.data)
            })
            .catch((err) => {
                console.log(err)
                console.warn('Error fetching channels:', err);
            });
        }

    // will call getChannels when app loads
    useEffect(() => {
        getChannels(); 
        console.log('after getChannels');

        const channel = pusher.subscribe('channels');
        channel.bind('newChannel', function(data) {
          getChannels();
        });

    }, [])

    const handleAddChannel = (e) => {
        e.preventDefault()

        const channelName = prompt('Enter a new channel name')

        if (channelName) {
            axios.post('/new/channel', {
                channelName: channelName
            })

        }
    }

    return (
        <div className='sidebar' >
            <div className="sidebar__top">
                <h3>Disclone Server</h3>
                <ExpandMoreIcon />
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon />
                        <h4>Text Channels</h4>
                    </div>

                    <AddIcon onClick={handleAddChannel} className='sidebar__addChannel' />
                </div>
                <div className="sidebar__channelsList">
                    {
                        channels.map(channel => (
                            <SidebarChannel key={channel.id} id={channel.id} channelName={channel.channelName} />
                        ))
                    }
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon className='sidebar__voiceIcons' fontSize='large' />
                <div className="sidebar__voiceInfo">
                    <h3>Voice Connected</h3>
                    <p>Stream</p>
                </div>

                <div className="sidebar__voiceIcons">
                    <InfoOutlinedIcon />
                    <CallIcon />
                </div>
            </div>
            <div className="sidebar__profile">
                <Avatar src={user.photo} onClick={() => auth.signOut()} />
                <div className="sidebar__profileInfo">
                    <h3>{user.displayName}</h3>
                    <p>#{user.uid.substring(0, 5)}</p>
                </div>

                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar
