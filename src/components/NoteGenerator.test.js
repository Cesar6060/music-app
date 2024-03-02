// NoteGenerator.test.js
const NoteGenerator = require('./NoteGenerator');

describe('NoteGenerator', () => {
    let generator;

    beforeEach(() => {

        generator = new NoteGenerator();
        console.log = jest.fn();
    });

    test('generate should return a note from the predefined list', () => {
        const note = generator.generate();
        expect(generator.notes).toContain(note);
    });

    test('play should simulate playing the note', () => {
        const note = "A";
        generator.play(note);
        expect(console.log).toHaveBeenCalledWith(`Playing note: ${note}`);
    });

    test('repeatLastNote should replay the last note', () => {
        const note = generator.generate();
        generator.repeatLastNote();
        expect(console.log).toHaveBeenCalledTimes(2);
        expect(console.log).toHaveBeenCalledWith(`Playing note: ${note}`);
    });

    test('repeatLastNote should not play a note if none has been generated', () => {
        generator.repeatLastNote();
        expect(console.log).toHaveBeenCalledWith("No note has been generated yet.");
    });
});
