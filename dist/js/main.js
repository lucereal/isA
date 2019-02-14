"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isA(x, z) {
    function is(u) {
        for (let e of z) {
            if (u[e] === undefined)
                return false;
        }
        return true;
    }
    return is(x);
}
exports.isA = isA;
let goldfish = {
    color: "gold",
    age: 44
};
console.log("is goldfish a fish? " + isA(goldfish, ["color", "age"]));
//# sourceMappingURL=main.js.map