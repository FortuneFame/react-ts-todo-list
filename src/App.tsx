import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

import myStore from "./store";
import Header from "./components/Header/Header";

function App() {
  return (

<Provider store={myStore}>
      <Header />
      <main style={{ paddingTop: "70px", paddingBottom: "70px" }}>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </Provider>

  );
}

export default App;
