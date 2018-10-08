let responses = [
            "Wow, that sounds harrowing.",
            "That's fascinating, tell me more.",
            "And how do you think that relates to your mother?",
            "Tell me what this ink blot looks like.",
            "Mmmhmmm, yes I see..."
          ],
         arrayLength = responses.length,
         answer;

for (let index = 0; index < (arrayLength + 1); index++) {
    if (answer === "QUIT") {
        index = arrayLength + 1;
        alert("That's all the time we have for today; that will be $3,000.");
     } else if (index === arrayLength) {
        index = -1;
     } else {
        answer = prompt("How does that make you feel?").toUpperCase();
        alert(responses[index]);
        console.log(index);
     }
};
