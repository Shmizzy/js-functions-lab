

/*
Exercise 1: maxOfTwoNumbers

In this exercise, create a function named maxOfTwoNumbers. It should take two numbers as inputs and return the larger number. If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
  /*
Exercise 2: maxOfThree

Define a function, maxOfThree, it should accept three numbers and return the largest among them.

Complete Exercise 2 in the space below:
*/

const maxOfThree = (a,b,c) => {

    if(a > b && a > c){
        return a;
    }else if(b > a && b > c){
        return b;
    }else{
        return c;
    }

}

console.log('Exercise 2 Result:', maxOfThree(14,6,2));

/*
Exercise 3: Insert at the Beginning

Write a function named isCharAVowel that takes a single character as an argument. It should return true if the character is a vowel, and false otherwise.

Complete Exercise 3 in the space below:
*/

    const isCharAVowel = (myChar) => {

        const vowel = ['a','e','i','o','u'];

        for(let i = 0; i < vowel.length; i++){
            if(myChar === vowel[i]){
                return true;
            }
        }
        return false;
    }


console.log('Exercise 3 Result:', isCharAVowel('i'));

/*
Exercise 4: sumArray

Create a function called sumArray. It should take an array of numbers and return the total sum. For example, sumArray([2, 4, 5]) should return 11.

Complete Exercise 4 in the space below:
*/

    const sumArray = (arr) => {
        let sum = 0;
        
        for(let i = 0; i < arr.length; i++){
            sum += arr[i]
        }

        return sum;
    }

console.log('Exercise 4 Result:', sumArray([4,6,18,2]));

/*
Exercise 5: multiplyArray

Define a function called multiplyArray. It should take an array of numbers and return the product those numbers. For example, multiplyArray([2, 4, 5]); would return 40.

Complete Exercise 5 in the space below:
*/

const multiplyArray = (arr) => {
    let product = 1;
        
        for(let i = 0; i < arr.length; i++){
            product *= arr[i]
        }
        return product;
}

console.log('Exercise 5 Result:', multiplyArray([2,6,18,2]));

/*
Exercise 6: reverseString

Define a function called reverseString. It should take a string and return it with its characters in reverse order. For example, reverseString('rockstar'); would return the string "ratskcor".

Complete Exercise 6 in the space below:
*/

const reverseString = (text) => {

    let reverse = '';

    for(let i = text.length - 1; i >= 0;  i--){
        reverse += text[i];
    }
    return reverse;
}

console.log('Exercise 6 Result:', reverseString('Easy'));

/*
Exercise 7: longestStringInArray

Define a function called longestStringInArray. It should accept an array of strings and return the length of the longest string in the array.

Complete Exercise 7 in the space below:
*/

const longestStringInArray = (stringArr) => {

    let longest = 0;

    for(let i = 0; i < stringArr.length; i++){
        if(stringArr[i].length > longest){
            longest = stringArr[i].length;
        }
    }
    return longest;
}


console.log('Exercise 7 Result:', longestStringInArray(['jamie', 'ira', 'fabien', 'jonathen', 'kris']));

/*
Exercise 8: stringsLongerThan

Write a function called stringsLongerThan. It takes an array of strings and a number, returning all strings longer than the given number. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3) would return ['hello', 'morning'].

Complete Exercise 8 in the space below:
*/

const stringsLongerThan = (stringArr, myNum) =>{

    let outputArr = [];
    
    for(let i = 0; i < stringArr.length; i++){
        if(stringArr[i].length > myNum){
            outputArr.push(stringArr[i]);
        }
    }
    return outputArr;
}


console.log('Exercise 8 Result:', stringsLongerThan(['jamie', 'ira', 'fabien', 'jonathen', 'kris'], 5));