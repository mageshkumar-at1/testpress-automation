# TinyFlix Automation Tests

This repository contains automation test cases for the **TinyFlix** application, provided by **Testpress** as part of the automation assignment.

The tests are written using **Playwright** with **TypeScript** and are designed to be easily cloned, installed, and executed by the Testpress team or other reviewers.

---

## Repository Overview

- **Language**: TypeScript  
- **Test Framework**: [Playwright]
- **Purpose**: Automate key test cases for TinyFlix 

---

## Project Setup

Follow these steps to set up the project locally:

1. **Clone the Repository**
```bash
git clone https://github.com/mageshkumar-at1/testpress-automation.git
cd testpress-automation
```

2. **Install Dependencies**
```bash
npm install
```

3. **Run Playwright Install (if needed)**
```bash
npx playwright install
```

---

## 🚀 Running the Tests

To execute all test cases:
```bash
npx playwright test
```

To run a specific test file:
```bash
npx playwright test path/to/test-file.spec.ts
```

To open the Playwright Test Runner UI:
```bash
npx playwright test --ui
```

---

## Viewing Test Reports

After running tests, you can generate and view the HTML report:
```bash
npx playwright show-report
```

---

## Project Structure

```
/src
  └── page files (.page.ts)  
/tests
  └── test files (.spec.ts)
/playwright.config.ts
/package.json
/README.md
```

---

## Notes

✅ Make sure you have Node.js (version 16 or later) installed.  
✅ Credentials or environment-specific details (if any) should be configured securely (e.g., via `.env`).

---

## Contact

For any questions or clarifications regarding this project, please reach out to:

**Magesh Kumar A T**  
[GitHub Profile](https://github.com/mageshkumar-at1)
[LinkedIn](https://www.linkedin.com/in/magesh-kumar-a-t-35782b184/)