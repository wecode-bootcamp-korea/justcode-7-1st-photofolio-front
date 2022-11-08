import React, { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchFilter from '../../components/SearchBar/SearchFilter/SearchFilter';
import CardList from '../../components/Artwork/CardList';
import Footer from '../../components/Footer/Footer';
const SearchPage = () => {
  const location = useLocation();
  return (
    <Fragment>
      <Header pathname={location.pathname} />
      <SearchBar />
      <SearchFilter />
      <CardList />
      <Footer />
    </Fragment>
  );
};

export default SearchPage;
