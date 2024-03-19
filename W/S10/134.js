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
  airline: "BuutySniffAir",
  iataCode: "BX",
  bookings: [],
  book(fltNum, passN) {
    console.log(
      `${passN} booked seat on ${this.airline} flight ${this.iataCode}${fltNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${fltNum}`, passN });
  },
};
paraText("Printing object with pushed elemens");
console.log(butyAir);

paraText("Print Object with function");
butyAir.book("69", "Jina");
butyAir.book("69", "Mona");

paraText("Another Object and testing methods");
const pantyAir = {
  name: "PussyWings",
  iataCode: "PS",
  bookings: [],
};

// Create a new reusable function
const book = butyAir.book;
console.log(`
Type of object ${typeof book}
`);
// This will not work since this is undefined
// book(23, "ika");

subHead("Using call and apply methods");

// Using the call method
book.call(pantyAir, 99, "gina");
console.log(pantyAir);
book.call(butyAir, 57, "Lona");
console.log(butyAir);
