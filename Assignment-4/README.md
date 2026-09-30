# Assignment 4 – Employee Registration Form

## Description
A responsive HTML form that collects employee details and validates them using plain JavaScript before showing a success message.

## Files
- `index.html` – Form structure
- `style.css` – Styling with responsive media queries
- `script.js` – Client-side validation logic

## How to Run
Open `index.html` directly in any browser. No server or installation required.

## Validations Applied
| Field         | Rule                                        |
|---------------|---------------------------------------------|
| Name          | Required, letters and spaces only           |
| Email         | Required, valid email format                |
| Password      | Minimum 6 characters                        |
| Phone         | Exactly 10 digits                           |
| Department    | Must select one from the dropdown           |

On successful validation, the page displays: **Employee Registered Successfully!**
