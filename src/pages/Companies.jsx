import { useState } from "react";
import CompanyCard from "../components/CompanyCard";

function Companies({ companies, checkEligible, toggleApply }) {
  // Controlled input states
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter companies based on dropdown and search input
  const filteredCompanies = companies.filter((company) => {
    const isEligible = checkEligible(company);

    // Dropdown filter
    if (filter === "Eligible" && !isEligible) return false;
    if (filter === "Not Eligible" && isEligible) return false;

    // Search input filter
    if (searchTerm.trim() !== "") {
      const query = searchTerm.toLowerCase();
      const matchesName = company.name.toLowerCase().includes(query);
      const matchesRole = company.role.toLowerCase().includes(query);
      const matchesLocation = company.location.toLowerCase().includes(query);
      return matchesName || matchesRole || matchesLocation;
    }

    return true;
  });

  return (
    <div className="companies-page">
      <div className="page-header">
        <h1>Placement Companies</h1>
        <p className="page-subtitle">
          Explore participating recruiters, check branch and CGPA requirements, and apply directly.
        </p>
      </div>

      <div className="controls-bar">
        <div className="control-group">
          <label htmlFor="search-input" className="control-label">
            Search:
          </label>
          <input
            id="search-input"
            type="text"
            className="search-input"
            placeholder="Search by company, role, or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="control-group">
          <label htmlFor="filter-select" className="control-label">
            Filter Eligibility:
          </label>
          <select
            id="filter-select"
            className="filter-select"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Companies</option>
            <option value="Eligible">Eligible Only</option>
            <option value="Not Eligible">Not Eligible Only</option>
          </select>
        </div>
      </div>

      {filteredCompanies.length === 0 ? (
        <div className="empty-state">
          <p className="empty-message">No companies found matching your criteria.</p>
        </div>
      ) : (
        <div className="companies-grid">
          {filteredCompanies.map((company) => (
            <CompanyCard
              key={company.id}
              company={company}
              checkEligible={checkEligible}
              toggleApply={toggleApply}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Companies;
