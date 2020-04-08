import React from "react";
import { createUseStyles } from "react-jss";
import { Button, Card } from "semantic-ui-react";
import ResultCard from "./ResultCard";

const useStyles = createUseStyles({
  bottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    height: "80px",
  },
});

function ResultsList(props) {
  const classes = useStyles();
  const { results, loading } = props;

  return (
    <>
      <Card.Group doubling itemsPerRow={6} stackable>
        {results.map((result) => (
          <ResultCard result={result} loading={loading} />
        ))}
      </Card.Group>
      <div className={classes.bottom}>
        <Button basic color="black">
          LOAD MORE
        </Button>
      </div>
    </>
  );
}

export default ResultsList;
