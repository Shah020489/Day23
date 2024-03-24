function divideNumberAndFindReminder(x: number, y:number):Object {
    let myobject={
        reminder:x%y,
        quotient:x/y
    }
    return myobject;

}

console.log(divideNumberAndFindReminder(15, 3));