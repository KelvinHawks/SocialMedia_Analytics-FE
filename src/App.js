import { useState, useEffect } from "react";
import "./App.css";
import Products from "./products/Products";
import Recommended from "./recommended/pages/Recommended";
import MainNavigation from "./shared/navigation/MainNavigation";
import Sidebar from "./sidebar/Sidebar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Card from "./shared/UIelements/Card";
//import { Data } from "./data/Data";
import axios from "axios";
import Auth from "./Auth/Auth";

function App() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [Data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:5000/api/products");
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
    setIsLoading(false);
  }, []);

  const recommendedHandler = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = Data.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  function filteredData(Data) {
    let filteredProducts = Data;

    if (query) {
      filteredProducts = filteredItems;
    }
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        ({ category }) =>
          category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    return filteredProducts.map((item) => (
      <Card
        key={Math.random()}
        image={item.image}
        title={item.title}
        comment={item.comment}
        likes={item.likes}
        rating={item.rating}
      />
    ));
  }
  const result = filteredData(Data, selectedCategory, query);
  //console.log(query);
  //console.log(selectedCategory);
  return (
    <div className="App">
      <Router>
        <MainNavigation handleInputChange={handleInputChange} />
        <Recommended recommendedHandler={recommendedHandler} />
        <Sidebar recommendedHandler={recommendedHandler} />

        {/* <div>
          
        </div> */}
        <main>
          <Switch>
            <Route path="/" exact>
              <Products result={result} isLoading={isLoading} />
            </Route>
            <Route path="/signup" exact>
              <Auth />
            </Route>
            <Redirect to="/signup" />
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
