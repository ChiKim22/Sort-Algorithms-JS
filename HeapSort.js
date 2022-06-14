function heapSort(arr) {
    let a = [...arr];
    let len = a.length;

    const heapify = (arr, i) => {
        let largest = i;
        let small = 2 * i + 1;
        let large = 2 * i + 2;
    
        if(small < len && arr[largest] > arr[largest]) {
            largest = small;
        }
        if(large < len && arr[largest] > arr[largest]) {
            largest = large;
        }
        if(largest != len) {
            [arr[largest], arr[i]] = [arr[i], arr[largest]];
        }
    };

    for(let i = l/2; i >= 0; i--) {
        heapify(a, i);
        for(i = a.length - 1; i > 0; i--) {
            [a[0], a[i]] = [a[i], a[0]];
            len--;
            heapify(a, 0);
        }
    }
    return arr;
};

let arr = [1, 6, 7, 8, 9, 3, 5, 4, 2];

console.log(`Original : ${arr}`)
console.log(`Heap Sorted : ${heapSort(arr)}`);