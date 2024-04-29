import { questionManager } from './questionManager';

class playNoteButton {

    display() {
        // on click plays a note
    }
}

class submitButton {

    constructor(qManager, rDisplay) {
        this.qManager = qManager;
        this.rDisplay = rDisplay;
    }

    display() {
        // on click submit answer

    }

    onClick() {
        let correctAnswer = this.qManager.submitQuestion();
        if (correctAnswer) this.rDisplay.displayMessageCorrect();
        else this.rDisplay.displayMessageIncorrect();
    }
}

class questionDisplay {

    display(question) {
        // draw question to screen

    }
}

class answerChoiceButtons {
    // display answer choices and selectable radio buttons
    display() {

    }

    onClick(qManager, answer) {
        qManager.setUserAnswer(answer);
    }
}

class resultsDisplay {

    displayMessageCorrect() {
        //alert("Correct!");
    }

    displayMessageIncorrect() {
        //alert("Incorrect!");
    }
}


export { playNoteButton, submitButton, questionDisplay, answerChoiceButtons, resultsDisplay };