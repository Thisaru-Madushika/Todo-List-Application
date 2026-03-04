# Todo List Application

A modern, responsive todo list application built with vanilla JavaScript, HTML, and CSS. Features include task filtering, persistent storage, and a clean dark-mode interface.

---

## Live Deployment

**View the application here:** https://todo-list-application2.netlify.app/

---

## Team Members & Roles

| Name (As in LMS) | Student ID | Role |
| --- | --- | --- |
| **A.L.G. Avishka Sankalpani** | ITBNM-2313-0075 | **Lead Developer** (HTML, CSS, JavaScript) |
| **S.A.Thisaru Madushika** | ITBNM-2313-0047 | **DevOps & Repository Manager** (GitHub Actions, CI/CD, Documentation) |

---

## Individual Contributions

### **A.L.G. Avishka Sankalpani - Lead Developer**

* **Frontend Structure:** Built the semantic HTML5 structure for the application.
* **Styling & UI:** Developed the modern Dark Mode interface using CSS3 (Flexbox, responsive design, and transitions).
* **Logic Implementation:** Wrote the Vanilla JavaScript for:
* Adding, toggling, and deleting tasks.
* Implementing the task filtering logic (All, Active, Completed).
* Integrating `localStorage` to ensure data persists after page refreshes.


* **Testing:** Debugged UI components and ensured cross-browser compatibility.

### **S.A.Thisaru Madushika - DevOps & Repository Manager**

* **GitHub Workflow:** Initialized the repository and managed the branching strategy (Feature branches & Pull Requests).
* **CI/CD Pipeline:** Configured `.github/workflows/ci.yml` and `deploy.yml` to automate testing and production deployment.
* **Collaboration:** Handled code reviews and documented the resolution of a merge conflict during the integration phase.
* **Documentation:** Authored the comprehensive `README.md` and ensured all project metadata was accurate.
* **Deployment:** Successfully deployed the application to a live production environment.

---

## Key Features

* **Add Tasks:** Quickly add new items using the input field or by pressing "Enter".
* **Filter System:** View tasks by status: *All*, *Active*, or *Completed*.
* **Persistent Storage:** Data is saved to the browser's `localStorage`.
* **Task Management:** Delete specific tasks and track how many items are left.
* **Bulk Actions:** "Clear Completed" button for easy list maintenance.

---

## Setup & Installation

1. **Clone the repository:**
```bash
https://github.com/Thisaru-Madushika/Todo-List-Application.git

```


2. **Open the app:**
Open `index.html` in any modern web browser.

---

# Docker Setup (Optional for DevOps Demonstration)

This project can also be containerized using Docker.

---

## 🔹 Docker Build

```bash
docker build -t todo-app .
```

This command builds the Docker image using the `Dockerfile`.

---

## 🔹 Docker Run

```bash
docker run -d -p 8080:80 --name todo-container todo-app
```

Access the application at:

```
http://localhost:8080
```

To stop the container:

```bash
docker stop todo-container
docker rm todo-container
```

---

## 🔹 Run with Docker Compose

```bash
docker-compose up --build
```

---

## 🌍 Environment Variables

This is a **static frontend application**, therefore:

* No environment variables are required.
* No backend server configuration is needed.

---

# 📁 Project Structure

```text
Todo-List-Application/
├── .github/
│   └── workflows/
│       ├── ci.yml            # CI workflow
│       └── deploy.yml        # Deployment workflow
├── src/
│   ├── index.html            # Main application file
│   ├── styles/
│   │   └── style.css         # Stylesheet
│   └── scripts/
│       └── script.js         # Application logic
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── README.md
└── package.json
```



---
