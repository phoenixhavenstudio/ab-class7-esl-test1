const QUESTIONS = [
  {
    id: 1,
    q: "What does the octagonal (8-sided) sign shape mean?",
    choices: { A: "Warning", B: "Information", C: "Stop", D: "Speed limit" },
    answer: "C",
    explanation: "Stop. An 8-sided sign always means stop. Shape matters even if the sign is dirty or covered by snow.",
    eslNote: "The exam may say “eight-sided sign.” Same meaning."
  },
  {
    id: 2,
    q: "Who must sit with you when driving with a Class 7 learner licence?",
    choices: { A: "Any adult", B: "A licensed driver under 18", C: "A fully licensed driver who is at least 18", D: "Another learner driver" },
    answer: "C",
    explanation: "A fully licensed driver 18+ must sit in the front seat. This person cannot be a learner.",
    eslNote: "Supervisor must be fully licensed and at least 18."
  },
  {
    id: 3,
    q: "How much alcohol is allowed when driving with a Class 7 licence?",
    choices: { A: "A small amount", B: "0.05", C: "0.08", D: "None" },
    answer: "D",
    explanation: "Zero alcohol or drugs are allowed for Class 7 drivers.",
    eslNote: "Zero means none at all."
  },
  {
    id: 4,
    q: "What shape are most warning signs?",
    choices: { A: "Circle", B: "Diamond", C: "Rectangle", D: "Octagon" },
    answer: "B",
    explanation: "Most warning signs are yellow diamonds.",
    eslNote: "Diamond shape usually means warning."
  },
  {
    id: 5,
    q: "When may a Class 7 driver NOT drive?",
    choices: { A: "During school hours", B: "Between 12:00 a.m. and 5:00 a.m.", C: "On highways", D: "In the rain" },
    answer: "B",
    explanation: "Learners cannot drive between midnight and 5:00 a.m.",
    eslNote: "Midnight is 12:00 a.m."
  },
  {
    id: 6,
    q: "At an intersection with no signs or lights, who has the right-of-way?",
    choices: { A: "The faster vehicle", B: "The vehicle on the left", C: "The vehicle on the right", D: "The larger vehicle" },
    answer: "C",
    explanation: "At uncontrolled intersections, yield to the vehicle on your right.",
    eslNote: "Uncontrolled means no signs or lights."
  },
  {
    id: 7,
    q: "How many correct answers are needed to pass the knowledge test?",
    choices: { A: "20", B: "24", C: "25", D: "30" },
    answer: "C",
    explanation: "You need 25 out of 30 correct to pass.",
    eslNote: "Passing score is 25/30."
  },
  {
    id: 8,
    q: "What does a red circle with a diagonal line mean?",
    choices: { A: "Warning", B: "Must do", C: "Information", D: "Not allowed" },
    answer: "D",
    explanation: "A red circle with a slash means not allowed.",
    eslNote: "Red slash means NO."
  },
  {
    id: 9,
    q: "What is the safest following distance in good conditions?",
    choices: { A: "One second", B: "Two seconds", C: "Three car lengths", D: "Five seconds" },
    answer: "B",
    explanation: "Two seconds is the minimum safe following distance in good conditions.",
    eslNote: "Count: one-thousand-one, one-thousand-two."
  },
  {
    id: 10,
    q: "Where should you stop at a stop sign with a crosswalk?",
    choices: { A: "After the crosswalk", B: "On the crosswalk", C: "Before the crosswalk", D: "In the intersection" },
    answer: "C",
    explanation: "Stop before the crosswalk to protect pedestrians.",
    eslNote: "Stop before the white lines/crosswalk."
  },
  {
    id: 11,
    q: "What is the minimum age to apply for a Class 7 licence?",
    choices: { A: "13", B: "14", C: "15", D: "16" },
    answer: "B",
    explanation: "You must be 14 years old to apply.",
    eslNote: "Minimum age is 14."
  },
  {
    id: 12,
    q: "What colour are direction signs?",
    choices: { A: "Yellow", B: "White", C: "Red", D: "Green" },
    answer: "D",
    explanation: "Green signs give direction information.",
    eslNote: "Green often shows places and distances."
  },
  {
    id: 13,
    q: "How many passengers may a Class 7 driver carry?",
    choices: { A: "One", B: "Two", C: "As many as fit", D: "One for each working seat belt" },
    answer: "D",
    explanation: "One passenger per working seat belt.",
    eslNote: "Every person needs a seat belt."
  },
  {
    id: 14,
    q: "Why should you do a shoulder check?",
    choices: { A: "To check mirrors", B: "To look behind you", C: "To check blind spots", D: "To slow down" },
    answer: "C",
    explanation: "Shoulder checks help you see blind spots mirrors cannot show.",
    eslNote: "Blind spot = area you cannot see in mirrors."
  },
  {
    id: 15,
    q: "What is the speed limit in a school zone?",
    choices: { A: "20 km/h", B: "30 km/h", C: "40 km/h", D: "50 km/h" },
    answer: "B",
    explanation: "School zones are 30 km/h unless otherwise posted.",
    eslNote: "Follow the posted school zone signs."
  },
  {
    id: 16,
    q: "What should you do at a flashing red traffic light?",
    choices: { A: "Slow down", B: "Yield", C: "Stop completely", D: "Drive through" },
    answer: "C",
    explanation: "A flashing red light means stop completely.",
    eslNote: "Treat it like a stop sign."
  },
  {
    id: 17,
    q: "When can you turn right at a red light?",
    choices: { A: "Never", B: "After stopping, unless prohibited", C: "Only during the day", D: "Only with police direction" },
    answer: "B",
    explanation: "You may turn right after a full stop unless a sign says no.",
    eslNote: "Must stop first. Look for ‘No Turn on Red’ signs."
  },
  {
    id: 18,
    q: "What is an acceleration lane used for?",
    choices: { A: "Parking", B: "Stopping", C: "Matching speed before merging", D: "Turning" },
    answer: "C",
    explanation: "Use acceleration lane to match traffic speed before merging.",
    eslNote: "Do not stop unless needed for safety."
  },
  {
    id: 19,
    q: "When must headlights be turned on?",
    choices: { A: "Only at night", B: "Only in rain", C: "From sunset to sunrise and poor visibility", D: "Only on highways" },
    answer: "C",
    explanation: "Headlights are required from sunset to sunrise and in poor visibility.",
    eslNote: "Turn lights on when it is hard to see."
  },
  {
    id: 20,
    q: "When turning right, which lane should you enter?",
    choices: { A: "Any lane", B: "Left lane", C: "Right curb lane", D: "Middle lane" },
    answer: "C",
    explanation: "Turn right into the nearest right lane.",
    eslNote: "Do not turn wide."
  },
  {
    id: 21,
    q: "At a four-way stop, who goes first if two arrive at the same time?",
    choices: { A: "Faster vehicle", B: "Vehicle on the left", C: "Vehicle on the right", D: "Larger vehicle" },
    answer: "C",
    explanation: "If two arrive at same time, vehicle on the right goes first.",
    eslNote: "Yield to the right."
  },
  {
    id: 22,
    q: "When must seat belts be worn?",
    choices: { A: "Only highways", B: "Only front seats", C: "At all times", D: "Above 50 km/h" },
    answer: "C",
    explanation: "Seat belts must be worn at all times.",
    eslNote: "Everyone must buckle up."
  },
  {
    id: 23,
    q: "What does a yellow diamond sign mean?",
    choices: { A: "Stop", B: "Speed limit", C: "Warning", D: "Direction" },
    answer: "C",
    explanation: "Yellow diamond signs warn about hazards.",
    eslNote: "Warning means be careful."
  },
  {
    id: 24,
    q: "What should you do at a railway crossing with no gates?",
    choices: { A: "Speed up", B: "Stop on tracks", C: "Look and listen", D: "Ignore it" },
    answer: "C",
    explanation: "Always look and listen at railway crossings without gates.",
    eslNote: "Trains cannot stop quickly."
  },
  {
    id: 25,
    q: "What is defensive driving?",
    choices: { A: "Driving fast", B: "Predicting problems", C: "Using horn often", D: "Driving slowly always" },
    answer: "B",
    explanation: "Defensive driving means predicting possible problems ahead.",
    eslNote: "Stay alert and think ahead."
  },
  {
    id: 26,
    q: "When should you signal before changing lanes?",
    choices: { A: "After moving", B: "While moving", C: "Before moving", D: "Only in traffic" },
    answer: "C",
    explanation: "Signal before you move into another lane.",
    eslNote: "Signal early so others know."
  },
  {
    id: 27,
    q: "What should you do in poor visibility?",
    choices: { A: "Speed up", B: "Turn off lights", C: "Slow down and increase distance", D: "Stop in road" },
    answer: "C",
    explanation: "Slow down and increase distance in poor visibility.",
    eslNote: "More space gives more time to react."
  },
  {
    id: 28,
    q: "What helps control speed downhill?",
    choices: { A: "Neutral", B: "Proper gear", C: "Cruise control", D: "Turn engine off" },
    answer: "B",
    explanation: "Proper gear helps control downhill speed safely.",
    eslNote: "Do not coast in neutral."
  },
  {
    id: 29,
    q: "How long must you hold Class 7 before road test?",
    choices: { A: "6 months", B: "9 months", C: "12 months", D: "18 months" },
    answer: "C",
    explanation: "Hold your learner licence for at least 12 months.",
    eslNote: "Minimum is one year."
  },
  {
    id: 30,
    q: "If unsure about right-of-way, what should you do?",
    choices: { A: "Go quickly", B: "Honk", C: "Stop and wait", D: "Speed up" },
    answer: "C",
    explanation: "If unsure, stop and wait. Safety first.",
    eslNote: "Waiting is safer than guessing."
  }
];

