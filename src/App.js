import Header from "./components/Header";
import Menu from "./components/Menu";
import Materials from "./components/Materials";

function App() {
  return (
    <>
      <Header />
      <div className="page_wrapper">
        <Menu />
        <Materials />
      </div>
    </>
  );
}

export default App;
