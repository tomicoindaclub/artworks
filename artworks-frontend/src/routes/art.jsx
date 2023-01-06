import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function Art() {
  let { id } = useParams();

  const [paramData, setParamData] = useState([]);

  const apiKey = `6bdd0f06-3c54-4960-b04d-4ad36cf5eea4`;

  useEffect(() => {
    fetch(`https://api.harvardartmuseums.org/object/${id}?apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => setParamData(data));
  }, [id]);

  return (
    <Card
      sx={{
        width: "auto",
        height: "auto",
        margin: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          image={paramData.primaryimageurl}
          alt={paramData.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {paramData.title}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Century:{paramData.century}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Culture:{paramData.culture}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Technique:{paramData.technique}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Department:{paramData.department}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Classification:{paramData.classification}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Period:{paramData.period}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Contact:{paramData.contact}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Accession year:{paramData.accessionyear}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Access level:{paramData.accesslevel}
          </Typography>
          <Typography gutterBottom variant="body2" color="text.secondary">
            Accession method:{paramData.accessionmethod}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Art;
