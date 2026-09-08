// Bug Tracking System - Main Application JavaScript

// ==================== DATA INITIALIZATION ====================

// Default admin credentials
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123",
};

// Initialize localStorage with sample data if empty
// this function creates and stores our start up data, for when the program runs at first.
function initializeData() {
  //If there is NO value stored under 'bugTracker_initialized'…
  if (!localStorage.getItem("bugTracker_initialized")) {
    // Sample People
    const samplePeople = [
      {
        id: 1,
        name: "John",
        surname: "Smith",
        email: "john.smith@company.com",
        username: "jsmith",
        avatar:
          "https://www.shutterstock.com/image-photo/confident-young-african-american-business-600nw-2418465349.jpg",
      },
      {
        id: 2,
        name: "Sarah",
        surname: "Johnson",
        email: "sarah.j@company.com",
        username: "sjohnson",
        avatar: "",
      },
      {
        id: 3,
        name: "Michael",
        surname: "Brown",
        email: "mbrown@company.com",
        username: "mbrown",
        avatar: "",
      },
      {
        id: 4,
        name: "Emily",
        surname: "Davis",
        email: "emily.d@company.com",
        username: "edavis",
        avatar: "",
      },
      {
        id: 5,
        name: "David",
        surname: "Wilson",
        email: "dwilson@company.com",
        username: "dwilson",
        avatar: "",
      },
    ];

    // Sample Projects
    const sampleProjects = [
      {
        id: 1,
        name: "E-Commerce Platform",
        description: "Main shopping website application",
      },
      {
        id: 2,
        name: "Mobile App",
        description: "iOS and Android mobile application",
      },
      {
        id: 3,
        name: "Admin Dashboard",
        description: "Internal administration portal",
      },
      { id: 4, name: "API Gateway", description: "RESTful API service layer" },
    ];

    // Sample Issues (10+ issues as required)
    const today = new Date();
    const sampleIssues = [
      {
        id: 1,
        summary: "Login button not working on mobile",
        description:
          "Users report that the login button is unresponsive on mobile devices running iOS 16.",
        projectId: 2,
        identifiedBy: 1,
        assignedTo: 2,
        identifiedDate: formatDate(
          new Date(today.getTime() - 10 * 24 * 60 * 60 * 1000),
        ),

        /*formate date converts the date into a readable formate. new date converts that timestamp back into a Date object 
                GetTime converts date into miliseconds which is a number u can perform calulations on. This is just math to calculate 10 days in milliseconds*/

        status: "open",
        priority: "high",
        targetDate: formatDate(
          new Date(today.getTime() + 5 * 24 * 60 * 60 * 1000),
        ), // go forward in time
        actualDate: "",
        resolutionSummary: "",
      },
      {
        id: 2,
        summary: "Shopping cart total calculation error",
        description:
          "The cart is not correctly calculating discounts when multiple coupons are applied.",
        projectId: 1,
        identifiedBy: 3,
        assignedTo: 1,
        identifiedDate: formatDate(
          new Date(today.getTime() - 15 * 24 * 60 * 60 * 1000),
        ),
        status: "resolved",
        priority: "high",
        targetDate: formatDate(
          new Date(today.getTime() - 5 * 24 * 60 * 60 * 1000),
        ),
        actualDate: formatDate(
          new Date(today.getTime() - 6 * 24 * 60 * 60 * 1000),
        ),
        resolutionSummary: "Fixed discount calculation logic in CartService.js",
      },
      {
        id: 3,
        summary: "Dashboard charts not loading",
        description:
          "Charts on the admin dashboard fail to load data and show a spinning loader indefinitely.",
        projectId: 3,
        identifiedBy: 4,
        assignedTo: 3,
        identifiedDate: formatDate(
          new Date(today.getTime() - 20 * 24 * 60 * 60 * 1000),
        ),
        status: "overdue",
        priority: "medium",
        targetDate: formatDate(
          new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000),
        ),
        actualDate: "",
        resolutionSummary: "",
      },
      {
        id: 4,
        summary: "API timeout on large requests",
        description:
          "Requests with large payloads (>5MB) are timing out after 30 seconds.",
        projectId: 4,
        identifiedBy: 5,
        assignedTo: 5,
        identifiedDate: formatDate(
          new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000),
        ),
        status: "open",
        priority: "medium",
        targetDate: formatDate(
          new Date(today.getTime() + 10 * 24 * 60 * 60 * 1000),
        ),
        actualDate: "",
        resolutionSummary: "",
      },
      {
        id: 5,
        summary: "User profile image upload fails",
        description:
          "PNG images larger than 2MB fail to upload with no error message.",
        projectId: 1,
        identifiedBy: 2,
        assignedTo: 4,
        identifiedDate: formatDate(
          new Date(today.getTime() - 5 * 24 * 60 * 60 * 1000),
        ),
        status: "open",
        priority: "low",
        targetDate: formatDate(
          new Date(today.getTime() + 14 * 24 * 60 * 60 * 1000),
        ),
        actualDate: "",
        resolutionSummary: "",
      },
      {
        id: 6,
        summary: "Push notifications not received",
        description:
          "Android users are not receiving push notifications after app update.",
        projectId: 2,
        identifiedBy: 1,
        assignedTo: 2,
        identifiedDate: formatDate(
          new Date(today.getTime() - 12 * 24 * 60 * 60 * 1000),
        ),
        status: "resolved",
        priority: "high",
        targetDate: formatDate(
          new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000),
        ),
        actualDate: formatDate(
          new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000),
        ),
        resolutionSummary:
          "Updated Firebase configuration and fixed token refresh logic",
      },
      {
        id: 7,
        summary: "Password reset email not sent",
        description:
          'Users clicking "Forgot Password" never receive the reset email.',
        projectId: 1,
        identifiedBy: 4,
        assignedTo: 1,
        identifiedDate: formatDate(
          new Date(today.getTime() - 25 * 24 * 60 * 60 * 1000),
        ),
        status: "overdue",
        priority: "high",
        targetDate: formatDate(
          new Date(today.getTime() - 10 * 24 * 60 * 60 * 1000),
        ),
        actualDate: "",
        resolutionSummary: "",
      },
      {
        id: 8,
        summary: "Report export generates empty PDF",
        description:
          "Exporting sales reports to PDF results in blank documents.",
        projectId: 3,
        identifiedBy: 3,
        assignedTo: 3,
        identifiedDate: formatDate(
          new Date(today.getTime() - 8 * 24 * 60 * 60 * 1000),
        ),
        status: "open",
        priority: "medium",
        targetDate: formatDate(
          new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000),
        ),
        actualDate: "",
        resolutionSummary: "",
      },
      {
        id: 9,
        summary: "Search function returns wrong results",
        description: "Product search occasionally returns unrelated items.",
        projectId: 1,
        identifiedBy: 5,
        assignedTo: 5,
        identifiedDate: formatDate(
          new Date(today.getTime() - 18 * 24 * 60 * 60 * 1000),
        ),
        status: "resolved",
        priority: "medium",
        targetDate: formatDate(
          new Date(today.getTime() - 8 * 24 * 60 * 60 * 1000),
        ),
        actualDate: formatDate(
          new Date(today.getTime() - 9 * 24 * 60 * 60 * 1000),
        ),
        resolutionSummary:
          "Rebuilt search index and fixed Elasticsearch query syntax",
      },
      {
        id: 10,
        summary: "Dark mode toggle not persisting",
        description:
          "User preference for dark mode resets after closing the app.",
        projectId: 2,
        identifiedBy: 2,
        assignedTo: 4,
        identifiedDate: formatDate(
          new Date(today.getTime() - 3 * 24 * 60 * 60 * 1000),
        ),
        status: "open",
        priority: "low",
        targetDate: formatDate(
          new Date(today.getTime() + 21 * 24 * 60 * 60 * 1000),
        ),
        actualDate: "",
        resolutionSummary: "",
      },
      {
        id: 11,
        summary: "Rate limiting not working",
        description:
          "API endpoints are not enforcing rate limits, causing server overload.",
        projectId: 4,
        identifiedBy: 1,
        assignedTo: "",
        identifiedDate: formatDate(
          new Date(today.getTime() - 2 * 24 * 60 * 60 * 1000),
        ),
        status: "open",
        priority: "high",
        targetDate: formatDate(
          new Date(today.getTime() + 3 * 24 * 60 * 60 * 1000),
        ),
        actualDate: "",
        resolutionSummary: "",
      },
      {
        id: 12,
        summary: "Memory leak in user session",
        description:
          "Long-running sessions cause memory consumption to grow continuously.",
        projectId: 3,
        identifiedBy: 3,
        assignedTo: 1,
        identifiedDate: formatDate(
          new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000),
        ),
        status: "resolved",
        priority: "high",
        targetDate: formatDate(
          new Date(today.getTime() - 15 * 24 * 60 * 60 * 1000),
        ),
        actualDate: formatDate(
          new Date(today.getTime() - 14 * 24 * 60 * 60 * 1000),
        ),
        resolutionSummary:
          "Fixed event listener cleanup and implemented proper garbage collection",
      },
    ];
    //// we store these values in localstorage, the first parameter is the key, second paramter stores the converted array of objects
    localStorage.setItem("bugTracker_people", JSON.stringify(samplePeople));
    localStorage.setItem("bugTracker_projects", JSON.stringify(sampleProjects));
    localStorage.setItem("bugTracker_issues", JSON.stringify(sampleIssues));
    localStorage.setItem("bugTracker_initialized", "true");
  }
}

