function vaporcode(string) {
    return string
    .replace(/\s+/g, '')
    .toUpperCase()
    .split('')
    .join(',')
    .replace(/,/g, '  ')
    
}
const test = "Esto es una prueba";

console.log(vaporcode(test));


// function vaporcode(string) {
//     return string
//     .replace(/\s+/g, '')
//     .toUpperCase()
//     .split('')
//     //.map(char => `${' '+char+' '}`)
//     .join(',')
//     .replace(/,/g, '  ')
//     console.log(salida)
    
// }