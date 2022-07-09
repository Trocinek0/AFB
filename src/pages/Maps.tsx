import Navbar from '../components/NavBar'
import React from 'react'

import Airship from '../../static/Maps/Airship.png'
import Mira_HQ from '../../static/Maps/Mira_HQ.png'
import The_Skeld from '../../static/Maps/The_Skeld.png'
import Polus from '../../static/Maps/Polus.png'

const Maps: React.FC = () => {
  return (
    <>
      <Navbar />
      <MapsElement Name="Airship" Image={Airship} />
      <MapsElement Name="Mira_HQ" Image={Mira_HQ} />
      <MapsElement Name="The_Skeld" Image={The_Skeld} />
      <MapsElement Name="Polus" Image={Polus} />
    </>
  )
}

export default Maps

// TODO: Repair Image -> any
const MapsElement = (props: { Name: string; Image: any }) => {
  return (
    <>
      <h1 className="m-10 text-center text-3xl font-bold">{props.Name}</h1>
      <div className="mx-auto grid grid-cols-1">
        <div className="mx-auto">
          <img src={props.Image} alt="" width="960" height="540" className='rounded-xl shadow-xl'/>
        </div>
      </div>
    </>
  )
}
