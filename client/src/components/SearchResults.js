import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import {
  Button,
  Card,
  Checkbox,
  Container,
  Dropdown,
  Icon,
  Menu,
  Responsive,
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
    minHeight: "200px",
  },
  headerTop: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    flexBasis: "1",
    justifyContent: "space-between",
    minHeight: "135px",
  },
  pageTitle: {
    fontFamily: "Arial Black, Gadget, sans-serif",
    fontSize: "5vw",
    textTransform: "uppercase",
    textAlign: "left",
    padding: "20px",
    lineHeight: "0.85",
  },
  headRight: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    flexBasis: "3",
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
    minHeight: "35px",
  },
  resultsFiltersContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "75px",
  },
  resultsFiltersRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    minHeight: "35px",
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
  const categoryOptions = [
    {
      text: "All",
      value: "All",
    },
    {
      text: "Movies",
      value: "Movies",
      icon: {
        name: "film",
      },
      active: "true",
    },
    {
      text: "TV Shows",
      value: "TV Shows",
      icon: {
        name: "tv",
      },
    },
    {
      text: "Games & Apps",
      value: "Games & Apps",
      icon: {
        name: "game",
      },
    },
    {
      text: "Other",
      value: "Other",
    },
  ];
  const listOptions = [
    {
      text: "Grid",
      value: "Grid",
      icon: {
        name: "th",
      },
      active: "true",
    },
    {
      text: "List",
      value: "List",
      icon: {
        name: "th list",
      },
    },
  ];
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
          <div className={classes.headerTop}>
            <h1 className={classes.pageTitle}>Search Results</h1>
            <div className={classes.headRight}>
              <Responsive
                maxWidth={Responsive.onlyTablet.maxWidth}
                as={Dropdown}
                button
                basic
                color="black"
                className="icon"
                icon="bars"
                direction="left"
              >
                <Dropdown.Menu>
                  {categoryOptions.map((option) => (
                    <Dropdown.Item key={option.value} {...option} />
                  ))}
                  <Dropdown.Divider />
                  {listOptions.map((option) => (
                    <Dropdown.Item key={option.value} {...option} />
                  ))}
                </Dropdown.Menu>
              </Responsive>
              <Responsive
                as={Menu}
                minWidth={Responsive.onlyComputer.minWidth}
                pointing={true}
                secondary={true}
                stackable
                className={classes.navBar}
              >
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
              </Responsive>
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
        <Menu secondary className={classes.resultsFiltersRow}>
          <Menu
            secondary
            link
            stackable
            floated="left"
            className={classes.resultsFilters}
          >
            <Dropdown
              text="Release Year&nbsp;"
              multiple
              selction
              icon="chevron down"
            >
              <Dropdown.Menu>
                <Dropdown.Item value="1992" content=<Checkbox label="1992" /> />
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown text="Genre&nbsp;" multiple selction icon="chevron down">
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
          <Menu
            secondary
            link
            stackable
            floated="right"
            className={classes.resultsFiltersControls}
          >
            <Menu.Item>
              <Button
                as="a"
                basic
                color="black"
                compact
                content="CLEAR FILTERS"
              />
            </Menu.Item>
            <Menu.Item>
              <Button
                as="a"
                basic
                color="black"
                compact
                content="APPLY FILTERS"
              />
            </Menu.Item>
            <Menu.Item
              as="Button"
              basic
              color="black"
              icon="cancel"
            ></Menu.Item>
          </Menu>
        </Menu>
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
