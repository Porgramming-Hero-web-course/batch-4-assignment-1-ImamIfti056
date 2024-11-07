{
    function validateKeys<T extends object>(object: T, keys: (keyof T)[]): boolean {
        for (let i = 0; i < keys.length; i++) {
            if (!(keys[i] in object)) {
                return false;
            }
        }
        return true;
    }

    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["name", "age"]));
}