import { useParams, Link } from "react-router";

function CompanyDetails({ companies, checkEligible, toggleApply }) {
  const { id } = useParams();

  // find() method to locate the company from the state list
  const company = companies.find((c) => c.id === Number(id));

  if (!company) {
    return (
      <div className="not-found-card">
        <h2>Company Not Found</h2>
        <p>The company you are looking for does not exist or may have been removed.</p>
        <Link to="/companies" className="btn btn-primary">
          Back to Companies
        </Link>
      </div>
    );
  }

  const isEligible = checkEligible(company);

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="details-header">
          <div>
            <h1 className="details-title">{company.name}</h1>
            <p className="details-role">{company.role}</p>
          </div>
          <div className="badge-group">
            {isEligible ? (
              <span className="badge badge-eligible">Eligible</span>
            ) : (
              <span className="badge badge-not-eligible">Not Eligible</span>
            )}
            {company.packageLPA >= 10 && (
              <span className="badge badge-dream">★ Dream Company</span>
            )}
          </div>
        </div>

        <div className="details-info-grid">
          <div className="info-block">
            <span className="info-label">Annual Package</span>
            <span className="info-value package-highlight">{company.packageLPA} LPA</span>
          </div>
          <div className="info-block">
            <span className="info-label">Job Location</span>
            <span className="info-value">{company.location}</span>
          </div>
          <div className="info-block">
            <span className="info-label">Drive Date</span>
            <span className="info-value">{company.driveDate}</span>
          </div>
          <div className="info-block">
            <span className="info-label">Minimum CGPA Required</span>
            <span className="info-value">{company.minCGPA}</span>
          </div>
        </div>

        <div className="branches-section">
          <h3>Eligible Branches</h3>
          <ul className="branches-list">
            {company.eligibleBranches.map((branch) => (
              <li key={branch} className="branch-tag">
                {branch}
              </li>
            ))}
          </ul>
        </div>

        <div className="details-footer">
          <Link to="/companies" className="btn btn-secondary">
            ← Back to Companies
          </Link>
          {isEligible ? (
            <button
              type="button"
              className={`btn ${company.isApplied ? "btn-withdraw" : "btn-apply"}`}
              onClick={() => toggleApply(company.id)}
            >
              {company.isApplied ? "Withdraw Application" : "Apply Now"}
            </button>
          ) : (
            <span className="not-eligible-label">Not Eligible to Apply</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default CompanyDetails;
