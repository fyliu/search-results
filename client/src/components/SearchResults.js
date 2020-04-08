import React, { useEffect, useState } from "react";
import { createUseStyles } from "react-jss";
import { Container, Segment } from "semantic-ui-react";
import * as searchService from "../services/search.service";
import FilterBar from "./FilterBar";
import HeaderText from "./HeaderText";
import NavBar from "./NavBar";
import ResultsList from "./ResultsList";
import ResultsTools from "./ResultsTools";

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
});

function SearchResults() {
  const classes = useStyles();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showFilter, setShowFilter] = useState(true);

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
            <HeaderText text="Search Results" />
            <NavBar />
          </Segment>
          <ResultsTools showFilter={showFilter} setShowFilter={setShowFilter} />
        </Container>
        {showFilter && <FilterBar setShowFilter={setShowFilter} />}
        <ResultsList results={results} loading={loading} />
      </Container>
    </>
  );
}

export default SearchResults;
