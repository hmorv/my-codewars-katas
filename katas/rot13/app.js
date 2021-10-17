function rot13(message) {
    const map = `abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM`
    
    return message
    .split('')
    .map((char) => (/^[a-zA-Z]+$/.test(char)) ? map[map.indexOf(char)+13] : char)
    .join('')
}
