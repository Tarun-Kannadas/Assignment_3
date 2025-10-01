# 📝 Form Validation Example (HTML, CSS, JavaScript)

This project demonstrates a **basic form validation logic** using plain HTML, CSS, and JavaScript.  
It shows how to prevent a form from submitting when required fields are missing, and how to notify the user accordingly.

---

## 🚀 Features
- Simple and clean **HTML form** with four fields:
  - Name  
  - Phone Number  
  - Email  
  - Location  
- **Validation in JavaScript**:
  - Checks if all fields are filled before submission.  
  - Displays a warning message if any field is left empty.  
  - Shows a success alert if all details are entered.  
- **CSS styling** for a neat, centered form with hover effects and a professional look.  

---

## ⚡ How It Works
1. When the **Submit** button is clicked, the `onsubmit` attribute of the form calls `checkDetails()`.  
2. In `checkDetails()`:
   - It collects values from the form fields.  
   - If any field is empty:
     - A red warning message is displayed: *"Please enter all the details before submitting!"*  
     - `return false` prevents the form from being submitted.  
   - If all fields are filled:
     - An alert box shows *"Form has been submitted"*.  
     - `return true` allows the form to submit.
