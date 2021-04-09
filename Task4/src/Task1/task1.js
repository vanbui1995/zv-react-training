import axios from "axios";
import { debounce } from "lodash";
import { useEffect, useState } from "react";

export default function Task1() {
  let [data, setData] = useState([]);
  useEffect(() => {
    debounce(() => {
      axios
        .get("https://official-joke-api.appspot.com/random_joke")
        .then((result) => {
          setData([result.data]);
        })
        .catch((e) => console.log(e));
    }, 100000)();
  });

  const click = () => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((result) => {
        setData([result.data]);
      });
  };

  return (
    <div>
      {data.map((item, index) => (
        <h1 key={index}>{item.setup}</h1>
      ))}
      <button onClick={click}>Get more joke</button>
    </div>
  );
}
