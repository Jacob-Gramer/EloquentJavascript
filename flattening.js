const flatten = (array) => {
    let result = array.reduce((memo, group) => memo.concat(group))
    return result;
}

let arrays = [[1,2,3], [4,5], [6]];

console.log(flatten(arrays));