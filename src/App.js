import { useEffect, useState } from "react";
import "./styles/app.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { login } from "./services/login";
import { HeaderComponent } from "./components/headerComponent/HeaderComponent";
import { ModelComponent } from "./components/modelComponent/ModelComponent";
import { getInfoTable } from "./services/http";
import { OrbitComponent } from "./components/orbitComponent/OrbitComponent";
import { MenuComponent } from "./components/menuComponent/MenuComponent";
import { removeModels } from "./services/render";
import { ModelSelected } from "./models/ModelSelected";
import Progress from "./Progress/Progress";
import { cargarTablaModelo, changeColorCar } from "./services/damage";


export const userModelOrder = new ModelSelected("");

function App() {
  const [quoteInfo, setQuoteInfo] = useState({});
  const [userInfo, setUserInfo] = useState(null);
  const [elementClick, setElementClick] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const cc = login();

      if (cc) {
        try {
          const [quoteData, userData] = await getInfoTable(cc);
          setQuoteInfo(quoteData);
          setUserInfo(userData);

          removeModels(userData["MODELO"]);
          setTimeout(() => {
            changeColorCar(userData["Color"]);
          }, 1000);
          userModelOrder.name = userData["MODELO"];
          userModelOrder.color = userData["Color"];
          userModelOrder.id = cc;

          cargarTablaModelo(userData);

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, []);

  const onGetElement = (element) => {
    setElementClick(element)
  }


  return (
    <div className="App">
      <Progress />
      <HeaderComponent />
      <ModelComponent getElement={onGetElement} />
      <MenuComponent quoteInfo={quoteInfo} userOrder={userInfo} element={elementClick} />
      <OrbitComponent />
    </div>
  );
}

export default App;