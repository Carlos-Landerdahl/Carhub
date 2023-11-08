import { Fragment } from 'react';
import Navbar from '../global/Navbar';
import Footer from '../global/Footer';

export function Layout({ children }) {
  return (
    <Fragment>
      <Navbar />
      {children}
      <Footer />
    </Fragment>
  );
}
