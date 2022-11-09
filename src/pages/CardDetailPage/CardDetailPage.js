import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import CardDetailContent from '../../components/CardDetailContent/CardDetailContent';
import CardDetailCarousel from '../../components/CardDetailCarousel/CardDetailCarousel';

const CardDetailPage = () => {
  return (
    <Fragment>
      <Header />
      <CardDetailContent />
      {/* <CardDetailCarousel /> */}
      <Footer />
    </Fragment>
  );
};

export default CardDetailPage;
