import { playNoteButton, submitButton, questionDisplay, answerChoiceButtons, displayMessageCorrect, displayMessageIncorrect } from './ui';
import { questionManager } from './questionManager';

    // Play Note Button is displayed
    test('ui: playNoteButton is displayed at start up', () => {
        // TODO
        const pButton = new playNoteButton;
        pButton.display();
        return false;
    });

    // Play Note Button is displayed after proceeding to a new question
    test('ui: playNoteButton is displayed on screen after the previous question is attempted', () => {
        // TODO
        const pButton = new playNoteButton;
        const qManager = new questionManager;
        qManager.progressQuestionList(); // Move to next question
        pButton.display();
        return false;
    });

    // submitButton is displayed
    test('ui: submitButton is displayed at start up', () => {
        // TODO
        const sButton = new submitButton;
        sButton.display();
        return false;
    });

    // submitButton is displayed after proceeding to a new question
    test('ui: submitButton is displayed on screen after the previous question is attempted', () => {
        // TODO
        const sButton = new submitButton;
        const qManager = new questionManager;
        qManager.progressQuestionList(); // Move to next question
        sButton.display();
        return false;
    });

    
    // "Correct" message displayed after answering correctly
    test('ui: displayMessageCorrect is called after answering a question correctly', () => {
        displayMessageCorrect();
        return false;
    });

    // "Incorrect" message displayed after answering incorrectly
    test('ui: displayMessageIncorrect is called after answering a question incorrectly', () => {
        displayMessageIncorrect();
        return false;
    });

    // a question is DISPLAYED at the start of the app
    test('ui: an initial question is displayed at start up', () => {
        // TODO
        const qDisplay = new questionDisplay;
        const qManager = new questionManager;
        let currentQuestion = qManager.getCurrentQuestion();
        qDisplay.display(currentQuestion);
        return false;
    });

    // answer choices are displayed at start of the app
    test('ui: answer choices are displayed at start up', () => {
        // TODO
        const aDisplay = new answerChoiceButtons;
        aDisplay.display();

        return false;
    });

    // New question is DISPLAYED after attempting a previous question
    test('ui: a new question is displayed on screen after the previous question is attempted', () => {
        // TODO
        const qDisplay = new questionDisplay;
        const qManager = new questionManager;
        qManager.progressQuestionList(); // Move to next question
        let currentQuestion = qManager.getCurrentQuestion();
        qDisplay.display(currentQuestion);

        return false;
    });

    // answer choices are displayed after attempting a previous question
    test('ui: answer choices are displayed on screen after the previous question is attempted', () => {
        // TODO
        const aDisplay = new answerChoiceButtons;
        aDisplay.display();

        return false;
    });

    // answer choice is stored in after selecting an answer with a radio button
    test('ui: answer 1 is stored in questionManager userAnswer after selection', () => {
        // TODO
        return false;
    });

    // userAnswer is overwritten with new choice after selecting a second answer with a radio button
    test('ui: answer 2 is stored in questionManager userAnswer after initial selection of answer 1 and then selection of answer 2', () => {
        // TODO
        return false;
    });

    // userAnswer is cleared after submitting an answer
    test('ui: questionManager userAnswer is reset after submitting an answer', () => {
        // TODO
        return false;
    });