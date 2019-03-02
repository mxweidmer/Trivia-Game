


$(document).ready(function () {

    var correct = 0;
    var incorrect = 0;
    var questionCount = 1;
    var questionIndex = 0;
    var timeLeft = 16;

    var questionInterval;
    var counterInterval;

    var questions =
        [
            {
                question: "What is the capital city of the United States?",
                answers: [
                    [false, "New York City"],
                    [true, "Washington DC"],
                    [false, "Chicago"],
                    [false, "Los Angeles"]
                ]
            },
            {
                question: "What is the player character of Fallout: New Vegas known as in the Movaje Wasteland?",
                answers: [
                    [false, "The Lone Wanderer"],
                    [false, "The Sole Survivor"],
                    [false, "The Vault Dweller"],
                    [true, "The Courier"]
                ]
            },
            {
                question: "What is the largest planet in the solar system?",
                answers: [
                    [false, "Pluto"],
                    [false, "Earth"],
                    [false, "Saturn"],
                    [true, "Jupiter"]
                ]
            },
            {
                question: "Who is the main antagonist of the Harry Potter Series?",
                answers: [
                    [true, "Voldemort"],
                    [false, "Darth Vader"],
                    [false, "Terminator"],
                    [false, "The Joker"]
                ]
            },
            {
                question: "Who wrote The Shining?",
                answers: [
                    [false, "J.K. Rowling"],
                    [false, "R.L. Stein"],
                    [true, "Stephen King"],
                    [false, "J.R.R. Tolkein"]
                ]
            }
        ]

    var posArray = ["#top-left", "#top-right", "#bottom-left", "#bottom-right"]


    function createButton(answerType) {
        var button = $("<button>");
        button.attr("value", answerType);
        button.attr("type", "button");
        button.addClass("btn");
        return button;
    }

    function createQuestionInterface() {

        $("#question").text(questions[questionIndex].question);

        for (var i = 0; i < questions[questionIndex].answers.length; i++) {
            if (questions[questionIndex].answers[i][0] === false) {
                $(posArray[i]).empty();
                var button = createButton("wrong");
                button.text(questions[questionIndex].answers[i][1]);
                $(posArray[i]).append(button);
            } else if (questions[questionIndex].answers[i][0] === true) {
                $(posArray[i]).empty();
                var button = createButton("right");
                button.text(questions[questionIndex].answers[i][1]);
                $(posArray[i]).append(button);
            }
        }

        questionIndex++;

        if (questionCount === 6) {
            clearInterval(questionInterval);
            clearInterval(counterInterval);
            $("#correct").text("Correct answers: " + correct);
            $("#question").text("Incorrect answers: " + incorrect);
            $("#start").text("Click on me to play again!");
            setTimeout(resetGame, 3000);
        }
    }

    function counter() {
        timeLeft--;
        $("#timer").text("Time remaining: " + timeLeft);
        if (timeLeft === 0) {
            incorrectFunction();
            incorrect++;
        }
    }

    function correctFunction() {
        $("#start").text("Correct!");
        clearInterval(counterInterval);
        clearInterval(questionInterval);

        timeLeft = 16;
        correct++;
        questionCount++;
        setTimeout(start, 3000);
    }

    function incorrectFunction() {
        $("#start").text("Incorrect!");
        clearInterval(counterInterval);
        clearInterval(questionInterval);

        timeLeft = 16;
        incorrect++;
        questionCount++;
        setTimeout(start, 3000);
    }

    function start() {

        $("#start").empty()
        clearInterval(questionInterval);
        clearInterval(counterInterval);

        createQuestionInterface();
        counter();
        questionInterval = setInterval(createQuestionInterface, 1000 * 15);
        counterInterval = setInterval(counter, 1000);
    }

    function resetGame() {
        $("#correct").text("");

        clearInterval(questionInterval);
        clearInterval(counterInterval);
        correct = 0;
        incorrect = 0;
        questionCount = 0;
        questionIndex = 0;
        timeLeft = 16;
    }


    $("#start").on("click", function () {
        start();
    });



    $(document).on("click", ".btn", function () {
        console.log(questionCount);

        if ($(this).val() === "right") {
            correctFunction();
        } else if ($(this).val() === "wrong") {
            incorrectFunction();
        }
    });



});

