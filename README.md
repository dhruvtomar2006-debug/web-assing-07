# Campus Placement Drive (P9)

WEB 301 — Advance Frontend Engineering (Assignment 7 / Mid-Sem Phase 2)

- **Student Name:** Dhruv Tomar
- **Roll Number / UID:** 9 / 198
- **Email:** dhruvtomar2006@gmail.com
- **Assigned Problem Statement:** P9 — Campus Placement Drive
- **Live Vercel Deployment Link:** https://web-assing-07.vercel.app (or project dashboard: https://vercel.com/dhruv-tomars-projects-e2d33bfa)
- **GitHub Repository:** https://github.com/dhruvtomar2006-debug/web-assing-07

---

## 📌 Project Overview
A multi-page React application for a Campus Placement Drive, demonstrating core React concepts, component hierarchy, client-side routing, and state persistence.

### Key Features & Requirements
1. **Candidate Profile Integration:** Imports `myProfile` (Branch: CSE, CGPA: 7.5) and displays it on the Home page.
2. **Dynamic Eligibility Calculation:** Evaluates eligibility based on student's CGPA (`myProfile.cgpa >= minCGPA`) and eligible branches (`company.eligibleBranches.includes(myProfile.branch)`).
3. **Dream Company Badge:** Automatically flags companies offering package >= 10 LPA with a Dream Company badge.
4. **Interactive Application Management:** Allows students to Apply and Withdraw from eligible companies. Ineligible companies display a disabled "Not Eligible" notice.
5. **Multi-page Client-Side Routing:**
   - `/`: Home page featuring student profile and drive summary statistics (Total, Eligible, Applied).
   - `/companies`: Searchable and filterable catalog of all participating companies (All, Eligible, Not Eligible) with search by name/role/city.
   - `/companies/:id`: Dynamic detailed view showing package, location, drive date, minimum CGPA, and mapped branch requirements.
   - `/applications`: Tracks all submitted job applications with live counters in Navbar.
6. **Single Page Application Refresh Handling:** Configured `vercel.json` with URL rewrite to ensure client-side routing does not 404 on page refresh.

---

## 🛠️ Instructions to Install and Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 🚀 Deployment Instructions for Vercel

1. Import repository `dhruvtomar2006-debug/web-assing-07` in your Vercel Dashboard (`https://vercel.com/dhruv-tomars-projects-e2d33bfa`).
2. Framework Preset: **Vite**.
3. Root Directory: `./`.
4. Deploy and copy the production domain into the assignment submission form.
