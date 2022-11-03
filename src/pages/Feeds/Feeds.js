import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';
import Artwork from '../../components/Artwork/Artwork';
import CategoryCarousel from '../../components/CategoryCarousel/CategoryCarousel';
const Feed = () => {
  return (
    <Fragment>
      <Header />
      <CategoryCarousel />
      <Artwork />
    </Fragment>
  );
};

export default Feed;
