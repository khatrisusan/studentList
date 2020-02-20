const modal = document.querySelector(".modal-background");
modal.addEventListener("click", () => {
    modal.classList.add("hide");
  });
window.addEventListener('DOMContentLoaded', (event) => {
    init();
});
function init(){
    fetchData();
}

function fetchData(){
fetch("student.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    data.forEach(showStudents);
  });

function showStudents(students) {
  console.log(students);
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);
  copy.querySelector(".name").textContent = students.fullname;
  copy.querySelector(".house").textContent = students.house;

  copy.querySelector("button").addEventListener("click", showStudents => {
    showDetails(students);
  });

  function showDetails(students) {
    console.log(students);

    modal.querySelector(".modal-name").textContent = students.fullname;
    modal.querySelector(".modal-house").textContent = students.house;

    modal.dataset.theme = students.house;
    modal.classList.remove("hide");

    //document.querySelector(#theme).addEventListener("change", changeTheme);
    // document.querySelector("tbody#student").append(copy);

    //document.querySelector(#theme).addEventListener("change", changeTheme);
  }

  document.querySelector("main").appendChild(copy);
}

// const modal = document.querySelector(".modal-content");
const btn = document.querySelectorAll("button");
const btnsArr = Array.from(btn);

btnsArr.forEach(function(e, index) {
  e.onclick = function() {
    modal_name.innerHTML = students[index].fullname;
    modal_house.innerHTML = students[index].house;
    document.querySelector(".modal_content").dataset.theme =
      students[index].house;
    modal.style.display = "block";
  };
});
}



/*
function fetchData() {

    fetch("student.json")
        .then(res => res.json())
        .then(student)
}

 function student(data) {
    const myArray = data;
    myArray.forEach(getStudent);

    //console.log(myArray);
}
function getStudent(data) {
    console.log(data);
    const clone = document.querySelector("template.one").content;
    const cloneData = clone.cloneNode("true");

    cloneData.querySelector(".name").textContent =
            data.fullname;
    cloneData.querySelector(".house").textContent =data.house;


    cloneData.querySelector("button").addEventListener("click", showStudents => {
        showDetails(data);
      });
    
      function showDetails(data) {
        console.log(data);
    
        modal.querySelector(".modal-name").textContent = students.fullname;
        modal.querySelector(".modal-description").textContent = students.house;
    
        modal.dataset.theme = students.house;
        modal.classList.remove("hide");
      }



    document.querySelector("main").appendChild(cloneData);
}
 */