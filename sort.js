
const numbers = [23, 54, 12, 8, 45, 90, 2];

// [23, 12, 8, 45, 54, 2, 90];
// [12, 8, 23, 45, 2, 54, 90]
// [8, 12, 23, 2, 45, 54, 90]
// [8, 12, 2, 23, 45, 54, 90]
// [8, 2, 12, 23, 2, 45, 54, 90]
// [2, 8, 12, 23, 2, 45, 54, 90]

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

function sortDsc(numbers){
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
         if(numbers[j]< numbers[j+1]){
             const temp = numbers[j];
             numbers[j] = numbers[j+1];
             numbers[j+1] = temp;
         }    
        }
     }
    return numbers;      
}

// console.log(sortAsc(numbers));
// console.log(sortDsc(numbers));
