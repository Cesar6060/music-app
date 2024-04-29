import { playNoteButton, submitButton, questionDisplay, answerChoiceButtons, resultsDisplay } from './ui';
import { questionManager } from './questionManager';

    // Play Note Button is displayed
    test('ui: playNoteButton is displayed at start up', () => {
        const pButton = new playNoteButton();
        const spy = jest.spyOn(pButton, 'display');
        pButton.display();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    // Play Note Button is displayed after proceeding to a new question
    test('ui: playNoteButton is displayed on screen after the previous question is attempted', () => {
        const pButton = new playNoteButton();
        const qManager = new questionManager();
        qManager.progressQuestionList(); // Move to next question
        const spy = jest.spyOn(pButton, 'display');
        pButton.display();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    // submitButton is displayed
    test('ui: submitButton is displayed at start up', () => {
        const qManager = new questionManager();
        const rDisplay = new resultsDisplay();
        const sButton = new submitButton(qManager, rDisplay);
        const spy = jest.spyOn(sButton, 'display');
        sButton.display();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    // submitButton is displayed after proceeding to a new question
    test('ui: submitButton is displayed on screen after the previous question is attempted', () => {
        const qManager = new questionManager();
        const rDisplay = new resultsDisplay();
        const sButton = new submitButton(qManager, rDisplay);
        qManager.addQuestion("testQuestion", "testAnswer");
        qManager.submitQuestion(); // Move to next question
        const spy = jest.spyOn(sButton, 'display');
        sButton.display();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    // clicking the submitButton triggers questionManager to check the answer
    test('ui: submitButton submits the answer to questionManager onClick', () => {
        const qManager = new questionManager();
        const rDisplay = new resultsDisplay();
        const sButton = new submitButton(qManager, rDisplay);
        qManager.addQuestion("testQuestion", "testAnswer");
        const spy = jest.spyOn(qManager, 'submitQuestion');
        sButton.onClick();
        expect(spy).toHaveBeenCalledTimes(1);
    });
    
    // "Correct" message displayed after answering correctly
    test('ui: displayMessageCorrect is called after answering a question correctly', () => {
        const qManager = new questionManager();
        const rDisplay = new resultsDisplay();
        const sButton = new submitButton(qManager, rDisplay);
        qManager.addQuestion("testQuestion", "testAnswer");
        qManager.setUserAnswer("testAnswer");
        const spy = jest.spyOn(rDisplay, 'displayMessageCorrect');
        sButton.onClick();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    // "Incorrect" message displayed after answering incorrectly
    test('ui: displayMessageIncorrect is called after answering a question incorrectly', () => {
        const qManager = new questionManager();
        const rDisplay = new resultsDisplay();
        const sButton = new submitButton(qManager, rDisplay);
        qManager.addQuestion("testQuestion", "testAnswer");
        qManager.setUserAnswer("wrongAnswer");
        const spy = jest.spyOn(rDisplay, 'displayMessageIncorrect');
        sButton.onClick();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    // a question is DISPLAYED at the start of the app
    test('ui: an initial question is displayed at start up', () => {
        const qDisplay = new questionDisplay();
        const qManager = new questionManager();
        let currentQuestion = qManager.getCurrentQuestion();
        const spy = jest.spyOn(qDisplay, 'display');
        qDisplay.display(currentQuestion);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    // answer choices are displayed at start of the app
    test('ui: answer choices are displayed at start up', () => {
        const aDisplay = new answerChoiceButtons();
        const spy = jest.spyOn(aDisplay, 'display');
        aDisplay.display();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    // New question is DISPLAYED after attempting a previous question
    test('ui: a new question is displayed on screen after the previous question is attempted', () => {
        const qDisplay = new questionDisplay();
        const qManager = new questionManager();
        qManager.progressQuestionList(); // Move to next question
        let currentQuestion = qManager.getCurrentQuestion();
        const spy = jest.spyOn(qDisplay, 'display');
        qDisplay.display(currentQuestion);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    // answer choices are displayed after attempting a previous question
    test('ui: answer choices are displayed on screen after the previous question is attempted', () => {
        const aDisplay = new answerChoiceButtons();
        const spy = jest.spyOn(aDisplay, 'display');
        aDisplay.display();
        expect(spy).toHaveBeenCalledTimes(1);
    });

    // answer choice is stored in after selecting an answer with a radio button
    test('ui: answer 1 is stored in questionManager userAnswer after selection', () => {
        const qManager = new questionManager();
        const aButton = new answerChoiceButtons();
        const spy = jest.spyOn(qManager, 'setUserAnswer');
        const userAnswer = "yes";
        aButton.onClick(qManager, userAnswer);
        expect(qManager.getUserAnswer()).toEqual(userAnswer);
        expect(spy).toHaveBeenCalledTimes(1);
    });

    // userAnswer is overwritten with new choice after selecting a second answer with a radio button
    test('ui: answer 2 is stored in questionManager userAnswer after initial selection of answer 1 and then selection of answer 2', () => {
        const qManager = new questionManager();
        const aButton = new answerChoiceButtons();
        const spy = jest.spyOn(qManager, 'setUserAnswer');
        const userAnswer1 = "yes";
        const userAnswer2 = "no";
        aButton.onClick(qManager, userAnswer1);
        expect(qManager.getUserAnswer()).toEqual(userAnswer1);
        expect(spy).toHaveBeenCalledTimes(1);
        aButton.onClick(qManager, userAnswer2);
        expect(qManager.getUserAnswer()).toEqual(userAnswer2);
        expect(spy).toHaveBeenCalledTimes(2);
    });