const {createReadStream} = require('fs');

const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 });

stream.on('data', (result) => {
    let i = 1;
    console.log(`${result.utf8Slice(), i++}`);
});

// const { createWriteStream } = require('fs');

// const write = createWriteStream('./content/big.txt');

// for (let i = 0; i < 10000; i++) {
//     write.write('Hello World\n');
// };