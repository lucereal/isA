export function isA<T>(x:any,z:Array<string>):boolean{

    function is(u:T): u is T {
        for(let e of z){
            if((u as any)[e] === undefined) return false;
        }
        return true;  
    }
    return is(x);
}

interface fish{
    color:string,
    age:5
}

let goldfish = {
    color: "gold",
    age: 44
}

console.log("is goldfish a fish? " + isA<fish>(goldfish,["color","age"]));

