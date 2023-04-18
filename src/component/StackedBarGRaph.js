import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import { GoPrimitiveDot } from "react-icons/go";
import chart from "../assets/Vector.svg";
export default function StackedBarGRaph({ data, setHover, hover }) {
  data = data.data;
  console.log(data, "000");
  // const data = [
  //   { name: "A", x: 30, y: 60, z: 50 },
  //   { name: "B", x: 12, y: 79, z: 9 },
  //   { name: "C", x: 15, y: 80, z: 5 },
  //   { name: "D", x: 31, y: 65, z: 4 },
  //   { name: "E", x: 51, y: 46, z: 3 },
  //   { name: "F", x: 52, y: 28, z: 20 },
  //   { name: "G", x: 32, y: 68, z: 0 },
  // ];

  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        padding: 20,
        height: window.innerHeight * 0.6,
        borderRadius: 10,
      }}
    >
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          justifyContent: "space-between",
          alignContent: "center",
        }}
      >
        <div
          style={{
            alignSelf: "center",
            fontWeight: "bold",
            fontSize: "22px",
            margin: "2vh",
            marginBottom: "5vh",
          }}
        >
          {" "}
          Carbon FootPrint
        </div>
        <div style={{ display: "flex" }}>
          <GoPrimitiveDot style={{ color: "#57CC78", alignSelf: "center" }} />
          <div style={{ fontSize: "10px", alignSelf: "center" }}>Spinning</div>
          <GoPrimitiveDot style={{ color: "#55DBDB", alignSelf: "center" }} />
          <div style={{ fontSize: "10px", alignSelf: "center" }}>
            Transportaion
          </div>
          <GoPrimitiveDot style={{ color: "#E2FF32", alignSelf: "center" }} />
          <div style={{ fontSize: "10px", alignSelf: "center" }}>Carding</div>
          <GoPrimitiveDot style={{ color: "#FEC102", alignSelf: "center" }} />
          <div style={{ fontSize: "10px", alignSelf: "center" }}>
            Heating & Cooling
          </div>
          <div
            style={{
              padding: 10,
              width: "fit-content",
              height: "fit-content",
              backgroundColor: "#F4F7FE",
              borderRadius: 10,
              display: "flex",
              alignContent: "center",
            }}
          >
            <img src={chart} alt="ch"></img>
          </div>
        </div>
      </div>

      <BarChart
        width={window.innerWidth * 0.5}
        height={window.innerHeight * 0.5}
        data={data}
        onClick={(e) => {
          let res = e.activePayload[0].payload;
          // console.log(res.name, "res");
          setHover([
            { name: "Spinning", students: res.x, color: "red" },
            { name: "Transportation", students: res.y, color: "yellow" },
            { name: "Carding", students: res.z, color: "yellow" },
            { name: "Heating and Cooling", students: res.p, color: "yellow" },
          ]);
        }}
        // setData(temp);}setHover(e.activePayload)}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="x" stackId="a" fill="#57CC78" />
        <Bar dataKey="y" stackId="a" fill="#55DBDB" />
        <Bar dataKey="z" stackId="a" fill="#E2FF32" radiusTop={10} />
        <Bar dataKey="p" stackId="a" fill="#FEC102" radiusTop={10} />
      </BarChart>
    </div>
  );
}
