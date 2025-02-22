console.log("hello from javascript")
console.log(window)
console.log(window.outerHeight)
console.log(window.outerWidth)
console.log(navigator.userAgent)
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator

console.log(location.origin)
// https://developer.mozilla.org/en-US/docs/Web/API/Location

console.log(document.firstElementChild.firstChild) // the first element child gives the html document 
// the firstchild gives the first child of that element --> <head>
console.log(document.firstChild) // doctype 
console.log(document.firstElementChild.lastElementChild) // returns <body>

// ways to access an html document 
// by class name 
console.log(document.getElementsByClassName("container"))
// by id 
console.log(document.getElementById("one"))
// by tagname
console.log(document.getElementsByTagName("h1"))