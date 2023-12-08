import React, { useState } from "react";
import "./styles.scss";
import assets from "../../assets";
import NormalButton from "../../components/NormalButton";
import NormalTable from "../../components/NormalTable";
import NormalInput from "../../components/inputField";
import NormalModal from "../../components/NormalModal";
const GetPaid = () => {
  const [modal, setModal] = useState(false);
  const [automate, setAutomate] = useState(false);

  const handle = () => {
    setModal(!modal);
  };
  const [activeMenu, setActiveMenu] = useState("In process");
  const headerDetails = [
    { label: <NormalInput type={"checkbox"} checkboxInput /> },
    { label: "Issue Date", sortKey: true },
    { label: "Due Date", sortKey: true },
    { label: "Vendor", sortKey: true },
    { label: "Invoice Number", sortKey: true },
    { label: "Days exceed", sortKey: true },
    { label: "Total amount", sortKey: true },
  ];
  const invoiceDetails = [
    {
      label: "Invoice Number",
    },
    {
      label: "Received Date",
    },
    {
      label: "Amount",
    },
  ];
  const menus = [
    {
      id: 1,
      title: "In process",
    },
    {
      id: 1,
      title: "Scheduled",
    },
    {
      id: 1,
      title: "Received",
    },
  ];
  const [invoiceData] = useState([
    {
      id: 1,
      invoiceNo: 123456789,
      recievedDate: "30/09/2023",
      Amount: `$790.80`,
    },
    {
      id: 2,
      invoiceNo: 123456789,
      recievedDate: "30/09/2023",
      Amount: `$790.80`,
    },
    {
      id: 3,
      invoiceNo: 123456789,
      recievedDate: "30/09/2023",
      Amount: `$790.80`,
    },
  ]);
  const [payData] = useState([
    {
      id: 1,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      daysexceed: 42,
      totalAmount: `$790.80`,
    },
    {
      id: 1,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      daysexceed: 42,
      totalAmount: `$790.80`,
    },
    {
      id: 1,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      daysexceed: 42,
      totalAmount: `$790.80`,
    },
    {
      id: 1,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      daysexceed: 42,
      totalAmount: `$790.80`,
    },
    {
      id: 1,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      daysexceed: 42,
      totalAmount: `$790.80`,
    },
    {
      id: 1,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      daysexceed: 42,
      totalAmount: `$790.80`,
    },
    {
      id: 1,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      daysexceed: 42,
      totalAmount: `$790.80`,
    },
    {
      id: 1,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      daysexceed: 42,
      totalAmount: `$790.80`,
    },
    {
      id: 1,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      daysexceed: 42,
      totalAmount: `$790.80`,
    },
    {
      id: 1,
      issueDate: "25/09/2023",
      dueDate: "30/09/2023",
      vendor: "Christoph Scheuer",
      invoiceNo: 123456789,
      daysexceed: 42,
      totalAmount: `$790.80`,
    },
  ]);
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  //   return <>
  //   {/* <div><button onClick={handle}>view</button></div>
  //   <NormalModal show={modal}><AutomaticCollectionModal/></NormalModal> */}

  // </>

  // };
  return (
    <div className="getpaid-main-container">
      <div className="getpaid-left-container">
        <div className="getpaid-menu-main-container">
          <div className="getpaid-menu-container">
            {menus.map(({ title }) => (
              <div
                className={`getpaid-menu-item ${
                  activeMenu === title ? "getpaid-active" : ""
                }`}
                onClick={() => handleMenuClick(title)}
              >
                {title}
              </div>
            ))}
          </div>
          <div className="getpaid-filter">
            <img
              src={assets.Icons.filter}
              alt="filter"
              className="filter-icon"
            />
          </div>
          <div className="add-invoice-container">
            <NormalButton label="+ Add Invoice" addBtn />
          </div>
        </div>
        <div className="mt-4">
          <NormalTable headerDetails={headerDetails} check>
            {payData.length > 0
              ? payData.map((list) => {
                  return (
                    <>
                      <tr className="px-3 ">
                        <td>
                          <NormalInput type={"checkbox"} checkboxInput />
                        </td>
                        <td>{list.issueDate}</td>
                        <td>{list.dueDate}</td>
                        <td>{list.vendor}</td>
                        <td>{list.invoiceNo}</td>

                        <td className="text-danger ">{list.daysexceed}</td>
                        <td className="fw-bold fs-6">{list.totalAmount}</td>
                        <td>
                          <a href="">Review</a>
                        </td>
                      </tr>
                    </>
                  );
                })
              : "No Data"}
          </NormalTable>
        </div>
      </div>
      <div className="getpaid-right-container">
        <div>
          <p className="invoice-details-header"> Invoice Details</p>
        </div>
        <div>
          <NormalTable headerDetails={invoiceDetails}>
            {invoiceDetails.length > 0
              ? invoiceData.map((list) => {
                  return (
                    <>
                      <tr key={list.id}>
                        <td>{list.invoiceNo}</td>
                        <td>{list.recievedDate}</td>
                        <td>{list.Amount}</td>
                      </tr>
                    </>
                  );
                })
              : "no data"}
          </NormalTable>
          <hr></hr>
          <div className="para">
            <p className="para-first">Selected Invoice Details</p>
            <p className="para-second">Download Pennyflo consolidate report</p>
          </div>
          <div className="button-price-container">
            <div className="price-container">
              <p className="total-amount text-nowrap">Total amount Received</p>
              <p className="total-price">$1628.40</p>
            </div>
            <div className="button-container">
              <NormalButton
                label="Automate Collection"
                addBtn
                onClick={() => setAutomate(!automate)}
              />
            </div>
          </div>
        </div>
      </div>
      <NormalModal show={automate}>
        <div className="getpaid-popup-container">
          <div className="pop">
            <div className="getpaid-popup-header">
              <div>
                <p>
                  Remainder for Automate Collection <br></br> Update
                  Successfully!
                </p>
              </div>
              <div className="edit-btn">
                <NormalButton label="Edit" notifyBtn />
              </div>
            </div>
            <div className="getpaid-details">
              <div>
                <p className="margin">Notification Before Due Date</p>
              </div>
              <div className="blue">
                <img src={assets.Icons.at} alt=""></img>
                <label>Email Automatic</label>
              </div>
              <div>
                <label>Trigger:</label>
                <span> Due Date-2days</span>
              </div>
              <div>
                <label>Trigger: </label>{" "}
                <span> Notification Before Due Date</span>
              </div>
              <div className="Todo">
                <div>
                  <label>Recipient:</label>
                </div>
                <div className="col-8">
                  <NormalInput
                    // value={todo}
                    type="text"
                    // onChange={(e)=>{setTodo(e.target.value)}}
                    placeholder="Enter Recipient Email/Mobile number "
                  />
                </div>
                <div className="notify">
                  <NormalButton label="ADD" notifyBtn />
                </div>
              </div>
              {/* <div> {todos.map((item) => (
             <div>     <li key={item.id}>{item.title}</li>
      <button onClick={()=>delect(item.id)}>cancel</button></div>

      ))}</div> */}
            </div>
            <div className="getpaid-details">
              <div>
                <p className="margin">Call Remainder</p>
              </div>
              <div className="blue">
                <img src={assets.Icons.call} alt=""></img>
                <label className="label">Call</label>
              </div>
              <div>
                <label>Trigger:</label>
                <span>Due Date + 5 days</span>
              </div>
            </div>
            <div className="getpaid-details">
              <div>
                <p className="margin">Follow Up 1-Physical Letter</p>
              </div>
              <div className="blue">
                <img src={assets.Icons.letter} alt=""></img>
                <label className="label">Letter</label>
              </div>
              <div>
                <label>Trigger:</label>
                <span>Due Date + 20 days</span>
              </div>
            </div>

            <div className="buttons">
              <div className="Cancel">
                <NormalButton label="Cancel" cancelBtn />
              </div>
              <div className="send">
                <NormalButton label="Send" approveBtn />
              </div>
            </div>
          </div>
        </div>
      </NormalModal>
    </div>
  );
};
export default GetPaid;
