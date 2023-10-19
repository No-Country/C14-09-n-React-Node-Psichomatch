// import Header from "../Layouts/Header"
import DashboardAside from "../Layouts/Dashboard-Aside"
import DashboardAgenda from "../Layouts/Dashboard-Agenda"
import DashboardFooter from "../Layouts/Dashboard-Footer"

const Dashboard = function () {
  return (
    <div className="grid grid-rows-[10vh_minmax(80vh,_max-content)_10vh] grid-cols-[5vw_minmax(85vw,_max-content)_10vw]">
      {/* <Header /> */}
      <DashboardAside />
      <DashboardAgenda />
      <DashboardFooter />
    </div>
  );
}

export default Dashboard;