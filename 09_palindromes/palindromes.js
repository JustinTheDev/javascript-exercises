const punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~/\s/g';
const palindromes = function (str) {
    let lowerString = str.toLowerCase();
    lowerString = lowerString.replace(/\s/g, '');
    let splitStr = lowerString.split("");
    noPunctuationArr = splitStr.filter(function(letter){
        return punctuation.indexOf(letter) === -1;
    });
    let originalNoPunc = noPunctuationArr.join("");
    let reverseArr = noPunctuationArr.reverse();
    joinArr = reverseArr.join("");
    if (originalNoPunc === joinArr)
    {
        return true;
    }
    else{
        return false;
    }
};
// Do not edit below this line
module.exports = palindromes;
