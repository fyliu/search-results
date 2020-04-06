import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import {
  Button,
  Card,
  Checkbox,
  Container,
  Dropdown,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
} from "semantic-ui-react";
import * as searchService from "../services/search.service";

const useStyles = createUseStyles({
  content: {
    background:
      "repeating-linear-gradient( 90deg, #f3f3f3, #f3f3f3 100px, #ffffff 100px, #ffffff 120px)",
    maxWidth: "1200px",
    margin: "auto",
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
  const [results, setResults] = useState([]);
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
    getResults();
  }, []);

  return (
    <>
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.headerTitle}>
            <Header as="h1" className={classes.pageTitle}>
              Search Results
            </Header>
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
            <Menu horizontal link>
              <Menu.Item as="a">
                Filter&nbsp;
                <Icon name="chevron down" />
              </Menu.Item>
              Sorted By: &nbsp;
              <Dropdown
                inline
                options={sortOptions}
                defaultValue={sortOptions[0].value}
              />
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
              <Dropdown
                text="Rating&nbsp;"
                multiple
                selction
                open
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
                  <Button>CLEAR FILTERS</Button>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <List.Content>
                  <Button>APPLY FILTERS</Button>
                </List.Content>
              </List.Item>
              <List.Item as="a">
                <List.Icon name="cancel" />
              </List.Item>
            </List>
          </div>
        </div>
        <Container>
          <Grid doubling columns={6}>
            {results.map((result) => (
              <Grid.Column key={result.coverImg}>
                <Card>
                  <Image
                    src={"http://localhost:5000/images/" + result.coverImg}
                    wrapped
                    ui={false}
                  />
                  <Card.Meta>{result.category}</Card.Meta>
                  <Card.Header>{result.title}</Card.Header>
                </Card>
              </Grid.Column>
            ))}
          </Grid>
        </Container>
        <Button>LOAD MORE</Button>
      </div>
    </>
  );
}

export default SearchResults;
