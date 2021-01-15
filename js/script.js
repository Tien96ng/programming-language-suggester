let questionsBank = {
  questionOne: {
    question: "What color do you like the most out of the choice's below?",
    answer: {
      type: "dropdown",
      answers: ["Blue", "Orange", "Purple", "Yellow", "Red"] // Python, Java, C#, JS, Ruby
    }
  },
  questionTwo: {
    question: "(10 x 7 / 5) + 3)",
    answer: {
      type: "input number",
      answers: 17
    }
  },
  questionThree: {
    question: "Select the applicable answer to you:",
    answer: {
      type: "radio",
      answers: ["Early Bird", "Late Nighter", "Love Sleeping In"]
    }
  },
  questionFour: {
    question: "Enter in the first letter of your name:",
    answer: {
      type: "input text",
      answers: ""
    }
  },
  questionFive: {
    question: "Select your birthdate:",
    answer: {
      type: "date",
      answers: 0
    }
  },
}


$(document).ready(function() {
  
});