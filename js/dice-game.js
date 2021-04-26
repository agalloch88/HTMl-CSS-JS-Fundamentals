function rollDice() {
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() *6 ) + 1;
        alert('You roll a ' + roll + '.');
        if (roll === 1) {
            alert('Game over, no more rolls!');
            break;
        }
        if ((roll > 1) && (roll < 4)); {
            alert('You have ' + goldCoins + ' coins, keep rolling!');
        }
        if ((roll === 4) && (goldCoins > 0)) {
            alert('Oops! You rolled a 4 and lost one coin.')
            goldCoins--
        }
        if (roll < 5) {
            continue;
        }
        goldCoins += roll;
        alert('Congratulations, you win ' + roll + ' gold coins! You now have ' + goldCoins + ' coins in total!');
    }
    alert('You have won a total of ' + goldCoins + ' gold coins!');
}