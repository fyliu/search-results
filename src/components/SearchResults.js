import React from "react";
import { createUseStyles } from "react-jss";
import { Button } from "semantic-ui-react";

const useStyles = createUseStyles({
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "200px",
  },
  headerTitle: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    height: "135px",
  },
  headRight: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  headerFilters: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    height: "35px",
  },
  resultsFiltersContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "75px",
  },
  resultsFiltersRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    height: "35px",
  },
});

function SearchResults() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.headerTitle}>
            <h1 className={classes.pageTitle}>Search Results</h1>
            <div className={classes.headRight}>
              <div className={classes.navBar}>
                <Button as="a">All</Button>
                <Button as="a">Movies</Button>
                <Button as="a">TV Shows</Button>
                <Button as="a">Games & Apps</Button>
                <Button as="a">Blog</Button>
                <Button as="a">Other</Button>
              </div>
              <div className={classes.listStyle}>
                <Button as="a">tile</Button>
                <Button as="a">list</Button>
              </div>
            </div>
          </div>
          <div className={classes.headerFilters}>
            <Button as="a">Filter</Button>
            <Button as="a">Popularity</Button>
          </div>
        </div>
        <div className={classes.resultsFiltersContainer}>
          <div className={classes.resultsFiltersRow}>
            <div className={classes.resultsFilters}>
              <Button as="a">Release Year</Button>
              <Button as="a">Genre</Button>
              <Button as="a">Rating</Button>
            </div>
            <div className={classes.resultsFiltersControls}>
              <Button as="a">CLEAR FILTERS</Button>
              <Button as="a">APPLY FILTERS</Button>
              <Button as="a">X</Button>
            </div>
          </div>
        </div>
      </div>
      {/*
      <Filterbar />
      <Filterbar2 />
      <MovieList />
      <LoadMore />
      */}
    </>
  );
}

export default SearchResults;
