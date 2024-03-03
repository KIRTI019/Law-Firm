import photo2 from "../../assests/photo2.jpg"
import "./legal.css";

const Legal = () => {
  return (
    <div className="part">
      <div className="part1">
      <h2 className="heading">Legal Consulting Services</h2>
      <p className="paragraph">
        Our experienced team provides comprehensive legal consulting services,
        offering expert advice and guidance on a wide range of legal matters. We
        ensure that our clients are well-informed and equipped to make informed
        decisions in their legal affairs.
      </p>
      <a href="#services" className="btn btn-primary butt">
            View Resources
          </a>
      </div>
      <div className="part2">
        <img src={photo2}></img>
      </div>
    </div>
  );
};

export default Legal;
