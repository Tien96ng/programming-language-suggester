let questionCount = 0;
let userAnswers = [];
let questionsBank = [
  { // Condition Done
    question: "(10 x 7 / 5) + 3)",
    answer: {
      type: "input number",
      id: "math",
      answers: 17
    }
  },
  { // Condition Done
    question: "Enter in your first name:",
    answer: {
      type: "input text",
      id: "first-name",
      answers: ""
    }
  },
  { // Condition Done
    question: "Select your birthdate:",
    answer: {
      type: "input date",
      id: "dob",
      answers: 0
    }
  },
  {
    question: "What color do you like the most out of the choice's below?",
    answer: {
      type: "dropdown",
      id: "color",
      answers: ["Blue", "Orange", "Purple", "Yellow", "Red"] // Python, Java, C#, JS, Ruby
    }
  },
  { // Condition Done
    question: "Select the applicable answer to you:",
    answer: {
      type: "radio",
      id: "time",
      answers: ["Early Bird", "Late Nighter", "Love Sleeping In"]
    }
  }
];


$(document).ready(function() {

  $("#start-btn").click(function() {
    $("h4").hide();
    $("#start-btn").hide();
    $("form#quiz").show();

    if(questionCount === 4) {}

    let currentQuestionSet = questionsBank[questionCount];
    console.log(currentQuestionSet)

    function renderNextQuestion(question, id, type, answers) {
      console.log({
        question, id, type, answers
      })
      if(type === "radio") {
        $("#placeholder-label").remove();
        $("#dropdown-placeholder").remove();
        $("#next-btn").hide();
        $("#finish-btn").show();

        let radioNum = 1;
        for(let i = 0; i < answers.length; i++) {
          let createLabel = `<label for="${id + radioNum}"> ${answers[i]} </label>`;
          let createInput = `<input type="radio" id="${id + radioNum}" name="radio">`;
          $("#quiz").prepend(createLabel);
          $("#quiz").prepend(createInput);
          $("#quiz").prepend("<br>");
          radioNum++;
        }
        $("#quiz").prepend(`<p>${questionCount + 1}. ${question}</p>`)

      } else {
        $("#placeholder-label").text(`${questionCount + 1}. ${question}`);
        $("#placeholder-label").attr("for", id);

        if(type.includes("input")) {
          $("#placeHolder").attr("name", id);
          $("#placeHolder").attr("type", type.split(" ")[1]);
        } else{
          $("#placeHolder").remove();
          $("#dropdown-placeholder").prepend(`<select name="${id}" id="${id}"> </select>`)
          
          for(let i = 0; i < answers.length; i++) {
            let createOption = `<option value="${answers[i]}">${answers[i]}</option>`;
            $("#color").append(createOption);
          }
        }
      }
    }

    renderNextQuestion(
      currentQuestionSet.question, 
      currentQuestionSet.answer.id, 
      currentQuestionSet.answer.type, 
      currentQuestionSet.answer.answers
    );
    $("#next-btn").click(function() {
      questionCount++;
      currentQuestionSet = questionsBank[questionCount]
      renderNextQuestion(
        currentQuestionSet.question, 
        currentQuestionSet.answer.id, 
        currentQuestionSet.answer.type, 
        currentQuestionSet.answer.answers
      );
    });

  });
});