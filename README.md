# React To-Do List with Pomodoro Timer

This is a frontend project for a To-Do List application built using React. It helps users manage their tasks and incorporates a Pomodoro timer for each task to promote focused work and break sessions. The application saves all data, including tasks and theme preferences, to the browser's local storage.

## Core Features:

*   **Task Management:**
    *   **Add Tasks:** Easily create new tasks.
    *   **Edit Tasks:** Modify the description of existing tasks.
    *   **Delete Tasks:** Remove tasks that are no longer needed.
    *   **Toggle Status:** Mark tasks as "in-progress" or "completed."

*   **Task Organization & Viewing:**
    *   **Search:** Quickly find tasks using a search bar.
    *   **Filter:** Filter tasks by their status (All, In Progress, Completed).

*   **Integrated Pomodoro Timer:**
    *   Each active (non-completed) task has its own Pomodoro timer.
    *   **Work/Break Modes:** The timer operates in "Work" mode (defaulting to 5 units of time) and "Break" mode (defaulting to 10 units of time).
    *   **Timer Controls:** Users can Start, Stop, and Reset the timer for each task.
    *   **Automatic Mode Switching:** The timer automatically switches between Work and Break modes upon completion of a cycle.
    *   **Task Interaction Lock:** When a task's Pomodoro timer is in "Break" mode, interactions like editing, deleting, or marking the task as complete are temporarily disabled to encourage taking a break.

*   **User Interface:**
    *   **Theme Toggle:** Switch between a Light and Dark theme for visual preference.
    *   **Responsive Design:** The interface is designed to be user-friendly.

*   **Data Persistence:**
    *   **Local Storage:** All tasks, their current states (including Pomodoro timer progress and mode), and the selected theme are saved in the browser's local storage. This means your data persists even after closing the browser or refreshing the page.

## How to Run

This project was bootstrapped with Create React App. To run it locally:

1.  Navigate to the `todolist` directory.
2.  Install dependencies: `npm install`
3.  Start the development server: `npm start`

This will open the application in your default web browser, typically at `http://localhost:3000`.
