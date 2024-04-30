# Music Note Recognition App

A web-based application inspired by SoundGym, designed to train and enhance the listening skills of music producers, audio engineers, and musicians through an engaging game-like environment. Users can listen to musical notes and test their ability to identify them accurately, improving their music note recognition abilities.

## Revised Test Case Suite

The initial test cases submitted with our previous assignment were based on our team’s very limited exposure to testing. As a result, there were cases that were redundant, that were missing, or that lacked the necessary skeleton code to ever be able to pass. Thankfully, through the lessons learned during the semester’s lectures and the feedback from trading our test suites with another group, our team was able to improve our understanding of how to create a more thorough test suite.

For our final submission, additional tests were added, redundant tests were removed or reworked, and all tests have been given the necessary code to pass successfully. Additionally, more detailed comments were provided above each test to more clearly communicate what the test was attempting to check. The most significant amount of work had to be done to the UI components, as they were not thought through well enough with our first sprint submission. This gave our team the opportunity to think more in depth about exactly what requirements needed to be met and how we could set the test suite up to check for these things without having a fully functional user-interface implemented.

As a result of these edits, the test suite now has nearly 40 tests to cover very basic functionality for the application. Even with our additional work accounted for, I am sure that with more time and experience, we would think of additional tests to add to further increase the thoroughness of the suite. While there is still much work to be done on the app itself, the test suite helps increase our confidence to move forward with designing more of the app's features.

Overall, this assignment proved very valuable in furthering our understanding of the testing process.

### Core Features

The primary objective for Sprint 1 was to develop the basic functionality that allows users to interact with the application. This includes a basic user interface, playback of musical notes, selectable answer choices, and feedback on answer selection. These requirements are shown below for reference.

- **Note Generation:** Generate and play a random musical note from a predefined range.
- **User Interface (UI):** A simple interface to listen to the note and choose the answer from multiple options.
- **Answer Validation:** Logic to check the correctness of the user's selection and provide feedback.
- **Repeat Functionality:** Ability to replay the note before submitting an answer.

## Getting Started

Follow these instructions to set up the project on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js and npm](https://nodejs.org/en/download/)

### Installation

1. Clone the project repository to your local machine:
   `git clone https://github.com/Cesar6060/music-app.git`

2. Open the project folder in Visual Studio or an IDE that supports javascript, then navigate to the project directory:
    `cd music-app`

3. Once at the project directory, install the required npm packages using the following terminal command:
    `npm install`

### Running Tests

To execute tests, run the following command in the project directory:
    `npm test  `