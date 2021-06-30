import React from 'react'
import "./widgetssmall.css"
import {Visibility} from "@material-ui/icons"

export default function WidgetsSmall() {
    return (
        <div className="widgetSl">
            <span className="widgetSmTitle">New Join Members</span>
            <ul className="widgetSmList">
                <li className="widgetSmallItem">
                    <img className="widgetImg" src="./profile.jpg" alt="avatar" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Vítor Rodrigues</span>
                        <span className="widgetSmallTitle">Frontend developer</span>
                    </div>
                    <button className="widgetSmallBTN">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmallItem">
                    <img className="widgetImg" src="./profile.jpg" alt="avatar" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Vítor Rodrigues</span>
                        <span className="widgetSmallTitle">Frontend developer</span>
                    </div>
                    <button className="widgetSmallBTN">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmallItem">
                    <img className="widgetImg" src="./profile.jpg" alt="avatar" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Vítor Rodrigues</span>
                        <span className="widgetSmallTitle">Frontend developer</span>
                    </div>
                    <button className="widgetSmallBTN">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
                <li className="widgetSmallItem">
                    <img className="widgetImg" src="./profile.jpg" alt="avatar" />
                    <div className="widgetSmallUser">
                        <span className="widgetSmallUserName">Vítor Rodrigues</span>
                        <span className="widgetSmallTitle">Frontend developer</span>
                    </div>
                    <button className="widgetSmallBTN">
                        <Visibility className="widgetSmIcon"/> Display
                    </button>
                </li>
            </ul>
        </div>
    )
}
