import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import ChartsTwo from '../../components/charts2/ChartsTwo'
import ChartThree from '../../components/charts3/ChartThree'
import "./stats.scss"


const Stats = () => {

  return (
    <div className='stats'>
        <Sidebar />
        <div className='statsContainer'>
            <Navbar />
            <h3>No. of registrations (sorted by states):</h3>
            <ChartsTwo />
            <br></br>
            <br></br>
            <h3>No. of registrations (sorted by sector types):</h3>

            <ChartThree />
        
        </div>
    </div>
  )
}

export default Stats