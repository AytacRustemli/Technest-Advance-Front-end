import { Grid } from "@mui/material";
import SideBar from "./components/SideBar/SideBar";
import MyRouter from "./router/MyRouter";
import Detail from "./components/detail/Detail";

function App() {
  return (
    <Grid container direction="column" style={{ height: "100vh" }}>
      <Grid item xs={12} style={{ border: "1px solid #EFEFEF", height: "33%", width: "16%" }}>
        <SideBar />
      </Grid>
      <Grid item xs={12} style={{ border: "1px solid #EFEFEF", height: "33%", width: "42%" }}>
        <MyRouter />
      </Grid>
      <Grid item xs={12} style={{ border: "1px solid #EFEFEF", height: "33%", width: "42%" }}>
        <Detail />
      </Grid>
    </Grid>
  );
}

export default App;
