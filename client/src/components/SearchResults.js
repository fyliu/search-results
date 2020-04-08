import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import {
  Button,
  Card,
  Container,
  Dropdown,
  Header,
  Icon,
  Menu,
  Responsive,
  Segment,
} from "semantic-ui-react";
import * as searchService from "../services/search.service";
import Filterbar from "./Filterbar";
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
  pageTitle: {
    fontFamily: "Arial Black, Gadget, sans-serif !important",
    fontSize: "3vw !important",
    textTransform: "uppercase !important",
    textAlign: "left !important",
    lineHeight: "0.85 !important",
  },
  pageTitleSmall: {
    fontFamily: "Arial Black, Gadget, sans-serif !important",
    fontSize: "4vw !important",
    textTransform: "uppercase !important",
    textAlign: "left !important",
    lineHeight: "0.85 !important",
  },
  pageTitleTiny: {
    fontFamily: "Arial Black, Gadget, sans-serif !important",
    fontSize: "5vw !important",
    textTransform: "uppercase !important",
    textAlign: "left !important",
    paddingTop: "10px !important",
    lineHeight: "0.85 !important",
  },
  pageTitleExtraTiny: {
    fontFamily: "Arial Black, Gadget, sans-serif !important",
    fontSize: "6vw !important",
    textTransform: "uppercase !important",
    textAlign: "left !important",
    paddingTop: "5px !important",
    lineHeight: "0.85 !important",
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
  resultsFiltersContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  resultsFiltersRow: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
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
            <Responsive
              minWidth={Responsive.onlyComputer.minWidth}
              as={Header}
              floated="left"
              className={classes.pageTitle}
            >
              Search Results
            </Responsive>
            <Responsive
              maxWidth={Responsive.onlyComputer.minWidth - 1}
              minWidth={Responsive.onlyTablet.minWidth}
              as={Header}
              floated="left"
              className={classes.pageTitleSmall}
            >
              Search Results
            </Responsive>
            <Responsive
              maxWidth={Responsive.onlyMobile.maxWidth}
              minWidth={Responsive.onlyMobile.minWidth + 1}
              as={Header}
              floated="left"
              className={classes.pageTitleTiny}
            >
              Search Results
            </Responsive>
            <Responsive
              maxWidth={Responsive.onlyMobile.minWidth}
              as={Header}
              floated="left"
              className={classes.pageTitleExtraTiny}
            >
              Search Results
            </Responsive>
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
