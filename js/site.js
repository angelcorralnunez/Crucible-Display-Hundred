// get the start and end numbers from the page
// Entry point of application AKA Controller function
function getValues() {
    let startValue = document.getElementById('startValue').value; // fetch startValue = "0" from user/HTML
    let endValue = document.getElementById('endValue').value; // fetch endValue = "100" from user/HTML
// convert value from string to integer/value ex: startNumber/endNumber
    let startNumber = parseInt(startValue); 
    let endNumber = parseInt(endValue); 
// array created from startNumber/endNumber, values stored inside array numberArray
    let numberArray = generateNumbers(startNumber, endNumber);
// displaysNumbers displays numberArray values
    displayNumbers(numberArray);
}

// generate the range of numbers to display
// Business/logic function
function generateNumbers(start, end) {
// basketOfNumbers will accept/hold values from for loop
    let basketOfNumbers = [];
    // for loop starts at integer number; 
    // keep running as long as (it's less than or equal to endNumber); 
    // start at index number and add plus 1 each time 
    // until previous <= statement is no longer true
    for (let number = start; number <= end; number = number + 1) {
        number;
        basketOfNumbers.push(number); //[0, 2, 3,..., 100]
    }
// returns or passes back out values from basketOfNumbers
    return basketOfNumbers; // => [0, 2, 3,..., 100]
}

// placing the generated numbers  on the page AND bold coloring the even numbers
// View function
function displayNumbers(numbers) { //[0, 2, 3,..., 100] => length = example: 101 digits or spaces
    let results = '';
// for loop adds 1 to index number, then calculates if index numner is divisible by 2,
// if remainder equals "0" exactly, ifna match it applies the CSS class of "evenNumber" 
// coloring the even integers,else/otherwise it returns the (odd) integers with normal 
// table row styling. 
    for (let index = 0; index < numbers.length; index = index + 1) {
        let currentNumber = numbers[index];
        if (currentNumber % 2 == 0) {
            results = results + `<tr><td class="evenNumber">${currentNumber}</td></tr>`;
        } else {
        results = results + `<tr><td>${currentNumber}</td></tr>`;
        }
    }
// results = "<tr><td>10</tr></td>11<tr><td>12</tr></td>..."
// results are passed back into HTML ID "results" into table
    let tableBody = document.getElementById('results');
    tableBody.innerHTML = results;
}

