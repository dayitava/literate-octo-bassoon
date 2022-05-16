/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import SectionTopBorder from "assets/sectiontopborder.svg";

const SectionHead = ({ title }) => (
  <Fragment>
    <div className="heading d-flex">
      <p className="head">{title}</p>
      <p className="head">{title}</p>
      <p className="head main">{title}</p>
      <p className="head">{title}</p>
      <p className="head">{title}</p>
    </div>
    <img
      className="section-top-border"
      src={SectionTopBorder.src}
      alt={`${title} section top border`}
    />
  </Fragment>
);

export default SectionHead;
