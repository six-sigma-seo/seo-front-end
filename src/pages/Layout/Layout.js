import React from 'react';
import { StyledLayout } from './styles';

// import Header from '../header/Header';
// import Footer from '../footer/Footer';

export default function Layout(props) {
  return (
    <>
      <Layout>
        hola mundo
        {/* <Header /> */}
        <div>{props.children}</div>
        {/* <Footer /> */}
      </Layout>
    </>
  );
}
