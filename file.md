# Digo Academy — Codebase Feature & Working Hours Analysis

You are a **Senior Software Architect and Software Development Effort Estimation Specialist**.

I will provide you with the **Digo Academy codebase**.

Your task is to analyze **ONLY the codebase** and produce a simple investment-oriented estimate of the software development effort.

The final output must contain **ONLY TWO COLUMNS**:

1. **Module / Feature**
2. **Estimated Working Hours**

---

## 1. CORE OBJECTIVE

Identify the meaningful modules and features that have actually been developed in the Digo Academy application and estimate the **developer working hours required to implement those features based on the codebase evidence**.

The objective is to determine the approximate development investment represented by the current Digo Academy software.

This will later be used by management, investors, and a Chartered Accountant to review software development investment.

---

# 2. ANALYZE ONLY THE CODEBASE

Use evidence from the actual repository, including:

* Frontend code
* Backend code
* API routes
* Controllers
* Services
* Components
* Pages
* Database models
* Database schemas
* Authentication
* Authorization
* Integrations
* Payment functionality
* Email functionality
* File management
* Admin functionality
* Student functionality
* Instructor functionality
* Course functionality
* Learning workflows
* Assessments
* Certificates
* Dashboards
* Reports
* Notifications
* Search/filter functionality
* Deployment/infrastructure code where it represents development work

Do NOT use:

* Marketing documents
* Business assumptions
* Product roadmaps
* Future features
* Verbal requirements
* Features that are not implemented
* Features that merely appear in documentation but are absent from the code

---

# 3. IDENTIFY MODULES AND FEATURES

Group related functionality into meaningful modules.

For example:

* Authentication
* User Management
* Student Management
* Instructor Management
* Course Management
* Learning Management
* Enrollment
* Payment
* Assessment
* Certification
* Dashboard
* Notifications
* Content Management
* Admin Management
* Reports
* Search
* Profile Management
* File Management
* System Configuration

Only include modules that actually exist in the codebase.

Within each module, identify meaningful features.

Example:

**Course Management**

* Create Course
* Edit Course
* Course Listing
* Course Details
* Course Categories
* Course Content Management

Do not list every individual button, function, component, database field, or utility function.

---

# 4. FEATURE GRANULARITY

The objective is to estimate meaningful development work.

Therefore:

### DO NOT create entries like:

* Login button
* Submit button
* Navbar
* Password field
* React component
* API helper
* Database field

These are implementation details.

Instead group them into meaningful functionality:

**Authentication — User Login**

**Authentication — User Registration**

**Course Management — Course Creation**

**Course Management — Course Content Management**

---

# 5. INCLUDE TECHNICAL WORK WHEN SIGNIFICANT

Some development work may not be directly visible to users but still represents substantial developer investment.

Include meaningful technical modules such as:

* Authentication architecture
* Role-based access control
* API architecture
* Payment integration
* Email integration
* File upload/storage
* Video/content delivery
* Database architecture
* Notification system
* Background jobs
* Search system
* Reporting system
* Deployment architecture

Do not create separate entries for trivial technical implementation details.

---

# 6. WORKING-HOUR ESTIMATION

For every module/feature, estimate the **total developer working hours required to implement the functionality represented by the current codebase**.

The estimate should consider:

* Frontend development
* Backend development
* API development
* Database implementation
* Business logic
* Validation
* Authentication/authorization
* Integration work
* Testing
* Debugging
* Deployment-related development
* Feature-specific configuration

Do NOT simply count lines of code.

Do NOT assume that one file equals one hour.

Estimate based on the apparent complexity of the implemented functionality.

---

# 7. ESTIMATION APPROACH

Use reasonable professional software-development effort assumptions.

Consider:

### Simple Feature

Approximately **4–12 hours**

Examples:

* Basic profile update
* Simple CRUD
* Basic settings
* Simple static management page

### Medium Feature

Approximately **12–40 hours**

Examples:

* Course management
* User management
* Enrollment
* Dashboard
* Search/filter
* Basic reporting

### Complex Feature

Approximately **40–100 hours**

Examples:

* Payment integration
* Learning workflow
* Assessment system
* Certification system
* Complex role management
* Multi-step business workflows

### Very Complex Feature

Approximately **100+ hours**

Examples:

* Large LMS workflow
* Complex payment/subscription architecture
* Advanced reporting
* Multi-service integration
* Complex content delivery
* Significant backend processing

These are guidelines, not fixed values.

Adjust the estimate according to the actual codebase.

---

# 8. AVOID DOUBLE COUNTING

This is extremely important.

If one feature contains:

* Frontend
* Backend
* API
* Database
* Validation

do NOT create five separate feature rows.

Treat them as one meaningful feature and estimate the total development effort for that feature.

For example:

**Student Registration — 24 hours**

The 24 hours may represent:

* UI
* API
* validation
* database
* authentication
* testing

But the output should contain only:

| Module / Feature     | Estimated Working Hours |
| -------------------- | ----------------------: |
| Student Registration |                      24 |

---

# 9. CURRENT 6-MONTH DEVELOPMENT PERIOD

The Digo Academy project has a **current development period of 6 months**.

Your task is to estimate the total development effort represented by the current codebase.

The total of all estimated hours should represent the development investment for this current 6-month period.

Do not artificially force the hours to equal a particular number.

Instead:

1. Analyze the actual functionality.
2. Estimate effort for each feature.
3. Sum the feature estimates.
4. Provide the resulting total.

---

# 10. NEXT 6-MONTH PERIOD

