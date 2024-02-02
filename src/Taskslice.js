import { createSlice } from "@reduxjs/toolkit";
import NewHimalayan from "./Assets/new-himalayan.jpeg";
import Bullet350 from "./Assets/bullet-350.jpeg";
import Classic350 from "./Assets/classic-350.jpeg";
import ContinentalGT from "./Assets/continental-gt-650.jpeg";
import Hunter from "./Assets/hunter-350.jpeg";
import Metero from "./Assets/meteor-350.jpeg";
import Scram from "./Assets/scram-411.jpeg";
import Supermetero from "./Assets/supermetero.jpeg";
import interceptor from "./Assets/interceptor-650.jpeg";

const initialState = {
  Data: [
    {
      images: NewHimalayan,
      names: "New Himalayan",
      Mileage: "31kmpl",
      price: "₹2,15,881 lakhs to ₹2,28,490 lakhs",
      color: "Granite Black,Pine Green,Dune Brown,Glacier Blue,Sleet Black",
    },
    {
      images: Bullet350,
      names: "Bullet 350",
      Mileage: "37kmpl",
      price: "₹1.24 lakhs - ₹2.16 lakhs",
      color: "Military Black, Military Red, Standard Maroon",
    },
    {
      images: Classic350,
      names: "Classic 350",
      Mileage: "41.55kmpl",
      price: "1.93 lakhs - 2.25 Lakhs",
      color: "Halycon Black,Halycon Green",
    },
    {
      images: ContinentalGT,
      names: "Continental GT 650",
      Mileage: "27kmpl",
      price: "₹3.14 lakhs - ₹3.45 lakhs",
      color: "Rocker Red, Apex Grey, Dux Deluxe",
    },
    {
      images: Hunter,
      names: "Hunter",
      Mileage: "36.2kmpl",
      price: "₹1.5 lakhs - ₹1.75 lakhs",
      color:
        " Factory Black, Factory Silver,  Dapper Ash, Rebel Black, Rebel Red",
    },
    {
      images: Metero,
      names: "Metero 350 ",
      Mileage: "41.88kmpl",
      price: "₹2.04 lakhs - ₹3.85 lakhs",
      color: " Stellar Black, Stellar Blue, Stellar Red",
    },
    {
      images: Scram,
      names: "Scram 411",
      Mileage: "38.23kmpl",
      price: "₹2.03 lakhs - ₹2.12 lakhs",
      color: "Blazing Black, Skyline Blue, Graphite Red, Graphite Blue",
    },
    {
      images: Supermetero,
      names: "Super Metero",
      Mileage: "25kmpl",
      price: "₹3.54 lakhs - ₹3.85 lakhs",
      color: "Interstellar Green, Celestial Red, Astral Green, Astral Black",
    },
    {
      images: interceptor,
      names: "Interceptor 650",
      Mileage: "25kmpl",
      price: "2.98 lakhs - 3.31 lakhs",
      color: " Canyon Red, Barcelona Blue, Black Peral,",
    },
  ],
  Favourites: [],
  Index: 0,
  selectedtask: {},
};

const taskslice = createSlice({
  name: "taskslice",
  initialState,
  reducers: {
    Indexchange: (state, action) => {
      state.Index = action.payload;
    },
    pushfavourites: (state, action) => {
      state.Favourites.push(action.payload);
    },
    deletefavorites: (state, action) => {
      state.Favourites = state.Favourites.filter(
        (task, index) => task.names == action.payload
      );
    },
  },
});

export const { Indexchange, pushfavourites, deletefavorites } =
  taskslice.actions;

export default taskslice.reducer;
