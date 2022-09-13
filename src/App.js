import { Outlet } from "react-router-dom";
import Header from "./components/common/Header";

function App() {
  return (
    <div className="d-flex flex-column h-100">
      <Header/>
      <Outlet/>
    </div>

  );
}

export default App;
