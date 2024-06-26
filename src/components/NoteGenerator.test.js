// NoteGenerator.test.js
import NoteGenerator from './NoteGenerator';

describe('NoteGenerator', () => {
    let generator;

    beforeEach(() => {

        generator = new NoteGenerator();
        console.log = jest.fn();
    });

    // Test 1: Ensure 'generate' returns a valid note from the predefined list.
    test('generate should return a note from the predefined list', () => {
        const note = generator.generate();
        expect(generator.notes).toContain(note);
    });
    // Test 2: Verify that 'play' correctly simulates playing a given note.
    test('play should simulate playing the note', () => {
        const note = "A";
        generator.play(note);
        expect(console.log).toHaveBeenCalledWith(`Playing note: ${note}`);
    });

    // Test 3: Check if 'repeatLastNote' successfully replays the last note.
    test('repeatLastNote should replay the last note', () => {
        const note = generator.generate();
        generator.repeatLastNote();
        expect(console.log).toHaveBeenCalledTimes(1);
        expect(console.log).toHaveBeenNthCalledWith(1, `Playing note: ${note}`);
    });

    // Test 4: Ensure 'repeatLastNote' does nothing if no note has been generated.
    test('repeatLastNote should not play a note if none has been generated', () => {
        generator.repeatLastNote();
        expect(console.log).toHaveBeenCalledWith("No note has been generated yet.");
    });

    // Test 5: Validate the randomness of note generation over multiple calls.
    test('generate should produce different notes over multiple invocations', () => {
        let noteSet = new Set();
        for (let i = 0; i < 100; i++) {
            noteSet.add(generator.generate());
        }
        expect(noteSet.size).toBeGreaterThan(1);
    });

    // Test 6: Ensure that 'play' function can handle empty or undefined input gracefully.
    test('play should handle empty input without throwing errors', () => {
        generator.play('');
        expect(console.log).toHaveBeenCalledWith('Invalid note');
    });

    // Test 7: Check that the 'lastNote' is updated with wevery new note generated.
    test('lastNote should update on every new note generated', () => {
        const firstNote = generator.generate("A");
        const secondNote = generator.generate("B");
        expect(generator.lastNote).not.toEqual(firstNote);
        expect(generator.lastNote).toEqual(secondNote);
    });

    // Test 8: Verify that generating a note clears any previous 'lastNote' error state.
    test('generating a new note clears the "No note has been generated yet" state', () => {
        generator.repeatLastNote();
        generator.generate();
        generator.repeatLastNote();
        const timesLogged = console.log.mock.calls.filter(
            call => call[0] === "No note has been generated yet."
        ).length;
        expect(timesLogged).toBe(1);
    });

    // Test 9: Validates by ensuring no notes are generated outside the predefined list
    test('generate should never produce notes outside the predefined list', () => {
        const invalidNotesTestSet = new Set();
        for (let i = 0; i < 1000; i++) {
            const note = generator.generate();
            if (!generator.notes.includes(note)) {
                invalidNotesTestSet.add(note);
            }
        }
        expect(invalidNotesTestSet.size).toBe(0);
    });

    // Test 19: Ensures that the play function handles null or undefined notes gracefully and logs appropriate error messages
    test('play should handle null or undefined notes gracefully', () => {
        generator.play(null);
        expect(console.log).toHaveBeenCalledWith("Invalid note");
        generator.play(undefined);
        expect(console.log).toHaveBeenCalledWith("Invalid note");
    });

    // Test 11: Ensures that the play function handles special characters or non-alphabetic characters gracefully and logs appropriate error messages for each invalid note.
    test('play should handle special characters or non-alphabetic characters gracefully', () => {
        const invalidNotes = ['!', '@', '#', '$', '%', '1', '2', '3'];
        invalidNotes.forEach(note => {
            generator.play(note);
            expect(console.log).toHaveBeenCalledWith(`Invalid note`);
        });
    });


});