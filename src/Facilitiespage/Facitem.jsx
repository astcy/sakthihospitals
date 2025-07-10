import React from "react";
import gynMainImage from "../assets/your-main-image.png";
import doc4 from "../assets/doctor4.png";
import doc5 from "../assets/doctor5.png";

// Common paragraph style
const commonParagraphStyle = {
  fontSize: 13,
  color: "#2a3a4d",
  margin: "12px 0 20px",
  lineHeight: 1.6,
  textAlign: "justify",
};

// Facilities data (example)
const facilities = {
  emergency: {
    title: "Emergency & Trauma Care",
    heading: "24x7 Emergency Services for Critical Care",
    paragraph: (
      <>
        <p style={commonParagraphStyle}>
          Our Emergency & Trauma Care unit is equipped with state-of-the-art technology and a dedicated team of doctors, nurses, and paramedics who are available round the clock. We ensure rapid assessment, stabilization, and treatment of all critical and life-threatening conditions.
        </p>
        <p style={commonParagraphStyle}>
          With a seamless triage system and advanced life support protocols, we are always ready to handle medical emergencies, trauma, cardiac events, strokes, and pediatric emergencies.
        </p>
      </>
    ),
    image: gynMainImage,
    doctors: [
      {
        name: "Dr. Emergency Expert",
        title: "Head of Emergency Medicine",
        image: doc4,
        bg: "#c2e9fb",
      },
      {
        name: "Dr. Trauma Specialist",
        title: "Senior Consultant – Trauma Care",
        image: doc5,
        bg: "#fbe6a2",
      },
    ],
    lists: [
      {
        title: "Emergency Services",
        items: [
          "Advanced Cardiac Life Support (ACLS)",
          "Trauma & Accident Care",
          "24x7 Ambulance Service",
          "Poisoning & Snake Bite Management",
          "Pediatric Emergency",
        ],
      },
    ],
  },
  lab: {
    title: "LABORATORY SERVICES",
    heading: "Our labs are equipped to carry out a wide range of laboratory investigations, necessary for patient care. It consists of the disciplines of",
    image: gynMainImage,
    doctors: [
      {
        name: "Dr. Emergency Expert",
        title: "Head of Emergency Medicine",
        image: doc4,
        bg: "#c2e9fb",
      },
      {
        name: "Dr. Trauma Specialist",
        title: "Senior Consultant – Trauma Care",
        image: doc5,
        bg: "#fbe6a2",
      },
    ],
    lists: [
      {
        title: "Lab Services",
        items: [
          " Hematology ",
          "Biochemistry  ",
          "Microbiology  ",
          "Histopathology  ",
          "Endocrinology  ",
          "Serology  ",
          "Clinical Pathology  ",
        ],
      },
    ],
    paragraph: (
      <>
        <p style={commonParagraphStyle}>
          The laboratory is equipped with state-of-the-art equipments. To operate these sophisticated equipments in the laboratory, we have a team of efficient, knowledgeable and qualified doctors and technical staff who are constantly involved in producing correct results and quality assurance.
        </p>
      </>
    ),
  },
  pha: {
    title: " PHARMACY ",
    image: gynMainImage,
    doctors: [
      {
        name: "Dr. Emergency Expert",
        title: "Head of Emergency Medicine",
        image: doc4,
        bg: "#c2e9fb",
      },
      {
        name: "Dr. Trauma Specialist",
        title: "Senior Consultant – Trauma Care",
        image: doc5,
        bg: "#fbe6a2",
      },
    ],
    paragraph: (
      <>
        <p style={commonParagraphStyle}>
          At Sakthi Hospital, the Pharmacy stocks all medicines in the range of research molecules, high value medicines, high risk medicines, life saving drugs, critical care drugs and oncology special drugs as per schedule. Quality standards are strictly maintained. Round-the-clock service is available and is manned by experienced pharmacists. Both inpatient and outpatients are catered to.
        </p>
      </>
    ),
  },
  dia: {
    title: " Dialysis ",
    image: gynMainImage,
    doctors: [
      {
        name: "Dr. Emergency Expert",
        title: "Head of Emergency Medicine",
        image: doc4,
        bg: "#c2e9fb",
      },
      {
        name: "Dr. Trauma Specialist",
        title: "Senior Consultant – Trauma Care",
        image: doc5,
        bg: "#fbe6a2",
      },
    ],
    paragraph: (
      <>
        <p style={commonParagraphStyle}>
          Dialysis is a medical treatment that is used to replace some of the functions of the kidneys when they are no longer able to function properly.
          There are two main types of dialysis: hemodialysis and peritoneal dialysis. Hemodialysis is a process where a machine is used to filter the blood outside of the body, while peritoneal dialysis involves using the lining of the abdomen to filter the blood.
        </p>
        <p style={commonParagraphStyle}>
          Dialysis is usually required when a patient has end-stage renal disease (ESRD), which is the final stage of chronic kidney disease. ESRD is a serious condition that can cause a range of symptoms, including fatigue, weakness, shortness of breath, and nausea.
          Dialysis helps to remove waste products and excess fluid from the blood that the kidneys are no longer able to remove. This helps to improve a patient’s quality of life and prevent complications of kidney disease.
        </p>
        <p style={commonParagraphStyle}>
          Patients who undergo dialysis will need to continue with the treatment for the rest of their lives, unless they are able to receive a kidney transplant.
          Dialysis can be a demanding treatment, requiring frequent visits to a healthcare provider and lifestyle changes. Patients may need to follow a special diet and limit their fluid intake.
        </p>
        <p style={commonParagraphStyle}>
          Patients who undergo dialysis may experience some side effects, such as low blood pressure, muscle cramps, and infection. It is important to report any side effects to your healthcare provider.
          Caregivers play an important role in supporting patients undergoing dialysis. They may need to help with transportation to and from dialysis appointments, provide emotional support, and help with daily activities.
        </p>
        <p style={commonParagraphStyle}>
          It is important for patients and caregivers to work closely with their healthcare provider to develop a treatment plan that is tailored to their individual needs. With proper care and management, dialysis can help to improve a patient’s health and well-being, and allow them to continue living their life to the fullest.
        </p>
        <p style={commonParagraphStyle}>
          By understanding the basics of dialysis, patients and caregivers can be better equipped to manage the treatment and achieve the best possible outcomes.
        </p>
      </>
    ),
  },
  oper: {
    title: "OPERATION THEATRE",
    paragraph: (
      <>
        <p style={commonParagraphStyle}>
          Our Theatre complex comprises 2 spacious, well-designed major operating theatres and a post-op recovery room. The OTs have been equipped with the latest medical technology, sparing no expense to ensure optimal results for the patient.
        </p>
        <p style={commonParagraphStyle}>
          The facilities includes Laminar flow, Hepa filter, Modern Anaesthesia Workstation, OT Table, Operating Microscope, Laparoscopic, Hysteroscopic and Colposcopic equipment.
        </p>
      </>
    ),
    image: gynMainImage,
    doctors: [
      {
        name: "Dr. Emergency Expert",
        title: "Head of Emergency Medicine",
        image: doc4,
        bg: "#c2e9fb",
      },
      {
        name: "Dr. Trauma Specialist",
        title: "Senior Consultant – Trauma Care",
        image: doc5,
        bg: "#fbe6a2",
      },
    ],
  },
  // Add more facilities as needed
};

