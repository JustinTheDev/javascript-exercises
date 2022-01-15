const add = function(a,b) {
  return a + b;

};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {

  let total = 0;
  for(let i = 0; i<array.length; i++)
  {
    total += array[i];
  }
	return total;
};

const multiply = function(array) {
  if(array.length < 1){
    return 0;
  }
  let total = 1;
  for(let i =0; i< array.length; i++)
  {
    total *= array[i];
  }
  return total;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(a) {
	let answer = 1;
  if(a===0 || a===1)
  {
    return answer;
  }else{
    for (let i =a; i>=1; i--)
    {
      answer = answer*i;
    }
    return answer;
  }
};
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
