// NoteGenerator.js
class NoteGenerator {
    constructor() {

        this.notes = ["A", "B", "C", "D", "E", "F", "G"];
        this.lastNote = null;
    }

    isValidNote(note) {
        let validNote = false;
        for (let i = 0; i < this.notes.length; i++) {
            if (note === this.notes[i]) {
                validNote = true;
                break;
            }
        }
        return validNote;
    }

    generate(note = "none") {
        if (this.isValidNote(note)) {
            this.lastNote = note;
        }
        else {
            const randomIndex = Math.floor(Math.random() * this.notes.length);
            this.lastNote = this.notes[randomIndex];
        }

        return this.lastNote;
    }

    play(note) {
        let validNote = this.isValidNote(note);
        if (validNote) console.log(`Playing note: ${note}`);
        else console.log('Invalid note');
    }

    repeatLastNote() {
        // Checks if there is a last note to repeat.
        if (this.lastNote) {
            // If there is a last note, it plays it again.
            this.play(this.lastNote);
        } else {
            // If there is no last note, it logs an error or handles the case accordingly.
            console.log("No note has been generated yet.");
        }
    }
}

module.exports = NoteGenerator; // Exports the class for use in other files.
