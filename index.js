//chrome://extensions/

// Log out "Button clicked!" when the user clicks the "SAVE INPUT" button
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

// function saveInput() {
//   console.log("Button clicked!");
// }
// //instead of using onclick its better to use an add an event listener

//Truthy and falsy values
//Falsy values are values that are considered false when encountered in a boolean context
//Falsy values are: false, 0, "", null, undefined, NaN
//you can check a truthy or falsy value by using
// let trueOrFalse = Boolean("hello")//true
// console.log(trueOrFalse)
// console.log(  Boolean("")   ) //false
// console.log(  Boolean("0")  ) //true
// console.log(  Boolean(100)  ) //true
// console.log(  Boolean(null) ) //false
// console.log(  Boolean([0])  ) //true
// console.log(  Boolean(-0)   ) //false


let myLeads = []

// 1. Turn the myLeads string into an array
// 2. Push a new value to the array
// 3. Turn the array into a string again
// 4. Console.log the string using typeof to verify that it's a string

// myLeads = JSON.parse(myLeads)//to turn the string into an array
// myLeads.push("www.awesomelead.com")
// myLeads = JSON.stringify(myLeads)// to turn the array into a string
// console.log(typeof(myLeads))

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el")
let titleEl = document.getElementById("title")
titleEl.innerHTML = "Leads Tracker"

// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
//  localStorage.setItem("My Name", "Joshua")//to save a key-value pair
//  console.log(localStorage.getItem("My Name")) // to get a value from localStorage.getItem("My Name")
//  localStorage.clear()//to clear localStorage
// PS: both key and value need to be strings

// Get the leads from the localStorage - PS: JSON.parse()
// Store it in a variable, leadsFromLocalStorage
// Log out the variable

// 1. Store the delete button in a deleteBtn variable
const deleteBtn = document.getElementById("delete-btn")


const leadsFromLocalStorage =  JSON.parse(localStorage.getItem("myLeads"))
console.log(leadsFromLocalStorage)

// 1. Grab the SAVE TAB button and store it in a tabBtn variable
const tabBtn = document.getElementById("tab-btn")
console.log(tabBtn)

// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()
if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  //arguments-they are created outside a function
  render(myLeads)
}

// 2. Listen for clicks on tabBtn. Log Per's LinkedIn URL to the console
tabBtn.addEventListener("click", function() {
  // Grab the URL of the current tab!
  // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  // });

  chrome.tabs.query({active:true, currentWindow: true}, function(tabs) {
    // Save the url instead of logging it out
    // console.log(tabs[0].url)
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
  
})

// 1. Wrap the code below in a renderLeads() function
//we can call the paramater we pass to this anything
//parameter are created outside a function
function render(leads) {
  // 1. Create a variable, listItems, to hold all the HTML for the list items
  // Assign it to an empty string to begin with
  let listItems = ""
  
  // Log out the items in the myLeads array using a for loop 
  for (let i = 0; i < leads.length; i++) {
    // Wrap the lead in an anchor tag (<a>) inside the <li>
   // Can you make the link open in a new tab?
    // listItems += "<li><a href='" + myLeads[i] + "'target='_blank'>" + myLeads[i] + "</a></li>";
    //using template strings
    listItems += `
        <li>
          <a href='${leads[i]}'target='_blank'>
              ${leads[i]}
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

// 2. Listen for double clicks on the delete button (google it!)
deleteBtn.addEventListener("dblclick", function() {
  // 3. When clicked, clear localStorage, myLeads, and the DOM
  
  localStorage.clear()
  myLeads = []
  render(myLeads)
})



// Push the value "www.awesomelead.com" to myArray when the input button is clicked

inputBtn.addEventListener("click", function() {
  // Push the value from the inputEl into the myLeads array
   
    // instead of the hard-coded "www.awesomeleads.com" value
    // Google -> "get value from input field javascript"
  myLeads.push(inputEl.value);
  // Clear out the input field
  inputEl.value = "";
  // Save the myLeads array to localStorage 
    // PS: remember JSON.stringify()
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
    

  // 2. Call the renderLeads() function when the input button is clicked
  render(myLeads)

  // To verify that it works:
  console.log( localStorage.getItem("myLeads") )
})



// template strings/literals

// const recipient = "James"
// // Create a new variable, sender, and set its value to your name
// const sender = "Joshua"

// // Use your sender variable instead of "Per"
// // Refactor the email string to use template strings
// const email = `
//     Hey ${recipient}! 
//     How is it going? 
//     Cheers ${sender}
// `

// console.log(email)
