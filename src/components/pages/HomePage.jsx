/** @format */
import React from 'react';
import PageTemplate from '<templates>/PageTemplate';
import Search from '<organisms>/Search';
import FeaturedBooks from '<organisms>/FeaturedBooks';
import RecentlyAdded from '<organisms>/RecentlyAdded';
import AllBooks from '<organisms>/AllBooks';

const HomePage = () => {
  return (
    <PageTemplate>
      <Search />
      <FeaturedBooks />
      <RecentlyAdded />
      <AllBooks />
    </PageTemplate>
  );
};

export default HomePage;
