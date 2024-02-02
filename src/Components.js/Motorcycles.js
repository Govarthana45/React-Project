import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Indexchange, pushfavourites } from "../Taskslice";
import {
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Modal,
  ModalBody,
} from "react-bootstrap";

const Motorcycles = () => {
  // const [selectedindex,setselectedindex]=useState("")
  const dispatchindex = useDispatch();
  const { Data } = useSelector((state) => state.tasks);

  const dispatchpush = useDispatch(pushfavourites);

  const [show, setShow] = useState(false);
  const [bikeName, setBikeName] = useState("");
  const [mile, setMile] = useState("");
  const [price, setPrice] = useState("");
  const [color, setColor] = useState("");
  const [selectedDataIndex, setSelectedDataIndex] = useState(null);

  const change = (e) => {
    let dataIndex = e.currentTarget.getAttribute("data");
    const selectedBikeName = Data[dataIndex].names;
    const selectedMile = Data[dataIndex].Mileage;
    const selectedPrice = Data[dataIndex].price;
    const selectedColor = Data[dataIndex].color;

    dispatchindex(Indexchange(dataIndex));

    setBikeName(selectedBikeName);
    setMile(selectedMile);
    setPrice(selectedPrice);
    setColor(selectedColor);
    setSelectedDataIndex(dataIndex);
    setShow(true);
  };

  const ModalChange = () => {
    setShow(true);
  };

  const SubmitModalChange = (e) => {
    e.preventDefault();
    setShow(false);

    const selectedBikeName = Data[selectedDataIndex].names;
    const selectedMile = Data[selectedDataIndex].Mileage;
    const selectedPrice = Data[selectedDataIndex].price;
    const selectedColor = Data[selectedDataIndex].color;

    // Use selectedBikeName and selectedMile as needed (e.g., dispatch an action)
    console.log("Selected Bike Name:", selectedBikeName);
    console.log("Selected Mile:", selectedMile);
    console.log("Selected Price:", selectedPrice);
    console.log("Selected Color:", selectedColor);
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
  const Favouriteschange = () => {
    dispatchpush(pushfavourites(Data[selectedDataIndex]));
  };

  const Template = Data.map((data, index) => (
    <div className="imagebox" key={index}>
      <img data={index} src={data.images} onClick={change} alt="Images" />
      <h4 className="position-relative pb-3 pt-2  text-center label">
        {data.names}
      </h4>
    </div>
  ));

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
                onClick={Favouriteschange}
              >
                Favourites
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

export default Motorcycles;
