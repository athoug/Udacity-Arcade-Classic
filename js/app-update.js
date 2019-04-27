// Enemies our player must avoid
class Enemy {
  // Variables applied to each of our instances go here,
  constructor(x, y) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.width = 101;
    this.height = 70;
    this.speed = Math.floor(Math.random() * 5) + 1;
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (this.speed * dt);

    // TODO: Add collision handeling here
  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  // Handle collision detection for the enemy object
  collision(player) {
    if (this.x < player.x + player.width && this.x + this.width > player.x && this.y < player.y + player.height
      && this.y + this.height > player.y) {
      return true;
    }
    return false;
  }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(x, y) {
    // The image/sprite for our player
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.width = 67;
    this.height = 80;
  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  // Update the player's position
  update(x, y) {
    this.x += x;
    this.y += y;

    // TODO: Add collision handeling here
  }

  // detect which part of the position is updates based on user input
  handleInput(direction) {
    let x = 0, y = 0;
    switch (direction) {
      case 'left':
        if(this.x > 0) {
          x = -5;
        }
        break;
      case 'right':
        if(this.x < 505) {
          x = 5;
        }
        break;
      case 'up':
        if(this.y > 0) {
          y = -5;
        }
        break;
      case 'down':
      if(this.y < 606) {
        y = 5;
      }
        break;
    }

    // update the positions appropreatly
    update(x, y);
  }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [];
for (let i = 0; i < 6; i++) {
  allEnemies.push(new Enemy(10, 400 * Math.random()));
}
const player = new Player(252, 590);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});