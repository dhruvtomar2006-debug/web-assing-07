import { useState } from "react";
import { Routes, Route } from "react-router";
import { companies as initialCompanies, myProfile } from "./data/companies";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Companies from "./pages/Companies";
import CompanyDetails from "./pages/CompanyDetails";
import Applications from "./pages/Applications";

function App() {
  // Main application state maintained in App.jsx using useState
  const [companies, setCompanies] = useState(initialCompanies);

  // Special rule: a company is Eligible only if myProfile.cgpa >= minCGPA and eligibleBranches includes myProfile.branch
  function checkEligible(company) {
    return (
      myProfile.cgpa >= company.minCGPA &&
      company.eligibleBranches.includes(myProfile.branch)
    );
  }

  // Toggle Apply <-> Withdraw status for an eligible company
  function toggleApply(id) {
    const updated = companies.map((company) => {
      if (company.id === id) {
        return { ...company, isApplied: !company.isApplied };
      }
      return company;
    });
    setCompanies(updated);
  }

  const appliedCount = companies.filter((company) => company.isApplied).length;

  return (
    <div className="app-layout">
      <Navbar appliedCount={appliedCount} />
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                companies={companies}
                myProfile={myProfile}
                checkEligible={checkEligible}
                appliedCount={appliedCount}
              />
            }
          />
          <Route
            path="/companies"
            element={
              <Companies
                companies={companies}
                checkEligible={checkEligible}
                toggleApply={toggleApply}
              />
            }
          />
          <Route
            path="/companies/:id"
            element={
              <CompanyDetails
                companies={companies}
                checkEligible={checkEligible}
                toggleApply={toggleApply}
              />
            }
          />
          <Route
            path="/applications"
            element={
              <Applications
                companies={companies}
                checkEligible={checkEligible}
                toggleApply={toggleApply}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
