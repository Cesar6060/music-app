import { question} from './question';

// Tests answerIsMatch function
    // answerIsMatch returns true when userAnswer matches question answer
    test('question: answerIsMatch() returns true when user answer matches question answer', () => {
        const q1 = new question("Is this a test question?", "Yes");
        expect(q1.answerIsMatch("Yes")).toBeTruthy();
    });
// answerIsMatch returns false when userAnswer does not match question answer
    test('question: answerIsMatch() returns false when user answer does NOT match question answer', () => {
        const q1 = new question("Is this a test question?", "Yes");
        expect(q1.answerIsMatch("No")).toBeFalsy();
    });

// Tests question creation
    test('question: can create a new question and access its text', () => {
    let text = "Is this a test question?";
    let answer = "Yes";
        const q1 = new question(text, answer);
        expect(q1.getText()).toEqual(text);
    });

    test('question: can create a new question and access its answer', () => {
        let text = "Is this a test question?";
        let answer = "Yes";
        const q1 = new question(text, answer);
        expect(q1.getAnswer()).toEqual(answer);
    });