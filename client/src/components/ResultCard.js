import React from "react";
import { Card, Image, Placeholder } from "semantic-ui-react";

function ResultCard(props) {
  const { result, loading } = props;

  return (
    <>
      <Card key={result.coverImg}>
        {loading ? (
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>
        ) : (
          <Image
            src={"http://localhost:5000/images/" + result.coverImg}
            wrapped
            ui={false}
          />
        )}
        <Card.Content>
          {loading ? (
            <Placeholder>
              <Placeholder.Paragraph>
                <Placeholder.Line length="very short" />
              </Placeholder.Paragraph>
              <Placeholder.Header>
                <Placeholder.Line length="short" />
              </Placeholder.Header>
            </Placeholder>
          ) : (
            <>
              <Card.Meta>{result.category}</Card.Meta>
              <Card.Header>{result.title}</Card.Header>
            </>
          )}
        </Card.Content>
      </Card>
    </>
  );
}

export default ResultCard;
