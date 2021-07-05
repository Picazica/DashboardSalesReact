import React from 'react'
import "./createUserPage.css"

export default function CreateUserPage() {
    return (
        <div className="createUserPage">
            <h1 className="newUserTitle">New User</h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder="vitor" />
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder="Vítor Rodrigues" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email" placeholder="vitor@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="password" placeholder="vitor@gmail.com" />
                </div>
                <div className="newUserItem">
                    <label>Phone</label>
                    <input type="text" placeholder="9325215674" />
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder="Braga" />
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="newUserGender">
                        <input type="radio" name="gender" id="male" value="male"/>
                        <label for="male">Male</label>
                        <input type="radio" name="gender" id="female" value="female"/>
                        <label for="female">Female</label>
                        <input type="radio" name="gender" id="other" value="other"/>
                        <label for="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label >Active</label>
                    <div className="userSelect">
                    <select name="active" id="active" className="newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    </div>
                </div>
                <button className="createBTN">Create</button>
            </form>
        </div>
    )
}
