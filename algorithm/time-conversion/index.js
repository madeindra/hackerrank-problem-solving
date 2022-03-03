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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    let hour = `${s[0]}${s[1]}`;
    let min = `${s[3]}${s[4]}`;
    let sec = `${s[6]}${s[7]}`;
    let type = `${s[8]}${s[9]}`;
    
    if (type === 'AM' && hour === '12') {
        hour = '00';
    }
    
    if (type === 'PM' && hour !== '12') {
        hour = parseInt(hour) + 12;
    }
    
    return `${hour}:${min}:${sec}`;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
