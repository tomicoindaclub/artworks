import { React, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

function Artwork({
  classification,
  century,
  culture,
  department,
  primaryimageurl,
  technique,
  title,
  id,
  favorites,
  setFavorites,
}) {
  return (
    <div>
      <Card sx={{ maxWidth: 345, margin: "20px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={primaryimageurl}
            alt="green iguana"
          />
          <CardContent>
            {favorites.includes(id) ? (
              <StarIcon style={{ color: "yellow" }} />
            ) : (
              <StarBorderIcon />
            )}
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              Century:{century}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              Culture:{culture}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              Technique:{technique}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              Department:{department}
            </Typography>
            <Typography gutterBottom variant="body2" color="text.secondary">
              Classification:{classification}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {favorites.includes(id) ? (
            <Button
              size="small"
              color="primary"
              id={id}
              variant="contained"
              onClick={() => {
                setFavorites(
                  favorites.filter((favorite) => {
                    return favorite !== id;
                  })
                );
              }}
            >
              Remove from favorites
            </Button>
          ) : (
            <Button
              size="small"
              color="primary"
              id={id}
              variant="contained"
              onClick={() => {
                setFavorites([...favorites, id]);
              }}
            >
              Add to favorites
            </Button>
          )}
          <Button
            component={Link}
            to="/art"
            size="small"
            color="primary"
            id={id}
            variant="contained"
          >
            More about this
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default Artwork;
