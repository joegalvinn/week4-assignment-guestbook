//DOM manipulation
//select the form
//select the feedback container

//FORM
//we need an event to submit the form data

//1-the event handler
//prevent the default behaviour
//a FormData object template
//get the form values to insert them into the FormData object

//fetch the CREATE endpoint to send the formValues to the server
//!when you finish your assignment, make sure you replace the local host url with your deployed url (https://week4-assignment-guestbook-x1c3.onrender.com)

// !fetch("localhost-url/endpoint"),
// !{
// !   method:
// !   headers:
// !   body:
// !}

//2-the event listener --> submit

//FEEDBACK CONTAINER
//fetch the READ endpoint to have access to the data
//fetch the url
//parse the response into json
//wrangle date if necessary

//I need to display the data on the page
databaseData.forEach((item) => {
  //i need to create DOM elecments to contain the data
  //one DOM element (h1, h1, p, ) per piece of data (username, date, comment) --> for example, if i am getting username and a comment from the database i need TWO DOM elements, one for username, and one for one for comment
  //then i need to assign the values to the text content property
  //for example, the text content property for my h1 will have a value of the username from my database date
  //i need to individually append those elements to the DOM
});
//I need to create DOM elements to contain the data
