import React from 'react'
import './TrendCard.css'

import {TrendData} from '../../Data/TrendData.js'

import { useStateContext } from "../../Contexts/ContextProvider";


const TrendCard = () => {
  const { currentColor } = useStateContext();

  return (
    <div className="TrendCard">
            <h3 style={{ color:currentColor }}><b>Latest Trends</b></h3>
            {TrendData.map((trend)=>{
                return(
                    <div className="trend">
                        <span>#{trend.name}</span>
                        <span>{trend.shares}k shares</span>
                    </div>
                )
            })}

    </div>
  )
}

export default TrendCard