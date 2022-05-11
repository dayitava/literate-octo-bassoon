/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import WorkTopBorder from "../../assets/worktopborder.svg";

const WorkHead = () => (
  <Fragment>
    <div className="heading d-flex justify-content-between">
      <p className="head">Works</p>
      <p className="head">Works</p>
      <p className="head main">Works</p>
      <p className="head">Works</p>
      <p className="head">Works</p>
    </div>
    <img
      className="work-top-border"
      src={WorkTopBorder.src}
      alt="Work section top border"
    />
  </Fragment>
);

export default WorkHead;
