// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

  var h = 50;
  var q = 25;
  var d = 10;
  var n = 5;
  var p = 1;
  var fifty, twenty, ten, five, one;
  var fif, tw, te, fi, on;
  var array1, array2, array3, array4, array5;
  var array = [];
  var finish;
  var poor = new Object();
  var rich = {
    error:'You are rich, my friend! We don\'t have so much coins for exchange'};
  //function makeExchange(currency) {

if (currency >= 10000){
  //return {error: "You are rich, my friend! We don't have so much coins for exchange"}
  return rich;
}
if(currency <= 0){
   return poor;
}
 if(0 < currency < 10000){

fifty = currency % h;
fif = (currency - fifty)/h;
twenty = fifty % q;
tw = (fifty - twenty)/q;
ten = twenty % d;
te = (twenty - ten)/d;
five = ten % n;
fi = (ten - five)/n;
one = five / p;
}
//H, Q, D, N, P
//50, 25, 10, 5, 1

// if (fif > 0)
// {array.push('\"H\":'+fif)}
// if (tw > 0)
// {array.push('\"Q\":'+tw)}
// if (te > 0)
// {array.push('\"D\":'+te)}
// if (fi > 0)
// {array.push('\"N\":'+fi)}
// if (one > 0)
// {array.push('\"P\":'+one)}


// console.log(array);
// console.log(array.join());
// finish = ("\{" + array.join() + "\}");
// console.log(finish);
var change = {
  "H" : fif,
  "Q" : tw,
  "D" : te,
  "N" : fi,
  "P" : one
};
console.log(change);

if (fif == 0){delete change["H"]};
if (tw == 0){delete change["Q"]};
if (te == 0){delete change["D"]};
if (fi == 0){delete change["N"]};
if (one == 0){delete change["P"]};
console.log(change);
//console.log("\{"+array1+","+array2+","+array3+","+array4+","+array5+"\}");

//}

return change;
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
}
