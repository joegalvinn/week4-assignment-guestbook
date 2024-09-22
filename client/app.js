//DOM manipulation
//select the form
//select the feedback container
const formElement = document.getElementById("form");
const reviewContainer = document.getElementById("reviewContainer");
const renderURL = "https://week4-assignment-guestbook-x1c3.onrender.com/";
const openPopupButton = document.getElementById("btn-open-popup");
const closePopupButton = document.getElementById("btn-close-popup");

function togglePopup() {
  const overlay = document.getElementById("popupOverlay");
  overlay.classList.toggle("show");
}

openPopupButton.addEventListener("click", togglePopup);
closePopupButton.addEventListener("click", togglePopup);

//FORM
//we need an event to submit the form data
formElement.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(formElement);
  const formObject = Object.fromEntries(formData);

  const response = await fetch("http://localhost:8080/add-data", {
    method: "POST",
    // "http://localhost:8080/add-data"
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formObject),
  });
  const newReview = await response.json();
  await fetchReviews();
  formElement.reset();
  togglePopup();
});

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
async function fetchReviews() {
  const response = await fetch("http://localhost:8080/data");
  // "http://localhost:8080/data"
  const reviews = await response.json();
  reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
  reviewContainer.innerHTML = "";
  reviews.forEach((review) => {
    addReviewToPage(review);
  });
}

function addReviewToPage(review) {
  const reviewElement = document.createElement("p");
  const date = new Date(review.date);
  const formattedDate = date.toLocaleString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  reviewElement.innerHTML = `
  name: ${review.name} <br> 
  date: ${formattedDate} <br>
  review: ${review.review} <br>
  star: ${review.star} <br>
  `;
  reviewContainer.appendChild(reviewElement);
}

fetchReviews();
//FEEDBACK CONTAINER
//fetch the READ endpoint to have access to the data
//fetch the url
//parse the response into json
//wrangle date if necessary

//I need to display the data on the page
// databaseData.forEach((item) => {
//i need to create DOM elecments to contain the data
//one DOM element (h1, h1, p, ) per piece of data (username, date, comment) --> for example, if i am getting username and a comment from the database i need TWO DOM elements, one for username, and one for one for comment
//then i need to assign the values to the text content property
//for example, the text content property for my h1 will have a value of the username from my database date
//i need to individually append those elements to the DOM
// });
//I need to create DOM elements to contain the data
