import { BiArchive } from "react-icons/bi"
import Search from "./components/Search";
import AddAppointment from "./components/AddAppointment"

const App = () => {
  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiArchive className="inline-block text-red-400 align-top" />Your Appointment</h1>
      <AddAppointment />
      <Search />
    </div>
  );
}

export default App;
