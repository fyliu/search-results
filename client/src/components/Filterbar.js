import React from "react";
import { createUseStyles } from "react-jss";
import { Button, Checkbox, Dropdown, Menu, Segment } from "semantic-ui-react";

const useStyles = createUseStyles({
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
});

function Filterbar(props) {
  const classes = useStyles();
  const { setShowFilter } = props;

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
  return (
    <>
      <Segment basic className={classes.resultsFiltersContainer}>
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
              pointing
              icon="chevron down"
            >
              <Dropdown.Menu>
                <Dropdown.Item value="1992" content=<Checkbox label="1992" /> />
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown text="Genre&nbsp;" multiple pointing icon="chevron down">
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
              pointing
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
              onClick={() => {
                setShowFilter(false);
              }}
            ></Menu.Item>
          </Menu>
        </Menu>
      </Segment>
    </>
  );
}

export default Filterbar;
