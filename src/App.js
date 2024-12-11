import { useEffect, useState } from "react";
import "./styles/app.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from "./services/login";
import { HeaderComponent } from "./components/headerComponent/HeaderComponent";
import { MenuComponent } from "./components/menuComponent/MenuComponent";
import { ModelComponent } from "./components/modelComponent/ModelComponent";
import { getInfoTable } from "./services/http";

function App() {
  const [carInfo, setCarInfo] = useState({});
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cc = login();

      if (cc) {
        try {
          const [carData, userData] = await getInfoTable(cc);
          setCarInfo(carData);
          setUserInfo(userData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, []);


  return (
    <div className="App">
      <HeaderComponent />
      <ModelComponent />
      <MenuComponent />
    </div>
  );
}

export default App;