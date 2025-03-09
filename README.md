Build a Task Tracker App using ReactJS
Objective:
Your task is to develop a Task Tracker App using ReactJS. This app will allow users to add tasks, delete tasks, and mark tasks as completed. The interface should be intuitive, interactive, and responsive.

Output:


Requirements:
Core Features:
Add Task: Users should be able to enter a task name and add it to the task list.
Delete Task: Users should be able to remove tasks from the list by clicking a delete button.
Mark as Completed: Users should be able to mark a task as completed by clicking on it. Completed tasks should have a strike-through effect.
Live Task Updates: The task list should update in real time as users add or remove tasks.
State Management: Tasks should be stored in React’s local state (using useState hook).
UI Feedback: When a user interacts with the app, the UI should provide visual feedback (e.g., strike-through for completed tasks).
Animations (Optional): Include simple animations (like fade-in or slide-in effects) to make the UI more engaging.
Design & User Experience:
✅ Clean and Modern UI: A visually appealing and intuitive design.
✅ Fully Responsive: The app should work seamlessly on mobile, tablet, and desktop screens.
✅ Easy to Use: Minimalist design with clear buttons for adding and deleting tasks.
✅ User-Friendly Feedback: Tasks should have a different style when completed (e.g., text strikethrough, dimmed color).

Tech Stack:
ReactJS → For building the UI and handling state.
CSS (or Tailwind CSS) → For styling and responsiveness.
React Hooks → useState for managing the task list.
Development Guidelines:
Project Structure:


Follow the proper React folder structure (components folder for reusable components).
Keep the code modular and well-commented for clarity.
Functional Components:


Use React functional components instead of class-based components.
Manage the task state using the useState hook.
Handling User Inputs:


Use controlled components for input fields.
Handle form submission correctly to prevent page refresh.
Task List Rendering:


Use .map() function to render the task list dynamically.
Event Handling:


Implement click handlers for adding, deleting, and marking tasks as completed.

