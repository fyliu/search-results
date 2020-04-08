import React from "react";
import { createUseStyles } from "react-jss";
import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";

const useStyles = createUseStyles({
  resultsTools: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
  },
});

function ResultsTools(props) {
  const classes = useStyles();
  const { showFilter, setShowFilter } = props;

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

  return (
    <>
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
    </>
  );
}

export default ResultsTools;