// Responsive styles injected once
const responsiveStyles = `
.sakthi-main-grid {
  display: grid;
  grid-template-columns: 50% 40%;
  gap: 32px 200px;
  max-width: 1100px;
  margin: auto;
  margin-top: -120px;
  margin-left: 80px;
  box-sizing: border-box;
}
.sakthi-image-doctor-wrapper {
  position: relative;
  min-width: 320px;
  min-height: 320px;
}
.sakthi-main-image {
  width: 320px;
  height: 320px;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 6px 32px rgba(0,0,0,0.08);
  background: #fff;
}
.sakthi-doctor-card {
  position: absolute;
  right: 200px;
  top: 204px;
  background: #fff;
  border-radius: 20px;
  padding: 24px;
  width: 300px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.09);
  z-index: 10;
}
@media (max-width: 1200px) {
  .sakthi-main-grid {
    grid-template-columns: 1fr;
    gap: 32px 0;
    margin-left: 0;
    max-width: 100vw;
  }
  .sakthi-image-doctor-wrapper {
    min-width: 0;
    width: 100%;
    margin-bottom: 32px;
  }
  .sakthi-main-image {
    width: 100%;
    max-width: 340px;
    height: 220px;
    margin: 0 auto;
    display: block;
  }
  .sakthi-doctor-card {
    position: static;
    width: 100%;
    max-width: 340px;
    margin: 0 auto 0 auto;
  }
}
@media (max-width: 700px) {
  .sakthi-main-grid {
    grid-template-columns: 1fr;
    gap: 24px 0;
    padding: 0 4vw;
    margin-top: 0;
  }
  .sakthi-main-image {
    width: 100%;
    height: 160px;
    border-radius: 14px;
  }
  .sakthi-doctor-card {
    padding: 12px;
    border-radius: 12px;
    width: 100%;
    max-width: 100%;
  }
}
`;

