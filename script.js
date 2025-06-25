    const questionInput = document.getElementById('question-input');
    const addQuestionBtn = document.getElementById('add-question');
    const quizArea = document.getElementById('quiz-area');

    addQuestionBtn.addEventListener('click', addQuestion);
    
    function addQuestion() {
      const questionText = questionInput.value.trim();
      if (!questionText) return;

      const questionBox = document.createElement('div');
      questionBox.className = 'question-box';

      const qText = document.createElement('p');
      qText.textContent = `Q: ${questionText}`;
      questionBox.appendChild(qText);

      const options = [];
      for (let i = 0; i < 4; i++) {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option-input';

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Add Option`;

        const finalizeBtn = document.createElement('button');
        finalizeBtn.textContent = '+';
        finalizeBtn.style.color = 'white';
        finalizeBtn.onclick = function () {
          if (input.value.trim() === '') return;

          const finalized = document.createElement('div');
          finalized.className = 'option-finalized';

          const radio = document.createElement('input');
          radio.type = 'radio';
          radio.name = questionText;

          const label = document.createElement('label');
          label.textContent = input.value.trim();

          finalized.appendChild(radio);
          finalized.appendChild(label);
          optionDiv.replaceWith(finalized);
        };

        optionDiv.appendChild(input);
        optionDiv.appendChild(finalizeBtn);
        questionBox.appendChild(optionDiv);
      }

      const delBtn = document.createElement('button');
      delBtn.className = 'delete-btn';
      delBtn.textContent = 'Delete';
      delBtn.onclick = function () {
        quizArea.removeChild(questionBox);
      };

      questionBox.appendChild(delBtn);
      quizArea.appendChild(questionBox);
      questionInput.value = '';
    }