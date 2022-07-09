import Navbar from '../components/NavBar'
import React from 'react'

import BlackImg from '../../static/Colors/Black.png'
import BlueImg from '../../static/Colors/Blue.png'
import BrownImg from '../../static/Colors/Brown.png'
import CyanImg from '../../static/Colors/Cyan.png'
import GreenImg from '../../static/Colors/Green.png'
import GreyImg from '../../static/Colors/Grey.png'
import OrangeImg from '../../static/Colors/Orange.png'
import PinkImg from '../../static/Colors/Pink.png'
import PurpleImg from '../../static/Colors/Purple.png'
import RedImg from '../../static/Colors/Red.png'
import YellowImg from '../../static/Colors/Yellow.png'




const Skins: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-4">
        <SkinsElement Name="Black" Image={BlackImg} />
        <SkinsElement Name="Blue" Image={BlueImg} />
        <SkinsElement Name="Brown" Image={BrownImg} />
        <SkinsElement Name="Cyan" Image={CyanImg} />
        <SkinsElement Name="Green" Image={GreenImg} />
        <SkinsElement Name="Grey" Image={GreyImg} />
        <SkinsElement Name="Orange" Image={OrangeImg} />
        <SkinsElement Name="Pink" Image={PinkImg} />
        <SkinsElement Name="Purple" Image={PurpleImg } />
        <SkinsElement Name="Red" Image={RedImg} />
        <SkinsElement Name="Yellow" Image={YellowImg} />
      </div>
    </>
  )
}

export default Skins;

// TODO: Repair Image -> any
const SkinsElement = (props: { Name: string; Image: any }) => {
  return (
    <>
      <div className="m-3 shrink">
        <h1 className="text-center text-3xl font-bold">{props.Name}</h1>
          <div className="grid grid-cols-1">
            <div className="mx-auto">
            <img src={props.Image} alt="" width="150" height="198" className='rounded-xl shadow-xl'/>
            </div>
          </div>
      </div>
    </>
  )
}
