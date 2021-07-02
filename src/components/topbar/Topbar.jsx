import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logo">Dashboard</span>
                </div>
                <div className="topright">
                    <div className="iconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="iconContainer"> 
                        <Language/>
                    </div>
                    <div className="iconContainer">
                        <Settings/>
                    </div>
                    <img src="https://i.imgur.com/dyC1S6l.jpg" alt="avatar" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}

