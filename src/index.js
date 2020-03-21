
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if(!matrix) return [];
    let result = [];
    matrix.forEach((element, i) => {
        if (i % 2) element.reverse();
        element.forEach((item) => {
            result.push(item);
        });
    });
    return result;
}
