


$(document).ready(function () {

    var correct = 0;
    var incorrect = 0;
    var questions =
        [
            {
                question: "a question",
                answers: {
                    answer: "1",
                    answer: "2",
                    trueAnswer: "3",
                    answer: "4"
                }
            },
            {
                question: "a second question",
                answers: {
                    answer: "5",
                    answer: "6",
                    trueAnswer: "7",
                    answer: "8"
                }
            },
            {
                question: "a second question",
                answers: {
                    answer: "5",
                    answer: "6",
                    trueAnswer: "7",
                    answer: "8"
                }
            },
            {
                question: "a second question",
                answers: {
                    answer: "5",
                    answer: "6",
                    trueAnswer: "7",
                    answer: "8"
                }
            },
            {
                question: "a second question",
                answers: {
                    answer: "5",
                    answer: "6",
                    trueAnswer: "7",
                    answer: "8"
                }
            }
        ]


    console.log(questions[1].answers.answer);
    console.log(questions[1].answers.trueAnswer);
    console.log(questions[1].question);


});

