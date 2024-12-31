const generalInformation = {
  name: "John Mc Tavish",
  email: "test@aol.com",
  tel: "+971 55 123 1234",
  id: crypto.randomUUID(),
};

const educationInformation = [
  {
    educationFacilityName: "King Faisal University",
    subjectTitle: "Business Administration",
    dateStarted: "12/06/2004",
    dateFinished: "04/04/2008",
    eduDescription:
      "Conducted field studies on existing enterprises, creating feasibility studies, and generating ideas that have helped reduce churn rates by 7%, and increase longetivity of average staff. Additionally, helped increase revenue by 12%. Ended the grade with 3.5 GPA",
    id: crypto.randomUUID(),
  },
];

const experienceInformation = [
  {
    companyName: "EK Airlines",
    position: "Senior Sales Representative",
    startDate: "22/01/2011",
    endDate: "Currently working",
    experienceDescription:
      "Generated upwards of 1.2 million (AED) in revenue through sales monthly. Consistently qualified for the highest sales awards. 4.8 / 5 average review rating with 4 minutes AHT. Highly experienced in GDS systems: Both Amadeus and Saber. In charge of ticket revalidations and manual interline bookings. Additionally, the point of contact staff for escalation cases.",
    id: crypto.randomUUID(),
  },
];

const additionalInformation = [
  {
    title: "Skills",
    description:
      "Sales Skills | Empathy | GDS Systems | Fluent in 3 languages: Arabic, Farsi and English | Team Worker | Social Person | Easy going and Energetic | Skilled in MS Office | Profecient in Ruby on Rails ",
    id: crypto.randomUUID(),
  },
];

export {
  generalInformation,
  educationInformation,
  experienceInformation,
  additionalInformation,
};
