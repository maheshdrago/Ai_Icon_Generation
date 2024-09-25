import { Route } from "react-router";
import "./App.css";
import Login from "./Pages/login";
import Test from "./Pages/test";

function App() {
  return (
    <div className="flex">
      <Route component={Login} path={"/login"}></Route>
      <Route component={Test} path={"/test"}></Route>
    </div>
  );
}

export default App;
