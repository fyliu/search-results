import React from "react";
import { createUseStyles } from "react-jss";
import { Header, Responsive } from "semantic-ui-react";

const useStyles = createUseStyles({
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
});

function Headertext(props) {
  const classes = useStyles();
  const { text } = props;

  return (
    <>
      <Responsive
        minWidth={Responsive.onlyComputer.minWidth}
        as={Header}
        floated="left"
        className={classes.pageTitle}
      >
        {text}
      </Responsive>
      <Responsive
        maxWidth={Responsive.onlyComputer.minWidth - 1}
        minWidth={Responsive.onlyTablet.minWidth}
        as={Header}
        floated="left"
        className={classes.pageTitleSmall}
      >
        {text}
      </Responsive>
      <Responsive
        maxWidth={Responsive.onlyMobile.maxWidth}
        minWidth={Responsive.onlyMobile.minWidth + 1}
        as={Header}
        floated="left"
        className={classes.pageTitleTiny}
      >
        {text}
      </Responsive>
      <Responsive
        maxWidth={Responsive.onlyMobile.minWidth}
        as={Header}
        floated="left"
        className={classes.pageTitleExtraTiny}
      >
        {text}
      </Responsive>
    </>
  );
}

export default Headertext;
