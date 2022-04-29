import Header from "./components/Header";
import Menu from "./components/Menu";
import Materials from "./components/Materials";
import CraftingCost from "./components/CraftingCost";
import Footer from "./components/Footer";
import { MaterialProvider } from './context/MaterialContext'

function App() {
  return (
    <>
      <Header />
      <div className="page_wrapper">
        <Menu />
        <MaterialProvider>
          <Materials />
          <CraftingCost />
        </MaterialProvider>
      </div>
      <Footer />
    </>
  );
}

export default App;
