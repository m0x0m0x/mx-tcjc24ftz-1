"use strict";
/* 
134: The Call and Apply Methods 
- Regarding the "this" keyword 
*/
// === import zone ===
import { mainHead, subHead, paraText } from "../../utils/text.js";
// ======
mainHead("134: The Call and Apply Methods ");

subHead("Testing methods");
const butyAir = {
  airline: "Buuty",
  iataCode: "BX",
  bookings: [],
  book(fltNum, passN) {
    console.log(
      `${passN} booked seat on ${this.airline} flight ${this.iataCode}${this.fltNum}`
    );
  },
};
