import React from "react";
import gynMainImage from "../assets/your-main-image.png";
import doc4 from "../assets/doctor4.png";
import doc5 from "../assets/doctor5.png";

// Inject responsive styles only once
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
  width: 340px;
  height: 320px;
  margin-top: 40px;
}
.sakthi-main-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 6px 32px rgba(0,0,0,0.08);
  background: #fff;
}
.sakthi-doctor-card {
  position: absolute;
  right: 150px;
  bottom: -60px;
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
    max-width: 92vw;
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
  .sakthi-inner-section {
    padding: 0 0;
    max-width: 100vw;
    font-size: 13px;
    line-height: 1.6;
    margin: 0;
  }
  .sakthi-inner-section h1,
  .sakthi-inner-section h2,
  .sakthi-inner-section h3 {
    font-size: 18px !important;
    text-align: left !important;
    margin-left: 0 !important;
    padding-left: 0 !important;
  }
  .sakthi-inner-section p,
  .sakthi-inner-section ul {
    font-size: 12px !important;
    line-height: 1.5;
    text-align: left !important;
    margin-left: 0 !important;
    padding-left: 0 !important;
    list-style-position: inside !important;
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

const commonParagraphStyle = {
  fontSize: 13,
  color: "#2a3a4d",
  margin: "12px 0 20px",
  lineHeight: 1.6,
  textAlign: "justify",
};

const specialties = {
  // ... All your specialties as in your original code ...
  // (copy your specialties object here)


  gyn: {
    title: "Obstetrics and Gynecology",
    heading: "Maternity Care: Caring For The Empowered Woman Of Today",
    paragraph: (
      <>
        <p style={commonParagraphStyle}>
          At Sakthi Hospital, we believe every woman deserves exceptional and compassionate care throughout every stage of life. Our multidisciplinary team of experts in obstetrics and gynecology offers comprehensive services including preventive care, diagnostic evaluations, and advanced treatment options.
        </p>
        <p style={commonParagraphStyle}>
          From adolescence through menopause and beyond, we address every concern with sensitivity and professionalism. Our maternity program includes antenatal classes, high-risk pregnancy management, and personalized labor support to ensure the safety and comfort of both mother and child. In addition, we offer cutting-edge treatments for infertility, minimally invasive surgeries, and specialized support for hormonal and reproductive health challenges. Our mission is to empower women with knowledge, comfort, and excellence in care.
        </p>
      </>
    ),
    image: gynMainImage,
    doctors: [
      {
        name: "Dr. Sivakamu Dhandapani",
        title: "M.D., D.G.O., & Chairperson",
        image: doc4,
        bg: "#fdb7d3",
      },
      {
        name: "Dr. Usha Rani Minna",
        title: "Senior Consultant – Obstetrics, Gynecology",
        image: doc5,
        bg: "#fbe6a2",
      },
    ],
    lists: [
      {
        title: "INFERTILITY",
        items: [
          "IUI - Intrauterine insemination",
          "IVF - In Vitro Fertilization",
          "USG Scanning",
          "Tubal Re-canalization",
          "Adolescent Clinical Counseling",
        ],
      },
      {
        title: "SCARLESS HYSTERECTOMY",
        items: [
          "Less Pain",
          "No Scar",
          "Early Mobilization",
          "Short Stay",
          "Early To Work",
        ],
      },
      {
        title: "SPECIALIZED SERVICES FOR WOMEN",
        items: [
          "Normal delivery and postpartum care",
          "Screening for breast, cervical and ovarian cancers",
          "Colposcopy",
          "Management of menopausal symptoms and treatment",
          "Osteoporosis care",
          "Gestational diabetes",
          "Gestational hypertension and pre-eclampsia",
          "Evaluation and Management of recurrent miscarriages.",
          "Comprehensive management of female sub-fertility",
          "Aesthetic Gynaecology",
        ],
      },
      {
        title: "MINIMALLY INVASIVE PROCEDURES",
        items: [
          "Laparoscopic Hysterectomy",
          "Laparoscopic Myomectomy",
          "Laparoscopic Excision of Ovarian Cysts",
          "Hysteroscopic Lysis of Adhesions",
          "Hysteroscopic Endometrial Ablation",
        ],
      },
    ],
  },

 urology: {
    title: "Urology",
    heading: "Complete Urology Care To Regain Health And Confidence",
    paragraph: (
      <>
        <p style={commonParagraphStyle}>
The Urology team at Sakthi has wide-ranging expertise in treating diseases, ranging from incontinence to male infertility. Our surgeons are also adept in performing the most innovative laser and laparoscopic procedures that have helped thousands of our patients.        </p>
        <ul style={{ ...commonParagraphStyle, listStyle: "disc", paddingLeft: 20 }}>
          <li>Laser stone removal </li>
          <li> Laser Prostate Surgery</li>
          <li> Mini PCNL – Micro Surgery for large kidney stone removal</li>
          <li>Paediatric Urology – Circumcision, paediatric stones etc </li>
          <li>Reconstructive Urology – Urethroplasty, Pyeloplasty etc </li>
          <li>Fistula Surgery </li>
          <li> Keyhole surgery for major urological conditions
          </li>
          <li> Lap Partial Nephrectomy
          </li>
          <li> Lap Pyeloplasty
          </li>
          <li> Male Infertility – Microscopic varicocelectomy, tured, testicular biopsy
          </li>
          <li> Female Urinary Incontinence
          </li>
          <li>Genito urinary malignancies
          </li>
        </ul>
      </>
    ),
    image: gynMainImage,
    doctors: [
      {
        name: "Dr. Sivakamu Dhandapani",
        title: "M.D., D.G.O., & Chairperson",
        image: doc4,
        bg: "#fdb7d3",
      },
      {
        name: "Dr. Usha Rani Minna",
        title: "Senior Consultant – Obstetrics, Gynecology",
        image: doc5,
        bg: "#fbe6a2",
      },
    ],
    // No lists property for ENT
  },

 ortho: {
    title: "ORTHOPAEDICS",
    heading: "Strong Team Of Orthopaedicians To Care For Your Bones",
    paragraph: (
      <>
        <p style={commonParagraphStyle}>
          
Any bone-related ailments and deformities can be treated by our expert panel of Orthopaedic surgeons. The hospital is equipped to provide trauma care and has all the necessary medical infrastructure to care for trauma patients. Our doctors also have experience in treating sport injuries and to providing rehabilitative care. 
                  </p>
        <ul style={{ ...commonParagraphStyle, listStyle: "disc", paddingLeft: 20 }}>
          <li> Arthroscopy surgery </li>
          <li>  Spinal surgery</li>
          <li> Arthritis care </li>
          <li> Team of experienced Orthopaedicians, Physiotherapists, nurses and occupational therapist. </li>
          <li> Centre of excellence in posterior stabilization of spine, joint replacements.
          </li>
          <li>  Trauma fracture surgeries for hip, knee, shoulder, elbow & ankle
          </li>
          <li> Minimally invasive keyhole/arthroscopic surgeries
          </li>

        </ul>
      </>
    ),
    image: gynMainImage,
    doctors: [
      {
        name: "Dr. Sivakamu Dhandapani",
        title: "M.D., D.G.O., & Chairperson",
        image: doc4,
        bg: "#fdb7d3",
      },
      {
        name: "Dr. Usha Rani Minna",
        title: "Senior Consultant – Obstetrics, Gynecology",
        image: doc5,
        bg: "#fbe6a2",
      },
    ],
    // No lists property for ENT
  },

 diabetes: {
    title: "DIABETOLOGY",
    heading: "  Taking The Bitterness Out Of Diabetic Care",
    paragraph: (
      <>
        <p style={commonParagraphStyle}>
          
Diabetes has become an epidemic presenting itself as a healthcare crisis in India. At Sakthi, we are fully equipped with the most advanced treatment options and a team of doctors who wish to go the extra mile and give personalised care for the patients.                  </p>
        <ul style={{ ...commonParagraphStyle, listStyle: "disc", paddingLeft: 20 }}>
        <li>  Management of Type I & Type II Diabetes Mellitus and gestational diabetes
 </li>
                <li> Treatment options for obesity and preventive measures for diabetes
 </li>
        <li>   Diabetic foot care
</li>
        <li>  Supportive services in diabetic management
 </li>
        <li> Nutritional therapy
  </li>
        <li>  Exercise therapy
 </li>
 <li> Behavioural therapy
  </li>

        </ul>
      </>
    ),
    image: gynMainImage,
    doctors: [
      {
        name: "Dr. Sivakamu Dhandapani",
        title: "M.D., D.G.O., & Chairperson",
        image: doc4,
        bg: "#fdb7d3",
      },
      {
        name: "Dr. Usha Rani Minna",
        title: "Senior Consultant – Obstetrics, Gynecology",
        image: doc5,
        bg: "#fbe6a2",
      },
    ],
    // No lists property for ENT
  },

 pediatrics: {
    title: "PAEDIATRICS",
    heading: "  Nurturing A Healthy, New Generation",
    paragraph: (
      <>
        <p style={commonParagraphStyle}>
          The department of Paediatrics at Sakthi has specialists who have multiple  years of experience in caring for children and adolescents. Our approach is patient-centric and designed to suit the needs of the child. From treating congenital conditions in infants to hormonal issues in teenagers, we cover the entire spectrum of paediatric healthcare needs.
</p>        <ul style={{ ...commonParagraphStyle, listStyle: "disc", paddingLeft: 20 }}>
       
       <li> Comprehensive & fully equipped neonatal intensive care unit
  </li>
       <li>  Neonatologist on call
 </li>
       <li>  Well-trained staff
 </li>
       <li>  Neonatal ventilator
 </li>
       <li>  Total parenteral nutrition for ELBW babies
 </li>
<li>High parenteral LED photo therapy unit
</li>
        </ul>
      </>
    ),
    image: gynMainImage,
    doctors: [
      {
        name: "Dr. Sivakamu Dhandapani",
        title: "M.D., D.G.O., & Chairperson",
        image: doc4,
        bg: "#fdb7d3",
      },
      {
        name: "Dr. Usha Rani Minna",
        title: "Senior Consultant – Obstetrics, Gynecology",
        image: doc5,
        bg: "#fbe6a2",
      },
    ],
    // No lists property for ENT
  },

 gastro: {
    title: "GASTROENTROLOGY",
    heading: "Best Gastroenterology Specialist For Your Digestive Health",
    paragraph: (
      <>
        <p style={commonParagraphStyle}>
We have the best specialists to help you in preventing or treating any kind of conditions concerning the digestive tract and liver. Our gastroenterologists and surgeons are experienced, skilful and up-to-date on the newest advances in the field.        </p>
      </>
    ),
    image: gynMainImage,
    doctors: [
      {
        name: "Dr. Sivakamu Dhandapani",
        title: "M.D., D.G.O., & Chairperson",
        image: doc4,
        bg: "#fdb7d3",
      },
      {
        name: "Dr. Usha Rani Minna",
        title: "Senior Consultant – Obstetrics, Gynecology",
        image: doc5,
        bg: "#fbe6a2",
      },
    ],
    lists: [
      {
        title: "Open Surgeries",
        items: [
                  "Gastrectomy  ",
          " Esophagectomy ",
          " Colectomy Surgery ",
          "Liver Resection ",
          " Pancreatic Resection ",
          "Whipple’s Procedure  ",
          " APR ",
          "Splenectomy  ",
          " Tumor Resections ",

        ],
      },
      {
        title: "Laparoscopic Surgery",
        items: [
          " Appendectomy  ",
          "Cholecystectomy   ",
          " Adhesion Release Surgery ",
          "  Fundoplication",
          "  Cystogastrostomy ",
          " Distal Pancreatectomy  ",
          " Liver Segmentectomy  ",
          "   Small Bowel Resection",
          " Hemicolectomy  ",
          "Bariatric surgery  ",
          " Hernia Repair  ",
          "LAR   ",
          "Diagnostic Laparoscopy",
          " Lymph Node Biopsy  ",
        ],
      },
    ],
  },

  ent: {
    title: "ENT",
    heading: "Your Search For The Best ENT Specialists Ends Here",
    paragraph: (
      <>
        <p style={commonParagraphStyle}>
          Our ENT doctors are committed to offer comprehensive care for all your problems concerning ear, nose and throat. From treating simple ear infections to performing complex surgeries, we do all it takes to make our patients leave healed and happy.
        </p>
        <ul style={{ ...commonParagraphStyle, listStyle: "disc", paddingLeft: 20 }}>
          <li>Comprehensive Treatment for Ear, Nose and Throat</li>
          <li>Tonsillectomy, Mastoidectomy</li>
          <li>Treatment for snoring, sinus</li>
          <li>Various micro surgeries for ear complaints</li>
          <li>Thyroid and salivary gland disease</li>
          <li>Endoscopic sinus surgery</li>
          <li>FESS surgery</li>
        </ul>
      </>
    ),
    image: gynMainImage,
    doctors: [
      {
        name: "Dr. Sivakamu Dhandapani",
        title: "M.D., D.G.O., & Chairperson",
        image: doc4,
        bg: "#fdb7d3",
      },
      {
        name: "Dr. Usha Rani Minna",
        title: "Senior Consultant – Obstetrics, Gynecology",
        image: doc5,
        bg: "#fbe6a2",
      },
    ],
    // No lists property for ENT
  },

   cardio: {
    title: "CARDIOLOGY",
    heading: "When It Comes To Cardiac Care, Our Heart Is In The Right Place",
    paragraph: (
      <>
        <p style={commonParagraphStyle}>
Our team of experts in cardiology include some of the most trusted names in Chennai. With multiple years of experience in the field, they are proficient in diagnosing and treating even complex heart conditions. We also provide preventive and rehabilitative counsel to keep our patients in their best health.        </p>
        <ul style={{ ...commonParagraphStyle, listStyle: "disc", paddingLeft: 20 }}>
          <li>Conservative management</li>
          <li>Non-invasive cardiac procedures</li>
          <li>Heart attack</li>
          <li>  Cardiac failure</li>
          <li>Arrhythmia</li>
        </ul>
      </>
    ),
    image: gynMainImage,
    doctors: [
      {
        name: "Dr. Sivakamu Dhandapani",
        title: "M.D., D.G.O., & Chairperson",
        image: doc4,
        bg: "#fdb7d3",
      },
      {
        name: "Dr. Usha Rani Minna",
        title: "Senior Consultant – Obstetrics, Gynecology",
        image: doc5,
        bg: "#fbe6a2",
      },
    ],
    // No lists property for ENT
  },

 surgery: {
    title: "GENERAL SURGERY",
    heading: "Best Gastroenterology Specialist For Your Digestive Health",
     paragraph: (
      <>
        <p style={commonParagraphStyle}>
         General surgery, surgical specialty wherein the surgeon not just perform surgeries for a wide range of common ailments, but are also responsible for patient care before, during, and after surgery. All surgeons must start their training in general surgery; many then go on to focus on another specialty. We bring in the expertise of experienced surgeons in performing surgical procedures in ENT, colorectal, gastroscopy, urology, gynaecology, orthopaedic, plastic & general surgery.
        </p>
        <p style={commonParagraphStyle}>
        Commonly known as ‘keyhole surgery’ or laparoscopy, laparoscopic surgery requires smaller incisions than traditional open surgery and is performed with smaller instruments. Laparoscopic surgery is a minimally invasive surgical method used to access the interior of the body through a small incision, removing the need for open surgery.
At Sakthi hospital in addition to open surgery, we also offer advanced surgical options including minimally invasive laparoscopic and robotic-assisted surgery
        </p>
      </>
    ),
       
    image: gynMainImage,
    doctors: [
      {
        name: "Dr. Sivakamu Dhandapani",
        title: "M.D., D.G.O., & Chairperson",
        image: doc4,
        bg: "#fdb7d3",
      },
      {
        name: "Dr. Usha Rani Minna",
        title: "Senior Consultant – Obstetrics, Gynecology",
        image: doc5,
        bg: "#fbe6a2",
      },
    ],
  },






};

const SpecialtyDetail = ({ data }) => {
  return (
    <div
      style={{
        padding: "60px 20px",
        fontFamily: "Poppins, sans-serif",
        marginBottom: 40,
      }}
    >
      <div className="sakthi-main-grid">
        {/* Main Content */}
        <div className="sakthi-inner-section">
          <h1
            style={{
              fontSize: 40,
              color: "#f5007e",
              fontWeight: 600,
              marginLeft: 0,
              paddingLeft: 0,
              textAlign: "left",
            }}
          >
            {data.title}
          </h1>
          {data.heading && (
            <h2
              style={{
                fontSize: 20,
                fontWeight: 500,
                color: "#2a3a4d",
                marginTop: 24,
                marginLeft: 0,
                paddingLeft: 0,
                textAlign: "left",
              }}
            >
              {data.heading}
            </h2>
          )}
          <div style={{ marginLeft: 0, paddingLeft: 0, textAlign: "left" }}>
            {data.paragraph}
          </div>
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
                <div style={{ fontSize: 11, color: "#7a8ba6" }}>
                  Select Doctor
                </div>
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
                    <div style={{ fontWeight: 600, fontSize: 15 }}>
                      {doc.name}
                    </div>
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
            <div className="sakthi-inner-section">
              {data.lists[0] && (
                <>
                  <h3
                    style={{
                      color: "#f5007e",
                      marginBottom: 6,
                      marginLeft: 0,
                      paddingLeft: 0,
                      textAlign: "left",
                    }}
                  >
                    {data.lists[0].title}
                  </h3>
                  <ul
                    style={{
                      fontSize: 13,
                      color: "#2a3a4d",
                      marginLeft: 0,
                      paddingLeft: 0,
                      listStylePosition: "inside",
                      textAlign: "left",
                    }}
                  >
                    {data.lists[0].items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {data.lists[2] && (
                <>
                  <h3
                    style={{
                      color: "#f5007e",
                      marginTop: 20,
                      marginLeft: 0,
                      paddingLeft: 0,
                      textAlign: "left",
                    }}
                  >
                    {data.lists[2].title}
                  </h3>
                  <ul
                    style={{
                      fontSize: 13,
                      color: "#2a3a4d",
                      marginLeft: 0,
                      paddingLeft: 0,
                      listStylePosition: "inside",
                      textAlign: "left",
                    }}
                  >
                    {data.lists[2].items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <div className="sakthi-inner-section" style={{ marginTop: 32 }}>
              {data.lists[1] && (
                <>
                  <h3
                    style={{
                      color: "#f5007e",
                      marginBottom: 6,
                      marginLeft: 0,
                      paddingLeft: 0,
                      textAlign: "left",
                    }}
                  >
                    {data.lists[1].title}
                  </h3>
                  <ul
                    style={{
                      fontSize: 13,
                      color: "#2a3a4d",
                      marginLeft: 0,
                      paddingLeft: 0,
                      listStylePosition: "inside",
                      textAlign: "left",
                    }}
                  >
                    {data.lists[1].items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </>
              )}
              {data.lists[3] && (
                <>
                  <h3
                    style={{
                      color: "#f5007e",
                      marginTop: 20,
                      marginLeft: 0,
                      paddingLeft: 0,
                      textAlign: "left",
                    }}
                  >
                    {data.lists[3].title}
                  </h3>
                  <ul
                    style={{
                      fontSize: 13,
                      color: "#2a3a4d",
                      marginLeft: 0,
                      paddingLeft: 0,
                      listStylePosition: "inside",
                      textAlign: "left",
                    }}
                  >
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

const Itemdetail = ({ slug }) => {
  useInjectStyles();

  if (slug === "all") {
    return (
      <>
        {Object.keys(specialties).map((key) => (
          <div key={key} style={{ marginBottom: "80px" }}>
            <SpecialtyDetail key={key} data={specialties[key]} />
          </div>
        ))}
      </>
    );
  }

  if (Array.isArray(slug)) {
    return (
      <>
        {slug.map((s) =>
          specialties[s] ? (
            <div key={s} style={{ marginBottom: "80px" }}>
              <SpecialtyDetail key={s} data={specialties[s]} />
            </div>
          ) : null
        )}
      </>
    );
  }

  const data = specialties[slug];
  if (!data) {
    return (
      <div style={{ padding: 40, textAlign: "center", fontSize: 16 }}>
        Specialty not found.
      </div>
    );
  }

  return <SpecialtyDetail data={data} />;
};

export default Itemdetail;
