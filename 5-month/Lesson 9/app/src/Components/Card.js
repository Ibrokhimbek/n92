import React from "react";
import { Skeleton } from "@mui/material";

function Card() {

  return (
    <div style={{ maxWidth: "300px", padding: "20px" }}>
      <Skeleton variant="circular" width={40} height={40} animation={"wave"} />
      <Skeleton
        variant="text"
        animation={"wave"}
        width={210}
        height={60}
        style={{ marginTop: "20px" }}
      />
      <Skeleton
        variant="rounded"
        animation={"wave"}
        width={210}
        height={60}
        style={{ marginTop: "20px" }}
      />
    </div>
  );
}

export default Card;
