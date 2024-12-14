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

function App() {
  const [quoteInfo, setQuoteInfo] = useState({});
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const cc = login();

      if (cc) {
        try {
          const [quoteData, userData] = await getInfoTable(cc);
          setQuoteInfo(quoteData);
          setUserInfo(userData);

          removeModels(userData["MODELO"])

        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, []);

  console.log(userInfo, quoteInfo)


  return (
    <div className="App">
      <HeaderComponent />
      <ModelComponent />
      <MenuComponent quoteInfo={quoteInfo} userOrder={userInfo} />
      <OrbitComponent />
    </div>
  );
}

export default App;