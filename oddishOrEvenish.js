function oddishOrEvenish(number){
    var sum = 0;

    while(number > 0) {
        sum = sum + (number % 10);
        number = Math.floor(number/10);
    }

    if(sum % 2 == 0) {
        return "Even";
    }
    return "Odd";
}

console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));