import { Link } from "react-router";

function Home({ companies, myProfile, checkEligible, appliedCount }) {
  const eligibleCount = companies.filter((company) => checkEligible(company)).length;

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">Campus Placement Drive Portal</h1>
        <p className="hero-description">
          Welcome to the official placement drive portal. View eligible companies based on your
          academic profile, explore dream job offers, and track your job applications in one place.
        </p>
      </div>

      <div className="profile-card">
        <div className="profile-header">
          <h2>Candidate Profile</h2>
          <span className="profile-tag">Verified Student</span>
        </div>
        <div className="profile-details-grid">
          <div className="profile-item">
            <span className="profile-label">Student Name</span>
            <span className="profile-value">{myProfile.name}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">UID</span>
            <span className="profile-value">{myProfile.uid}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Roll Number</span>
            <span className="profile-value">{myProfile.rollNo}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Branch</span>
            <span className="profile-value">{myProfile.branch}</span>
          </div>
          <div className="profile-item">
            <span className="profile-label">Current CGPA</span>
            <span className="profile-value">{myProfile.cgpa}</span>
          </div>
        </div>
      </div>

      <div className="summary-section">
        <h2 className="section-title">Drive Overview</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🏢</div>
            <div className="stat-number">{companies.length}</div>
            <div className="stat-label">Total Companies</div>
          </div>
          <div className="stat-card stat-card-eligible">
            <div className="stat-icon">✅</div>
            <div className="stat-number">{eligibleCount}</div>
            <div className="stat-label">Eligible Companies</div>
          </div>
          <div className="stat-card stat-card-applied">
            <div className="stat-icon">📝</div>
            <div className="stat-number">{appliedCount}</div>
            <div className="stat-label">Applied Companies</div>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <Link to="/companies" className="btn btn-primary btn-large">
          Browse All Companies →
        </Link>
        <Link to="/applications" className="btn btn-outline btn-large">
          View My Applications ({appliedCount})
        </Link>
      </div>
    </div>
  );
}

export default Home;
