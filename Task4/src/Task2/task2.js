import axios from "axios";
import "./task2.css";
import _ from "lodash";
import { useState, useRef, useEffect } from "react";

export default function Task2() {
  let [value, setValue] = useState(null);
  let [data, setData] = useState([]);
  let ref = useRef([]);
  const change = (e) => {
    _.debounce(() => {
      setValue(e.target.value);
    }, 2000)();
  };
  useEffect(() => {
    if (value) {
      let url = "https://restcountries.eu/rest/v2/name/" + value;
      axios
        .get(url)
        .then((item) => setData(item.data))
        .catch((e) => {
          setData([]);
          console.log("no data found!!");
        });
    }
  }, [value]);

  return (
    <div>
      <input onChange={change}></input>
      <ul>
        {data && data.map((item, index) => <li key={index}>{item.name}</li>)}
        {data.length === 0 && <p>No data found!!</p>}
      </ul>
      <p ref={ref}></p>
    </div>
  );
}
