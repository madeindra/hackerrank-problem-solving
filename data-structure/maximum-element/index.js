'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'getMax' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts STRING_ARRAY operations as parameter.
 */

function getMax(operations) {
    const stack = [];
    const result = [];
    
    let maxValue = 0;
    
    for (let i = 0; i < operations.length; i++) {
        let [first, second] = operations[i].split(' ');
        
        if (first === '1') {
            second = Number(second);
            
            stack.unshift(second);
            
            if (maxValue < second) {
                maxValue = second;
            }
        } else if (first === '2') {
            stack.shift();
            
            if (stack.length === 0) {
                maxValue = 0
            } else if (stack.length === 1) {
                maxValue = stack[0];
            } else {
                maxValue = Math.max.apply(null, stack);    
            }
        } else {
            result.push(maxValue);
        }
    }
    
    return result;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let ops = [];

    for (let i = 0; i < n; i++) {
        const opsItem = readLine();
        ops.push(opsItem);
    }

    const res = getMax(ops);

    ws.write(res.join('\n') + '\n');

    ws.end();
}
