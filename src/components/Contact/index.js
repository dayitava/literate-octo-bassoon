/* eslint-disable @next/next/no-img-element */
import SectionHead from "../Section/SectionHead";

const Contact = () => {
  const socialLinks = [
    {
      id: 1,
      title: "email",
      value: "dayitavaupadhyay@gmail.com",
      link: "mailto:dayitavaupadhyay@gmail.com",
    },
    {
      id: 2,
      title: "linkedin",
      value: "dayitava",
      link: "https://www.linkedin.com/in/dayitava/",
    },
    {
      id: 3,
      title: "instagram",
      value: "@dayitava.design",
      link: "https://www.instagram.com/dayitava.design/",
    },
    {
      id: 4,
      title: "facebook",
      value: "dayitavaupadhyay",
      link: "https://www.facebook.com/cooldayitava/",
    },
  ];
  return (
    <section>
      <SectionHead title={"Contact"} />
      <div className="contact">
        <h1 className="heading-1">Say Hi 👋</h1>
        <p>
          Feel free to reach out to me on my email. Tell me your story. Start
          from the beginning.
        </p>

        <div className="social-links">
          {socialLinks.map(({ id, title, value, link }) => (
            <div className="link" key={id}>
              <div className="title">{title}</div>
              <a
                target={"_blank"}
                rel={"noreferrer"}
                href={link}
                className="value"
              >
                {value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
