const accountId=144553
let accountEmail="nayakdilipkumar@gamail.com"
var accountPassword="12345"
accountCity="jaipur"
let accountState;

// accountId=2 not allowed

accountEmail="parabin@.com";
accountPassword="34221";
accountCity="donga"

console.log(accountId);
/*
prefer not to use var because of issue in block  
scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);