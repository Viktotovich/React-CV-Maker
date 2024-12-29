export default function CV() {
  return (
    <>
      <CHeader />
      <div className="cv-body">
        <CEdu />
        <CExperience />
        <CInfo />
      </div>
    </>
  );
}

function CHeader() {
  return (
    <div className="cv-header-container">
      <p id="name">Name and all here</p>
      <div className="contact-info">
        <p>Tel + SVG</p>
        <p>Email + SVG</p>
      </div>
    </div>
  );
}

function CEdu() {
  return (
    <div className="cv-education-container">
      <h2>Education + ID</h2>
      <div className="education-breakdown">
        <div className="education-date">
          <p>
            Start Date - <span>End Date</span>
          </p>
        </div>
        <div className="education-title">
          <h3>
            Education title - <span>Education Facility</span>
          </h3>
        </div>
        <div className="education-description">
          Very long description, probably even a bullet list?
        </div>
      </div>
    </div>
  );
}

function CExperience() {
  return (
    <div className="cv-experience-container">
      <h2>Experience + ID</h2>
      <div className="experience-breakdown">
        <div className="experience-date">
          <p>
            Start Date - <span>End Date</span>
          </p>
        </div>
        <div className="experience-title">
          <h3>
            Experience title - <span>Experience Facility</span>
          </h3>
        </div>
        <div className="experience-description">
          Very long description, probably even a bullet list?
        </div>
      </div>
    </div>
  );
}

function CInfo() {
  return (
    <div className="additional-information-container">
      <h2>Additional Information</h2>
      <div className="additional-information">Very long description</div>
    </div>
  );
}
