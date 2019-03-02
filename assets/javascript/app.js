


$(document).ready(function () {

    var correct = 0;
    var incorrect = 0;

    var questions =
        [
            {
                question: "What is the capitol of the US?",
                answers: [
                    [false, "New York City"],
                    [true, "Washington DC"],
                    [false, "Chicago"],
                    [false, "San Francisco"]
                ]
            },
            {
                question: "a question",
                answers: [
                    [false, "answer"],
                    [true, "answer"],
                    [false, "answer"],
                    [false, "answer"]
                ]
            },
            {
                question: "a question",
                answers: [
                    [false, "answer"],
                    [true, "answer"],
                    [false, "answer"],
                    [false, "answer"]
                ]
            },
            {
                question: "a question",
                answers: [
                    [false, "answer"],
                    [true, "answer"],
                    [false, "answer"],
                    [false, "answer"]
                ]
            },
            {
                question: "a question",
                answers: [
                    [false, "answer"],
                    [true, "answer"],
                    [false, "answer"],
                    [false, "answer"]
                ]
            }
        ]


    function createButton(answerType) {
        var button = $("<button>");
        button.attr("value", answerType);
        button.attr("type", "button");
        button.addClass("btn");
        return button;
    }

    function createQuestionInterface(questionIndex) {

        var buttonDiv = $("<div>");

        for (var i = 0; i < questions[questionIndex].answers.length; i++) {
            if (questions[questionIndex].answers[i][0] === false) {
                var button = createButton("wrong");
                button.text(questions[questionIndex].answers[i][1]);
                buttonDiv.append(button);
            } else if (questions[questionIndex].answers[i][0] === true) {
                var button = createButton("right");
                button.text(questions[questionIndex].answers[i][1]);
                buttonDiv.append(button);
            }
        }

        $("#test").html(buttonDiv);
    }

    createQuestionInterface(0);

    $(".btn").on("click", function () {

        console.log($(this).val());


    });



    console.log(questions[1].answers[0][0]);
});

