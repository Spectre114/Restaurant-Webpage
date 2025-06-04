import React from "react";

const TestimonialCard = ({ profileImage }) => {
  return (
    <div className="testimonial-item bg-transparent border rounded p-4">
      <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        ratione incidunt alias aspernatur! Nobis asperiores sapiente vero
        quisquam est! Totam, omnis voluptates?
      </p>
      <div className="d-flex align-items-center">
        <img
          className="img-fluid flex-shrink-0 rounded-circle"
          src={profileImage}
          alt="Client 1"
          style={{ width: "50px", height: "50px" }}
        />
        <div className="ps-3">
          <h5 className="mb-1">Client Name</h5>
          <small>Profession</small>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
