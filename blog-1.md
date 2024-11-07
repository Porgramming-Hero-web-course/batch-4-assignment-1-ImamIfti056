#The significance of union and intersection types in Typescript.

The union tool allow us more flexibility when choosing type of a parameter. For example, a variable may store a string or a number type value. We don't have to make multiple variables for this. We can use union tool which makes our code short and more flexible ensuring type safety.

let param1: number = 20;
let param2: string = '20';

By using union tool we can store both types in a single variable.
let param1: number|string = 20;
param1='20'

On the other hand, the intersection type allow us to make a type which satisfies multiple types.

interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: number;
  department: string;
}

type EmployeeDetails = Person & Employee;

In this example, the employeeDetails type must have all the properties of Person type and Employee type.
This tool is helpful in scenarios like mixing functionalities and merging of objects.




