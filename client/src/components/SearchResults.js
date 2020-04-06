import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import {
  Button,
  Card,
  Checkbox,
  Container,
  Dropdown,
  Icon,
  List,
  Menu,
} from "semantic-ui-react";
import * as searchService from "../services/search.service";
import ResultCard from "./ResultCard";

const useStyles = createUseStyles({
  content: {
    background:
      "repeating-linear-gradient( 90deg, #f3f3f3, #f3f3f3 100px, #ffffff 100px, #ffffff 120px)",
    maxWidth: "1200px",
    margin: "auto",
    paddingTop: "50px",
  },
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
  pageTitle: {
    fontFamily: "Arial Black, Gadget, sans-serif",
    fontSize: "60px",
    textTransform: "uppercase",
    textAlign: "left",
    padding: "20px",
    lineHeight: "0.85",
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
  bottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    height: "80px",
  },
});

function SearchResults() {
  const classes = useStyles();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const sortOptions = [
    {
      key: "Popularity",
      text: "Popularity",
      value: "Popularity",
    },
    {
      key: "Recent",
      text: "Recent",
      value: "Recent",
    },
  ];
  const ratingOptions = [
    {
      text: "G",
      value: "G",
      content: <Checkbox label="G" />,
    },
    {
      text: "PG",
      value: "PG",
      content: <Checkbox label="PG" defaultChecked />,
    },
    {
      text: "PG-13",
      value: "PG-13",
      content: <Checkbox label="PG-13" defaultChecked />,
    },
    {
      text: "R",
      value: "R",
      content: <Checkbox label="R" />,
    },
    {
      text: "NC-17",
      value: "NC-17",
      content: <Checkbox label="NC-17" />,
    },
  ];

  useEffect(() => {
    // call backend and set state
    const getResults = async () => {
      const resultsResponse = await searchService.getResults("movies");
      setResults(resultsResponse.data);
    };
    setLoading(true);
    getResults();
    setLoading(false);
  }, []);

  return (
    <>
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.headerTitle}>
            <h1 className={classes.pageTitle}>Search Results</h1>
            <div className={classes.headRight}>
              <Menu pointing={true} secondary={true} className={classes.navBar}>
                <Menu.Item as="a" name="All" />
                <Menu.Item as="a" icon="film" name="Movies" active />
                <Menu.Item as="a" icon="tv" name="TV Shows" />
                <Menu.Item as="a" icon="game" name="Games & Apps" />
                <Menu.Item
                  as="a"
                  icon="comment alternate outline"
                  name="Blog"
                />
                <Menu.Item as="a" name="Other" />
                <Menu.Item position="right">
                  <Button basic color="black" as="a" icon="th"></Button>
                  &nbsp; &nbsp;
                  <Button basic color="black" as="a" icon="th list"></Button>
                </Menu.Item>
              </Menu>
            </div>
          </div>
          <div className={classes.resultsTools}>
            <Menu secondary horizontal link>
              <Menu.Item as="a">
                Filter&nbsp;
                <Icon name="chevron down" />
              </Menu.Item>
              <Menu.Item>
                Sorted By: &nbsp;
                <Dropdown
                  inline
                  options={sortOptions}
                  defaultValue={sortOptions[0].value}
                  icon="chevron down"
                />
              </Menu.Item>
            </Menu>
          </div>
        </div>
        <div className={classes.resultsFiltersContainer}>
          <div className={classes.resultsFiltersRow}>
            <Menu secondary horizontal link className={classes.resultsFilters}>
              <Dropdown
                text="Release Year&nbsp;"
                multiple
                selction
                icon="chevron down"
              >
                <Dropdown.Menu>
                  <Dropdown.Item
                    value="1992"
                    content=<Checkbox label="1992" />
                  />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                text="Genre&nbsp;"
                multiple
                selction
                icon="chevron down"
              >
                <Dropdown.Menu>
                  <Dropdown.Item
                    value="Action"
                    content=<Checkbox label="Action" defaultChecked />
                  />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown
                text="Rating&nbsp;"
                multiple
                selction
                defaultOpen
                icon="chevron down"
              >
                <Dropdown.Menu>
                  {ratingOptions.map((option) => (
                    <Dropdown.Item key={option.value} {...option} />
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </Menu>
            <List horizontal link className={classes.resultsFiltersControls}>
              <List.Item as="a">
                <List.Content>
                  <Button basic color="black">
                    CLEAR FILTERS
                  </Button>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <List.Content>
                  <Button basic color="black">
                    APPLY FILTERS
                  </Button>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <List.Icon name="cancel" />
              </List.Item>
            </List>
          </div>
        </div>
        <Container>
          <Card.Group doubling itemsPerRow={6} stackable>
            {results.map((result) => (
              <ResultCard result={result} loading={loading} />
            ))}
          </Card.Group>
        </Container>
        <div className={classes.bottom}>
          <Button basic color="black">
            LOAD MORE
          </Button>
        </div>
      </div>
    </>
  );
}

export default SearchResults;
