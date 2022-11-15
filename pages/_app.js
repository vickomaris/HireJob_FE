import React, {useEffect} from 'react';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import Layout1 from '../layouts/layouts1'
import Layout2 from '../layouts/layouts2'


const layouts = {
  L1: Layout1,
  L2: Layout2
}

const noLayout = ({children}) => {
  return(
    <>
      {children}
    </>
    
  )
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const Layout = layouts[Component.layout] || noLayout

  return (
    <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
