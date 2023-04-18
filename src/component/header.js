import React from "react";
import Stylesheet from "reactjs-stylesheet";
import { AiOutlineSearch } from "react-icons/ai";
import { TbBell } from "react-icons/tb";
import { CiCalendar } from "react-icons/ci";
import { MdWindow } from "react-icons/md";
import profile from "../assets/profile.svg";
export default function Header() {
  return (
    <div style={styles.container}>
      <div style={styles.search}>
        <AiOutlineSearch />
        <input placeholder="Search" type="text" style={styles.input}></input>
      </div>
      <TbBell />
      <CiCalendar />
      <MdWindow />
      <img src={profile} alt="profile"></img>
    </div>
  );
}
const styles = Stylesheet.create({
  container: {
    backgroundColor: "#FFFFFF",

    // width: window.innerWidth * 0.8,
    height: "fit-content",

    paddingTop: "1%",
    paddingBottom: "1%",
    borderBottom: "1px solid #EAECF0",
    display: "flex",
    alignItems: "center",
    gap: 40,
  },
  search: {
    display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    border: "1px solid #EAECF0",
    gap: "8px",
    borderRadius: "6px",
    width: "70%",
    marginLeft: "1%",
  },
  input: {
    border: "none",
    outlineStyle: "none",
    width: "100%",
  },
});
