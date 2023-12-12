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

}
const profilehandleClick=()=>{
  setShow(!show)
  navigate("/main/profile")
}
const integrationhandleClick=()=>{
  setShow(!show)
  navigate("/main/integration")
}
const networksHandleClick=()=>{
  setShow(!show)
  navigate("/main/networking")
}
const accountsHandleClick=()=>{
  setShow(!show)
  navigate("/main/profile")
}
const vendorHandleClick=()=>{
  setShow(!show)
  navigate("/main/vendor")
}
const remainderHandleClick=()=>{
  setShow(!show)
  navigate("/main/notification")
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
    <div className='cursor-pointer' onClick={profilehandleClick}>Profile</div>
    <div className='cursor-pointer' onClick={integrationhandleClick}>Integrations</div>
    <div className='cursor-pointer'onClick={networksHandleClick}>Networks</div>
    <div className='cursor-pointer' onClick={accountsHandleClick}>Accounts</div>
    <div className='cursor-pointer' onClick={vendorHandleClick}>Vendors</div>
    <div className='cursor-pointer' onClick={remainderHandleClick}>Reminder Setting</div>
    <div className='cursor-pointer'>Logout</div>
    

  </div></NormalModal>

    </div>
  );
};

export default Header;
