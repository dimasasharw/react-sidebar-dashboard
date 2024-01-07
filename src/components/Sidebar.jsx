import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PiChartPieSliceFill } from "react-icons/pi";
import img1 from "../anitime-logo.png";

function Sidebar() {
    const [activeTitle, setActiveTitle] = useState(localStorage.getItem('activeTitle') || 'Kandang');

    const handleSetActiveTitle = (title) => {
        setActiveTitle(title);
        localStorage.setItem('activeTitle', title);
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
                <Link 
                    className={`link ${activeTitle === 'Overview' ? 'active' : ''}`} 
                    to="/overview" 
                    onClick={() => handleSetActiveTitle('Overview')}
                >
                    <div><PiChartPieSliceFill /> Overview</div>
                </Link>
                <Link 
                    className={`link ${activeTitle === 'Kandang' ? 'active' : ''}`} 
                    to="/kandang" 
                    onClick={() => handleSetActiveTitle('Kandang')}
                >
                    <div><PiChartPieSliceFill /> Kandang</div>
                </Link>
                <Link 
                    className={`link ${activeTitle === 'Ternak' ? 'active' : ''}`} 
                    to="/ternak" 
                    onClick={() => handleSetActiveTitle('Ternak')}
                >
                    <div><PiChartPieSliceFill /> Ternak</div>
                </Link>
                <Link 
                    className={`link ${activeTitle === 'Lalu Lintas Ternak' ? 'active' : ''}`} 
                    to="/laluLintasTernak" 
                    onClick={() => handleSetActiveTitle('Lalu Lintas Ternak')}
                >
                    <div><PiChartPieSliceFill /> Lalu Lintas Ternak</div>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
