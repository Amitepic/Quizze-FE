import { useState } from "react";

import DashboardPage from "./DashboardPage";
import AnalyticsPage from "./AnalyticsPage";
import CreateQuzie from "./CreateQuzie";
import '../style/home.css'
import Sidebar from "../Components/sidebar/sidebar";


const pages = ['Dashboard', 'Analytics', 'Create Quiz'];


export default function (){

    const[selected , setSelected] = useState(0);

    const changeSelected = (index)=>{
        setSelected(index)
    }

    return (
        <div className='home'>
           
            <Sidebar changeSelected={changeSelected } selected={selected}/>
            <div className="homeright">
                {selected === 0 && <DashboardPage />}
                {selected === 1 && <AnalyticsPage />}
                {selected === 2 && <CreateQuzie />}
            </div>
        </div>
      )
}