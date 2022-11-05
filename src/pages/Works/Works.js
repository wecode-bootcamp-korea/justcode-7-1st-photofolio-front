import React, { Fragment } from 'react';
import CategoryCarousel from '../../components/CategoryCarousel/CategoryCarousel';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CardDetailCarousel from '../../components/CardDetailCarousel/CardDetailCarousel';

const Work = () => {
  return (
    <Fragment>
      <Header />
      <CategoryCarousel />
      <CardDetailCarousel />
      <Footer />
    </Fragment>
  );
};

export default Work;
