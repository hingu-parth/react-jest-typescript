import "./styles.css";
import { ContextProviderComponent } from "./Context";
import { UsersList } from "./components/UsersList/UsersList";
import BombsApp from "components/Bomb/BombsApp";

const App: React.FC = () => {
  return (
    <ContextProviderComponent>
      <BombsApp />
    </ContextProviderComponent>
  );
};

export default App;
