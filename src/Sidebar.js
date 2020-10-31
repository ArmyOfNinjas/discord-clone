import React from 'react';
import "./Sidebar.css";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import SidebarChannel from './SidebarChannel';


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

                    <AddIcon className="sidebar__addChannel">
                    </AddIcon>
                </div>
                <div className="sidebar__channelsList">
                    <SidebarChannel></SidebarChannel>
                    <SidebarChannel></SidebarChannel>
                    <SidebarChannel></SidebarChannel>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;