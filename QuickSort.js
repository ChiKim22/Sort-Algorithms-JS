function quickSort(arr) {

    // 피벗 구하기 (랜덤)
    let pivot = Math.floor(Math.random() * arr.length);
    let left = [];
    let right = [];

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else  if(arr[i] > pivot){
            right.push(arr[i]);
        } else {
            pivot.push(arr[i]);
        }
    };

    return quickSort(left).concat(pivot, quickSort(right));

}

let value = quickSort([1, 6, 7, 8, 9, 3, 5, 4, 2]);

console.log(`Quick Sorted : ${value}`);
