import React, { useState } from "react";
import Stylesheet from "reactjs-stylesheet";
import logo from "../assets/Greenswitchlogo.svg";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { VscDashboard } from "react-icons/vsc";

export default function Sidebar() {
  const [dashboard, setDashboard] = useState(false);
  return (
    <div style={styles.sidebar}>
      <img
        src={logo}
        alt="GreenSwitch"
        width={"90%"}
        style={{ marginTop: "1vh" }}
      ></img>
      <div
        style={{
          marginTop: "10vh",
          marginBottom: "4vh",
          color: "#d3d3d3",
          letterSpacing: "2px",
        }}
      >
        DASHBOARD
      </div>
      <div
        style={styles.collapsable}
        onClick={() => {
          setDashboard(!dashboard);
        }}
      >
        <div
          style={{
            display: "flex",
          }}
        >
          <VscDashboard
            style={{
              alignSelf: "center",
              fontSize: "4vh",
              marginRight: "10px",
            }}
          />
          <div>Dashboard</div>
        </div>
        {!dashboard ? (
          <IoIosArrowDown
            style={{
              alignSelf: "center",
              fontSize: "14px",
              marginRight: "4vh",
            }}
          />
        ) : (
          <IoIosArrowUp
            style={{
              alignSelf: "center",
              fontSize: "14px",
              marginRight: "4vh",
            }}
          />
        )}
      </div>
      {dashboard ? (
        <div style={styles.options}>
          <p>Record</p>
          <p>Report</p>
          <p>Analyse</p>
          <p>Learn</p>
        </div>
      ) : (
        <></>
      )}
      <div
        style={{
          marginTop: "4vh",
          marginBottom: "2vh",
          color: "#d3d3d3",
          letterSpacing: "2px",
        }}
      >
        PAGES
      </div>
      <div
        style={{
          marginTop: "1vh",
          marginBottom: "2vh",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        Help Center{" "}
        <IoIosArrowDown
          style={{
            alignSelf: "center",
            fontSize: "14px",
            marginRight: "4vh",
          }}
        />
      </div>
      <div
        style={{
          marginTop: "1vh",
          marginBottom: "2vh",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        File Manager{" "}
        <IoIosArrowDown
          style={{
            alignSelf: "center",
            fontSize: "14px",
            marginRight: "4vh",
          }}
        />
      </div>
    </div>
  );
}

const styles = Stylesheet.create({
  sidebar: {
    paddingTop: "10px",
    paddingLeft: "20px",
    paddingRight: "5px",
    backgroundColor: "#FFFFFF",
    height: "100vh",
    width: window.innerWidth * 0.12,
    borderRight: "1px solid #EAECF0",
    fontSize: "14px",

    fontWeight: 600,
    minWidth: "160px",
  },
  collapsable: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: "14px",
    alignSelf: "center",
    fontWeight: 600,
    marginTop: "1vh",
  },
  options: {
    display: "flex",
    flexDirection: "column",
    color: "#5F6980",

    paddingLeft: "20px",
  },
});
