import routes from "../../Routes";
import SideBar from "./SideBar";
import {Outlet} from 'react-router-dom'

const Dashboard = () => {
  const items = [
    {
      value: 'Show blood exchange history',
      path: routes.bloodTransactionsHistory
    },
    {
      value: 'Donate',
      path: routes.donate
    },
    {
      value: 'Request',
      path: routes.request
    }
  ]
  return ( 
    <div className="d-flex h-100">
      <SideBar items={items}/>
      <Outlet/>
    </div>
  );
}
 
export default Dashboard;
