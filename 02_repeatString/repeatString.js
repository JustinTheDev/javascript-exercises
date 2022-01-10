const repeatString = function(submitString, numOfTimes) {
    let returnString = "";
    for(let i =0; i<numOfTimes; i++)
    {
        returnString += submitString;
    }
    if(numOfTimes < 0)
    {
        return "ERROR";
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
