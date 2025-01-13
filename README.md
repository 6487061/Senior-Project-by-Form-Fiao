# Senior-Project-by-Form-Fiao

# Project Management Tool

## Overview
This is a web-based Project Management Tool designed to manage projects, tasks, and users effectively. It follows the **MVC (Model-View-Controller)** architecture to ensure modularity, scalability, and maintainability.

## Project Structure
The following structure outlines the organization of the project:

```
project-management-tool/
│
├── models/                # Model: Manages data and database interactions
│   ├── Project.js         # Handles project data
│   ├── Task.js            # Handles task data
│   └── User.js            # Handles user data
│
├── views/                 # View: HTML/CSS/JS templates for the UI
│   ├── dashboard.ejs      # Dashboard page
│   ├── project-details.ejs # Project detail page
│   └── error.ejs          # Error page
│
├── controllers/           # Controller: Handles request/response logic
│   ├── projectController.js # Logic for project management
│   ├── taskController.js    # Logic for task management
│   └── userController.js    # Logic for user management
│
├── public/                # Static files such as CSS/JS/Images
│   ├── css/               # Stylesheets
│   ├── js/                # Client-side JavaScript
│   └── images/            # Images
│
├── routes/                # Routing: Manages application routes
│   ├── projectRoutes.js   # Routes for project-related actions
│   ├── taskRoutes.js      # Routes for task-related actions
│   └── userRoutes.js      # Routes for user-related actions
│
├── config/                # Configuration files
│   └── database.js        # Database connection settings
│
└── app.js                 # Entry point of the application
```