// Markdown documentation content
const documentationMarkdown = `
# Bug Tracking System Documentation

## Overview

The Bug Tracking System is a web-based application designed to track, manage, and resolve software issues and defects. This system enables teams to efficiently manage their bug reports, assign tasks to team members, and monitor progress throughout the development lifecycle.

## Features

### 1. Issue Management
- **Create Issues**: Log new bugs with detailed information including summary, description, priority, and target dates
- **Edit Issues**: Update issue details, status, and resolution information
- **View Issues**: Browse all issues in a table view or view detailed information for individual issues
- **Delete Issues**: Remove issues that are no longer relevant

### 2. Dashboard
- Visual overview of all issues organized by status (Open, Resolved, Overdue)
- Quick statistics showing total counts for each status
- Kanban-style board for easy status tracking

### 3. People Management
- Add team members who can be assigned to issues
- Store contact information including name, email, and username
- Optional profile pictures for visual identification

### 4. Project Management
- Create and manage multiple projects
- Link issues to specific projects for better organization
- Track issues per project

## Issue Statuses

| Status | Description |
|--------|-------------|
| **Open** | Issue is active and being worked on |
| **Resolved** | Issue has been fixed and verified |
| **Overdue** | Issue has passed its target resolution date |

## Priority Levels

| Priority | Description |
|----------|-------------|
| **High** | Critical issues requiring immediate attention |
| **Medium** | Important issues that should be addressed soon |
| **Low** | Minor issues that can be scheduled for later |

## Getting Started

### Login
Use the default admin credentials to access the system:
- **Username**: admin
- **Password**: admin123

### Creating Your First Issue
1. Navigate to the Issues page
2. Click "New Issue"
3. Fill in the required fields:
   - Summary: Brief description of the bug
   - Description: Detailed explanation
   - Project: Select the related project
   - Identified By: Who found the bug
   - Priority: Set importance level
   - Status: Current state
4. Click "Save Issue"

### Assigning Issues
- Issues can be assigned when created or updated later
- Select a team member from the "Assigned To" dropdown
- Unassigned issues appear without an assignee

## Data Storage

This application uses **localStorage** for data persistence. All data is stored locally in your browser and will persist across sessions.

### Important Notes:
- Data is browser-specific and won't sync across devices
- Clearing browser data will remove all stored information
- For production use, consider implementing a backend database

## Technical Stack

- **HTML5**: Structure and markup
- **CSS3**: Styling with custom properties
- **Bootstrap 5**: UI framework for responsive design
- **JavaScript (ES6+)**: Application logic
- **localStorage**: Client-side data persistence
- **Marked.js**: Markdown rendering

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| \`Ctrl + N\` | New Issue (when on Issues page) |
| \`Escape\` | Close modal dialogs |

## Support

For issues or questions about this Bug Tracking System, please contact the development team or refer to the source code documentation.

---

*Version 1.0 - Bug Tracking System*
`;

