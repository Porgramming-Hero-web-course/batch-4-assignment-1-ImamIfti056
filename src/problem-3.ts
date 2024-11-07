{
    function countWordOccurrences(sentence: string, word: string): number {
        let count: number = 0;
        const words: string[] = sentence.toLowerCase().split(" ");
        words.map((w: string) => {
            if (w.includes(word.toLowerCase())) {
                count++;
            }
        })
        return count;
    }

    console.log(countWordOccurrences("I love typescript", "TypescrIpt"))
}