// State Variables
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = []; // Array to store user's answers { questionId, userAnswer, isCorrect }
let currentQuestions = [...QUESTIONS]; // Copy to allow shuffling
let isAnswered = false;

// DOM Elements
const screens = {
    start: document.getElementById('start-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen'),
    review: document.getElementById('review-screen')
};

const btns = {
    start: document.getElementById('start-btn'),
    next: document.getElementById('next-btn'),
    back: document.getElementById('back-btn'),
    review: document.getElementById('review-btn'),
    restart: document.getElementById('restart-btn'),
    closeReview: document.getElementById('close-review-btn')
};

const els = {
    questionText: document.getElementById('question-text'),
    choicesContainer: document.getElementById('choices-container'),
    progressFill: document.getElementById('progress-fill'),
    currentQNum: document.getElementById('current-question-num'),
    totalQNum: document.getElementById('total-questions'),
    feedbackContainer: document.getElementById('feedback-container'),
    feedbackTitle: document.getElementById('feedback-title'),
    feedbackExplanation: document.getElementById('feedback-explanation'),
    feedbackEsl: document.getElementById('feedback-esl'),
    shuffleCheckbox: document.getElementById('shuffle-checkbox'),
    passFailText: document.getElementById('pass-fail-text'),
    scoreText: document.getElementById('score-text'),
    percentageText: document.getElementById('percentage-text'),
    resultMessage: document.getElementById('result-message'),
    scoreCircle: document.querySelector('.score-circle'),
    reviewList: document.getElementById('review-list')
};

