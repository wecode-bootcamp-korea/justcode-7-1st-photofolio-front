import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchFilter from '../../components/SearchBar/SearchFilter/SearchFilter';
import CardList from '../../components/Artwork/CardList';
import Footer from '../../components/Footer/Footer';
const SearchPage = () => {
  return (
    <Fragment>
      <Header />
      <SearchBar />
      <SearchFilter />
      <CardList />
      <Footer />
    </Fragment>
  );
};

export default SearchPage;
