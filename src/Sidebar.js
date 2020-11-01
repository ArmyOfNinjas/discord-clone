import React from 'react';
import "./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import SidebarChannel from './SidebarChannel';
import InfoIcon from '@material-ui/icons/Info';
import CallIcon from '@material-ui/icons/Call';
import { Avatar } from "@material-ui/core";
import MicIcon from '@material-ui/icons/Mic';
import HeadsetIcon from '@material-ui/icons/Headset';
import SettingsIcon from '@material-ui/icons/Settings';

function Sidebar(props) {
    return (
        <div className="sidebar">
            <h1>I'm a sidebar</h1>

            <div className="sidebar__top">
                <h3> Your channel</h3>
                <ExpandMoreIcon></ExpandMoreIcon>
            </div>

            <div className="sidebar__channels">
                <div className="sidebar__channelsHeader">
                    <div className="sidebar__header">
                        <ExpandMoreIcon></ExpandMoreIcon>
                        <h4>Text Channels</h4>
                    </div>
                    <AddIcon className="sidebar__addChannel"></AddIcon>
                </div>

                <div className="sidebar__channelsList">
                    <SidebarChannel></SidebarChannel>
                    <SidebarChannel></SidebarChannel>
                    <SidebarChannel></SidebarChannel>
                </div>
            </div>

            <div className="sidebar__voice">
                <SignalCellularAltIcon
                    className="sidebar__voiceIcon"
                    fontsize="large"
                ></SignalCellularAltIcon>
                <div className="sidebar__voiceInfo">
                    <h3>Voice connected</h3>
                    <p>Stream</p>
                </div>
                <div className="sidebar__voiceIcons">
                    <InfoIcon></InfoIcon>
                    <CallIcon></CallIcon>
                </div>
            </div>

            <div className="sidebar__profile">
                <Avatar className="sidebar__profileAvatar" />
                <div className="sidebar__profileInfo">
                    <h3>@profile</h3>
                    <p>#thisIsMyID</p>
                </div>
                <div className="sidebar__profileIcons">
                    <MicIcon />
                    <HeadsetIcon />
                    <SettingsIcon />
                </div>
            </div>
        </div>
    );
}

export default Sidebar;