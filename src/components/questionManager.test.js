import { questionManager } from './questionManager';

// Tests questionManager functions

    // testing getCurrentQuestion() function
    test('questionManager: getCurrentQuestion() retrieves a question in a questionManagers questionList at index 0', () => {
        const qManager = new questionManager;
        qManager.addQuestion("testQuestion", "testAnswer");
        let currentQuestion = qManager.getCurrentQuestion();
        expect(currentQuestion).toEqual(qManager.getQuestionAtIndex(0));
    });

    // New question is prepared after attempting a previous question
    test('questionManager: the next question in the questionManager can be retrieved after calling progressQuestionList()', () => {
        const qManager = new questionManager;
        qManager.progressQuestionList();
        let currentQuestion = qManager.getCurrentQuestion();
        expect(currentQuestion).toEqual(qManager.getQuestionAtIndex(1));
    });

    //Checking to make sure progressQuestionList() will still retrieve the last question in the list
    test('questionManager: the last question in the questionList can be retrieved after calling progressQuestionList() multiple times', () => {
        const qManager = new questionManager;
        // Progress to last element
        for (var i = 0; i < qManager.getQuestionCount(); i++) {
            qManager.progressQuestionList();
        }
        let currentQuestion = qManager.getCurrentQuestion();
        expect(currentQuestion).toEqual(qManager.getQuestionAtIndex(qManager.getQuestionCount() - 1));
    });

    // Questions repeat endlessly (progress back to the first question after finishing the last)
    test('questionManager: questionManager index resets back to 0 after index exceeds questionList size', () => {
        const qManager = new questionManager;
        for (var i = 0; i < qManager.getQuestionCount(); i++) {
            qManager.progressQuestionList();
        }
        let currentQuestion = qManager.getCurrentQuestion();
        expect(currentQuestion).toEqual(qManager.getQuestionAtIndex(0));
    });

    // questionManager can set userAnswer based on input
    test('questionManager: questionManager can update userAnswer using setUserAnswer()', () => {
        const qManager = new questionManager;
        qManager.addQuestion("testQuestion", "rightAnswer");
        let userAnswerInput = "rightAnswer";
        qManager.setUserAnswer(userAnswerInput);
        expect(qManager.getUserAnswer()).toEqual(userAnswerInput);
    });

    // testing to see if answer is valid (has an answer been selected from radio buttons)
    test('questionManager: questionManager checkAnswerIsSelected() returns true if answer has been selected', () => {
        const qManager = new questionManager;
        qManager.addQuestion("testQuestion", "rightAnswer");
        let userAnswerInput = "rightAnswer";
        qManager.setUserAnswer(userAnswerInput);
        expect(qManager.checkAnswerIsSelected().toBeTruthy);
    });

    // testing to see if answer is valid (has an answer been selected from radio buttons)
    test('questionManager: questionManager checkAnswerIsSelected() returns false if answer = invalidAnswer', () => {
        const qManager = new questionManager;
        qManager.addQuestion("testQuestion", "rightAnswer");
        expect(qManager.checkAnswerIsSelected().toBeFalsey);
    });

    // testing correct answer
    test('questionManager: questionManager checkAnswerIsCorrect() returns true if answer matches', () => {
        const qManager = new questionManager;
        qManager.addQuestion("testQuestion", "rightAnswer");
        let userAnswerInput = "rightAnswer";
        qManager.setUserAnswer(userAnswerInput);
        expect(qManager.checkAnswerIsCorrect().toBeTruthy);
    });

    // testing incorrect answer
    test('questionManager: questionManager checkAnswerIsCorrect() returns false if answer does not match', () => {
        const qManager = new questionManager;
        qManager.addQuestion("testQuestion", "rightAnswer");
        let userAnswerInput = "wrongAnswer";
        qManager.setUserAnswer(userAnswerInput);
        expect(qManager.checkAnswerIsCorrect().toBeFalsy);
    });