// ==================== UTILITY FUNCTIONS ====================

function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  return d.toISOString().split("T")[0];
}

function formatDisplayDate(dateString) {
  if (!dateString) return "N/A";
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function generateId(items) {
  if (!items || items.length === 0) return 1;
  return Math.max(...items.map((item) => item.id)) + 1;
}

function showToast(title, message, type = "info") {
  const toast = document.getElementById("toast");
  const toastTitle = document.getElementById("toastTitle");
  const toastMessage = document.getElementById("toastMessage");
  const toastIcon = document.getElementById("toastIcon");

  toastTitle.textContent = title;
  toastMessage.textContent = message;

  // Set icon based on type
  const icons = {
    success: "bi-check-circle text-success",
    error: "bi-x-circle text-danger",
    warning: "bi-exclamation-triangle text-warning",
    info: "bi-info-circle text-primary",
  };
  toastIcon.className = `bi ${icons[type] || icons.info} me-2`;

  const bsToast = new bootstrap.Toast(toast);
  bsToast.show();
}

// ==================== DATA ACCESS FUNCTIONS ====================
// This function gets the value stores under key bugTracker_people and coverts it back into its orignal data type this case array.
// or If nothing exists → return empty array. reason is since it will return null if nothing exists if u we to use the same value later your code would crash.
function getPeople() {
  return JSON.parse(localStorage.getItem("bugTracker_people")) || [];
}
// this takes people that will be added dynamically by user and stores them in local storage.
function savePeople(people) {
  localStorage.setItem("bugTracker_people", JSON.stringify(people));
}

function getProjects() {
  return JSON.parse(localStorage.getItem("bugTracker_projects")) || [];
}

function saveProjects(projects) {
  localStorage.setItem("bugTracker_projects", JSON.stringify(projects));
}

function getIssues() {
  return JSON.parse(localStorage.getItem("bugTracker_issues")) || [];
}

function saveIssues(issues) {
  localStorage.setItem("bugTracker_issues", JSON.stringify(issues));
}

function getPersonById(id) {
  const people = getPeople();
  return people.find((p) => p.id === parseInt(id));
}

function getProjectById(id) {
  const projects = getProjects();
  return projects.find((p) => p.id === parseInt(id));
}

function getIssueById(id) {
  const issues = getIssues();
  return issues.find((i) => i.id === parseInt(id));
}

// ==================== AUTHENTICATION ====================
/*This function handles user authentication verification. It checks sessionStorage for login status, 
if logged in, it shows the main app, dashboard and displays a welcome message; if not, it displays the login modal.
*/

function checkAuth() {
  const isLoggedIn = sessionStorage.getItem("bugTracker_loggedIn");
  // Remove 'd-none' class to display the main application interface
  if (isLoggedIn === "true") {
    document.getElementById("mainApp").classList.remove("d-none");
    document.getElementById("currentUser").textContent =
      sessionStorage.getItem("bugTracker_user") || "Admin";
    showPage("dashboard");
  } else {
    const loginModal = new bootstrap.Modal(
      document.getElementById("loginModal"),
    );
    loginModal.show();
  }
}

function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorDiv = document.getElementById("loginError");

  if (
    username === ADMIN_CREDENTIALS.username &&
    password === ADMIN_CREDENTIALS.password
  ) {
    sessionStorage.setItem("bugTracker_loggedIn", "true");
    sessionStorage.setItem("bugTracker_user", "Admin");

    const loginModal = bootstrap.Modal.getInstance(
      document.getElementById("loginModal"),
    );
    loginModal.hide();

    document.getElementById("mainApp").classList.remove("d-none");
    document.getElementById("currentUser").textContent = "Admin";
    showToast("Welcome", "Successfully logged in!", "success");
    showPage("dashboard"); // Load the dashboard page as the default view after login
  } else {
    errorDiv.textContent = "Invalid username or password";
    errorDiv.classList.remove("d-none");
  }
}

