import React, { useState } from "react";
import Serviceimage from "../Assets/Royal Enfield-1.svg";
import Serviceimage1 from "../Assets/pre-loader-05.svg";
import { Modal, Form, ModalBody } from "react-bootstrap";
import Background from "./Background";

const Booking = () => {
  const [showmodal, setshowmodal] = useState(false);
  const [showmodal1, setshowmodal1] = useState(false);
  const Change = () => {
    setshowmodal(true);
  };
  const Change1 = () => {
    setshowmodal1(true);
  };
  const SubmitChange = (e) => {
    setshowmodal(false);
    e.preventDefault();
  };
  const SubmitChange1 = (e) => {
    setshowmodal1(false);
    e.preventDefault();
  };
  return (
    <div className="book  text-light d-flex justify-content-around">
      <div className="text-center booking " onClick={Change}>
        <img src={Serviceimage1} />
        <h4>Book a service</h4>

        <Modal show={showmodal} centered>
          <Modal.Body>
            <Form onSubmit={SubmitChange} className="bg-light backgroundform">
              <Form.Group>
                <Form.Label>Customer Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter your name"
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Mobile number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter your mobile number"
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Model Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter your model"
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3}></Form.Control>
              </Form.Group>
              <div className="d-flex justify-content-around mt-3">
                <button className="btn btn-dark" type="submit">
                  Submit
                </button>
                <button className="btn btn-dark" type="submit">
                  Cancel
                </button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>

      <div className="booking text-center " onClick={Change1}>
        <img src={Serviceimage} />
        <h4>Book a test ride</h4>

        <Modal show={showmodal1} centered>
          <Modal.Body>
            <Form onSubmit={SubmitChange1} className="bg-light backgroundform">
              <Form.Group>
                <Form.Label>Customer Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter your name"
                ></Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label>Mobile number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter your mobile number"
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Mail</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter your mail"
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>Model name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter your model"
                ></Form.Control>
              </Form.Group>

              <Form.Group>
                <Form.Label>ID proof</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter id number"
                ></Form.Control>
              </Form.Group>

              <div className="d-flex justify-content-around mt-3">
                <button className="btn btn-dark" type="submit">
                  Submit
                </button>
                <button className="btn btn-dark" type="submit">
                  Cancel
                </button>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
export default Booking;
