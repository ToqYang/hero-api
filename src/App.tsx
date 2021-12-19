import "./styles/style.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Navigation } from "./routes/Navigation";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Navigation />
      </Provider>
    </div>
  );
}

export default App;
