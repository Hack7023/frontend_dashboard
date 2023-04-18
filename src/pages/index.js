import React from "react";
import Header from "../component/header";
import Sidebar from "../component/sidebar";
import Stylesheet from "reactjs-stylesheet";
import Main from "./Main";

export default function index(data) {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div style={styles.container}>
        <Sidebar />

        <div style={styles.main}>
          <Header />
          <Main data={data} />
        </div>
      </div>
    </div>
  );
}
const styles = Stylesheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  main: {},
});
