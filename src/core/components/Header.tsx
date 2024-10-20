import TopBar from "./TopBar";
import MiddleBar from "./MiddleBar";
import NavigationBar from "./NavigationBar";

function Header() {
  return (
    <header className="flex flex-col">
      <TopBar />
      <MiddleBar />
      <NavigationBar />
    </header>
  );
}

export default Header;
