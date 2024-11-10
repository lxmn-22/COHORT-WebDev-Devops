// Type, Interface

function isEven(num: number): boolean {
    if(num % 2 == 0) {
        return true
    } else {
        return false
    }
}
const n = isEven(22)
console.log(n);
// ++++++++++++++++++++++++++++++++++++++++++

interface User {
    firstName: string;
    lastName: string;
    email: string;
    age: number;
}
function isLegal(user: User) {
    if(user.age > 18) {
        return true
    } else {
        return false
    }
}