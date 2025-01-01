import EmailIcon from "../assets/email-icon";
import TelephoneIcon from "../assets/telephone-icon";

export default function CV({ generalInfo, eduInfo, expInfo }) {
  return (
    <>
      <CHeader generalInfo={generalInfo} />
      <div className="cv-body">
        <h2>Education</h2>
        {eduInfo.map((eduField) => (
          <CEdu eduField={eduField} key={eduField.id} />
        ))}
        <h2>Experience</h2>
        {expInfo.map((expField) => (
          <CExperience expField={expField} key={expField.id} />
        ))}
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

function CExperience({ expField }) {
  return (
    <div className="cv-experience-container">
      <div className="experience-date">
        <p>
          {expField.startDate} - <span>{expField.endDate}</span>
        </p>
      </div>
      <div className="experience-title">
        <h3>
          {expField.position} - <span>{expField.companyName}</span>
        </h3>
      </div>
      <div className="experience-description">
        {expField.experienceDescription}
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
