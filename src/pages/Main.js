import React, { useState } from "react";
import items from "../assets/data";
import Box from "../component/Box";
import Stylesheet from "reactjs-stylesheet";
import StackedBarGRaph from "../component/StackedBarGRaph";
import Piecharts from "../component/Piecharts";
//flow chart
export default function Main({ data }) {
  const [selectedTitle, setSelectedTitle] = useState("Carbon FootPrint");

  const [hover, setHover] = useState([
    { name: "Spinning", students: 400, color: "red" },
    { name: "Transportation", students: 700, color: "yellow" },
    { name: "Carding", students: 200, color: "black" },
    { name: "Heating and Cooling", students: 1000, color: "blue" },
  ]);
  return (
    <div
      style={{
        backgroundColor: "#F5F5F5",
        height: "100%",
        flexDirection: "row",
        display: "flex",
        position: "relative",
      }}
    >
      <div style={styles.container}>
        <div
          style={{
            justifyContent: "space-around",
            display: "flex",
            flexWrap: "wrap",
            width: window.innerWidth * 0.8,
            // position: "absolute",
            paddingTop: 15,
          }}
        >
          {items.map((item) => (
            <div>
              <Box data={item} setSelectedTitle={setSelectedTitle} />
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            rowGap: 100,
          }}
        >
          <div>
            <StackedBarGRaph
              data={data}
              setHover={setHover}
              hover={hover}
              selectedTitle={selectedTitle}
              style={{ width: window.innerWidth * 0.5 }}
            />
          </div>
          <div style={{ marginLeft: window.innerWidth * 0.07 }}>
            <Piecharts
              style={{ width: window.innerWidth * 0.264 }}
              hover={hover}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = Stylesheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    width: window.innerWidth * 0.88,
    // position: "absolute",
    paddingLeft: 15,
    paddingTop: 15,
  },
});
