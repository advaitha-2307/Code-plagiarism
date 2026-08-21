# Code Plagiarism Detection System

A simple web application to detect plagiarism between two source code files.

## Features

- Upload two source code files (.java, .py, .cpp, .js, .c, .h, .cs)
- Checks if files are in the same programming language
- Calculates similarity percentage based on matching lines
- Highlights identical lines in both files
- Clean, professional UI

## Prerequisites

- Java 17 or higher
- Maven 3.6 or higher

## How to Run

1. Clone or download the project files.
2. Open a terminal in the project root directory.
3. Run `mvn clean install` to build the project.
4. Run `mvn spring-boot:run` to start the server.
5. Open a web browser and go to `http://localhost:8080`.

## Usage

1. Select two source code files using the file inputs.
2. Click "Check Plagiarism".
3. View the results showing similarity percentage, matching lines, and highlighted code.

## Project Structure

- `src/main/java/com/example/codeplagiarismdetector/`: Java source files
- `src/main/resources/static/`: Frontend files (HTML, CSS, JS)
- `pom.xml`: Maven configuration

## Troubleshooting

- Ensure both files have the same extension.
- If the server doesn't start, check that port 8080 is available.
- For any errors, check the console output.