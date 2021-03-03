import React from "react";
import PropTypes from "prop-types";

const CardImageDesc = ({ customFields }) => {
  const { title, imgPath, desc, url } = customFields;

  return (
    <div className="card" style={{ width: "50%" }}>
      <div className="container">
        <img
          className="card-img-top"
          style={{ width: "100%" }}
          src={imgPath}
          alt="Card image cap"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
        <a href={url} className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

CardImageDesc.propTypes = {
  customFields: PropTypes.shape({
    title: PropTypes.string,
    imgPath: PropTypes.string,
    desc: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

CardImageDesc.label = "Card Image Title Desc";

export default CardImageDesc;