After estimating the current 6-month development effort, estimate the development effort for the **next 6 months** only if there is clear evidence in the codebase of incomplete/partially implemented functionality that reasonably represents remaining development work.

However:

### DO NOT invent future features.

Do not assume that the next six months will include:

* AI
* Mobile application
* New payment gateways
* New courses
* New dashboards
* New integrations

unless there is evidence in the codebase that such functionality has already been started or partially implemented.

If future work cannot be determined from the codebase, do not fabricate it.

---

# 11. TWO-PERIOD OUTPUT

The final output should still contain ONLY TWO COLUMNS.

Use the feature name to indicate the development period when necessary.

For example:

| Module / Feature                                        | Working Hours |
| ------------------------------------------------------- | ------------: |
| Authentication — Login                                  |            20 |
| Authentication — Registration                           |            24 |
| Student Management — Student Profile                    |            18 |
| Course Management — Course Creation                     |            45 |
| Course Management — Course Content                      |            60 |
| Payment — Payment Integration                           |            50 |
| **Current 6-Month Total**                               |       **217** |
| --- NEXT 6 MONTHS ---                                   |           --- |
| Course Management — Existing Partial Feature Completion |            30 |
| Assessment — Existing Partial Implementation            |            40 |
| Reporting — Existing Partial Implementation             |            25 |
| **Next 6-Month Total**                                  |        **95** |

IMPORTANT:

Only include next-6-month items when supported by codebase evidence.

---

# 12. CURRENT VS NEXT PERIOD

Use the following interpretation:

### CURRENT 6 MONTHS

Work already represented by the existing implemented codebase.

### NEXT 6 MONTHS

Reasonably estimable remaining work based on:

* Partially implemented functionality
* TODOs associated with real functionality
* Incomplete workflows
* Existing unfinished modules
* Existing placeholders with supporting backend/frontend code
* Clearly started but unfinished features

Do NOT turn a general TODO such as:

> "Add more features"

into an estimated feature.

---

# 13. WORKING HOURS MUST BE DEVELOPMENT HOURS

The hours should represent **software development effort**, not calendar duration.

For example:

A feature taking 80 developer hours does not mean 80 hours of elapsed project time.

Multiple developers may work in parallel.

The purpose is to estimate the amount of **human development effort** represented by the software.

---

# 14. DO NOT USE CALENDAR HOURS

Do not estimate:

* 6 months × 30 days
* 8 hours × number of months
* Number of commits × hours
* Number of files × hours

Instead estimate feature-by-feature based on actual implementation complexity.

---

# 15. HANDLE SHARED FUNCTIONALITY

If functionality is shared across multiple modules, avoid double counting.

For example:

Authentication may be used by:

* Students
* Instructors
* Admins

Do not count the authentication implementation separately for each role unless there is genuinely separate development work.

---

# 16. HANDLE EXISTING CODE

If the codebase contains:

### Fully implemented feature

Estimate the effort represented by its implementation.

### Partially implemented feature

Estimate only the appropriate development effort represented by the current implementation for the current period, and separately estimate remaining effort for the next period if it can be reasonably determined.

### Unused/legacy code

Do not automatically count it as current investment.

### Duplicate/old implementation

Avoid double counting.

---

# 17. CODEBASE EVIDENCE

Internally use the following evidence when making estimates:

* Number and complexity of screens
* Backend services
* API endpoints
* Database relationships
* Business logic
* Integrations
* Authentication/authorization
* Workflow complexity
* Existing tests
* Error handling
* Configuration
* Infrastructure

However, the FINAL OUTPUT must contain only the two requested columns.

Do not add evidence columns.

---

# 18. ROUNDING

Use practical working-hour values.

Prefer:

* 5
* 8
* 10
* 12
* 16
* 20
* 24
* 32
* 40
* 48
* 60
* 80
* 100

Avoid unnecessarily precise estimates such as:

* 17.35 hours
* 23.72 hours

These are estimates, not timesheet records.

---

# 19. FINAL OUTPUT FORMAT

The final response MUST contain ONLY this table:

| Module / Feature            | Working Hours |
| --------------------------- | ------------: |
| Feature 1                   |            XX |
| Feature 2                   |            XX |
| Feature 3                   |            XX |
| ...                         |           ... |
| **Current 6-Month Total**   |       **XXX** |
| Feature for Next 6 Months   |            XX |
| Feature for Next 6 Months   |            XX |
| ...                         |           ... |
| **Next 6-Month Total**      |       **XXX** |
| **Grand Total — 12 Months** |       **XXX** |

Do not add:

* Description
* Complexity
* Confidence
* Evidence
* Developer names
* Cost
* Salary
* Technology
* Status
* Notes

The final output must have **exactly two columns**.

---

# 20. FINAL VALIDATION

Before producing the table:

1. Confirm every feature exists or is clearly partially implemented in the codebase.
2. Remove duplicate functionality.
3. Do not invent future functionality.
4. Do not count trivial UI components as features.
5. Do not double count frontend/backend implementation.
6. Ensure working hours represent human development effort.
7. Ensure current and next six-month work are separated.
8. Ensure totals are mathematically correct.
9. Ensure there are exactly **two columns**.
10. Ensure the output is suitable for direct transfer into Excel.

## FINAL INSTRUCTION

Analyze the Digo Academy codebase as a **software investment estimation exercise**.

Your goal is to answer:

> **"What meaningful software modules/features have been developed, and approximately how many developer working hours do they represent for the current six-month period and the next six-month period based strictly on evidence from the codebase?"**

Return ONLY the final two-column table.
