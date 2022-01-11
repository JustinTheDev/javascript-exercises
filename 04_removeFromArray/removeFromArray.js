const removeFromArray = function(arr, ...items) {
    let removeItems = Array.from(items);

    for (let i = 0; i<removeItems.length; i++)
    {
        let index = arr.indexOf(removeItems[i]);
        if(index !== -1)
        {
            arr.splice(index, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
