import "./Certificate.css";

const Certificate = ({title,description,image}) => {
  return (
    <section className="Internship">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <img src={image} alt={title} />
    </section>
  );
};

export default Certificate;
