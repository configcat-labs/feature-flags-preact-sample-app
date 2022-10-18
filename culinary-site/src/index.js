import "./style";
import * as configcat from "configcat-js";
import { useState } from "react";
import { render } from "preact";

export default function App() {
  const [chosenDessert, setChosenDessert] = useState("");
  const [chosenMain, setChosenMain] = useState("");
  const [chosenSoup, setChosenSoup] = useState("");
  const [flagValue, setFlagValue] = useState(true);

  const soupOptions = [
    "tomato soup",
    "mushroom soup",
    "chicken soup",
    "ramen",
    "potato soup",
  ];
  const mainsOptions = [
    "chicken salad",
    "wrap",
    "sandwich",
    "roasted potatoes",
    "salad",
  ];
  const dessertOptions = [
    "cupcake",
    "blueberry pie",
    "poached pear with vanilla sauce",
    "apple pie",
    "icecream",
  ];

  const chooseMenu = () => {
    setChosenSoup(soupOptions[Math.floor(Math.random() * soupOptions.length)]);
    setChosenMain(
      mainsOptions[Math.floor(Math.random() * mainsOptions.length)]
    );
    setChosenDessert(
      dessertOptions[Math.floor(Math.random() * dessertOptions.length)]
    );
  };

  let configCatClient = configcat.createClient(
    "8z7aCC-DZEaPwUCnitpksg/TbJ8oi7sMUynCb8MxtTUDw"
  );

  var userObject = {
    identifier: "1234", // Unique identifier is required.
    custom: {
      SubscriptionType: "sugarFree",
    },
  };

  configCatClient
    .getValueAsync("dessertOn", false, userObject)
    .then((value) => {
      setFlagValue(value);
    });

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
    justifyContent: "center",
    backgroundColor: "#FFE9EC",
  };

  const buttonStyle = {
    backgroundColor: "#967BB6",
    color: "white",
    fontSize: "20px",
    border: "none",
  };

  const textStyle = {
    color: "black",
    padding: "12px",
    fontSize: "20px",
  };

  return (
    <div style={containerStyle}>
      <button style={buttonStyle} onClick={chooseMenu}>
        What will I eat today?
      </button>

      <div style={textStyle}>Soup: {chosenSoup}</div>
      <div style={textStyle}>Main: {chosenMain}</div>
      {flagValue ? <div style={textStyle}>Dessert: {chosenDessert}</div> : null}
    </div>
  );
}
