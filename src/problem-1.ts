{
    function sumArray(arr: number[]): number {
        let sum = 0;
        arr.forEach((e: number) => {
            sum += e;
        })
        return sum;
    }

    console.log(sumArray([1, 2, 3, 4, 5]));
}