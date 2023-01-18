import fs from "fs";
let textFileDataEncode = fs.readFileSync("test.txt", { encoding: "utf-8" });

/* Another way to read text file
// let textFileData = fs.readFileSync("test.txt");
// console.log(textFileData.toString());
console.log(textFileDataEncode); */

const emailAddRegExp = /(@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/g;
const domainRegExp = /@softwire\.com\b/gi;

console.log(textFileDataEncode.match(domainRegExp).length);

let emailAddressArray = textFileDataEncode.match(emailAddRegExp);
console.log(emailAddressArray);
const domainMap = new Map();

for (let i = 0; i < emailAddressArray.length; i++) {
    let domainCounter = 0;
    for (let j = 1; j < emailAddressArray.length; j++) {
        if (emailAddressArray[i] === emailAddressArray[j]) {
            domainCounter++;
        }
    }
    domainMap.set(emailAddressArray[i], domainCounter);
}

console.log(domainMap);
// var emailAddress = [];

// emailAddress = textFileData.match(emailAddRegExp);
// console.log(emailAddress);


