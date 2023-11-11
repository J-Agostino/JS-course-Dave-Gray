// Modules
// "use strict;" it's defaul using modules
/* IMPORT
import playGuitar from "./guitars.js";
import { shredding as shred, plucking as fingerpick } from "./guitars.js";

console.log(playGuitar())
console.log(shred())
console.log(fingerpick())
*/

/*
import * as Guitars from "./guitars.js" // by doing this import, the default function now it's summoned as "default()" OR remove the default attrivute from the main .js and call it as you did there.

console.log(Guitars.default())
console.log(Guitars.shredding())
console.log(Guitars.plucking())
*/

import User from "./user.js";
const me = new User("myemail@email.com", "Juan")
console.log(me);
console.log(me.greeting());

// search: babel JavaScript + boundeler like webpack or parceler