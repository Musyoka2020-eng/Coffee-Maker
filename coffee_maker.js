const readline = require('readline');

class CoffeeMaker {
    constructor() {
        this.capacity = '';
        this.brewingMethod = '';
        this.waterReservoir = 10;
        this.timer = '';
        this.temperatureControl = '';
        this.userRequireCups = '';
    }

    async _getUserInput(prompt) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise((resolve) => {
            rl.question(prompt, (userInput) => {
                resolve(parseInt(userInput));
                rl.close();
            });
        });
    }

    async _handleUserInput(userRequireCups) {
        if (userRequireCups <= 0 || isNaN(userRequireCups)) {
            console.log('Please enter a valid number of cups');
            return false;
        }
        if (userRequireCups > this.waterReservoir) {
            console.log('You can only brew ' + this.waterReservoir + ' cups of coffee at a time.');
            return false;
        }
        return true;
    }

    async brew() {
        this.userRequireCups = await this._getUserInput('Enter Number Of Cups You Want To Brew? \n');
        while (true) {
            if (await this._handleUserInput(this.userRequireCups)) {
                console.log('UserRequireCups: ' + this.userRequireCups);
                break;
            } else {
                this.userRequireCups = await this._getUserInput('Enter Number Of Cups You Want To Brew? \n');
            }
        }

        let requiredCups = this.userRequireCups;
        let remainingWater = this.capacity;

        while (true) {
            try {
                await this._checkWater(remainingWater, requiredCups);
                console.log('Water is enough');
                console.log('Brewing coffee');
                break;
            } catch (error) {
                console.log(error);
                await this._addWater(remainingWater, requiredCups);
                remainingWater = this.capacity;
            }
        }

        await this._brewing(requiredCups);
        console.log('Coffee is ready');
    }

    _brewing(requiredCups) {
        let brewingTime = 0;

        return new Promise((resolve) => {
            for (let i = 1; i <= requiredCups; i++) {
                console.log('Brewing cup ' + i);

                setTimeout(() => {
                    console.log('Pouring coffee into cup ' + i);
                    if (i === requiredCups) {
                        resolve('Brewing is done');
                    }
                }, brewingTime);

                brewingTime += 2000;
            }
        });
    }


    _checkWater(remainingWater, requiredCups) {
        return new Promise((resolve, reject) => {
            if (remainingWater < requiredCups) {
                reject('Add water to the reservoir');
            } else {
                resolve('Water is enough');
            }
        });
    }

    _addWater(remainingWater, requiredCups) {
        return new Promise((resolve) => {
            setTimeout(() => {
                let amountOfWaterToAdd = requiredCups - remainingWater + 1;
                console.log('Add ' + amountOfWaterToAdd + ' cups of water');
                remainingWater = amountOfWaterToAdd + remainingWater;
                this.capacity = remainingWater;
                resolve('Water is added');
            }, 3000);
        });
    }
}

let coffeeMaker = new CoffeeMaker();
coffeeMaker.brew();