function handleLogout() {
  sessionStorage.removeItem("bugTracker_loggedIn");
  sessionStorage.removeItem("bugTracker_user");
  document.getElementById("mainApp").classList.add("d-none");
  document.getElementById("loginForm").reset();
  document.getElementById("loginError").classList.add("d-none");
  const loginModal = new bootstrap.Modal(document.getElementById("loginModal")); // User not authenticated - initialize and show the login modal
  loginModal.show();
}

// ==================== NAVIGATION ====================

function showPage(pageName) {
  // Hide all pages -Loop through every page content section and hide them
  document.querySelectorAll(".page-content").forEach((page) => {
    page.classList.add("d-none");
  });

  // Update nav links - Set the active state on the current page's nav link
  document.querySelectorAll(".nav-link[data-page]").forEach((link) => {
    link.classList.remove("active");
    if (link.dataset.page === pageName) {
      link.classList.add("active");
    }
  });

  // Show selected page - Display only the page that was requested
  const pageElement = document.getElementById(`${pageName}Page`);
  if (pageElement) {
    pageElement.classList.remove("d-none");
  }

  // Load page-specific content - Call the appropriate function to populate content
  switch (pageName) {
    case "dashboard":
      loadDashboard();
      break;
    case "issues":
      loadIssues();
      break;
    case "people":
      loadPeople();
      break;
    case "projects":
      loadProjects();
      break;
    case "documentation":
      loadDocumentation();
      break;
  }
}

// ==================== DASHBOARD ====================

function loadDashboard() {
  const issues = getIssues();

  // Update status
  const total = issues.length;
  const open = issues.filter((i) => i.status === "open").length;
  const resolved = issues.filter((i) => i.status === "resolved").length;
  const overdue = issues.filter((i) => i.status === "overdue").length;

  document.getElementById("totalIssues").textContent = total;
  document.getElementById("openIssues").textContent = open;
  document.getElementById("resolvedIssues").textContent = resolved;
  document.getElementById("overdueIssues").textContent = overdue;

  // Populate Kanban columns
  renderKanbanColumn(
    "openIssuesList",
    issues.filter((i) => i.status === "open"),
  );
  renderKanbanColumn(
    "resolvedIssuesList",
    issues.filter((i) => i.status === "resolved"),
  );
  renderKanbanColumn(
    "overdueIssuesList",
    issues.filter((i) => i.status === "overdue"),
  );
}
//Renders a list of issues as cards within a specific Kanban column (Open, Resolved, or Overdue)
function renderKanbanColumn(elementId, issues) {
  const container = document.getElementById(elementId);

  if (issues.length === 0) {
    container.innerHTML = `
            <div class="text-center text-muted py-4">
                <i class="bi bi-inbox fs-2"></i>
                <p class="mb-0">No issues</p>
            </div>
        `;
    return;
  }
  // Map each issue to an HTML card and join them together
  container.innerHTML = issues
    .map((issue) => {
      const project = getProjectById(issue.projectId);
      const assignee = issue.assignedTo
        ? getPersonById(issue.assignedTo)
        : null;

      // Generate HTML for a single issue card
      return `
            <div class="card issue-card" onclick="viewIssueDetail(${issue.id})">
                <div class="card-body p-3">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <span class="badge priority-${issue.priority}">${issue.priority.toUpperCase()}</span>
                        <small class="text-muted">#${issue.id}</small>
                    </div>
                    <h6 class="card-title mb-2">${escapeHtml(issue.summary)}</h6>
                    <p class="card-text small text-muted mb-2">${project ? escapeHtml(project.name) : "Unknown Project"}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <small class="text-muted">
                            <i class="bi bi-calendar me-1"></i>${formatDisplayDate(issue.targetDate)}
                        </small>
                        ${
                          assignee
                            ? `
                            <span class="badge bg-secondary">
                                <i class="bi bi-person me-1"></i>${escapeHtml(assignee.name)}  
                            </span>
                        `
                            : '<span class="badge bg-light text-dark">Unassigned</span>'
                        }
                    </div>
                </div>
            </div>
        `;
    })
    .join(""); // Join all card HTML strings into one complete string
}

// ==================== ISSUES ====================
//function to load issues and call back other functions
function loadIssues() {
  populateProjectFilter();
  renderIssuesTable();
}
// Function to populate the project filter dropdown
function populateProjectFilter() {
  const projects = getProjects();
  const filterSelect = document.getElementById("filterProject");

  // Keep the "All Projects" option
  filterSelect.innerHTML = '<option value="">All Projects</option>';

  projects.forEach((project) => {
    filterSelect.innerHTML += `<option value="${project.id}">${escapeHtml(project.name)}</option>`;
  });
}

