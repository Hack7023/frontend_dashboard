import LandingPage from "./pages/index";
import React, { useEffect, useState } from "react";
export default function App() {
  const [data, setData] = useState([
    { name: "A", x: 30, y: 60, z: 50, p: 10 },
    { name: "B", x: 12, y: 79, z: 9, p: 10 },
    { name: "C", x: 15, y: 80, z: 5, p: 10 },
    { name: "D", x: 31, y: 65, z: 4, p: 10 },
    { name: "E", x: 51, y: 46, z: 3, p: 10 },
    { name: "F", x: 52, y: 28, z: 20, p: 10 },
    { name: "G", x: 32, y: 68, z: 0, p: 10 },
  ]);
  // https://rumbling-maroon-kayak.glitch.me/in/sampledata
  useEffect(() => {
    var raw;

    var requestOptions = {
      method: "GET",

      redirect: "follow",
    };

    fetch(
      "https://rumbling-maroon-kayak.glitch.me/in/sampledata",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(JSON.parse(result).result.data, "resu");
        const res = JSON.parse(result).result.data;
        let temp = res.map((item) => {
          return {
            name: item["month"],
            x: item["spinning"],
            y: item["transportation"],
            z: item["carding"],
            p: item["heatingandcooling"],
          };
        });
        setData(temp);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div>
      <LandingPage data={data} />
    </div>
  );
}
