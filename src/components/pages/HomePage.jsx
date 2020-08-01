/** @format */
import React from 'react';
import PageTemplate from '<templates>/PageTemplate';
import FeaturedBooks from '<organisms>/FeaturedBooks';
import RecentlyAdded from '<organisms>/RecentlyAdded';
import AllBooks from '<organisms>/AllBooks';

const HomePage = () => {
  return (
    <PageTemplate>
      <FeaturedBooks />
      <RecentlyAdded />
      <AllBooks />
    </PageTemplate>
  );
};

export default HomePage;
