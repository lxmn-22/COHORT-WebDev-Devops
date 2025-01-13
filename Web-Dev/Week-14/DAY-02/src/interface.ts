// Interface in Typescript
interface User {
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
};

const result = sumOfAge({ name: "Laxman", age: 28 }, { name: "Himanshu", age: 22 });
console.log(result);

type updateProps = Pick<User, "name" | "age" | "email">
// "Pick" allows us to create a new type by selecting a set of properties (keys) from an existing type(Type).

function updateUser(updatedProps: updateProps) {
    // hit the db to update the user.
}

// "Partial" makes all properties of a type optional, creating a type with the same properties, but each marked as optional.
type updatePropsOptional = Partial<updateProps>

function updateUser1(updateProps: updatePropsOptional) {
    // hit the db to update the user.
}

function sumOfAge(user1: User, user2: User): number {
    return user1.age + user2.age;
}

// "Record" & "Map"
type Users = Record<string, User>;

const users: Users = {
    "abc123": { id: "abc123", name: "Captain"},
    "xyz789": { id: "xyz789", name: "Captain"}
};
console.log(users["abc123"]);

// "Map"
const usersMap = new Map<string, User>();

// Add users to the map using .set.
usersMap.set("abcd123", { id: "abcd123", name: "Laxman"});
usersMap.set("xyz1234", { id: "xyz1234", name: "Lucy"});
console.log(usersMap.get("abcd123"));
