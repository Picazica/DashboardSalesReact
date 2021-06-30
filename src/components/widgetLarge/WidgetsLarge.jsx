import React from 'react'
import "./widgetsLarge.css"

export default function WidgetsLarge() {

    const Button=({type})=>{
        return <button className={"widgetLgBTN " + type}>{type}</button>
    }

    return (
        <div className="widgetLg">
            <h3 className="widgetLTitle">Latest transactions</h3>
            <table className="widgetLTB">
                <tr className="widgetTR">
                    <th className="widgetTH">Customer</th>
                    <th className="widgetTH">Date</th>
                    <th className="widgetTH">Amount</th>
                    <th className="widgetTH">Status</th>
                </tr>
                <tr className="widgetLTR">
                    <td className="widgetUser">
                        <img className="imgTR" src="./profile.jpg" alt="" />
                        <span className="userName">Vítor Rodrigues</span>
                    </td>
                    <td className="widgetLDate">26 April 2019</td>
                    <td className="widgetLAmount">€221.3</td>
                    <td className="widgetLStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
                <tr className="widgetLTR">
                    <td className="widgetUser">
                        <img className="imgTR" src="./profile.jpg" alt="" />
                        <span className="userName">Vítor Rodrigues</span>
                    </td>
                    <td className="widgetLDate">26 April 2019</td>
                    <td className="widgetLAmount">€221.3</td>
                    <td className="widgetLStatus">
                        <Button type="Declined"/>
                    </td>
                </tr>
                <tr className="widgetLTR">
                    <td className="widgetUser">
                        <img className="imgTR" src="./profile.jpg" alt="" />
                        <span className="userName">Vítor Rodrigues</span>
                    </td>
                    <td className="widgetLDate">26 April 2019</td>
                    <td className="widgetLAmount">€221.3</td>
                    <td className="widgetLStatus">
                        <Button type="Pending"/>
                    </td>
                </tr>
                <tr className="widgetLTR">
                    <td className="widgetUser">
                        <img className="imgTR" src="./profile.jpg" alt="" />
                        <span className="userName">Vítor Rodrigues</span>
                    </td>
                    <td className="widgetLDate">26 April 2019</td>
                    <td className="widgetLAmount">€221.3</td>
                    <td className="widgetLStatus">
                        <Button type="Approved"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}
