import React from "react";
import { Card, Image } from "semantic-ui-react";

function ResultCard(props) {
  const { result } = props;

  return (
    <>
      <Card key={result.coverImg}>
        <Image
          src={"http://localhost:5000/images/" + result.coverImg}
          wrapped
          ui={false}
        />
        <Card.Meta>{result.category}</Card.Meta>
        <Card.Header>{result.title}</Card.Header>
      </Card>
    </>
  );
}

export default ResultCard;
