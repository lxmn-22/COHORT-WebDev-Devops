// Try-Catch errors in JS.

function getLength(name) {
    return name.length;
}

try {
    // const ans = getLength("Laxman");
    const ans = getLength();
    console.log(ans);   
} catch(e) {
    console.log(e);
}

// console.log("Hello, There!");