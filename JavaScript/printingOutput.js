// there are various methods used to print the output on the console

// most commonly used is -
console.log("hello")

// another method which is less used but varies on the utilities -
process.stdout.write("hello")
// doesn't give a new line 
process.stdout.write("hello2")
console.log()

console.table({name: "vaidika"})
console.warn("this is a warning")