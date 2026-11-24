import { Link } from "react-router";
import CompanyCard from "../components/CompanyCard";

function Applications({ companies, checkEligible, toggleApply }) {
  // filter() to extract applied companies
  const appliedCompanies = companies.filter((company) => company.isApplied);

  return (
    <div className="applications-page">
      <div className="page-header">
        <h1>My Applications</h1>
        <p className="page-subtitle">
          Review all the placement drives you have submitted an application for.
        </p>
      </div>

      {appliedCompanies.length === 0 ? (
        <div className="empty-applications">
          <div className="empty-icon">📂</div>
          <p className="empty-text">No applications yet</p>
          <Link to="/companies" className="btn btn-primary">
            Explore Companies & Apply
          </Link>
        </div>
      ) : (
        <div>
          <div className="applications-summary-banner">
            <span>You have applied to {appliedCompanies.length} company/companies.</span>
          </div>
          <div className="companies-grid">
            {appliedCompanies.map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
                checkEligible={checkEligible}
                toggleApply={toggleApply}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Applications;
