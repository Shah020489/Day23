"use strict";
function divideNumberAndFindReminder(x, y) {
    let myobject = {
        reminder: x % y,
        quotient: x / y
    };
    return myobject;
}
console.log(divideNumberAndFindReminder(15, 3));
