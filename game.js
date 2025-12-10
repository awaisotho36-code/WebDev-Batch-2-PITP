// ---javascript logic ---

        // 1. create an arry of position answer (classic + fun/sarcastic)
        const answer = [
            "It is certain.",
            "yes definitely.",
            "chances are good.",
            "sign points to yes.",
            "my sources say no.",
            "chances are not so good.",
            "404 error: fate not found.",
            "only if u do a little dance first.",
            "you are about die.",
            "the stars say ...meh.",


        ];

        // 2. Select the important html elements 
        const getAnswerButton = document.querySelector("#get-answer-btn");
        const answerDisplay = document.querySelector("#answer");
        // 3. the function that runs on click

        function showRandomAnswer () {
            const randomIndex = Math.floor(Math.random() * answer.length);
            const randomAnswer = answer[randomIndex];
            answerDisplay.textContent = randomAnswer;
        }

        // 4. we use the variable 'get answerbutton' we defined above.

        getAnswerButton.addEventListener("click", showRandomAnswer);
        