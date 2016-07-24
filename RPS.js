console.log('Starting Two Player Rocks, Paper, Scissors Game!' + '\n')

//Initialize all variables needed for
var rps = ['rock' , 'paper', 'scissors'];
players = {Player1:{name: 'Bob', score:0, choice:''},Player2:{name: 'Joe', score:0, choice:''}};

round = 1;
while (players.Player1.score <3 && players.Player2.score < 3) {
  players.Player1.choice = rps[parseInt(Math.random()*rps.length)%3];
  players.Player2.choice = rps[parseInt(Math.random()*rps.length)%3];

  console.log('This is round ' + round + '\n')
  console.log(players.Player1.name + ' picks '+ players.Player1.choice)
  console.log(players.Player2.name + ' picks '+ players.Player2.choice)

  if (players.Player1.choice === players.Player2.name){
    console.log('It\'s a Tie!')
    round +=1;
  }else if ((players.Player1.choice === 'rock' && players.Player2.choice === 'scissors') || (players.Player1.choice === 'scissors' && players.Player2.choice === 'paper') || (players.Player1.choice === 'paper' && players.Player2.choice === 'rock'))
  {
    console.log('\n' + players.Player1.name + ' wins round ' + round + '\n')
    players.Player1.score +=1;
    round +=1;
  }else {
    console.log('\n' + players.Player2.name + ' wins round ' + round + '\n')
    players.Player2.score +=1;
    round +=1;
  }
}

switch (players.Player1.score > players.Player2.score) {
  case true:
    console.log('\n' + 'The Score is ' + players.Player1.name + ': ' + players.Player1.score + ', ' + players.Player2.name + ': ' + players.Player2.score + '. ' + players.Player1.name + ' wins the game!')
    break;
  case false:
    console.log('\n' + 'The Score is ' + players.Player2.name + ': ' + players.Player2.score + ', ' + players.Player1.name + ': ' + players.Player1.score + '. ' + players.Player2.name + ' wins the game!')
    break;
  default:
}
