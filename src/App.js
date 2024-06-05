import NavBar from "./components/NavBar/NavBar"
import Banner from "./components/Banner/Banner"
import Features from "./components/Features/Features"

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText "> 
      <div className="max-w-screen-x1 mx-auto px-16">
        <NavBar />
        <Features />
        <Banner />
      </div>
    </div>
  );
}

export default App;
