/* write a function named 'processTeaOrder' that takes another function named 'makeTea' as a parameter and calls it with the argument 'earl grey'.
return the result of calling 'makeTea'.
*/

function makeTea(teaType){
    return `make tea: ${teaType}`;
}

function processTeaOrder(teaFunction){
    return teaFunction("earl grey");
}

console.log(processTeaOrder(makeTea));