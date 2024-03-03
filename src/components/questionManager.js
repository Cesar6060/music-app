import { question } from './question';

class questionManager {
    invalidAnswer = "";
    userAnswer;
    index = 0;
    questionList = [];
    constructor() {
        this.userAnswer = this.invalidAnswer;
    }

    addQuestion(text, answer) {
        this.questionList.push(new question(text, answer));
    }

    getQuestionCount() {
        return this.questionList.length;
    }

    getCurrentQuestion() {
        return this.questionList[this.index];
    }

    getQuestionAtIndex(index) {
        return this.questionList[index];
    }

    progressQuestionList() {
        this.index++;
        if (this.index > this.questionList.length - 1) {
            this.index = 0;
        }
        return this.index;
    }

    getUserAnswer() {
        return this.userAnswer;
    }

    setUserAnswer(answer) {
        this.userAnswer = answer;
    }

    resetUserAnswer() {
        this.userAnswer = this.invalidAnswer;
    }

    checkAnswerIsSelected() {
        if (this.getUserAnswer() != this.invalidAnswer) {
            return true;
        }
        else return false;
    }
    checkAnswerIsCorrect() {
        let q = this.getCurrentQuestion();
        return q.answerIsMatch(this.userAnswer);
    }
}

export { questionManager };