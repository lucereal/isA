# isA

check if an object is a certain type

```
isA<T>(x: any, z: Array<string>): boolean
```

- T: typescript interface
- x: object to be checked against interface
- z: Array of strings that should be property names in the object
- return: true if `x is a T`, that is if x has all the properties listen in z

example

```
import { isA } from 'isa';

interface fish{
    color:string,
    age:5
}

let goldfish = {
    color: "gold",
    age: 44
}

console.log("is goldfish a fish? " + isA<fish>(goldfish, ["color", "age"]));
//return true

console.log("is goldfish a fish? " + isA<fish>(goldfish, ["color"]));
//return true

console.log("is goldfish a fish? " + isA<fish>(goldfish, ["color", "name"]));
//return false
```

