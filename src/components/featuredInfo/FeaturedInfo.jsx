import React from 'react'
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward} from "@material-ui/icons"


export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItems">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$233.23</span>
                    <span className="featuredMoneyRate">-11.4 <ArrowDownward className="featuredIcon negative"/> </span>
                </div>
                <span className="featuredSubtitle">Compared to last month</span>
            </div>
            <div className="featuredItems">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4233.23</span>
                    <span className="featuredMoneyRate">-1.4 <ArrowDownward className="featuredIcon negative"/> </span>
                </div>
                <span className="featuredSubtitle">Compared to last month</span>
            </div>
            <div className="featuredItems">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$22333.23</span>
                    <span className="featuredMoneyRate">+21.4 <ArrowUpward className="featuredIcon positive"/> </span>
                </div>
                <span className="featuredSubtitle">Compared to last month</span>
            </div>
        </div>
    )
}
