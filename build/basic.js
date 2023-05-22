"use strict";
//== BASICS ==//
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * (1) x is a string, b/c we’ve initialized it
 */
let x = "hello world";
/**
 * (2) reassignment is fine
 */
x = "hello mars";
/**
 * (3) but if we try to change type
 */
x = 42; // 🚨 ERROR : Type 'number' is not assignable to type 'string'
/**
 * (4) let's look at const. The type is literally 'hello world'
 */
const y = "hello world";
/**
 * This is called a 'string literal type'. y can never be reassigned since it's a const,
 * so we can regard it as only ever holding a value that's literally the string 'hello world'
 * and no other possible value
 */
/**
 * (5) sometimes we need to declare a variable w/o initializing it
 */
let z;
z = 41;
z = "abc"; // (6) oh no! This isn't good
/**
 * If we look at the type of z, it's `any`. This is the most flexible type
 * in TypeScript (think of it like a JavaScript `let`)
 */
/**
 * (7) we could improve this situation by providing a type annotation
 * when we declare our variable
 */
let zz;
zz = 41;
zz = "abc"; // 🚨 ERROR : Type 'string' is not assignable to type 'number'
//== SIMPLE ARRAYS ==//
/**
 * (8) simple array types can be expressed using []
 */
let aa = [];
aa.push(33);
aa.push("abc"); // 🚨 ERROR : Argument of type 'string' is not assignable to parameter of type 'number'
/**
 * (9) we can even define a tuple, which has a fixed length
 */
let bb = [
    123,
    "Fake Street",
    "Nowhere, USA",
    10110,
];
bb = [1, 2, 3]; // 🚨 ERROR : Type 'number' is not assignable to type 'string'
/**
 * (10) Tuple values often require type annotations (  : [number, number] )
 */
const xx = [32, 31]; // number[];
const yy = [32, 31];
//== OBJECTS ==//
/**
 * (11) object types can be expressed using {} and property names
 */
let cc;
cc = {
    streetName: "Fake Street",
    houseNumber: 123,
};
cc = {
    // 🚨 ERROR : Property 'streetName' is missing in type '{ houseNumber: number; }' but required in type '{ houseNumber: number; streetName: string; }'
    houseNumber: 33,
};
/**
 * (12) You can use the optional operator (?) to
 * indicate that something may or may not be there
 */
let dd;
dd = {
    houseNumber: 33,
};
// and refer to it by name
let ee = { houseNumber: 33 };
let contactInfo = Math.random() > 0.5
    ? {
        // we can assign it to a HasPhoneNumber
        name: "Mike",
        phone: 3215551212,
    }
    : {
        // or a HasEmail
        name: "Mike",
        email: "mike@example.com",
    };
contactInfo.name; // NOTE: we can only access the .name property  (the stuff HasPhoneNumber and HasEmail have in common)
/**
 * (15) Intersection types
 */
let otherContactInfo = {
    // we _must_ initialize it to a shape that's asssignable to HasEmail _and_ HasPhoneNumber
    name: "Mike",
    email: "mike@example.com",
    phone: 3215551212,
};
otherContactInfo.name; // NOTE: we can access anything on _either_ type
otherContactInfo.email;
otherContactInfo.phone;
exports.default = {};
