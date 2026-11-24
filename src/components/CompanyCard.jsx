import { Link } from "react-router";

function CompanyCard({ company, checkEligible, toggleApply }) {
  const isEligible = checkEligible(company);

  return (
    <div className={`company-card ${isEligible ? "card-eligible" : "card-ineligible"}`}>
      <div className="card-header">
        <h3 className="company-title">{company.name}</h3>
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

      <div className="card-body">
        <p className="card-field">
          <span className="field-label">Role:</span>
          <span className="field-value">{company.role}</span>
        </p>
        <p className="card-field">
          <span className="field-label">Package:</span>
          <span className="field-value package-highlight">{company.packageLPA} LPA</span>
        </p>
        <p className="card-field">
          <span className="field-label">Location:</span>
          <span className="field-value">{company.location}</span>
        </p>
        <p className="card-field">
          <span className="field-label">Drive Date:</span>
          <span className="field-value">{company.driveDate}</span>
        </p>
      </div>

      <div className="card-actions">
        <Link to={`/companies/${company.id}`} className="btn btn-secondary">
          View Details
        </Link>

        {isEligible ? (
          <button
            type="button"
            className={`btn ${company.isApplied ? "btn-withdraw" : "btn-apply"}`}
            onClick={() => toggleApply(company.id)}
          >
            {company.isApplied ? "Withdraw" : "Apply"}
          </button>
        ) : (
          <span className="not-eligible-label">Not Eligible</span>
        )}
      </div>
    </div>
  );
}

export default CompanyCard;
