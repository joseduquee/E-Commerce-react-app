import { MenuAppBar } from "./ui/MenuAppBar";
import { AppRouter } from "./router/AppRouter";
import { Theme } from "./theme/Theme";

function App() {
  return (
    <Theme>
      <MenuAppBar />
      <AppRouter />
    </Theme>
  );
}

export default App;
