# DOM Elements
    - Help us how to find and access HTML elements in an HTML page.
    - So, how to find the elements first. There are several ways listed:
    1. Finding HTML elements by "id".
    2. Finding HTML elements by "tag name".
    3. Finding HTML elements by "class name".

### 1: querySelector
    - returns the very first element within the document that matches the given selector.
    - Returns the element that matches with one of the specified CSS selectors, or a group of selectors.

### 2. querySelectorAll
    - Returns a static NodeList of elements that matches with one or a group of selectors.
    - If no element matches, an empty NodeList is returned.

### 3. getElementById
    - easiest way to find the HTML element in the DOM, by using the element id.
    Eg: id="inputId"
        const element = document.getElementById("inputId");
    NOTE: If element is found, method will return the element as an object. || otherwise, element will contain "null".

### 4. getElementByTagName
    - Eg: finds all <h4> tags.
        const element = document.getElementByTagName("h4");

### 5. getElementsByClassName
    - If we want to find all the HTML elements with the same class name. Then,
    Eg: class="intro"
        const element = document.getElementByClassName("intro");

## Updating Elements

### 1 .innerHTML
    - used to access and manipulate the content of the HTML elements.
    - Returns the HTML content of an element, including all tags.
    - Sets, replaces the entire HTML content of an element with the specified content.
    - Security: Using innerHTML to insert untrusted content can lead to cross-sit scripting(XSS) vulnerabilities.
    - Use "innerHTML" when we need to replace or manipulate the entire HTML structure of an element.

### 2 .textContent
    - used to access and manipulate the content of the HTML elements.
    - Returns, the text content of an element, excluding any HTML tags.
    - Sets, replaces the text content of an element with the specified text.
    - generally, faster than innerHTML, especially when dealing with large amounts of text.
    - Security: It's safer to use textContent or DOM manipulation methods like "createElement" and "appendChild" when inserting dynamic content.
    - Use "textContent" when we want to work with the plain text content of an element and avoid potential security risks.

### Deleting Elements

### 1. removeChild:
    - Removes a child element from its parent.
    Eg: let childNode = parentNode.removeChild(childNode);

### 2. onclick:
    - specifies JS function to be executed when an element is clicked.

# Adding Elements

### 1. createElement
    - returns a new Node with the element type.
    - It takes an HTML tag name as a parameter.
    Eg: let div = document.createElement('div');

### 2. appendChild
    - allows us to insert a node at the end of the list of child of nodes of a particular parent node.
    Eg: parentNode.appendChild(childNode);