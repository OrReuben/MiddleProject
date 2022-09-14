import { Box } from "@mui/material";

export default function PageNotFound() {
  return (
    <Box sx={{ height: "100vh", paddingTop: {xs:"30%",sm:"15%"} }}>
      <h1>ERROR 404</h1>
      <h5>The following route does not exist, please return home</h5>
    </Box>
  );
}
