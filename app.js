
const frinds = ["তানভীর","শামিম","জসিম","তাওহিদ","আনিকাি","জসিম"];

const binarySearch = (exampleArray,target) =>{
    let start = 0;
    let end = exampleArray.length - 1;

    while (start <= end) {
        let med = Math.floor((start+end) /2);
        if(exampleArray[med] === target){
            console.log(`তোমার নাম্বার পজিসন হলো ${med}`)
            return med
        }
        if(exampleArray[med]<target){
            start = med + 1
        }
        if(exampleArray[med]>target){
            end = med -1
        }
       
    }
    return -1;
}

const index = binarySearch([1,2,3,5,7,8,10,13,16,18,20,23,25,28,29,30,37,38,40,45],10);

console.log(index);