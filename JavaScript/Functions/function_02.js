/* create a function named 'teaOrder' that takes one parameter, 'teaType'. Inside this function, create another function named 'confirmOrder' that returns a message 'order confirmed for chai'.
call 'confirmOrder' from within 'orderTea' and return the result.
*/

function teaOrder (teaType) {
    function confirmOrder () {
        return `Order confirmed for ${teaType}`;
    }

    return confirmOrder();
}

console.log(teaOrder("chai"));