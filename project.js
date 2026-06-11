function fibs(n) {
    const result = [];

    for (let i = 0; i < n; i++) {
        if (i === 0) {
            result.push(0);
        } else if (i === 1) {
            result.push(1);
        } else {
            result.push(result[i - 1] + result[i - 2]);
        }
    }

    return result;
}

function fibsRec(n) {
    if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        const arr = fibsRec(n - 1);
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        return arr;
    }
}

function merge(left, right) {
    const result = [];
    let i = 0,
        j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    while (i < left.length) {
        result.push(left[i++]);
    }

    while (j < right.length) {
        result.push(right[j++]);
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length === 0) {
        return [];
    } else if (arr.length === 1) {
        return arr;
    } else {
        const low = 0;
        const high = arr.length - 1;
        const mid = Math.ceil(low + (high - low) / 2);

        const leftHalf = mergeSort(arr.slice(low, mid));
        const rightHalf = mergeSort(arr.slice(mid));
        return merge(leftHalf, rightHalf);
    }
}
