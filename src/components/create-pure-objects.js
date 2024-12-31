const pureObjects = {
  CreateEduField: class {
    constructor() {
      this.educationFacilityName = "Education Facility Name";
      this.subjectTitle = "Subject - Title";
      this.dateStarted = "Date Started";
      this.dateFinished = "Date Finished";
      this.eduDescription = "Description";
      this.id = crypto.randomUUID();
    }
  },
  CreateExpField: class {
    constructor() {
      this.companyName = "Company Name";
      this.position = "Position";
      this.startDate = "Start Date";
      this.endDate = "End Date (if any)";
      this.experienceDescription = "Experience Description";
      this.id = crypto.randomUUID();
    }
  },
  CreateInfField: class {
    constructor() {
      this.title = "Title | Skills | Abilities";
      this.description = "Description";
      this.id = crypto.randomUUID();
    }
  },
};

export { pureObjects };
