// linear_search

function linearSearch(list, target) {
    //  returns the index position of the target if found, else returns none. 

    for(let i = 0; i < list.length; i++ ){
        if (list[i] === target) {
            return i
        }
    }
    return none
}

function binarySearch(list, target) {
    //
    let first = 0
    let last = list.length - 1

    while (first <= last) {
        let midpoint = Math.floor((first + last) / 2)
        if (list[midpoint] === target) {
            return midpoint;
        } else if (list[midpoit] < target){
            first = midpoint + 1;

        }else {
            last = midpoint - 1;
        }
    }
    return none
}

function recursiveBinarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end){
        return false;
    } 

    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        return recursiveBinarySearch(arr, target, start, mid - 1);
    } else {
        return recursiveBinarySearch(arr, target, mid + 1, end);
    }
}