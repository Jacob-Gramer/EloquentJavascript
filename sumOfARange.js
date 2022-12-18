const range = (start, end, step = 1) => {
    let range = [];
    for (let i=start; i<=end; i+=step) {
        range.push(i);
    }
    return range;
}

const sum = (array) => {
    let total = 0;
    for (let i=0; i<array.length; i++) {
        total += array[i];
    }
    return total;
}

console.log(sum(range(0,33)));