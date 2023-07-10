import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex mx-[240px] pt-[77px]">
        <SideNav />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
