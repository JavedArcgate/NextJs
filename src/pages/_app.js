import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/reset.css'
// import '../styles/custom.scss'
import '../styles/globals.scss'
import "animate.css"
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.js");
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
