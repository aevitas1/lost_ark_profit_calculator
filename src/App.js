import Header from "./components/Header";
import Menu from "./components/Menu";
import Materials from "./components/Materials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <div className="page_wrapper">
        <Menu />
        <Materials />
      </div>
      <Footer />
    </>
  );
}

export default App;
