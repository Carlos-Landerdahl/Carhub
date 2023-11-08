import { Fragment } from 'react';
import Navbar from '../global/navbar';
import Footer from '../global/footer';

export function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
}
