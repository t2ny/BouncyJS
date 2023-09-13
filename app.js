let img;

class BouncyLogo {
    constructor(x, y, xSpeed, ySpeed) {
        this.x = x;
        this.y = y;
        this.xSpeed = xSpeed;
        this.ySpeed = ySpeed;
        this.colors = ['#eed94e', '#f52c2c', '#f5862c', '#b2f52c', '#2ceef5', '#2c6cf5', '#832cf5',
            '#e42cf5', '#f52ca5', '#2cf5e8', '#1aebc4', '#fa82f8', '#ff33a3', '#33a0ff'];
        fill('#eed94e');
    }

    show() {
        square(this.x - 150, this.y - 150, 300);
        image(img, this.x - 150, this.y - 150, 300, 300);
    }

    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }

    collisionCheck() {
        if (this.y - 150 <= 0 || this.y + 150 >= height) {
            this.ySpeed *= -1;
            fill(this.colors[Math.floor(Math.random() * 14)]);
        }

        if (this.x - 150 <= 0 || this.x + 150 >= width) {
            this.xSpeed *= -1;
            fill(this.colors[Math.floor(Math.random() * 14)]);
        }
    }
}

function preload() {
    img = loadImage('images/JavaScript-font.png');
}

function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    background(0);
    BouncyLogo = new BouncyLogo(width / 2, height / 2, 2.5, -2.5);
    BouncyLogo.show();

    image(img, BouncyLogo.x - 150, BouncyLogo.y - 150, 300, 300);
}

function draw() {
    background(0);
    BouncyLogo.collisionCheck();
    BouncyLogo.update();
    BouncyLogo.show();
}

window.onresize = function () {
    createCanvas(window.innerWidth, window.innerHeight);
}