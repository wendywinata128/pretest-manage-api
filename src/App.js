import "./App.css";
import TabHeader from "./component/body/TabHeader";
import MedicineContainer from "./component/body/MedicineContainer";

function App() {
  return (
    <div className="App ">
      <TabHeader className="mb-8" />
      <MedicineContainer className="h-14 mx-16" />
    </div>
  );
}

export default App;
