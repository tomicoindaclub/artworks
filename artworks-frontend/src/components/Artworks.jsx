import React from "react";
import Artwork from "./Artwork";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Artworks({ data }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favoritesItem = JSON.parse(localStorage.getItem("favorites"));
    if (favoritesItem) {
      setFavorites(favoritesItem);
    }
  }, []);

  console.log(favorites);

  useEffect(() => {
    if (favorites.length > 0) {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  return (
    <div>
      {data.records.map((image, i) => {
        return (
          <Artwork
            key={i}
            classification={image.classification}
            century={image.century}
            culture={image.culture}
            department={image.department}
            primaryimageurl={image.primaryimageurl}
            technique={image.technique}
            title={image.title}
            id={image.id}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        );
      })}
    </div>
  );
}

export default Artworks;
