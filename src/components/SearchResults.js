import React from "react";
import {Button} from "semantic-ui-react";

function SearchResults() {
  return (
    <>
    <div className="header">
      <h1>SearchResults</h1>
      <div className="navbar">
        <Button as="a">All</Button>
        <Button as="a">Movies</Button>
        <Button as="a">TV Shows</Button>
        <Button as="a">Games & Apps</Button>
        <Button as="a">Blog</Button>
        <Button as="a">Other</Button>
      </div>
      <div clasName="liststyle">
        <Button as="a">tile</Button>
        <Button as="a">list</Button>
      </div>
    </div>
      {/*
      <Header>
      <Navbar />
      </Header>
      <Filterbar />
      <Filterbar2 />
      <MovieList />
      <LoadMore />
      */}
    </>
  );
}

export default SearchResults;
