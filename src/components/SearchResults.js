import React from "react";
import { createUseStyles } from "react-jss";
import { Header, Icon, List, Menu } from "semantic-ui-react";

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
  const activeItem = 1;
  return (
    <>
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.headerTitle}>
            <Header as="h1" className={classes.pageTitle}>
              Search Results
            </Header>
            <div className={classes.headRight}>
              <Menu borderless className={classes.navBar}>
                <Menu.Item as="a" name="All" active={activeItem === "1"} />
                <Menu.Item
                  as="a"
                  icon="film"
                  name="Movies"
                  active={activeItem === "2"}
                />
                <Menu.Item
                  as="a"
                  icon="tv"
                  name="TV Shows"
                  active={activeItem === "3"}
                />
                <Menu.Item
                  as="a"
                  icon="game"
                  name="Games & Apps"
                  active={activeItem === "4"}
                />
                <Menu.Item
                  as="a"
                  icon="comment alternate outline"
                  name="Blog"
                  active={activeItem === "5"}
                />
                <Menu.Item as="a" name="Other" active={activeItem === "6"} />
              </Menu>
              <Menu bornerless className={classes.listStyle}>
                <Menu.Item as="a">
                  <Icon name="th" />
                </Menu.Item>
                <Menu.Item as="a">
                  <Icon name="th list" />
                </Menu.Item>
              </Menu>
            </div>
          </div>
          <div className={classes.resultsTools}>
            <Menu horizontal link>
              <Menu.Item as="a">
                Filter&nbsp;
                <Icon name="chevron down" />
              </Menu.Item>
              <Menu.Item as="a">
                Popularity&nbsp;
                <Icon name="chevron down" />
              </Menu.Item>
            </Menu>
          </div>
        </div>
        <div className={classes.resultsFiltersContainer}>
          <div className={classes.resultsFiltersRow}>
            <Menu horizontal link className={classes.resultsFilters}>
              <Menu.Item as="a">
                Release Year&nbsp;
                <Icon name="chevron down" />
              </Menu.Item>
              <Menu.Item as="a">
                Genre&nbsp;
                <Icon name="chevron down" />
              </Menu.Item>
              <Menu.Item as="a">
                Rating&nbsp;
                <Icon name="chevron down" />
              </Menu.Item>
            </Menu>
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
