import React from "react";
import ProfileHeader from "../profileHeader";
import "./styles.scss";
import NormalButton from "../../components/NormalButton";

import NormalSelect from "../../components/NormalSelect";


function Notification() {
  const selectType=[{
    label:"Email Noptification",value:"Email Noptification"
  },
  {
    label:"Email Noptification",value:"Email Noptification"
  },
  {
    label:"Email Noptification",value:"Email Noptification"
  },
  {
    label:"Email Noptification",value:"Email Noptification"
  },]
  const beforeDue=[{
    label:"2 days",value:"2 days"
  },
  {
    label:"2 days",value:"2 days"
  },
  {
    label:"2 days",value:"2 days"
  }
 ]
  const AfterDue=[{
    label:"none",value:"none"
  },
  {
    label:"Email Noptification",value:"Email Noptification"
  },
  {
    label:"Email Noptification",value:"Email Noptification"
  },
  {
    label:"Email Noptification",value:"Email Noptification"
  },]


  return (
    <div className="notification-data-main-container">
      <ProfileHeader />
      <div className="profile-notification-container">
        <div className="notification-data-header">
          <div className="notification-header">Notification Reminder Setting</div>
          <div className="notification-add-type-btn">
            <NormalButton label="Add Type" notifyBtn />
          </div>
        </div>
        <hr className="underline"></hr>
        <div className="notification-form">
  <div className="row ">
  <div class=" mt-2 col-xs-12 col-sm-12 col-md-6 col-lg-4 ">
         <label>1.Select Type</label>
       <div className="mt-2 mb-3"> <NormalSelect options={selectType}/></div>
         </div> </div>
    <div className="row">    
    <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
         <label>Trigger Notification Before</label>
         <div className="mt-2 mb-3"> <NormalSelect options={AfterDue}/></div>
         </div>
         <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4">
         <label>Trigger Notification After</label>
         <div className="mt-2 mb-3"> <NormalSelect options={beforeDue}/></div>
         </div></div>
         </div>

 <div className="profile-notification-savebtn"><NormalButton label="Save" approveBtn/></div>
       
      </div>
    </div>
  );
}

export default Notification;
