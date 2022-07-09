import React from 'react'
import NavBar from '../components/NavBar'

const Tasks: React.FC = () => {
  return (
    <div>
        <NavBar />
        <div>
            <table className="border-teal-500 border-8 border-separate border-solid mx-auto">
                        

            <tr className='text-center grid grid-cols-3 font-bold'>
                <td>Task</td>
                <td>Map</td>
                <td>Type</td>
            </tr>
            <div>
                <TaskElement Name="Align Engine Output " Map="The Skeld" Type="Long" />
                <TaskElement Name="Align Telescope" Map="Polus" Type="Short" />
                <TaskElement Name="Assemble Artifact " Map="MIRA HQ" Type="Short" />
                <TaskElement Name="Buy Beverage" Map="MIRA HQ" Type="Short" />
                <TaskElement Name="Calibrate Distributor" Map="The Skeld, The Airship" Type="Short" />
                <TaskElement Name="Chart Course" Map="The Skeld, MIRA HQ, Polus" Type="Short" />
                <TaskElement Name="Clean O2 Filter" Map="The Skeld, MIRA HQ" Type="Short" />
                <TaskElement Name="Clean Toilet" Map="The Airship" Type="Short" />
                <TaskElement Name="Clean Vent " Map="The Skeld, MIRA HQ, The Airship" Type="Short" />
                <TaskElement Name="Clear Asteroids" Map="The Skeld, MIRA HQ, Polus" Type="Long" />
                <TaskElement Name="Decontaminate" Map="The Airship" Type=" 	Short" />
                <TaskElement Name="Develop Photos" Map="The Airship" Type="Long" />
                <TaskElement Name="Divert Power " Map="The Skeld, MIRA HQ, The Airship" Type="Short" />
                <TaskElement Name="Dress Mannequin " Map="The Airship" Type="Short" />
                <TaskElement Name="Empty Chute" Map="The Skeld" Type="Long" />
                <TaskElement Name="Empty Garbage" Map="The Skeld, MIRA HQ, Polus, The Airship" Type="Long" />
                <TaskElement Name="Enter Id Code" Map="MIRA HQ, The Airship" Type="Long" />
                <TaskElement Name="Fill Canisters" Map=" 	Polus" Type="Short" />
                <TaskElement Name="Fix Shower" Map="The Airship" Type="Short" />                   <TaskElement Name="Fix Weather Node" Map="Polus" Type="Long" />
                 <TaskElement Name="Fix Wiring" Map="The Skeld, MIRA HQ, Polus, The Airship" Type="Long" />
                <TaskElement Name="Fuel Engines" Map="The Skeld, MIRA HQ, Polus, The Airship 	" Type="Long" />
                <TaskElement Name="Insert Keys" Map="Polus" Type="Long" />
                <TaskElement Name="Inspect Sample" Map="The Skeld, Polus" Type="Long" />
                <TaskElement Name="Measure Weather" Map="MIRA HQ" Type="Short" />
                <TaskElement Name="Make Burger" Map="The Airship" Type="Short" />
                <TaskElement Name="Monitor Tree" Map="Polus" Type="Short" />
                <TaskElement Name="Open Waterways" Map="Polus" Type="Long" />
                <TaskElement Name="Pick Up Towels" Map="The Airship" Type="Short" />
                <TaskElement Name="Polish Ruby" Map="The Airship" Type="Short" />
                <TaskElement Name="Prime Shields" Map="The Skeld, MIRA HQ" Type="Short" />
                <TaskElement Name="Process Data" Map="MIRA HQ" Type="Short" />
                <TaskElement Name="Put Away Pistols" Map="The Airship" Type="Short" />
                <TaskElement Name="Put Away Rifles" Map="The Airship" Type="Short" />
                <TaskElement Name="Reboot Wifi" Map="Polus" Type="Long" />
                <TaskElement Name="Record Temperature" Map="Polus" Type="Short" />
                <TaskElement Name="Repair Drill" Map="Polus" Type="Short" />
                <TaskElement Name="Replace Water Jug" Map="Polus" Type="Long" />
                <TaskElement Name="Reset Breakers" Map="The Airship" Type="Long" />
                <TaskElement Name="Rewind Tapes" Map="The Airship" Type="Long" />
                <TaskElement Name="Run Diagnostics" Map="MIRA HQ" Type="Short" />
                <TaskElement Name="Scan Boarding Pass" Map="Polus" Type="Long" />
                <TaskElement Name="Sort Records" Map="The Airship" Type="Short" />
                <TaskElement Name="Sort Samples" Map="MIRA HQ" Type="Short" />
                <TaskElement Name="Stabilize Steering" Map="The Skeld, The Airship" Type="Short" />
                <TaskElement Name="Start Fans" Map="The Airship" Type="Long" />
                <TaskElement Name="Start Reactor" Map="The Skeld, MIRA HQ, Polus" Type="Long" />
                <TaskElement Name="Store Artifacts" Map="Polus" Type="Short" />
                <TaskElement Name="Submit Scan" Map="The Skeld, MIRA HQ Polus" Type="Long" />
                <TaskElement Name="Swipe Card" Map="The Skeld, Polus" Type="Long" />
                <TaskElement Name="Unlock Manifolds" Map="The Skeld, MIRA HQ, Polus" Type="Short" />
                <TaskElement Name="Unlock Safe" Map="The Airship" Type="Long" />
                <TaskElement Name="Upload Data" Map="The Skeld, Polus, The Airship" Type="Long" />
                <TaskElement Name="Water Plants" Map="MIRA HQ" Type="Long" />
                </div>
            </table>
            </div>

        
    </div>
  )
}
export default Tasks

const TaskElement = (props : { Name: string; Map: string; Type: string; }) => {
    return(
        <div>
            <tr className="grid grid-cols-3 text-center ">
                <td className="border-black border-2 border-solid">{props.Name}</td>
                <td className="border-black border-2 border-solid">{props.Map}</td>
                <td className="border-black border-2 border-solid">{props.Type}</td>

            </tr>
        </div>

    );



}