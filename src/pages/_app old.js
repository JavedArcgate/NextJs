import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "antd/dist/reset.css";
// import '../styles/custom.scss'
import "../styles/globals.scss";
import "animate.css";
// import { Provider } from "react";
import { Provider } from 'react-redux'
import { store } from "../store/store.js";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
