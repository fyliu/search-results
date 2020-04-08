import React from "react";
//import { createUseStyles } from "react-jss";
import { Card } from "semantic-ui-react";
import ResultCard from "./ResultCard";

//const useStyles = createUseStyles({});

function ResultsList(props) {
  //const classes = useStyles();
  const { results, loading } = props;

  return (
    <>
      <Card.Group doubling itemsPerRow={6} stackable>
        {results.map((result) => (
          <ResultCard result={result} loading={loading} />
        ))}
      </Card.Group>
    </>
  );
}

export default ResultsList;
