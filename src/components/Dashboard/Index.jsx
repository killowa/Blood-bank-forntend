import SideBar from "./SideBar";

const Dashboard = () => {
  const items = [
    'Show blood exchange history',
    'Donate',
    'Request'
  ]
  return ( 
    <div className="d-flex h-100">
      <SideBar items={items}/>
    </div>
  );
}
 
export default Dashboard;