function useInjectStyles() {
  React.useEffect(() => {
    if (!document.getElementById("sakthi-responsive-styles")) {
      const style = document.createElement("style");
      style.id = "sakthi-responsive-styles";
      style.innerHTML = responsiveStyles;
      document.head.appendChild(style);
    }
  }, []);
}

const FacilityDetail = ({ data }) => {
  // All list items and headings start from the same left edge as the title
  const leftAlign = { marginLeft: 0, paddingLeft: 0, listStylePosition: "inside" };

  return (
    <div style={{ padding: "60px 20px", fontFamily: "Poppins, sans-serif" }}>
      <div className="sakthi-main-grid">
        {/* Main Content */}
        <div>
          <h1 style={{ fontSize: 40, color: "#3b82c4", fontWeight: 600, ...leftAlign }}>
            {data.title}
          </h1>
          {data.heading && (
            <h2
              style={{
                fontSize: 20,
                fontWeight: 500,
                color: "#2a3a4d",
                marginTop: 24,
                ...leftAlign,
              }}
            >
              {data.heading}
            </h2>
          )}
          <div style={leftAlign}>{data.paragraph}</div>
        </div>

        {/* Image & Doctors */}
        <div className="sakthi-image-doctor-wrapper">
          <img
            src={data.image}
            alt={data.title}
            className="sakthi-main-image"
          />
          <div className="sakthi-doctor-card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: 20, color: "#2a3a4d" }}>
                  Available Doctor
                </div>
                <div style={{ fontSize: 11, color: "#7a8ba6" }}>Select Doctor</div>
              </div>
              <button style={{ background: "none", border: "none" }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <rect y="5" width="22" height="2.2" rx="1.1" fill="#2a3a4d" />
                  <rect y="10" width="22" height="2.2" rx="1.1" fill="#2a3a4d" />
                  <rect y="15" width="22" height="2.2" rx="1.1" fill="#2a3a4d" />
                </svg>
              </button>
            </div>
            {data.doctors &&
              data.doctors.map((doc, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    marginBottom: 12,
                  }}
                >
                  <span
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: "50%",
                      background: doc.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={doc.image}
                      alt={doc.name}
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        objectFit: "cover",
                        border: "2px solid #fff",
                      }}
                    />
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15 }}>{doc.name}</div>
                    <div
                      style={{
                        fontSize: 10,
                        color: "#7a8ba6",
                        fontStyle: "italic",
                      }}
                    >
                      {doc.title}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Lists Section */}
        {Array.isArray(data.lists) && (
          <>
            <div>
              {data.lists[0] && (
                <>
                  <h3 style={{ color: "#f5007e", marginBottom: 6, ...leftAlign }}>
                    {data.lists[0].title}
                  </h3>
                  <ul style={{ fontSize: 13, color: "#2a3a4d", ...leftAlign }}>
                    {data.lists[0].items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {data.lists[2] && (
                <>
                  <h3 style={{ color: "#f5007e", marginTop: 20, ...leftAlign }}>
                    {data.lists[2].title}
                  </h3>
                  <ul style={{ fontSize: 13, color: "#2a3a4d", ...leftAlign }}>
                    {data.lists[2].items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div>
              {data.lists[1] && (
                <>
                  <h3 style={{ color: "#f5007e", marginBottom: 6, ...leftAlign }}>
                    {data.lists[1].title}
                  </h3>
                  <ul style={{ fontSize: 13, color: "#2a3a4d", ...leftAlign }}>
                    {data.lists[1].items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {data.lists[3] && (
                <>
                  <h3 style={{ color: "#f5007e", marginTop: 20, ...leftAlign }}>
                    {data.lists[3].title}
                  </h3>
                  <ul style={{ fontSize: 13, color: "#2a3a4d", ...leftAlign }}>
                    {data.lists[3].items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const Facitem = ({ slug }) => {
  useInjectStyles();

  if (slug === "all") {
    return (
      <>
        {Object.keys(facilities).map((key) => (
          <div key={key} style={{ marginBottom: "80px" }}>
            <FacilityDetail key={key} data={facilities[key]} />
          </div>
        ))}
      </>
    );
  }

  if (Array.isArray(slug)) {
    return (
      <>
        {slug.map((s) =>
          facilities[s] ? (
            <div key={s} style={{ marginBottom: "80px" }}>
              <FacilityDetail key={s} data={facilities[s]} />
            </div>
          ) : null
        )}
      </>
    );
  }

  const data = facilities[slug];
  if (!data) {
    return (
      <div style={{ padding: 40, textAlign: "center", fontSize: 16 }}>
        Facility not found.
      </div>
    );
  }

  return <FacilityDetail data={data} />;
};

export default Facitem;
