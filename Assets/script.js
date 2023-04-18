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
 




