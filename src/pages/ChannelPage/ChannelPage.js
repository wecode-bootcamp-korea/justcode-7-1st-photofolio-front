import React, { Fragment } from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Channel from '../../components/Channel/Channel';

const ChannelPage = () => {
  return (
    <Fragment>
      <Header />
      <Channel />
      <Footer />
    </Fragment>
  );
};

export default ChannelPage;
