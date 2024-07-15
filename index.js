// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

// function saveInput() {
//   console.log("Button clicked!");
// }
// //instead of using onclick its better to use an add an event listener
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")
let titleEl = document.getElementById("title")
titleEl.innerHTML = "Leads Tracker"

// Push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function() {
  // Push the value from the inputEl into the myLeads array
   
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
  myLeads.push(inputEl.value);
  // Clear out the input field
  inputEl.value = "";

  // 2. Call the renderLeads() function when the input button is clicked
  renderLeads()
})

// 1. Wrap the code below in a renderLeads() function
function renderLeads() {
// 1. Create a variable, listItems, to hold all the HTML for the list items
// Assign it to an empty string to begin with
let listItems = ""

// Log out the items in the myLeads array using a for loop 
for (let i = 0; i < myLeads.length; i++) {
  // Wrap the lead in an anchor tag (<a>) inside the <li>
 // Can you make the link open in a new tab?
  // listItems += "<li><a href='" + myLeads[i] + "'target='_blank'>" + myLeads[i] + "</a></li>";
  //using template strings
  listItems += `
      <li>
        <a href='${myLeads[i]}'target='_blank'>
            ${myLeads[i]}
        </a>
      </li>
    `


  // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
  // listItems += "<li>" + myLeads[i] + "</li> "

  // Render the leads in the unordered list using ulEl.textContent
  // ulEl.innerHTML += "<li>" + myLeads[i] + "</li> "
}

// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems

// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked
// let box = document.getElementById("box");

// box.addEventListener("click", function() {
//   console.log("I want to open the box!")
// })

// Use .innerHTML to render a Buy! button inside the div container
}


// template strings/literals

const recipient = "James"
// Create a new variable, sender, and set its value to your name
const sender = "Joshua"

// Use your sender variable instead of "Per"
// Refactor the email string to use template strings
const email = `
    Hey ${recipient}! 
    How is it going? 
    Cheers ${sender}
`

console.log(email)
