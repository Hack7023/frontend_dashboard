import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { GoPrimitiveDot } from "react-icons/go";

export default function Piecharts({ hover }) {
  const data = hover;
  let totalsum = 0;
  for (let i = 0; i < hover.length; i++) {
    totalsum += hover[i].students;
  }
  let x = Math.round((hover[0].students / totalsum) * 100);
  let y = Math.round((hover[1].students / totalsum) * 100);

  let z = Math.round((hover[2].students / totalsum) * 100);

  let p = Math.round((hover[3].students / totalsum) * 100);

  const COLORS = ["#57CC78", "#55DBDB", "#E2FF32", "#FEC102"];
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 20,
        paddingBottom: 20,
        height: window.innerHeight * 0.6,
        borderRadius: 10,
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
        Top emission by type
      </div>
      <PieChart
        width={window.innerWidth * 0.2}
        height={window.innerHeight * 0.3}
      >
        <Pie
          data={data}
          dataKey="students"
          outerRadius={window.innerWidth * 0.07}
          innerRadius={window.innerWidth * 0.06}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, minmax(0, 1fr))",
          rowGap: 5,
          alignContent: "center",
          flexDirection: "column",
          marginTop: 50,
          padding: 10,
        }}
      >
        <div>
          <GoPrimitiveDot style={{ color: "#57CC78", alignSelf: "center" }} />
        </div>
        <div style={{ gridColumn: "span 3 / span 3" }}>Spinning</div>
        <div>{x}%</div>
        <div>
          <GoPrimitiveDot style={{ color: "#55DBDB", alignSelf: "center" }} />
        </div>
        <div style={{ gridColumn: "span 3 / span 3" }}>Transportation</div>
        <div>{y}%</div>
        <div>
          <GoPrimitiveDot style={{ color: "#E2FF32", alignSelf: "center" }} />
        </div>
        <div style={{ gridColumn: "span 3 / span 3" }}>Carding</div>
        <div>{z}%</div>
        <div>
          <GoPrimitiveDot style={{ color: "#FEC102", alignSelf: "center" }} />
        </div>
        <div style={{ gridColumn: "span 3 / span 3" }}>Heating and Cooling</div>
        <div>{p}%</div>
      </div>
    </div>
  );
}
