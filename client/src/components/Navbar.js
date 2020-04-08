import React from "react";
import { createUseStyles } from "react-jss";
import { Button, Dropdown, Menu, Responsive } from "semantic-ui-react";

const useStyles = createUseStyles({
  navBar: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

function Navbar(props) {
  const classes = useStyles();

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

  return (
    <>
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
    </>
  );
}

export default Navbar;
