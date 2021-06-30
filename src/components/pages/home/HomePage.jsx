import React from 'react'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import Chart from "../../chart/Chart"
import "./homepage.css"
import WidgetsLarge from "../../widgetLarge/WidgetsLarge"
import WidgetsSmall from "../../widgetsSmall/WidgetsSmall"

import {userData} from "../../../data"

export default function HomePage() {
    return (
        <div className="homePage">
            <FeaturedInfo/>
            <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
            <div className="homeWidgets">
            <WidgetsSmall/>
            <WidgetsLarge/>
            </div>
        </div>
    )
}