// Function to render issues in table format
function renderIssuesTable() {
  let issues = getIssues();

  // Apply filters
  const statusFilter = document.getElementById("filterStatus").value;
  const priorityFilter = document.getElementById("filterPriority").value;
  const projectFilter = document.getElementById("filterProject").value;
  const searchTerm = document
    .getElementById("searchIssues")
    .value.toLowerCase();
//Apply status filter if selected
  if (statusFilter) {
    issues = issues.filter((i) => i.status === statusFilter);
  } 
  //Apply priority filter if selected
  if (priorityFilter) {
    issues = issues.filter((i) => i.priority === priorityFilter);
  }
  //Apply project filter if selected
  if (projectFilter) {
    issues = issues.filter((i) => i.projectId === parseInt(projectFilter));
  }
  if (searchTerm) {
    //Apply search filter checks for summary or description
    issues = issues.filter(
      (i) =>
        i.summary.toLowerCase().includes(searchTerm) ||
        i.description.toLowerCase().includes(searchTerm),
    );
  }
//Get the table where rows will be selected
  const tbody = document.getElementById("issuesTableBody");

  if (issues.length === 0) {
    // If no issues match filters, show an empty state message
    tbody.innerHTML = `
            <tr>
                <td colspan="8" class="text-center py-5">
                    <div class="empty-state">
                        <i class="bi bi-inbox"></i>
                        <h5>No issues found</h5>
                        <p>Try adjusting your filters or create a new issue</p>
                    </div>
                </td>
            </tr>
        `;
    return; //stop execution if nothing to display
  }
// Convert the list of issues into HTML table rows and insert into the table body
  tbody.innerHTML = issues
    .map((issue) => {
        // Get the project associated with this issue using its projectId
      const project = getProjectById(issue.projectId);
      // If the issue has an assigned user, fetch their details; otherwise set to null
      const assignee = issue.assignedTo
        ? getPersonById(issue.assignedTo)
        : null;
 // Return a table row (HTML string) for each issue
      return `
            <tr>
                <td><strong>#${issue.id}</strong></td>
                <td>
                    <a href="#" onclick="viewIssueDetail(${issue.id}); return false;" class="text-decoration-none">
                        ${escapeHtml(issue.summary)}
                    </a>
                </td>
                <td>${project ? escapeHtml(project.name) : "N/A"}</td>
                <td>${assignee ? escapeHtml(assignee.name + " " + assignee.surname) : '<span class="text-muted">Unassigned</span>'}</td>
                <td><span class="badge priority-${issue.priority}">${issue.priority.toUpperCase()}</span></td>
                <td><span class="badge status-${issue.status}">${issue.status.toUpperCase()}</span></td>
                <td>${formatDisplayDate(issue.targetDate)}</td>
                <td>
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-outline-primary btn-action" onclick="viewIssueDetail(${issue.id})" title="View">
                            <i class="bi bi-eye"></i>
                        </button>
                        <button class="btn btn-outline-secondary btn-action" onclick="editIssue(${issue.id})" title="Edit">
                            <i class="bi bi-pencil"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-action" onclick="confirmDeleteIssue(${issue.id})" title="Delete">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    })
    .join("");  // Combine all generated rows into one single HTML string
}
// Function to prepare and open the "New Issue" modal form
function openNewIssueModal() {
     // Set the modal title to indicate we are creating a new issue
  document.getElementById("issueModalTitle").textContent = "New Issue";
  // Reset the form fields (clears any previous input data)
  document.getElementById("issueForm").reset();
  // Clear the hidden issue ID field
  // This ensures the form is treated as a NEW issue (not editing an existing one)
  document.getElementById("issueId").value = "";
  // Set the "identified date" field to today's date (formatted)
  document.getElementById("issueIdentifiedDate").value = formatDate(new Date());
  // Populate dropdown fields (e.g., projects, assignees, priorities)
  // This ensures the latest data is available when creating a new issue
populateIssueDropdowns(); 
}
// Function to populate all dropdowns in the Issue form
function populateIssueDropdowns() {
    // Retrieve data lists for people and projects
  const people = getPeople();
  const projects = getProjects();
// Get dropdown elements from the DOM
  const projectSelect = document.getElementById("issueProject");
  const identifiedBySelect = document.getElementById("issueIdentifiedBy");
  const assignedToSelect = document.getElementById("issueAssignedTo");

  projectSelect.innerHTML =
  // Default placeholder option
    '<option value="">Select Project</option>' +
    // Convert each project into an <option> element
    projects
      .map((p) => `<option value="${p.id}">${escapeHtml(p.name)}</option>`)
      .join("");

  identifiedBySelect.innerHTML =
    '<option value="">Select Person</option>' +
    // Convert each person into an option (full name shown)
    people
      .map(
        (p) =>
          `<option value="${p.id}">${escapeHtml(p.name + " " + p.surname)}</option>`,
      )
      .join("");

  assignedToSelect.innerHTML =
    '<option value="">Unassigned</option>' +
     // Same list of people reused for assignment options
    people
      .map(
        (p) =>
          `<option value="${p.id}">${escapeHtml(p.name + " " + p.surname)}</option>`,
      )
      .join("");
}

//Edit Issue Function.Populates the issue modal form with existing issue data for editing

function editIssue(id) {
  const issue = getIssueById(id);
  if (!issue) return;

  document.getElementById("issueModalTitle").textContent = "Edit Issue";
  populateIssueDropdowns();

  document.getElementById("issueId").value = issue.id;
  document.getElementById("issueSummary").value = issue.summary;
  document.getElementById("issueDescription").value = issue.description;
  document.getElementById("issueProject").value = issue.projectId;
  document.getElementById("issueIdentifiedBy").value = issue.identifiedBy;
  document.getElementById("issueAssignedTo").value = issue.assignedTo || "";
  document.getElementById("issueIdentifiedDate").value = issue.identifiedDate;
  document.getElementById("issuePriority").value = issue.priority;
  document.getElementById("issueStatus").value = issue.status;
  document.getElementById("issueTargetDate").value = issue.targetDate || "";
  document.getElementById("issueActualDate").value = issue.actualDate || "";
  document.getElementById("issueResolutionSummary").value =
    issue.resolutionSummary || "";

  const modal = new bootstrap.Modal(document.getElementById("issueModal")); // DISPLAY THE MODAL - Show the populated form for user to edit
  modal.show();
}
//Validates, collects, and saves issue data (either creates new or updates existing)
function saveIssue() {
  const form = document.getElementById("issueForm");
  // VALIDATION - Check if all required fields are filled correctly
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const issues = getIssues();
  const issueId = document.getElementById("issueId").value; // Check if we have an issue ID (editing existing) or not (creating new)

  // Assignment Information (convert to integers, handle empty values)
  const issueData = {
    summary: document.getElementById("issueSummary").value,
    description: document.getElementById("issueDescription").value,
    projectId: parseInt(document.getElementById("issueProject").value),
    identifiedBy: parseInt(document.getElementById("issueIdentifiedBy").value),
    assignedTo: document.getElementById("issueAssignedTo").value
      ? parseInt(document.getElementById("issueAssignedTo").value)
      : "",
    identifiedDate: document.getElementById("issueIdentifiedDate").value, // Date Information
    priority: document.getElementById("issuePriority").value,
    status: document.getElementById("issueStatus").value,
    targetDate: document.getElementById("issueTargetDate").value,
    actualDate: document.getElementById("issueActualDate").value,
    resolutionSummary: document.getElementById("issueResolutionSummary").value,
  };

  if (issueId) {
    // Update existing issue
    const index = issues.findIndex((i) => i.id === parseInt(issueId));
    if (index !== -1) {
      issues[index] = { ...issues[index], ...issueData };
    }
    showToast("Success", "Issue updated successfully!", "success");
  } else {
    // Create new issue
    issueData.id = generateId(issues);
    issues.push(issueData);
    showToast("Success", "Issue created successfully!", "success");
  }

  saveIssues(issues);

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("issueModal"),
  );
  modal.hide();

  loadIssues();
  loadDashboard();
}

function confirmDeleteIssue(id) {
  document.getElementById("deleteMessage").textContent =
    "Are you sure you want to delete this issue?";
  document.getElementById("confirmDeleteBtn").onclick = () => deleteIssue(id);

  const modal = new bootstrap.Modal(document.getElementById("deleteModal"));
  modal.show();
}

function deleteIssue(id) {
  let issues = getIssues();
  issues = issues.filter((i) => i.id !== id);
  saveIssues(issues);

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("deleteModal"),
  );
  modal.hide();

  showToast("Deleted", "Issue has been deleted", "success");
  loadIssues();
  loadDashboard();
}

function viewIssueDetail(id) {
  const issue = getIssueById(id);
  if (!issue) return;

  const project = getProjectById(issue.projectId);
  const identifiedBy = getPersonById(issue.identifiedBy);
  const assignee = issue.assignedTo ? getPersonById(issue.assignedTo) : null;

  const content = `
        <div class="card">
            <div class="card-body">
                <div class="issue-detail-header mb-4">
                    <div>
                        <h3 class="mb-2">${escapeHtml(issue.summary)}</h3>
                        <p class="text-muted mb-0">Issue #${issue.id}</p>
                    </div>
                    <div class="issue-detail-badges">
                        <span class="badge status-${issue.status} fs-6">${issue.status.toUpperCase()}</span>
                        <span class="badge priority-${issue.priority} fs-6">${issue.priority.toUpperCase()}</span>
                    </div>
                </div>
                
                <div class="row">
                    <div class="col-md-8">
                        <div class="detail-section">
                            <div class="detail-label">Description</div>
                            <div class="detail-value">${escapeHtml(issue.description)}</div>
                        </div>
                        
                        ${
                          issue.resolutionSummary
                            ? `
                            <div class="detail-section">
                                <div class="detail-label">Resolution Summary</div>
                                <div class="detail-value">${escapeHtml(issue.resolutionSummary)}</div>
                            </div>
                        `
                            : ""
                        }
                    </div>
                    
                    <div class="col-md-4">
                        <div class="card bg-light">
                            <div class="card-body">
                                <div class="detail-section">
                                    <div class="detail-label">Project</div>
                                    <div class="detail-value">${project ? escapeHtml(project.name) : "N/A"}</div>
                                </div>
                                
                                <div class="detail-section">
                                    <div class="detail-label">Identified By</div>
                                    <div class="detail-value">${identifiedBy ? escapeHtml(identifiedBy.name + " " + identifiedBy.surname) : "N/A"}</div>
                                </div>
                                
                                <div class="detail-section">
                                    <div class="detail-label">Assigned To</div>
                                    <div class="detail-value">${assignee ? escapeHtml(assignee.name + " " + assignee.surname) : "Unassigned"}</div>
                                </div>
                                
                                <div class="detail-section">
                                    <div class="detail-label">Date Identified</div>
                                    <div class="detail-value">${formatDisplayDate(issue.identifiedDate)}</div>
                                </div>
                                
                                <div class="detail-section">
                                    <div class="detail-label">Target Date</div>
                                    <div class="detail-value">${formatDisplayDate(issue.targetDate)}</div>
                                </div>
                                
                                <div class="detail-section">
                                    <div class="detail-label">Actual Resolution Date</div>
                                    <div class="detail-value">${formatDisplayDate(issue.actualDate)}</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="mt-3">
                            <button class="btn btn-primary w-100 mb-2" onclick="editIssue(${issue.id})">
                                <i class="bi bi-pencil me-2"></i>Edit Issue
                            </button>
                            <button class="btn btn-outline-danger w-100" onclick="confirmDeleteIssue(${issue.id})">
                                <i class="bi bi-trash me-2"></i>Delete Issue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  document.getElementById("issueDetailContent").innerHTML = content;

  // Hide all pages and show issue detail
  document.querySelectorAll(".page-content").forEach((page) => {
    page.classList.add("d-none");
  });
  document.getElementById("issueDetailPage").classList.remove("d-none");

  // Update nav to show Issues as active
  document.querySelectorAll(".nav-link[data-page]").forEach((link) => {
    link.classList.remove("active");
    if (link.dataset.page === "issues") {
      link.classList.add("active");
    }
  });
}

// ==================== PEOPLE ====================

function loadPeople() {
  const people = getPeople();
  const grid = document.getElementById("peopleGrid");

  if (people.length === 0) {
    grid.innerHTML = `
            <div class="col-12">
                <div class="empty-state">
                    <i class="bi bi-people"></i>
                    <h5>No people added yet</h5>
                    <p>Add team members to assign them to issues</p>
                </div>
            </div>
        `;
    return; // stops function
  }
  // if the exist loop through each person and create a card.
  grid.innerHTML = people
    .map((person) => {
      const issueCount = getIssues().filter(
        (i) => i.assignedTo === person.id,
      ).length; //// Finds how many bugs are assigned to that person
      const initials = (person.name[0] + person.surname[0]).toUpperCase();
      ////If the person has an avatar image, show it. Otherwise show initials.
      // javascript treats person.avatar like a falsy value.
      // escapehtml is used so that the input given by user is not treated as html, to try prevent dangerous code.
      return `
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="card person-card h-100">
                    ${
                      person.avatar
                        ? `<img src="${escapeHtml(person.avatar)}" alt="${escapeHtml(person.name)}" class="person-avatar mx-auto">`
                        : `<div class="person-avatar-placeholder">${initials}</div>`
                    }
                    <h5 class="card-title mb-1">${escapeHtml(person.name)} ${escapeHtml(person.surname)}</h5>
                    <p class="text-muted small mb-2">@${escapeHtml(person.username)}</p>
                    <p class="text-muted small mb-3"><i class="bi bi-envelope me-1"></i>${escapeHtml(person.email)}</p>
                    <span class="badge bg-primary mb-3">${issueCount} assigned issue${issueCount !== 1 ? "s" : ""}</span>
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-outline-secondary" onclick="editPerson(${person.id})">
                            <i class="bi bi-pencil"></i>
                        </button>
                        <button class="btn btn-outline-danger" onclick="confirmDeletePerson(${person.id})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    })
    .join(""); //We use .join('') because .map() returns an array, but innerHTML needs a single string, not an array.
}

function openNewPersonModal() {
  document.getElementById("personModalTitle").textContent = "Add Person";
  document.getElementById("personForm").reset(); // finds the form and clears all input fields
  document.getElementById("personId").value = "";
  /*
Clears the hidden ID field

If personId has a value → you're editing someone
If it's empty → you're creating a new person
    */
}

function editPerson(id) {
  const person = getPersonById(id); // find person with given id
  if (!person) return;
  // if the exist fill form input withe their details
  document.getElementById("personModalTitle").textContent = "Edit Person";
  document.getElementById("personId").value = person.id;
  document.getElementById("personName").value = person.name;
  document.getElementById("personSurname").value = person.surname;
  document.getElementById("personEmail").value = person.email;
  document.getElementById("personUsername").value = person.username;
  document.getElementById("personAvatar").value = person.avatar || "";
  // shows the detils in a  popup form
  const modal = new bootstrap.Modal(document.getElementById("personModal"));
  modal.show();
}

function savePerson() {
  const form = document.getElementById("personForm");
  // stops function if inputs are invalid.
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const people = getPeople(); //get stored data
  const personId = document.getElementById("personId").value;

  const personData = {
    name: document.getElementById("personName").value,
    surname: document.getElementById("personSurname").value,
    email: document.getElementById("personEmail").value,
    username: document.getElementById("personUsername").value,
    avatar: document.getElementById("personAvatar").value,
  };

  // Check for unique username
  const existingUsername = people.find(
    (p) =>
      p.username.toLowerCase() === personData.username.toLowerCase() &&
      p.id !== parseInt(personId),
  );

  if (existingUsername) {
    showToast("Error", "Username already exists!", "error"); // popup notification, like alert but does notdisappear automatically after a few seconds and don’t block the user
    return;
  }

  if (personId) {
    // Update existing person
    const index = people.findIndex((p) => p.id === parseInt(personId));
    if (index !== -1) {
      people[index] = { ...people[index], ...personData }; //Update the existing person with new values, but keep unchanged fields
    }
    showToast("Success", "Person updated successfully!", "success");
  } else {
    // Create new person
    personData.id = generateId(people);
    people.push(personData);
    showToast("Success", "Person added successfully!", "success");
  }

  savePeople(people);

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("personModal"),
  );
  modal.hide();

  loadPeople();
}

function confirmDeletePerson(id) {
  document.getElementById("deleteMessage").textContent =
    "Are you sure you want to delete this person?";
  document.getElementById("confirmDeleteBtn").onclick = () => deletePerson(id);

  const modal = new bootstrap.Modal(document.getElementById("deleteModal"));
  modal.show();
}

function deletePerson(id) {
  let people = getPeople();
  people = people.filter((p) => p.id !== id); // excludes person with id we wnat to delete
  savePeople(people);

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("deleteModal"),
  );
  modal.hide();

  showToast("Deleted", "Person has been deleted", "success");
  loadPeople();
}

// ==================== PROJECTS ====================

function loadProjects() {
  const projects = getProjects();
  const grid = document.getElementById("projectsGrid");

  if (projects.length === 0) {
    grid.innerHTML = `
            <div class="col-12">
                <div class="empty-state">
                    <i class="bi bi-folder"></i>
                    <h5>No projects created yet</h5>
                    <p>Create a project to start tracking issues</p>
                </div>
            </div>
        `;
    return;
  }

  grid.innerHTML = projects
    .map((project) => {
      const issueCount = getIssues().filter(
        (i) => i.projectId === project.id,
      ).length;
      const openCount = getIssues().filter(
        (i) => i.projectId === project.id && i.status === "open",
      ).length;

      return `
            <div class="col-md-4 col-lg-3 mb-4">
                <div class="card project-card h-100">
                    <div class="card-body text-center">
                        <div class="project-icon mx-auto">
                            <i class="bi bi-folder-fill"></i>
                        </div>
                        <h5 class="card-title">${escapeHtml(project.name)}</h5>
                        ${project.description ? `<p class="text-muted small mb-3">${escapeHtml(project.description)}</p>` : ""}
                        <div class="d-flex justify-content-center gap-2 mb-3">
                            <span class="badge bg-primary">${issueCount} issue${issueCount !== 1 ? "s" : ""}</span>
                            <span class="badge bg-warning text-dark">${openCount} open</span>
                        </div>
                        <div class="btn-group btn-group-sm">
                            <button class="btn btn-outline-secondary" onclick="editProject(${project.id})">
                                <i class="bi bi-pencil"></i>
                            </button>
                            <button class="btn btn-outline-danger" onclick="confirmDeleteProject(${project.id})">
                                <i class="bi bi-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    })
    .join("");
}

function openNewProjectModal() {
  document.getElementById("projectModalTitle").textContent = "Add Project";
  document.getElementById("projectForm").reset();
  document.getElementById("projectId").value = "";
}

function editProject(id) {
  const project = getProjectById(id);
  if (!project) return;

  document.getElementById("projectModalTitle").textContent = "Edit Project";
  document.getElementById("projectId").value = project.id;
  document.getElementById("projectName").value = project.name;
  document.getElementById("projectDescription").value =
    project.description || "";

  const modal = new bootstrap.Modal(document.getElementById("projectModal"));
  modal.show();
}

function saveProject() {
  const form = document.getElementById("projectForm");
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const projects = getProjects();
  const projectId = document.getElementById("projectId").value;

  const projectData = {
    name: document.getElementById("projectName").value,
    description: document.getElementById("projectDescription").value,
  };

  if (projectId) {
    // Update existing project
    const index = projects.findIndex((p) => p.id === parseInt(projectId));
    if (index !== -1) {
      projects[index] = { ...projects[index], ...projectData };
    }
    showToast("Success", "Project updated successfully!", "success");
  } else {
    // Create new project
    projectData.id = generateId(projects);
    projects.push(projectData);
    showToast("Success", "Project added successfully!", "success");
  }

  saveProjects(projects);

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("projectModal"),
  );
  modal.hide();

  loadProjects();
}

function confirmDeleteProject(id) {
  document.getElementById("deleteMessage").textContent =
    "Are you sure you want to delete this project? Associated issues will not be deleted.";
  document.getElementById("confirmDeleteBtn").onclick = () => deleteProject(id);

  const modal = new bootstrap.Modal(document.getElementById("deleteModal"));
  modal.show();
}

function deleteProject(id) {
  let projects = getProjects();
  projects = projects.filter((p) => p.id !== id);
  saveProjects(projects);

  const modal = bootstrap.Modal.getInstance(
    document.getElementById("deleteModal"),
  );
  modal.hide();

  showToast("Deleted", "Project has been deleted", "success");
  loadProjects();
}

// ==================== DOCUMENTATION ====================

function loadDocumentation() {
  const content = document.getElementById("documentationContent");
  content.innerHTML = marked.parse(documentationMarkdown);
}

// ==================== UTILITY ====================

function escapeHtml(text) {
  if (!text) return "";
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ==================== EVENT LISTENERS ====================

document.addEventListener("DOMContentLoaded", function () {
  // Initialize data
  initializeData();

  // Check authentication
  checkAuth();

  // Login form handler
  document.getElementById("loginForm").addEventListener("submit", handleLogin);

  // Logout handler
  document.getElementById("logoutBtn").addEventListener("click", handleLogout);

  // Navigation handlers
  document.querySelectorAll(".nav-link[data-page]").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      showPage(this.dataset.page);
    });
  });

  // Filter handlers for issues
  ["filterStatus", "filterPriority", "filterProject"].forEach((id) => {
    document.getElementById(id).addEventListener("change", renderIssuesTable);
  });
  document
    .getElementById("searchIssues")
    .addEventListener("input", renderIssuesTable);

  // Keyboard shortcuts
  document.addEventListener("keydown", function (e) {
    // Ctrl + N for new issue (when on issues page)
    if (
      e.ctrlKey &&
      e.key === "n" &&
      !document.getElementById("issuesPage").classList.contains("d-none")
    ) {
      e.preventDefault();
      openNewIssueModal();
      const modal = new bootstrap.Modal(document.getElementById("issueModal"));
      modal.show();
    }
  });
});
