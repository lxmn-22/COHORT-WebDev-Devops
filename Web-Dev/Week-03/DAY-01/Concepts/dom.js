// const title = document.querySelector('h1');
// console.log(title.innerHTML);

// const firstTask = document.querySelector('h4');
// console.log(firstTask.innerHTML);

// const button = document.querySelector('button');
// console.log(button.innerHTML);

// const firstTask = document.querySelector('h4');
// firstTask.innerHTML = "1. Do not take class!";

// function deleteRandomTask() {
//     const element = document.querySelector('h4');
//     const parentElement = element.parentNode;
//     parentElement.removeChild(element);
// }

function addTask() {
    const inputValue = document.getElementById("inputId").value;
    const newTodoDivElement = document.createElement("div");
    newTodoDivElement.innerHTML = value;
    document.querySelector("body").appendChild(newTodoDivElement);
    // const textNode = document.createElement("div");
    // textNode.innerHTML = inputElement.value;
    // const parentElement1 = document.getElementById("todos");
    // parentElement1.appendChild(textNode);
}