import './App.css';
import Main from "./components/main";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container mt-5">
          <div className="row">
            <div className="col d-flex justify-content-center">
              <Main />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
