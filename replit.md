# Alberta Class 7 ESL Practice Test

## Overview
A web-based interactive quiz to help ESL learners prepare for the Alberta Class 7 learner's licence knowledge test. Features 30 multiple-choice questions with explanations and ESL notes.

## Tech Stack
- **Frontend**: Vanilla HTML/CSS/JS served from `client/public/`
- **Backend**: Express 5 + TypeScript (`server/index.ts`) serving static files
- **Dev tooling**: tsx, Vite, TypeScript

## Project Structure
- `server/index.ts` - Express server entry point (port 5000)
- `client/public/index.html` - Main HTML page
- `client/public/script.js` - Quiz logic, question bank, UI interactions
- `client/public/style.css` - All styling

## Key Features
- 30-question quiz with shuffle option
- Instant feedback with explanations and ESL notes
- Pass/fail scoring (25/30 to pass)
- Review wrong answers screen
- Restart button with confirmation modal during quiz
- Reusable `resetTest()` function for all restart flows

## Running
- `npm run dev` starts the dev server with tsx
