function call(func) {
 func();
}

function callTwice(func) {
  func();
  func();
} 
  

function callXTimes(func, x) {
  for ( let i=0; i<x; i++)
  func();
}

function returnFromFunc(func) {
  return func();
}

function modifyString(str, func) {
  return func(str);
}

function modifyNumber(num, func) {
  return func(num);
}

function modifyAnything(str, func) {
  return func(str);
}

function twoFuncs(func1, func2) {
  return func2(func1())
}

function twoValues(str, num, func) {
  return func(str,num);
}

function twoValuesRTL(str, num, func) {
  return func(num,str)
}


module.exports = {
  call,
  callTwice,
  callXTimes,
  returnFromFunc,
  modifyString,
  modifyNumber,
  modifyAnything,
  twoFuncs,
  twoValues,
  twoValuesRTL,
}