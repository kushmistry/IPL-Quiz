var readlineSync = require('readline-sync');

const chalk = require('chalk');

var score = 0;

console.log(chalk.bold.yellowBright("###") + chalk.blueBright("Wlcome to kush's quiz on IPL") + chalk.bold.yellowBright("###"));

var userName = readlineSync.question(chalk.blueBright("What's your name? "));

console.log(chalk.blueBright("Welcome " + chalk.red(userName)));

function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.yellowBright(question));

  if (userAnswer === answer) {
    console.log(chalk.blueBright(" your answered: " + userAnswer + "\n Right answer"));
    score++;
  } else {
    console.log(chalk.blueBright(" your answered: " + userAnswer + "\n Wrong answer"));
  }

  console.log(chalk.blueBright(" your current score : " + chalk.yellowBright(score)));

  console.log(chalk.bold.blueBright("\n---------------------------\n"));
}

var questions = [
  {
    question : chalk.bold.red("[1] Which batsman has score the most number of hunderd in the IPL?") + `\n a.chris gayle\n b.virat kohli\n c.david warner\n Ans.`,
    answer : "a"
  },
  {
    question :chalk.bold.red("[2] Who has scored the most fifties in the tournament?") + `\n a.Shikhar Dhawan\n b.Virat Kohli\n c.David Warner\n Ans.`,
    answer : "c"
  } ,
  {
    question : chalk.bold.red("[3] Who won the 'Man of the Match' award in the IPL 2008 final?") + `\n a.Yusuf Pathan\n b.Sohail Tanvir\n c.Shane Warne\n Ans.`,
    answer : "a"
  },
  {
    question : chalk.bold.red("[4] Who was the captain of Mumbai Indians at the start of IPL 2013?") + `\n a.Rohit Sharma\n b.Harbhajan Singh\n c.Ricky Ponting\n Ans.`,
    answer : "c"

  },
  {
    question : chalk.bold.red("[5] How many IPL Final has M.S.Dhoni appeared in?") + `\n a.6\n b.5\n c.7\n Ans.`,
    answer : "c"
  },
  {
    question : chalk.bold.red("[6] At which venue did the IPL 2009 final take place") + `\n a.Wanderers Stadium,jo'burg\n b.Wankheda Stadium,Mumbai\n c.Sawai Mansingh Stadium,jaipur\n Ans.`,
    answer : "a"
  },
  {
    question : chalk.bold.red("[7] Who was the most expensive indian player at the IPL 2018 auction?") + `\n a.Ajinkya Rahane\n b.Jatdev Unadkat\n c.Harbhajan Singh\n Ans.`,
    answer : "b"
  },
  {
    question : chalk.bold.red("[8] Which England player earned the highest bid of the IPL 2017 auction?") + `\n a.Eoin Morgan\n b.Ben Stokes\n c.Tymal Mills\n Ans.`,
    answer : "b"
  },
  {
    question : chalk.bold.red("[9] Which Indian player has the fastest 100 in IPL?") + `\n a.Yusuf Pathan\n b.Virat Kohli\n c.Virender Sehwag\n Ans.`,
    answer : "a"
  },
  {
    question : chalk.bold.red("[10] Who has bowled the most number of maiden overs in the IPL?") + `\n a.Praveen Kumar\n b.Lasith Malinga\n c.Irfan Pathan\n Ans.`,
    answer : "a"
  }
  ]

var key  = readlineSync.question(chalk.blueBright("What do you want to do?\n  Presss e to exit, any other key to continue....."))

if(key === 'e')
{
  console.log(chalk.blueBright(" You selected e\n Thanks for coming....."))
  process.exit();
}else{
  console.log("");
for(var i=0; i<questions.length; i++)
{
  play(questions[i].question,questions[i].answer);
}
}

console.log(chalk.bold.cyan("Your score is: " + chalk.bold.yellowBright(score)));

console.log(chalk.bold.blueBright("\n***************************\n"))
