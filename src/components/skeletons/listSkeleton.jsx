import React from "react";
import { Box, Skeleton } from "@mui/material";
export default function ListSkeleton() {
  return (
    <Box sx={{ width: 300 }}>
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
      <Skeleton animation="wave" />
    </Box>
  );
}
