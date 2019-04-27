// Enemies our player must avoid
class Enemy {
  // Variables applied to each of our instances go here,
  constructor(x, y) {
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 50;
    this.speed = 115 + Math.floor(Math.random() * 300) + 1;
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x > 510) {
      this.x = -70;
      this.y = 50 + 200 * Math.random();
      this.speed = 115 + Math.floor(Math.random() * 300) + 1;
    }
    this.x += (this.speed * dt);

  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  // Handle collision detection for the enemy object
  collision(p) {
    if (this.x < p.x + p.width && this.x + this.width > p.x
        && this.y < p.y + p.height && this.y + this.height > p.y) {
      return true;
    }
    return false;
  }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(x = 220, y = 442) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
    this.width = 67;
    this.height = 70;
  }

  // Update the player's position
  update() {
    if(this.y < 10) {
      console.log('reach the top');
      message.classList.add('show');
    }
  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  reset() {
    this.x = 220;
    this.y = 442;
    message.classList.remove('show');
  }

  // detect which part of the position is updates based on user input
  handleInput(direction) {
    switch (direction) {
      case 'left':
        if (this.x > 30) {
          this.x += -70;
        }
        break;
      case 'right':
        if (this.x < 365) {
          this.x += 70;
        }
        break;
      case 'up':
        if (this.y > 10) {
          this.y += -70;
        }
        break;
      case 'down':
        if (this.y < 400) {
          this.y += 70;
        }
        break;
      default:
        break;
    }
  }
}

const message = document.querySelector('p');
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const player = new Player();
const allEnemies = [];
for (let i = 0; i < 3; i++) {
  allEnemies.push(new Enemy(0, (50 + 200 * Math.random())));
}

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