


$(document).ready(function () {

    var correct = 0;
    var incorrect = 0;
    var questionCount = 0;
    var questionIndex = 0;

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

        $("#communication").text(questions[questionIndex].question);

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
        questionCount++;
        questionIndex++;
    }

    $("#communication").on("click", function () {
        createQuestionInterface();


    });

    $(document).on("click", ".btn", function () {
        createQuestionInterface();

    });



});

