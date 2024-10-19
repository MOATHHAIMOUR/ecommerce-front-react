import TopBar from "./TopBar";
import MiddleBar from "./MiddleBar";
import NavigationMenu from "./NavigationBar";

function Header() {
  return (
    <header className="flex flex-col">
      <TopBar />
      <MiddleBar />
      <NavigationMenu />
    </header>
  );
}

export default Header;
