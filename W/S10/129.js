"use strict";
/* 
129: Default Parameters 
*/
// === import zone ===
import { mainHead, subHead, paraText } from "../../utils/text.js";
// ======
mainHead("129: Default Parameters ");

// Starting with making booking function
subHead("Section start - Using Airport Theme");

const creatBooking = function (flightNum, numPass, price) {
  const booking = {
    flightNum,
    numPass,
    price,
  };
  console.log(booking);
};
