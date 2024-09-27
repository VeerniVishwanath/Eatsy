import React, { useEffect, useState } from "react";
import config from "../configuration";
import { getDatabase, onValue, ref } from "firebase/database";
import Section1 from "./sections/Section1";
import { DataContext } from "./lib/Contexts";
import Section2 from "./sections/Section2";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const database = getDatabase(config);
    const collectionRef = ref(database, "menuItems");

    function fetchData() {
      onValue(collectionRef, (snapshot) => {
        const dataItem = snapshot.val();

        if (dataItem) {
          setData(Object.entries(dataItem));
        }
      });
    }

    fetchData();
  }, []);

  return (
    <div className="p-4 md:px-16">
      <DataContext.Provider value={data}>
        <Section1 />
        <Section2 />
      </DataContext.Provider>
    </div>
  );
}