// Event Listeners
btns.start.addEventListener('click', startQuiz);
btns.next.addEventListener('click', nextQuestion);
btns.back.addEventListener('click', prevQuestion);
btns.restart.addEventListener('click', resetQuiz);
btns.review.addEventListener('click', showReview);
btns.closeReview.addEventListener('click', hideReview);

// Functions

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function startQuiz() {
    // Reset state
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = new Array(QUESTIONS.length).fill(null); // Initialize empty answers
    
    // Handle shuffling
    if (els.shuffleCheckbox.checked) {
        currentQuestions = [...QUESTIONS].sort(() => Math.random() - 0.5);
    } else {
        currentQuestions = [...QUESTIONS];
    }
    
    // Initialize UI
    els.totalQNum.textContent = currentQuestions.length;
    showScreen('quiz');
    loadQuestion(currentQuestionIndex);
}

function loadQuestion(index) {
    const question = currentQuestions[index];
    
    // Update Progress
    els.currentQNum.textContent = index + 1;
    const progressPercent = ((index) / currentQuestions.length) * 100;
    els.progressFill.style.width = `${progressPercent}%`;

    // Render Question
    els.questionText.textContent = `${index + 1}. ${question.q}`;
    
    // Render Choices
    els.choicesContainer.innerHTML = '';
    const choices = question.choices;
    
    for (const [key, value] of Object.entries(choices)) {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.dataset.choice = key;
        btn.innerHTML = `<span class="choice-label">${key}</span> ${value}`;
        btn.onclick = () => selectAnswer(key);
        els.choicesContainer.appendChild(btn);
    }

    // Reset UI State for new question
    isAnswered = false;
    btns.next.disabled = true;
    btns.back.disabled = index === 0;
    els.feedbackContainer.classList.add('hidden');

    // Check if we already have an answer for this question (if navigating back)
    if (userAnswers[index]) {
        restoreAnswer(userAnswers[index]);
    }
}

