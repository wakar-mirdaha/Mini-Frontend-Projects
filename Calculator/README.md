# Calculator App

A simple and responsive **Calculator Web App** built using **HTML, CSS, and JavaScript**.
This project performs basic arithmetic operations with a clean UI and responsive design.

## 🚀 Features

* Perform basic arithmetic operations

  * Addition (+)
  * Subtraction (-)
  * Multiplication (*)
  * Division (/)
* Clear button to reset the display
* Error handling for invalid expressions
* Responsive design for mobile and desktop
* Modern dark UI with smooth hover effects

📸 Preview


## 🛠️ Tech Stack

* **HTML5** – Structure of the calculator interface 
* **CSS3** – Styling and responsive layout using Grid 
* **JavaScript (Vanilla JS)** – Calculator logic and event handling 

## 📂 Project Structure

```
calculator/
│
├── index.html      # Calculator layout
├── style.css       # Styling and responsive design
├── script.js       # Calculator functionality
```

## ⚙️ How It Works

1. Each button click is captured using **JavaScript event listeners**.
2. Numbers and operators are appended to the display.
3. When **Calculate** is pressed:

   * The expression is evaluated using JavaScript.
   * If the expression is invalid, an **Error message** appears.
4. The **Clear (C)** button resets the display.

## 📱 Responsive Design

The layout uses **CSS Grid** to arrange calculator buttons and adapts to smaller screens using media queries.

## ⚠️ Note

The calculator currently uses JavaScript's `eval()` to evaluate expressions.
While it works for simple calculations, `eval()` is generally avoided in production applications for security reasons.



---

⭐ If you like this project, consider giving it a star on GitHub.
