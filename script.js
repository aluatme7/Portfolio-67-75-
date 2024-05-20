let a = [1, 9, 7, -2, 5, 6];

for (let j = 0; j < a.length - 1; j++) {
    let min = a[j];
    let minIndex = j;
    for (let i = j; i < a.length; i++) {
        if (min > a[i]) {
            min = a[i];
            minIndex = i;
        }
    }
    let temp = a[j];
    a[j] = a[minIndex];
    a[minIndex] = temp;
}

console.log(a);