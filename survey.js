const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name ', (answer1) => {
  rl.question('What city do you live in? ', (answer2) => {
    rl.question('What do you love to do in your spare time? ', (answer3) => {
      rl.question('What is your favourite season ', (answer4) => {
        rl.question('What do love to do during that season?  ', (answer5) => {
          console.log(`Hey there, I'm ${answer1}, i live in ${answer2} and whenever i have some free time i love to ${answer3}. My favourite time of year is ${answer4} because i get to ${answer5}`);

          rl.close();
        })
      })
    })
  })
});