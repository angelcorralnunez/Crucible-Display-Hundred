// get the start and end numbers from the page
// Entry point of application AKA Controller function
function getValues() {
    let startValue = document.getElementById('startValue').value; // startValue = "0"
    let endValue = document.getElementById('endValue').value;

    let startNumber = parseInt(startValue); // example: startNumber = 0
    let endNumber = parseInt(endValue); // example: endNumber = 0

// example: array[start = 0, end = 100]
    let numberArray = generateNumbers(startNumber, endNumber);
    displayNumbers(numberArray);
}

// generate the range of numbers to display
// Business/logic function
function generateNumbers(start, end) {
    let basketOfNumbers = [];
// start at integer number; 
// keep running as long as (it's less than or equal to 100); 
// start at index number and add plus 1 each time 
// until previous <= statement is no longer true
    for (let number = start; number <= end; number = number + 1) {
        number;
        basketOfNumbers.push(number); //[0, 2, 3,..., 100]
    }
    return basketOfNumbers; // => [0, 2, 3,..., 100]
}

// placing the generated numbers  on the page AND bolding the even numbers
// View function
function displayNumbers(numbers) { //[0, 2, 3,..., 100] => length = example: 101 digits or spaces
    let results = '';
    for (let index = 0; index < numbers.length; index = index + 1) {
// start at 0.... as long as number < 101.... keep looping, then add 1
        let currentNumber = numbers[index]; 
        results = results + "<tr><td>" + currentNumber + "</tr></td>";
// results = "<tr><td>10</tr></td>11<tr><td>12</tr></td>..."
    }
    let tableBody = document.getElementById('results');
    tableBody.innerHTML = results;
}