function selectAnswer(choiceKey) {
    if (isAnswered) return; // Prevent changing answer after submission? 
    // Requirement says "Require answer before allowing Next", implying we just select first, then confirm?
    // Usually interactive quizzes lock in immediately or have a submit. 
    // Let's assume immediate feedback style based on "Interactive" and "Review" nature.
    // Actually, to implement "Require answer before allowing Next", we can just highlight selection, then show feedback immediately?
    // Let's do: User clicks -> Feedback shows immediately -> Next button enables.
    
    isAnswered = true;
    const question = currentQuestions[currentQuestionIndex];
    const isCorrect = choiceKey === question.answer;
    
    // Store answer
    userAnswers[currentQuestionIndex] = {
        questionId: question.id,
        userChoice: choiceKey,
        isCorrect: isCorrect,
        question: question // Store reference for review
    };

    // Update UI
    const buttons = els.choicesContainer.querySelectorAll('.choice-btn');
    buttons.forEach(btn => {
        btn.disabled = true; // Lock choices
        if (btn.dataset.choice === question.answer) {
            btn.classList.add('correct');
        }
        if (btn.dataset.choice === choiceKey && !isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    // Show Feedback
    els.feedbackTitle.textContent = isCorrect ? "Correct!" : "Incorrect";
    els.feedbackTitle.className = isCorrect ? "text-success" : "text-error"; // Helper classes if needed, but CSS handles parent class
    
    els.feedbackContainer.className = `card feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    els.feedbackExplanation.textContent = question.explanation;
    els.feedbackEsl.textContent = question.eslNote;
    els.feedbackContainer.classList.remove('hidden');

    // Enable Next
    btns.next.disabled = false;
}

function restoreAnswer(savedAnswer) {
    isAnswered = true;
    const question = savedAnswer.question;
    
    const buttons = els.choicesContainer.querySelectorAll('.choice-btn');
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.dataset.choice === question.answer) {
            btn.classList.add('correct');
        }
        if (btn.dataset.choice === savedAnswer.userChoice && !savedAnswer.isCorrect) {
            btn.classList.add('incorrect');
        }
    });

    els.feedbackTitle.textContent = savedAnswer.isCorrect ? "Correct!" : "Incorrect";
    els.feedbackContainer.className = `card feedback ${savedAnswer.isCorrect ? 'correct' : 'incorrect'}`;
    els.feedbackExplanation.textContent = question.explanation;
    els.feedbackEsl.textContent = question.eslNote;
    els.feedbackContainer.classList.remove('hidden');

    btns.next.disabled = false;
}

function nextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    } else {
        finishQuiz();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

function finishQuiz() {
    // Calculate Score
    score = userAnswers.filter(a => a && a.isCorrect).length;
    const total = currentQuestions.length;
    const percentage = Math.round((score / total) * 100);
    const passed = score >= 25;

    // Render Result
    els.scoreText.textContent = `${score}/${total}`;
    els.percentageText.textContent = `${percentage}%`;
    
    if (passed) {
        els.passFailText.textContent = "PASS";
        els.passFailText.className = "pass-text";
        els.resultMessage.textContent = "Great job! You are ready for the test.";
        els.scoreCircle.className = "score-circle pass";
    } else {
        els.passFailText.textContent = "FAIL";
        els.passFailText.className = "fail-text";
        els.resultMessage.textContent = "Keep practicing. You need 25 correct answers to pass.";
        els.scoreCircle.className = "score-circle fail";
    }

    showScreen('result');
}

function showReview() {
    els.reviewList.innerHTML = '';
    
    // Filter wrong answers
    const wrongAnswers = userAnswers.filter(a => a && !a.isCorrect);
    
    if (wrongAnswers.length === 0) {
        els.reviewList.innerHTML = '<p>Perfect score! No wrong answers to review.</p>';
    } else {
        wrongAnswers.forEach((item, index) => {
            const div = document.createElement('div');
            div.className = 'review-item';
            div.innerHTML = `
                <div class="review-q">Q: ${item.question.q}</div>
                <div class="review-detail">Your Answer: <span class="review-wrong">${item.userChoice}) ${item.question.choices[item.userChoice]}</span></div>
                <div class="review-detail">Correct Answer: <span class="review-correct">${item.question.answer}) ${item.question.choices[item.question.answer]}</span></div>
                <div class="review-explanation"><strong>Explanation:</strong> ${item.question.explanation}</div>
                <div class="review-explanation"><em><strong>ESL Note:</strong> ${item.question.eslNote}</em></div>
            `;
            els.reviewList.appendChild(div);
        });
    }
    
    showScreen('review');
}

function hideReview() {
    showScreen('result');
}

function resetQuiz() {
    showScreen('start');
}
