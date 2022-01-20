import "./App.css";
import TabHeader from "./component/body/TabHeader";
import MedicineContainer from "./component/body/MedicineContainer";
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

function App() {
  return (
    <div className="App ">
      <TabHeader className="mb-8" />
      <MedicineContainer className="h-14 mx-4 sm:mx-16" />
      <ReactNotification />
    </div>
  );
}

export default App;
