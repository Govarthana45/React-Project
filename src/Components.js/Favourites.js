import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
  ModalBody,
} from "react-bootstrap";
import { deletefavorites } from "../Taskslice";

const Favourite = () => {
  const { Data } = useSelector((state) => state.tasks);
  const [show, setShow] = useState(false);
  const [bikeName, setBikeName] = useState("");
  const [mile, setMile] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const dispatchdelete = useDispatch(deletefavorites);

  const ModalChange = () => {
    setShow(true);
  };
  const change = (e) => {
    let dataIndex = e.currentTarget.getAttribute("data");
    const selectedBikeName = Data[dataIndex].names;
    const selectedMile = Data[dataIndex].Mileage;
    const selectedPrice = Data[dataIndex].price;
    const selectedColor = Data[dataIndex].color;

    setBikeName(selectedBikeName);
    setMile(selectedMile);
    setPrice(selectedPrice);
    setColor(selectedColor);
    setShow(true);
  };
  const unfavouritechange = () => {
    dispatchdelete(deletefavorites(bikeName));
  };
  const SubmitModalChange = (e) => {
    e.preventDefault();
    setShow(false);
  };
  const handleBikeNameChange = (e) => {
    setBikeName(e.target.value);
  };

  const handleMileChange = (e) => {
    setMile(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const { Favourites } = useSelector((state) => state.tasks);
  console.log(Favourites);
  let Template;
  if (Favourites.length > 0) {
    Template = Favourites.map((data, index) => {
      return (
        <div className="imagebox" key={index}>
          <img data={index} src={data.images} alt="Images" onClick={change} />
          <h4 className="position-relative pb-3 pt-2  text-center label">
            {data.names}
          </h4>
        </div>
      );
    });
  } else {
    Template = (
      <div className="d-flex justify-content-center ms-5 ps-5 favourites">
        <h2 className="font-weight-normal ms-5 ps-5">No Favourites Added</h2>
      </div>
    );
  }
  return (
    <div className="motor pb-5 pt-5" onClick={ModalChange}>
      {Template}
      <Modal show={show} centered>
        <ModalBody>
          <Form onSubmit={SubmitModalChange} className="backgroundform ">
            <FormGroup>
              <FormLabel>Bike Name</FormLabel>
              <FormControl
                type="text"
                value={bikeName}
                onChange={handleBikeNameChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Mileage</FormLabel>
              <FormControl
                type="text"
                value={mile}
                onChange={handleMileChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Price</FormLabel>
              <FormControl
                type="text"
                value={price}
                onChange={handlePriceChange}
              />
            </FormGroup>
            <FormGroup>
              <FormLabel>Color Variant</FormLabel>
              <FormControl
                type="text"
                value={color}
                onChange={handleColorChange}
              />
            </FormGroup>
            <div className="d-flex justify-content-around  mt-3">
              <button
                className="btn btn-dark "
                type="submit"
                onClick={unfavouritechange}
              >
                Unfavourite
              </button>
              <button className="btn btn-dark" type="submit">
                Cancel
              </button>
            </div>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};
export default Favourite;
