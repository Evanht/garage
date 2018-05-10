// ======= FETCH CARS ========

// Step 2
// TODO Build a new .car card with data fetched from the API (HINT: Check index.html)

// Step 2.5
// TODO Select the .cars-list div and insert car cards above or under the existing card.
const insertCarIntoDom = (data) => {
  document.querySelector(".cars-list").insertAdjacentHTML(
    "beforeend",
    `<div class="car">
      <div class="car-image">
        <img src="https://www.directline.com/lib/img/banner-car.png" alt=""/>
      </div>
      <div class="car-info">
        <h4>${data.brand} - ${data.model}</h4>
        <p><strong>Owner:</strong>${data.owner}</p>
      </div>
    </div>`
  )
}

// Step 1
// TODO Fetch all cars from the API
const fetchCars = () => {
  fetch("https://wagon-garage-api.herokuapp.com/whipcentral/cars")
    .then(response => response.json())
    .then((data) => {
      data.forEach((car) => {
        insertCarIntoDom(car)
      })
    })
}

fetchCars()

// ======== CREATE CARS ===========

// Step 3
// TODO Listen to the click event on the form's submit button or the submit event on the form itself
// Step 3.5
// TODO Get inputs values and build a data object to be sent to the API.

// Step 4
// TODO When the promise of the POST request is solved, update the .cars-list


const formSubmit = document.querySelector(".car-form")
formSubmit.addEventListener("submit", (event) => {
  event.preventDefault()
  const maker = document.getElementById('make').value
  const modeler = document.getElementById("model").value
  const oner = document.getElementById('owner').value
  const newCar = {
    brand: maker,
    model: modeler,
    owner: oner
  }
  console.log(newCar)
  fetch("https://wagon-garage-api.herokuapp.com/whipcentral/cars", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newCar)
  })
    .then(response => response.json())
    .then(data => insertCarIntoDom(data))
})











// end
