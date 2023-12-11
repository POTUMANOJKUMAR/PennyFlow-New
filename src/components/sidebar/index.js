import React, { useEffect, useState } from "react";
import "./styles.scss";
import assets from "../../assets";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import NormalModal from "../NormalModal";
import ChatModal from "../../screens/chatModal";

const Sidebar = () => {
  const [navLink] = useState([
    {
      to: "/main/dashboard",
      label: "Dashboard",
      Icon: assets.Icons.dashboard,
      ActiveIcon: assets.Icons.activeDashboard,
      id: "1",
    },
    {
      to: "/main/pay",
      label: "Pay",
      Icon: assets.Icons.pay,
      ActiveIcon: assets.Icons.activePay,
      id: "2",
    },
    {
      to: "/main/get-paid",
      label: "Get Paid",
      Icon: assets.Icons.getPaid,
      ActiveIcon: assets.Icons.activeGetPaid,
      id: "3",
    },
    {
      to: "/main/insight",
      label: "Insights",
      Icon: assets.Icons.insights,
      ActiveIcon: assets.Icons.activeInsights,
      id: "4",
    },
    {
      to: "/main/forecast",
      label: "Forecast",
      Icon: assets.Icons.forecast,
      ActiveIcon: assets.Icons.activeForecast,
      id: "5",
    },
    {
      to: "/main/budgeting",
      label: "Budgeting",
      Icon: assets.Icons.budget,
      ActiveIcon: assets.Icons.activeBudget,
      id: "6",
    },
    {
      to: "/main/transaction",
      label: "Transactions",
      Icon: assets.Icons.transactions,
      ActiveIcon: assets.Icons.activeTransactions,
      id: "7",
    },
    {
      to: "/main/expense-card",
      label: "Expense Card",
      Icon: assets.Icons.expenseCard,
      ActiveIcon: assets.Icons.activeExpenseCard,
      id: "8",
    }
  ])

  const [mainLinks, setMainLinks] = useState([]);
  const [showChatModal, setShowChatModal] = useState(false);

  let navigate = useNavigate();

  useEffect(() => {
    let navLinks = [...navLink];

    setMainLinks([...navLinks]);
  }, [navLink]);

  const onClickNav = async (label) => {
    if (label === "Log out") {
      navigate("/auth/login");
    } else if (label === "Chat") {
      setShowChatModal(true);
    }
  };

  const location = useLocation();

  return (
    <div id="sideBar" className="side-bar-container">
      <div className="side-bar-header">
        <img
          src={assets.Images.sideBarLogo}
          alt="logo"
          className="side-bar-logo"
        />
      </div>
      <div className="item-side-bar">
        {mainLinks.map(({ to, label, Icon, ActiveIcon }, index) => {
          return (
            <NavLink
              to={to}
              onClick={() => onClickNav(label)}
              style={{ textDecoration: "none" }}
              key={`${index}`}
            >
              <div
                className={`
                  ${location.pathname === to ? "active-div" : "in-active-div"}
                  `}
              >
                <div className="side-bar-list">
                  <span>
                    <img
                      alt={location.pathname}
                      src={location.pathname === to ? ActiveIcon : Icon}
                      className={`sidebar-icon
                        ${
                          location.pathname === to
                            ? "active-icon"
                            : "in-active-icon"
                        }`}
                    />
                  </span>

                  <span
                    className={
                      location.pathname === to
                        ? "active-label"
                        : "in-active-label"
                    }
                  >
                    {label}
                  </span>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
      <div className="bottom-line-container">
        <hr className="bottom-line"></hr>
      </div>
      <div className="bottom-content">
        <div className="d-flex align-items-center">
          <img
            src={assets.Images.sidebarProPic}
            alt="logo"
            className="side-bar-image"
          />
          <div className="d-flex flex-column ">
            <span className="sidebar-username">Jane Doe</span>
            <span className="sidebar-view-profile">View Profile</span>
          </div>
          <img
            src={assets.Icons.chat}
            alt="chat"
            className="sidebar-chat-icon"
            onClick={() => onClickNav("Chat")}
          />
          <img
            src={assets.Icons.settings}
            alt="settings"
            className="sidebar-settings-icon"
          />
        </div>
      </div>
      <NormalModal
        show={showChatModal}
        setModal={setShowChatModal}

        customModalClass="chat"
      >
        <ChatModal></ChatModal>

      </NormalModal>
    </div>
  );
};

export default Sidebar;
