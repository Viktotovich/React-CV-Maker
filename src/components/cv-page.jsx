import EmailIcon from "../assets/email-icon";
import TelephoneIcon from "../assets/telephone-icon";

export default function CV({ generalInfo, eduInfo }) {
  return (
    <>
      <CHeader generalInfo={generalInfo} />
      <div className="cv-body">
        <h2>Education</h2>
        {eduInfo.map((eduField) => (
          <CEdu eduField={eduField} />
        ))}
        <CExperience />
        <CInfo />
      </div>
    </>
  );
}

function CHeader({ generalInfo }) {
  return (
    <div className="cv-header-container">
      <p id="name"> {generalInfo.name}</p>
      <div className="contact-info">
        <p>
          <TelephoneIcon /> {generalInfo.tel}
        </p>
        <p>
          <EmailIcon /> {generalInfo.email}
        </p>
      </div>
    </div>
  );
}

function CEdu({ eduField }) {
  return (
    <div className="cv-education-container">
      <div className="education-date">
        <p>
          {eduField.dateStarted} - <span>{eduField.dateFinished}</span>
        </p>
      </div>
      <div className="education-title">
        <h3>
          {eduField.subjectTitle} -{" "}
          <span>{eduField.educationFacilityName}</span>
        </h3>
      </div>
      <div className="education-description">{eduField.eduDescription}</div>
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
