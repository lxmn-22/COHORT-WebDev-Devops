const parentElement = document.getElementById("parent");
const childElement = document.getElementById("child");
parentElement.removeChild(childElement);


// onclick attribute

function removeParagraph() {
    const paragraph = document.getElementById("paragraph");
    paragraph.parentNode.removeChild(paragraph);
}