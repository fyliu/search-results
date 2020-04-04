import React from "react";
import { createUseStyles } from "react-jss";
import { Header, List } from "semantic-ui-react";

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
  navBar: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  resultsTools: {
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
            <Header as="h1" className={classes.pageTitle}>
              Search Results
            </Header>
            <div className={classes.headRight}>
              <List link className={classes.navBar}>
                <List.Item as="a" content="All" />
                <List.Item as="a" icon="film" content="Movies" />

                <List.Item as="a" icon="tv" content="TV Shows" />
                <List.Item as="a" icon="game" content="Games & Apps" />
                <List.Item
                  as="a"
                  icon="comment alternate outline"
                  content="Blog"
                />
                <List.Item as="a" content="Other" />
              </List>
              <List horizontal link className={classes.listStyle}>
                <List.Item as="a">
                  <List.Icon name="th" />
                </List.Item>
                <List.Item as="a">
                  <List.Icon name="th list" />
                </List.Item>
              </List>
            </div>
          </div>
          <div className={classes.resultsTools}>
            <List horizontal link>
              <List.Item as="a">
                <List.Content>Filter</List.Content>
                <List.Icon name="chevron down" />
              </List.Item>
              <List.Item as="a">
                <List.Content>Popularity</List.Content>
                <List.Icon name="chevron down" />
              </List.Item>
            </List>
          </div>
        </div>
        <div className={classes.resultsFiltersContainer}>
          <div className={classes.resultsFiltersRow}>
            <List horizontal link className={classes.resultsFilters}>
              <List.Item as="a">
                <List.Content>Release Year</List.Content>
                <List.Icon name="chevron down" />
              </List.Item>
              <List.Item as="a">
                <List.Content>Genre</List.Content>
                <List.Icon name="chevron down" />
              </List.Item>
              <List.Item as="a">
                <List.Content>Rating</List.Content>
                <List.Icon name="chevron down" />
              </List.Item>
            </List>
            <List horizontal link className={classes.resultsFiltersControls}>
              <List.Item as="a">
                <List.Content>CLEAR FILTERS</List.Content>
              </List.Item>
              <List.Item as="a">
                <List.Content>APPLY FILTERS</List.Content>
              </List.Item>
              <List.Item as="a">
                <List.Icon name="cancel" />
              </List.Item>
            </List>
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
