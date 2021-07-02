import React from 'react'
import "./userPage.css"
import {Publish, CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons"
import { Link } from "react-router-dom";

export default function UserPage() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/newUser">
                <button className="userBTN">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://i.imgur.com/dyC1S6l.jpg" alt="" className="userShowImg" />
                    </div>
                    <div className="userShowTopTitle">
                        <span className="userShowUsername">Anna Backer</span>
                        <span className="userShowUserTitle">Software Engineer</span>
                    </div>
                    <div className="userShowBot">
                        <span className="userShowTitle">
                            Account Details
                        </span>
                        <div className="userShowInfoContainer">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">anna94</span>
                        </div>
                        <div className="userShowInfoContainer">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">20/04/94</span>
                        </div>
                        <span className="userShowTitle">
                            Contact Details
                        </span>
                        <div className="userShowInfoContainer">
                            <PhoneAndroid className="userShowIcon"/>
                            <span className="userShowInfoTitle">932651151</span>
                        </div>
                        <div className="userShowInfoContainer">
                            <MailOutline className="userShowIcon"/>
                            <span className="userShowInfoTitle">anna@gmail.com</span>
                        </div>
                        <div className="userShowInfoContainer">
                            <LocationSearching className="userShowIcon"/>
                            <span className="userShowInfoTitle">Braga</span>
                        </div>
                    </div>
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="anna94" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Anna Backer" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email</label>
                                <input type="text" placeholder="anna" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="932651151" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address</label>
                                <input type="text" placeholder="Braga" className="userUpdateInput"/> 
                            </div>
                        </div>

                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://i.imgur.com/dyC1S6l.jpg" alt="" className="userUpdateImg" />
                                <label htmlFor="file"> <Publish className="userIcon"/> </label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateBTN">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
