
let array = [28, 43, -12, 30, 4, 0, 12]
console.log(addToZero(array));
console.log(addToZero([1, 4, 11, 2, 37, -4])); //should log True because 4 and -4 add to 0.
console.log(addToZero([0, 21, 33, 6, 0, -9])); //should log True because 0 and 0 add to 0.
console.log(addToZero([0, 1, 2, 3, 4, 5])); //should log False because no two numbers add to 0.

function addToZero(arr){

    let found = false;
    let i = 0;
    let original = [...arr];

    while (!found && i < arr.length){

        let checkFor = arr.splice(i,1)[0];

        if (arr.includes(-checkFor)) {
            found = true;
        }

        arr = [...original];
        i++;

    }

    return found;

}