import LandingPage from "./pages/index";
import React, { useEffect, useState } from "react";

export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  //choose the screen size
  const handleResize = () => {
    if (window.innerWidth < 1196) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  const [data, setData] = useState([
    {
      name: "A",
      Spinning: 30,
      Transportation: 60,
      Carding: 50,
      "Heating and Cooling": 10,
    },
    {
      name: "B",
      Spinning: 12,
      Transportation: 79,
      Carding: 9,
      "Heating and Cooling": 10,
    },
    {
      name: "C",
      Spinning: 15,
      Transportation: 80,
      Carding: 5,
      "Heating and Cooling": 10,
    },
    {
      name: "D",
      Spinning: 31,
      Transportation: 65,
      Carding: 4,
      "Heating and Cooling": 10,
    },
    {
      name: "E",
      Spinning: 51,
      Transportation: 46,
      Carding: 3,
      "Heating and Cooling": 10,
    },
    {
      name: "F",
      Spinning: 52,
      Transportation: 28,
      Carding: 20,
      "Heating and Cooling": 10,
    },
    {
      name: "G",
      Spinning: 32,
      Transportation: 68,
      Carding: 0,
      "Heating and Cooling": 10,
    },
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
            Spinning: item["spinning"],
            Transportation: item["transportation"],
            Carding: item["carding"],
            "Heating and Cooling": item["heatingandcooling"],
          };
        });
        setData(temp);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div>
      {isMobile ? (
        alert(
          "This website is only for desktop/laptop screen please contact developer(vishal702355@gmail.com) with mobile figma for changes"
        )
      ) : (
        <LandingPage data={data} />
      )}
    </div>
  );
}
