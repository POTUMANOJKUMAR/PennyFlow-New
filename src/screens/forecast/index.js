import React from "react";
import NormalModal from "../../components/NormalModal";
import { useState } from "react";
import "./styles.scss";
import assets from "../../assets";
import { Doughnut } from "react-chartjs-2";
import NormalInput from "../../components/inputField";
import NormalButton from "../../components/NormalButton";
import NormalSelect from "../../components/NormalSelect";

function Forecast() {
  const [show, setShow] = useState(false);
  const options = [
    { label: "Revenue" },
    { label: "Revenue" },
    { label: "Revenue" },
    { label: "Revenue" },
  ];

  const [pieChartData] = useState([
    {
      id: 1,
      percentage: "30%",
      name: "Month Over Growth",
      chartData: {
        // labels: ["EU", "AUS", "IND", "US"],
        datasets: [
          {
            data: [30, 70],
            backgroundColor: ["#7E57FF", "#F2F2F2D9"],
            borderRadius: [15, 0],
          },
        ],
      },

      chartOptions: {
        plugins: {
          legend: {
            display: true,
            position: "outside",
          },
          labels: {
            position: "outside",
            textStrokeColor: "transparent",
            color: "rgba(0, 0, 0, 0)",
          },
        },
        cutout: 13,
      },
    },
    {
      id: 1,
      name: "Profit",
      percentage: "25%",
      chartData: {
        // labels: ["EU", "AUS", "IND", "US"],
        datasets: [
          {
            data: [25, 75],
            backgroundColor: ["#FF796E", "#F2F2F2D9"],
            borderRadius: [15, 0],
          },
        ],
      },

      chartOptions: {
        plugins: {
          legend: {
            display: true,
            position: "outside",
          },
          labels: {
            position: "outside",
            textStrokeColor: "transparent",
            color: "rgba(0, 0, 0, 0)",
          },
        },
        cutout: 13,
      },
    },
    {
      id: 1,
      name: "Loss",
      percentage: "15%",
      chartData: {
        // labels: ["EU", "AUS", "IND", "US"],
        datasets: [
          {
            data: [15, 85],
            backgroundColor: ["#FF796E", "#F2F2F2D9"],
            borderRadius: [15, 0],
          },
        ],
      },

      chartOptions: {
        plugins: {
          legend: {
            display: true,
            position: "outside",
          },
          labels: {
            position: "outside",
            textStrokeColor: "transparent",
            color: "rgba(0, 0, 0, 0)",
          },
        },
        cutout: 13,
      },
    },
  ]);
  function handle() {
    setShow(!show);
  }
  return (
    <>
      {" "}
      <button onClick={handle}>popup</button>
      <NormalModal show={show} foreCastTitle header={"CASH FLOW "} showIcon>
        <div className="forecast-pie-chart-container">
          {/* <div className='heading'>
            Cash Flow Forecast Details
         </div> */}
          {/* <div><hr></hr></div> */}
          <div className="top">
            {pieChartData.map((list) => (
              <div className="container" key={list.id}>
                <div>
                  <p className="font">{list.name}</p>
                </div>

                <div className="pie-chart-and-percentage">
                  <div className="pie-chart-data">
                    <Doughnut
                      data={list.chartData}
                      options={list.chartOptions}
                    />
                  </div>
                  <div className="fw-bold">{list.percentage}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="row col-12">
            <div className="col-4">
              <div className="mt-5 font">Net Runway</div>
              <div className="fw-bold fs-5 mt-2 mb-2">24 Months</div>
            </div>
            <div className="col-4">
              <div className="mt-5 font">Burn Rate</div>
              <div className="fw-bold fs-5 mt-2 mb-2">$750,000.00</div>
            </div>
            <div className="col-4">
              <div className="mt-5 font">Investments</div>
              <div className="fw-bold fs-5 mt-2 mb-2">$150,000.00</div>
            </div>
            <div className="col-4">
              <div className="mt-3 font">Monthly Cash Needs</div>
              <div className="fw-bold fs-5 mt-2 mb-5 ">$15,000.00</div>
            </div>
            <div className="col-4">
              <div className="mt-3 font">Yearly Cash Needs</div>
              <div className="fw-bold fs-5 mt-2 mb-5">$120,000.00</div>
            </div>
          </div>
        </div>
      </NormalModal>
      <NormalModal show={false} customModalClass="createScenarioPopup">
        <div className="formContainer">
          <div className="header">
            <div className="heading">Create Scenarios</div>
            <div>
              <img src={assets.Icons.close} alt="closeIcon" />
            </div>
          </div>
          <hr />
          <div className="mainForm">
            <form action="">
              <div className="formDetails">
                <label htmlFor="scenarioType">Scenario Type</label>
                <NormalSelect options={options} />
              </div>
              <div className="formDetails">
                <label htmlFor="avgRevenueMonth">Avg Revenue / Month</label>
                <NormalInput placeholder="0.00" leftIcon dollarIcon />
              </div>
              <div className="formDetails">
                <label htmlFor="avgNoOfCustomers">
                  Avg Number of Customers/ Month
                </label>
                <NormalInput placeholder="No. of Customers" />
              </div>
              <div className="formDetails">
                <label htmlFor="avgRevenueCustomer">
                  Avg. Revenue / Customer
                </label>
                <NormalInput placeholder="No. of Customers" />
              </div>
              <div className="formDetails">
                <label htmlFor="momGrowth">MoM Growth</label>
                <NormalInput placeholder="Enter here" />
              </div>
              <div className="formDetails">
                <label htmlFor="noOfMonths">Number of Months</label>
                <NormalInput placeholder="No. of Months" />
              </div>
              <div className="formDetails">
                <label htmlFor="churnRate">Churn Rate</label>
                <NormalInput placeholder="Enter here" />
              </div>
            </form>
          </div>
          <div className="buttons">
            <NormalButton label="Cancel" cancelBtn />
            <NormalButton label="Show" showBtn />
          </div>
        </div>
      </NormalModal>
    </>
  );
}

export default Forecast;
