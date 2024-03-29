/* eslint-disable @next/next/no-img-element */
import Work1 from "assets/work1.png";
import Work2 from "assets/work2.png";
import Button from "../Button";
import SectionHead from "../Section/SectionHead";

const Works = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Case Study 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      tags: ["branding", "ui/ux", "illustrations"],
      img: Work1,
    },
    {
      id: 2,
      title: "Case Study 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      tags: ["branding", "ui/ux", "logo"],
      img: Work2,
    },
  ];

  return (
    <section className="work">
      <SectionHead title={"Work"} />
      <div className="work-card-container">
        {caseStudies.map((caseStudy, idx) => (
          <div
            className={`work-card d-flex ${
              !(idx % 2) ? "img-right" : "img-left"
            }`}
            key={caseStudy.id}
          >
            <div className="info">
              <p className="work-card-heading">{caseStudy.title}</p>
              <div className="tags">
                {caseStudy.tags.map((tag) => (
                  <div className="tag d-flex" key={tag}>
                    {tag}
                  </div>
                ))}
              </div>
              <img
                className="inside-image"
                src={caseStudy.img.src}
                alt={`${caseStudy.title}`}
              />
              <div className="brief">{caseStudy.description}</div>
              <Button type="primary">Read Case Study</Button>
            </div>
            <div className="work-image">
              <img src={caseStudy.img.src} alt={`${caseStudy.title}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Works;
