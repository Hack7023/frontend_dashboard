import React from "react";
import Stylesheet from "reactjs-stylesheet";
export default function ({ data, setSelectedTitle }) {
  return (
    <div
      style={styles.container}
      onClick={(e) => {
        setSelectedTitle(data.title);
      }}
    >
      <div style={{ fontWeight: 600, fontSize: "x-small", color: "#808588" }}>
        {data.title}
      </div>
      <div style={{ fontWeight: 600, fontSize: "x-large" }}>
        {data.count}
        <div>{data.scale}</div>
      </div>

      <div
        style={{
          paddingTop: 5,
          paddingBottom: 5,
          paddingRight: 10,
          paddingLeft: 10,
          borderRadius: 30,
          boxShadow: "inherit",
          width: "fit-content",

          color: "#20C997",
          backgroundColor: "#DCFFF5",
          marginBottom: 5,
        }}
      >
        {data.per}
      </div>
    </div>
  );
}
const styles = Stylesheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    maxHeight: "184px",
    minHeight: "100px",
    // maxWidth: "262px",
    boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.06)",
    borderRadius: "12px",
    width: window.innerWidth * 0.17,

    height: window.innerHeight * 0.2,
    padding: 10,
    rowGap: window.innerHeight * 0.003,
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
  },
});
