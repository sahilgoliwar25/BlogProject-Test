import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const Store = createContext();
function ContextAPI(props) {
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get("https://sahil-goliwar-thesiren-blogapp-server.onrender.com/fetch")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, [data]);
  return (
    <div>
      <Store.Provider value={[data, setData]}>{props.children}</Store.Provider>
    </div>
  );
}

export default ContextAPI;
