import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import Header from "./components/Header";
import DashBoard from "./components/DashBoard";
import RegisterPatient from "./components/RegisterPatient";

function App() {
  return (
    <>
      <Header />
      {/* <HomeContent /> */}
      {/* <DashBoard /> */}
      <RegisterPatient />
    </>
  )
}

export default App
