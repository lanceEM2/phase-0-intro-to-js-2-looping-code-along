// Code your solutions in this file

function writeCards(names, eventName) {
    let thankYouMessages = []; // Create an empty array to hold the messages.

    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`;
        thankYouMessages.push(message); // Add each message to the new array.
    }

    return thankYouMessages; // Return the new array containing the messages.
}

function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
      console.log(i);
    }
}