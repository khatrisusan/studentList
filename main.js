window.addEventListener('DOMContentLoaded', (event) => {
    init();
});
function init(){
    fetchData();
}
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
    const clone = document.querySelector("template").content;
    const cloneData = clone.cloneNode("true");

    cloneData.querySelector("#name").textContent =
            data.fullname;
            cloneData.querySelector("#house").textContent =
            data.house;

            document.querySelector("main").appendChild(cloneData);
}