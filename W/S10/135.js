"use strict";
/* 
135: The Bing Method
- Continunation from 134.js , when learning about 
this alternatives , previous was, book.call and book.apply
*/
// === import zone ===
import { mainHead, subHead, paraText } from "../../utils/text.js";
import { armpitAir, book, butyAir, pantyAir } from "../S10/134.js";
// ======
mainHead("135: The Bind Method");

// Bind doenst call function, return a new function ,
//where this is bound , this is set to whatever passed into bind

subHead("Using Bind Method");
paraText("Calling from 134.js");
console.log(butyAir, pantyAir, armpitAir);

// Here Binding is being done
const book2 = book.bind(pantyAir);
book2(999, "bokda");
