import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import '../styles/custom.scss'
import '../styles/globals.scss'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
