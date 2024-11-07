{
    function removeDuplicates(arr: number[]): number[] {
        const newArray: number[] = [];
        arr.map((e: number) => {
            if (!newArray.includes(e)) {
                newArray.push(e);;
            }
        });

        return newArray;
    }

    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]))
}