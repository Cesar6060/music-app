class question {
    constructor(text, answer) {
        this.text = text;
        this.answer = answer;
    }

    getText() {
        return this.text;
    }

    getAnswer() {
        return this.answer;
    }

    answerIsMatch(userAnswer) {
        return this.answer == userAnswer;
    }

}

export { question };