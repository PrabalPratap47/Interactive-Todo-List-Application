# Persistent & Interactive Todo List Application

## Overview
This is a modern Todo List web application designed to help users manage tasks effectively. The application focuses on **data persistence**, **clear task status visualization**, and **controlled task editing**, ensuring a clean and intuitive user experience.

---

## Features

### ✓ Add Todo
- Add a new todo using the input field
- Todo instantly appears in the todo table/list

### ✓ Persistent Storage
- Todos are stored using **localStorage**
- Tasks do not disappear on page refresh

### ✓ Task Completion
- Each todo has a checkbox
- On checking:
  - Background changes from **purple (pending)** to **green (completed)**
  - Text is struck through with a line to indicate completion

### ✓ Edit Todo
- Edit button available for **pending todos only**
- Users can modify the todo text and save changes
- Completed todos **cannot be edited**

### ✓ Delete Todo
- Delete button allows removing any todo
- Todo is permanently removed from UI and localStorage

### ✓ Edit Restriction Logic
- Once a todo is marked as completed:
  - Edit button is disabled or hidden
  - Prevents accidental modification of finished tasks

---
## Preview
### Add a Todo
<img width="1518" height="827" alt="image" src="https://github.com/user-attachments/assets/af99700b-5074-4347-879d-c601e1faa19b" />
### Edit a Todo
<img width="1513" height="855" alt="image" src="https://github.com/user-attachments/assets/90c9b616-f40a-4e33-88e6-8893107bfd07" />
<img width="1513" height="855" alt="image" src="https://github.com/user-attachments/assets/5b559f17-aab9-4acf-8d6f-186eb367c830" />
<img width="1518" height="852" alt="image" src="https://github.com/user-attachments/assets/24f1721b-0e57-42be-adb0-b9c777b2893b" />




---

## Visual Indicators
- **Purple background** → Pending task  
- **Green background** → Completed task  
- **Strike-through text** → Task completed  

---

## Technologies Used
- HTML
- CSS
- JavaScript
- Browser Local Storage (localStorage API)

---

## How It Works
1. User adds a todo
2. Todo is saved in localStorage
3. UI updates dynamically
4. Checkbox toggles completion state
5. Edit/Delete actions update both UI and storage

---

## Use Case
- Daily task management
- Practice project for JavaScript, DOM manipulation, and localStorage
- Beginner-friendly CRUD-based frontend project

---

## Project Highlights
- No backend required
- Fully client-side
- Clean UX with clear task states
- Logical constraints for better data integrity

---

## Future Enhancements (Optional)
- Filter completed / pending todos
- Due dates and priority levels
- Drag and drop reordering
