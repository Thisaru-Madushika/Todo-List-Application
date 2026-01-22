# Todo List Application

A modern, responsive todo list application built with vanilla JavaScript, HTML, and CSS. Features include task filtering, persistent storage, and a clean dark-mode interface.

---

## 🚀 Live Deployment

**View the application here:** https://todo-list-application2.netlify.app/

---

## 👥 Team Members & Roles

| Name (As in LMS) | Student ID | Role |
| --- | --- | --- |
| **A.L.G. Avishka Sankalpani** | ITBNM-2313-0075 | **Lead Developer** (HTML, CSS, JavaScript) |
| **S.A.Thisaru Madushika** | ITBNM-2313-0047 | **DevOps & Repository Manager** (GitHub Actions, CI/CD, Documentation) |

---

## 🛠️ Individual Contributions

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

## ✨ Key Features

* **Add Tasks:** Quickly add new items using the input field or by pressing "Enter".
* **Filter System:** View tasks by status: *All*, *Active*, or *Completed*.
* **Persistent Storage:** Data is saved to the browser's `localStorage`.
* **Task Management:** Delete specific tasks and track how many items are left.
* **Bulk Actions:** "Clear Completed" button for easy list maintenance.

---

## 🔧 Setup & Installation

1. **Clone the repository:**
```bash
git clone https://github.com/[username]/[repo].git

```


2. **Open the app:**
Open `index.html` in any modern web browser.

---

## 📂 Project Structure

```text
Todo List Application/
├── .github/
│   └── workflows/
│       ├── ci.yml            # CI workflow
│       └── deploy.yml        # Deployment workflow
├── src/                      # Source code
│   ├── index.html            # Main application file
│   ├── styles/
│   │   └── style.css         # External stylesheet
│   └── scripts/
│       └── script.js         # Main logic and functionality
├── .gitignore                # Git ignore file
├── README.md                 # Complete documentation
└── package.json              # Project dependencies

```

---
