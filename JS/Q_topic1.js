document.getElementById("topicForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const topic = document.getElementById("topicInput").value; 
   
    generateQuestions(topic);
  });

  function generateQuestions(topic) {
    // Simulated question generation. Replace this with API call to your server.
    const questions = [
      "What is the importance of " + topic + "?",
      "How does " + topic + " affect system?",
      "Can you explain the concept of " + topic + "?",
      "What are the benefits of understanding " + topic + "?",
      "In what ways can " + topic + " be applied?", 
      "write the diffrence between "+ topic + " and " 
      // Add more questions here...
    ];

    shuffleArray(questions); // Shuffle the questions array

    displayQuestionsWithTypingAnimation(questions);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function displayQuestionsWithTypingAnimation(questions) {
    const questionContainer = document.getElementById("questionContainer");
    questionContainer.innerHTML = ""; // Clear the container before displaying new questions

    let i = 0;

    function displayNextQuestion() {
      if (i < questions.length) {
        const question = questions[i];
        const questionElement = document.createElement("p");

        // Simulate typing animation
        const typingDelay = 10; // milliseconds - adjust to increase/decrease speed
        let charIndex = 0;
        const typeQuestion = () => {
          if (charIndex < question.length) {
            questionElement.textContent += question.charAt(charIndex);
            charIndex++;
            setTimeout(typeQuestion, typingDelay);
          } else {
            i++;
            setTimeout(displayNextQuestion, 100); // Delay before displaying the next question
          }
        };

        typeQuestion();

        questionContainer.appendChild(questionElement);
      }
    }

    displayNextQuestion();
  }