import { StarFilled } from "@ant-design/icons";
import { Row, Col } from "antd";
import React from "react";
import Image1 from "../Images/Ellipse.png";
import Image2 from "../Images/Ellipse (1).png";
import Image3 from "../Images/Ellipse (2).png";
import Image4 from "../Images/Ellipse (3).png";
import "./Customerfeedback.css";

const feedbacks = [
  {
    name: "Jeny Wilson",
    image: Image1,
    feedback:
      "Effectively communicating feedback to employees is one of the clearest tell-tale signs of good leadership. Not only does feedback help employees develop professionally,",
    rating: 5,
  },
  {
    name: "John Doe",
    image: Image2,
    feedback:
      "Employee feedback can be a part of a more formal structure — like during planned performance review meeting",
    rating: 4,
  },
  {
    name: "Jane Smith",
    image: Image3,
    feedback:
      "Employee feedback can be a part of a more formal structure — like during planned performance review meeting",
    rating: 3,
  },
  {
    name: "Mark Johnson",
    image: Image4,
    feedback:
      "Employee feedback can be a part of a more formal structure — like during planned performance review meeting",
    rating: 2,
  },
];

function CustomerFeedback() {
  return (
    <Row gutter={[16, 16]} className="customer-row">
      {feedbacks.map((feedback, index) => (
        <Col key={index} md={24} sm={12} xs={24}>
          <Row>
            {/* <div className="feedback-card"> */}
            <Col md={3} sm={22} xs={24}>
              <img
                src={feedback.image}
                alt={`img${index + 1}`}
                className="feedback-image"
                width={45}
                height={45}
              />
            </Col>
            <Col md={19} sm={24} xs={24} style={{ marginTop: "10px" }}>
              <span className="feedback-name">{feedback.name}</span>
            </Col>
            <Col md={24} sm={24} xs={24} className="feedback-rating">
              {[...Array(5)].map((_, i) => (
                <StarFilled
                  key={i}
                  style={{ color: i < feedback.rating ? "#fadb14" : "#d9d9d9" }}
                />
              ))}
            </Col>
            <Col md={24} sm={24} xs={24}>
              <p className="feedback-text">{feedback.feedback}</p>
            </Col>
            {/* </div> */}
          </Row>
        </Col>
      ))}
    </Row>
  );
}

export default CustomerFeedback;
