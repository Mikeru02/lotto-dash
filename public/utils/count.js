export default function countMatchNumbers(array1, array2) {
    let count = 0;

    for (let num of array1) {
        if (array2.includes(num)){
            count++;
        }
    }

    return count;
}