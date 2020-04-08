import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import {
  Button,
  Card,
  Container,
  Dropdown,
  Icon,
  Menu,
  Responsive,
  Segment,
} from "semantic-ui-react";
import * as searchService from "../services/search.service";
import Filterbar from "./Filterbar";
import Headertext from "./Headertext";
import ResultCard from "./ResultCard";

const useStyles = createUseStyles({
  content: {
    background:
      "repeating-linear-gradient( 90deg, #f3f3f3, #f3f3f3 100px, #ffffff 100px, #ffffff 120px)",
    maxWidth: "1200px",
    margin: "auto",
    paddingTop: "3vw",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  headerTop: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    flexBasis: "1",
    justifyContent: "space-between",
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
  const [showFilter, setShowFilter] = useState(true);
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
      <Container className={classes.content}>
        <Container className={classes.header}>
          <Segment basic className={classes.headerTop}>
            <Headertext text="Search Results" />
            <Responsive
              maxWidth={Responsive.onlyTablet.maxWidth}
              as={Dropdown}
              floated="right"
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
              floated="right"
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
              <Menu.Item as="a" icon="comment alternate outline" name="Blog" />
              <Menu.Item as="a" name="Other" />
              <Menu.Item position="right">
                <Button basic color="black" as="a" icon="th"></Button>
                &nbsp; &nbsp;
                <Button basic color="black" as="a" icon="th list"></Button>
              </Menu.Item>
            </Responsive>
          </Segment>
          <Segment basic className={classes.resultsTools}>
            <Menu secondary horizontal link>
              <Menu.Item
                as="a"
                onClick={() => {
                  setShowFilter(!showFilter);
                }}
              >
                Filter&nbsp;
                <Icon name="chevron down" />
              </Menu.Item>
              <Menu.Item>
                Sorted By: &nbsp;
                <Dropdown
                  inline
                  pointing
                  options={sortOptions}
                  defaultValue={sortOptions[0].value}
                  icon="chevron down"
                />
              </Menu.Item>
            </Menu>
          </Segment>
        </Container>
        {showFilter && <Filterbar setShowFilter={setShowFilter} />}
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
      </Container>
    </>
  );
}

export default SearchResults;
