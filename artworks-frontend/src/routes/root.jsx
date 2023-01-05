import { useEffect, useState } from "react";
import "../custom.css";
import Artworks from "../components/Artworks";
import LoadingMask from "../components/LoadingMask";
import Drawer from "@mui/material/Drawer";
import { Outlet } from "react-router-dom";

export const artworkList = [];

function Root() {
  const [data, setData] = useState([]);

  const apiKey = `6bdd0f06-3c54-4960-b04d-4ad36cf5eea4`;

  const fetchData = () => {
    fetch(`https://api.harvardartmuseums.org/object?apikey=${apiKey}&size=100`)
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setData(data);
        }, 2000);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Drawer
        sx={{
          width: 400,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 400,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {data.records ? <Artworks data={data} /> : <LoadingMask />}
      </Drawer>
      <Outlet data={data} />
    </>
  );
}

export default Root;
