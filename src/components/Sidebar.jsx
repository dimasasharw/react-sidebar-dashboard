import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiChartPieSliceFill } from "react-icons/pi";
import img1 from "../anitime-logo.png";

function Sidebar() {
    const [activeTitle, setActiveTitle] = useState('Kandang');

    const handleSetActiveTitle = (title) => {
        setActiveTitle(title);
        localStorage.setItem('activeTitle', title)
    };
    return (
        <div className='sidebar-container'>
            <div className='logo'>
                <img src={img1} alt="ANITIME Logo" />
                <div className=''>ANITIME</div>
            </div>
            <div className="title-dashboard">
                Dashboard
            </div>
            <div className="list-dashboard">
                <Link className='link' to="/overview" onClick={() => handleSetActiveTitle('Overview')}>
                    <div><PiChartPieSliceFill /> Overview</div>
                </Link>
                <Link className='link' to="/kandang" onClick={() => handleSetActiveTitle('Kandang')}>
                    <div><PiChartPieSliceFill /> Kandang</div>
                </Link>
                <Link className='link' to="/ternak" onClick={() => handleSetActiveTitle('Ternak')}>
                    <div><PiChartPieSliceFill /> Ternak</div>
                </Link>
                <Link className='link' to="/laluLintasTernak" onClick={() => handleSetActiveTitle('Lalu Lintas Ternak')}>
                    <div><PiChartPieSliceFill /> Lalu Lintas Ternak</div>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
