
const numbers = [20,10,5,40,50,80,90];

function sortAsc(numbers){
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
         if(numbers[j]> numbers[j+1]){
             const temp = numbers[j];
             numbers[j] = numbers[j+1];
             numbers[j+1] = temp;
         }    
        }
     }
    return numbers;     
}

console.log(sortAsc(numbers));