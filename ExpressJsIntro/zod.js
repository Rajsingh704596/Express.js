
//$ Case-2 either we handle this manually (without zod)-
//export const PORT = isNaN(process.env.PORT)? 3000 : parseInt(process.env.PORT);        //(here isNaN is js method) if PORT is not a number then condition true default 3000 assign , else (e.g. string formate) so change into Integer formate using parseInt method

//! Validate Environment Variables in Express.js-

//! Zod Validation- 
//# It is a TypeScript-first schema declaration and validation library that allows us to define and validate the structure of our data easily.
//# Zod use for various validations in backend or frontend.  (package install-  npm i zod)

//$ Case-3 Validate Environment variables using Zod -     (npm i zod) package install
 import {z, ZodError} from 'zod';
//^ schema create -
const portSchema =z.coerce.number().min(1).max(65535).default(3000)       //here coerce method used change(transform) string into number if number in double cot ("3000")
export const PORT =portSchema.parse(process.env.PORT); //parse method PORT validate(check) based on Schema




// Todo not part of Port just give another example of Zod validation
//^ one example(age is greater than 18) of Zod for integer-

//
// schema create
const ageSchema = z.number().min(18).max(100).int();  // validation age must be number, then min value must be 18, then value is 100, then age is must integer
const userAge = 18;

//^ e.g-a
const parseUserAge= ageSchema.parse(userAge);           //parse means zod validate and also transform   // Inside parse method user input pass to check it's fullfil zodSchema or not , if it's pass so return that value , else throw zod error
// console.log(parseUserAge);
const {data, error, success}= ageSchema.safeParse(userAge);     //safeParse give o/p in object form so we direct destructure
// console.log(data, error, success);

//^(we have another way- e.g-b)
// try {
//     const parseUserAge =ageSchema.parse(userAge)     // parse method throw exception not error , so we use try catch method where error catch
//     console.log(parseUserAge);                        //success case
// } catch (error) {
//     //^ instanceof - it is a javaScript operator used to check if an object is an instance of a specific class or constructor.
//     if(error instanceof ZodError){
//         console.log(error.issues[0].message);      //Display error message only
      //    console.log(error.errors[0].message);   //orS
//     } else{
//         console.log("unexpected error:", error);
//     }
// }


//(In console we check like this-   node --watch ./zod.js)
// Restarting '.\\zod.js'
// 18
// Completed running '.\\zod.js'