**Coffee Maker**

This is a simple coffee maker program implemented in JavaScript. It allows the user to brew a desired number of cups of coffee. The program simulates the brewing process, checking if there is enough water in the reservoir and adding water if necessary.

### Features

- **User Input**: Allows the user to specify the number of cups of coffee they want to brew via the console.
- **Water Reservoir**: The coffee maker has a water reservoir with a capacity of 10 cups.
- **Brewing Process**: Simulates the brewing process for the specified number of cups, pouring coffee into each cup sequentially.

### Prerequisites

- Node.js installed on your system.

### How to Use

1. Clone or download the repository to your local machine.

2. Navigate to the directory containing the `coffee_maker.js` file.

3. Open a terminal window and run the following command:

   ```
   node coffee_maker.js
   ```

4. Follow the prompts in the console to specify the number of cups of coffee you want to brew.

5. Sit back and enjoy as the coffee maker simulates the brewing process and prepares your coffee!

### Code Overview

- The `CoffeeMaker` class encapsulates the functionality of the coffee maker.
- The `_getUserInput` method retrieves user input for the number of cups to brew.
- The `_handleUserInput` method validates the user input to ensure it is a valid number of cups.
- The `brew` method orchestrates the brewing process, checking water availability, adding water if necessary, and initiating the brewing process.
- The `_brewing` method simulates the brewing process by pouring coffee into each cup sequentially.
- The `_checkWater` and `_addWater` methods handle checking water availability and adding water to the reservoir, respectively.

### Acknowledgments

- This program was created as a learning exercise to practice JavaScript programming and asynchronous programming concepts.
