import { jest } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

// Read the script but replace DOM-dependent initialization that runs immediately
// so we can set up the DOM first safely, or just make sure the DOM is complete.
// The error "TypeError: Cannot read properties of null (reading 'addEventListener')"
// means one of the elements we are calling addEventListener on is null.
// Let's check which elements are missing in `index.html`.

const scriptContent = fs.readFileSync(path.resolve(__dirname, './script.js'), 'utf8');

describe('Quiz Logic - startQuiz', () => {
    beforeAll(() => {
        // Set up the document BEFORE loading the script
        document.body.innerHTML = '';
        document.documentElement.innerHTML = html.toString();

        // Let's append any elements that might be missing in index.html but exist in script.js
        const missingIds = [
            'restart-modal', 'restart-quiz-btn', 'restart-cancel-btn',
            'restart-confirm-btn', 'review-btn', 'close-review-btn',
            'start-btn', 'next-btn', 'back-btn', 'restart-btn',
            'question-text', 'choices-container', 'progress-fill',
            'current-question-num', 'total-questions', 'feedback-container',
            'feedback-title', 'feedback-explanation', 'feedback-esl',
            'shuffle-checkbox', 'pass-fail-text', 'score-text',
            'percentage-text', 'result-message', 'review-list'
        ];

        missingIds.forEach(id => {
            if (!document.getElementById(id)) {
                const el = document.createElement('div');
                el.id = id;
                document.body.appendChild(el);
            }
        });

        if (!document.querySelector('.score-circle')) {
            const el = document.createElement('div');
            el.className = 'score-circle';
            document.body.appendChild(el);
        }

        // Now run the script
        const scriptToRun = scriptContent + `
            window.getQuizState = () => ({
                currentQuestions,
                currentQuestionIndex,
                score,
                userAnswers
            });
            window.startQuiz = startQuiz;
            window.els = els;
            window.QUESTIONS = QUESTIONS;
        `;

        const scriptEl = document.createElement('script');
        scriptEl.textContent = scriptToRun;
        document.body.appendChild(scriptEl);
    });

    beforeEach(() => {
        window.els.shuffleCheckbox.checked = false;
    });

    it('should initialize quiz state correctly without shuffling', () => {
        window.startQuiz();

        const state = window.getQuizState();
        expect(state.currentQuestionIndex).toBe(0);
        expect(state.score).toBe(0);
        expect(state.userAnswers.length).toBe(window.QUESTIONS.length);
        expect(state.userAnswers.every(a => a === null)).toBe(true);
        expect(state.currentQuestions).toEqual(window.QUESTIONS);
    });

    it('should shuffle questions when shuffle checkbox is checked', () => {
        window.els.shuffleCheckbox.checked = true;

        const originalQuestions = [...window.QUESTIONS];

        // Mock Math.random to reverse array predictably
        let mockValue = 0.99;
        const originalRandom = Math.random;
        Math.random = jest.fn(() => {
            mockValue = mockValue === 0.99 ? 0.01 : 0.99;
            return mockValue;
        });

        window.startQuiz();
        const state = window.getQuizState();

        Math.random = originalRandom;

        expect(state.currentQuestions).not.toEqual(originalQuestions);
        expect(state.currentQuestions.length).toBe(originalQuestions.length);

        const allPresent = originalQuestions.every(q =>
            state.currentQuestions.find(sq => sq.id === q.id)
        );
        expect(allPresent).toBe(true);
    });
});
