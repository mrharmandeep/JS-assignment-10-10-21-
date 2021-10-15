// Q1. Write a function to get the sum of n natural numbers.

function addn(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Q2. write the function to check if the number is even or not by using only if else statement

function check(n) {
    if (n % 2 == 0) {
        console.log("the number is even.")
    }
    else {
        console.log("the number is odd.")
    }
}

// Q3. Write a function it check if the number is prime or not.

function check(n) {
    if (n == 1) return "neither prime nor composite";
    else if (n == 2) return "2 is a prime number.";
    else if (n < 1) return "enter a valid number."

    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return "the number is not prime number.";
        }
    }
    return "the number is prime number.";
}

// Q4. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using switch case only

function weekDay(n) {
    switch (n) {

        case 1:
            return "it's monday";
            break;
        case 2:
            return "it's tuesday";
            break;

        case 3:
            return "it's wednesday";
            break;

        case 4:
            return "it's thursday";
            break;

        case 5:
            return "it's friday";
            break;

        case 6:
            return "it's saturday";
            break;

        case 7:
            return "it's sunday";
            break;

        default:
            return "invalid";
            break;

    }
}

// Q5. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using If Else only.

function weekDay(n) {
    if (n < 1 || n > 7) {
        return "Invalid Input";
    }
    else {
        if (n == 1) {
            return "it's monday";
        }
        else {
            if (n == 2) {
                return "it's tuesday";
            }
            else {
                if (n == 3) {
                    return "it's wednesday";
                }
                else {
                    if (n == 4) {
                        return "it's thursday";
                    }
                    else {
                        if (n == 5) {
                            return "it's friday";
                        }
                        else {
                            if (n == 6) {
                                return "it's saturday";
                            }
                            else {
                                if (n == 7) {
                                    return "it's sunday";
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

//  Q6. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using ternary operator only.

function weekDay(n) {
    day = n == 1 ? "it's monday" : n == 2 ? "it's tuesday" : n == 3 ? "it's wednesday" : n == 4 ? "it's thursday" : n == 5 ? "it's friday" : n == 6 ? "it's saturday" : n == 7 ? "it's sunday" : "invalid input";
    return day;

}

//   Q7. WAF to search an element in the array?

var arr = [2, 5, 3, 565, 3]

function check(n) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == n) {
            return true;
        }
    }
    return false;
}

//    Q8. WAF to find the max in the array?

var arr = [1, 35, 42, 2, 5, 38, 62];

var max = arr[0];

for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log(max)

//    Q9. WAF to find the min in the array?

var arr = [1, 35, 42, 2, 5, 38, 62];

var min = arr[0];

for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }

}
console.log(min);

//   Q10. WAF to find the factorial of n

function fact(n) {
    if (n < 0) {
        console.log('Error!');
    }

    else if (n == 0) {
        console.log('The factorial of 0 is 1.');
    }

    else {
        let fact = 1;
        for (i = 1; i <= n; i++) {
            fact *= i;
        }
        console.log('The factorial is:', fact);
    }
}

//   Q11. WAF to reverse an array.

function reverse(arr) {
    let newArr = [];
    for (i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}

//   Q12. WAF to reverse a string.

function reversestr(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    console.log(newStr);
}

//   Q13. WAF to check if the number is a palindrome or not.








