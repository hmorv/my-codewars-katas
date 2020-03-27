function isPangram(string){
    
    if (string.length < 26) {
        return false;
    }

    const AZCharsCodes = Array.from(
        {length: 26}, (v,k) => k+65
    );


    const stringCharCodes = string.split('').map(
        val =>  {return val.toUpperCase().charCodeAt(0)}
    );
    
    const intersection = AZCharsCodes.filter(
        val => stringCharCodes.includes(val)
    );
    
    return intersection.length === AZCharsCodes.length;
    
}