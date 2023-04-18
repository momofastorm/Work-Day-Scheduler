// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//Get current day
var today = dayjs().format('MMMM DD, YYYY hh:mm a');
let store;

const getStorage = async () => {
  store = localStorage.hours ? JSON.parse(localStorage.hours) : [];
  store.forEach((task,i) => {
    textareas[i].value = task
  });
}

$("#currentDay").text(today);
var currentHour = dayjs().format('HH')

const hours = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM'];

hours.forEach((hour,i) => {
  let rowHour = i+9;
  main.innerHTML+=`
  <div class="row time-block ${rowHour<currentHour ? 'past' : rowHour>currentHour ? 'future' : 'present'}">
  <div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
  <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
    <i class="fas fa-save" aria-hidden="true"></i>
  </button>
</div>
  `;
});

const textareas = document.querySelectorAll('textarea');
getStorage();
 
 //listener for click events on the save button.
 $(".saveBtn").on("click", function () {
  store = [];

    textareas.forEach(area => {
      store.push(area.value);    
    });

    localStorage.hours = JSON.stringify(store);
 });
 



  // TODO:   
  // This code should use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? 
 // How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
