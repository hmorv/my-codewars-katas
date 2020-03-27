function findMissingLetter(array) {
    currentCharCode = array[0].charCodeAt(0);

    for (let i = 0; i < array.length; i++) {
        if (currentCharCode !== array[i].charCodeAt(0)) {
            return String.fromCharCode(currentCharCode);
        }

        currentCharCode++;
    }
}