import React from "react";
import "./styles.scss";
import assets from "../../assets";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import NormalModal from "../NormalModal";


const Header = () => {
  let navigate = useNavigate()

  const[show,setShow]=useState(false)
const handle=()=>{
setShow(!show)
console.log(show,"show")
}
const pophandleclick=()=>{
  setShow(!show)
  navigate("/main/profile")
}

  const location = useLocation();
  const pathArray = location.pathname.split("/");
  const getHeaderText = pathArray[2] || "Unknown";
  const headerText =
    getHeaderText.charAt(0).toUpperCase() + getHeaderText.slice(1);

  const connectAccounts = [
    {
      id: 1,
      icon: assets.Icons.icici,
    },
    {
      id: 1,
      icon: assets.Icons.hdfc,
    },
    {
      id: 1,
      icon: assets.Icons.plus,
    },
  ];
  const integrations = [
    {
      id: 1,
      icon: assets.Icons.email,
      email: true,
    },
    {
      id: 1,
      icon: assets.Icons.drive,
    },
    {
      id: 1,
      icon: assets.Icons.dropbox,
    },
    {
      id: 1,
      icon: assets.Icons.plus,
    },
  ];
  return (
    <div className="header-container">
      <div className="dashboard-container">
        <div className="dashboard-icon-container">
          <img
            src={assets.Icons.headerDashboard}
            alt="dashboardIcon"
            className="dashboard-icon"
          />
        </div>
        <p className="dashboard-text">{headerText}</p>
      </div>
      <div className="connected-accounts-container">
        <p className="connected-accounts">Connected accounts</p>
        {connectAccounts.map((list) => (
          <div className="connected-icon-container">
            <img
              src={list.icon}
              alt="connected-accounts-icon"
              className="connected-account-icon"
            />
          </div>
        ))}
      </div>
      <div className="connected-accounts-container">
        <p className="connected-accounts">Integrations</p>
        {integrations.map((list) => (
          <div className="connected-icon-container">
            <img
              src={list.icon}
              alt="connected-accounts-icon"
              className={`${list.email ? "email-icon" : "integrations-icon"}`}
            />
          </div>
        ))}
      </div>
      <div className="d-flex align-items-center px-2">
        <img src={assets.Icons.bell} alt="bell" className="bell-icon" />
        <div className="header-profile-container"   onClick={()=>handle()}>
          <img
            src={assets.Icons.headerProfile}
            alt="headerProfile"
            className="header-profile"
          
          
          />
        </div>
      </div>
      <NormalModal show={show} customModalClass="profilepop" >
        <div className='profile-pop-values'>
    <div className='cursor-pointer' onClick={pophandleclick}>Profile</div>
    <div className='cursor-pointer'>Integrations</div>
    <div className='cursor-pointer'>Networks</div>
    <div className='cursor-pointer'>Accounts</div>
    <div className='cursor-pointer'>Vendors</div>
    <div className='cursor-pointer'>Reminder Setting</div>
    <div className='cursor-pointer'>Logout</div>
    

  </div></NormalModal>

    </div>
  );
};

export default Header;
