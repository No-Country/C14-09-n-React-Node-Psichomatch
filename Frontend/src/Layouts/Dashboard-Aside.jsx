import AgendaBtn from "../Components/AgendaBtn"
import ProfileBtn from "../Components/ProfileBtn"
import SearchTherapistBtn from "../Components/SearchTherapistBtn"

const DashboardAside = function () {
  return (
    <aside className="bg-slate-200 p-5 flex flex-col justify-start items-center gap-5 row-start-2 row-end-3 col-start-1 col-end-2">
      <ProfileBtn />
      <AgendaBtn />
      <SearchTherapistBtn />
    </aside>
  );
}

export default DashboardAside;