import React from "react";
import { Calendar, Stethoscope, MapPin, ArrowRight, ChevronDown } from "lucide-react";
import firstImage from "../assets/first.png";
import elementsImage from "../assets/Elements.png";

const Sakthi = () => (
  <>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Figtree:wght@700;800&family=Poppins:wght@300;400;500;600&display=swap');
      
      body, html, #root {
        font-family: 'Poppins', Arial, sans-serif;
        background: #b9d9f4;
        overflow-x: hidden;
      }

      .sakthi-container {
        width: 100%;
        background: linear-gradient(to bottom, #b9d9f4 82%, #ffffff);
        min-height: 100vh;
        padding: 0 2.5rem;
        box-sizing: border-box;
        overflow: visible;
        position: relative;
      }

      .sakthi-hero {
        width: 100%;
        max-width: 1300px;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;
        padding: 6rem 4rem 0 4rem;
        gap: 2rem;
        box-sizing: border-box;
        flex-wrap: wrap;
        overflow: visible;
        position: relative;
      }

      .sakthi-left {
        flex: 1 1 400px;
        max-width: 520px;
        min-width: 320px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding-bottom: 0;
      }

      .sakthi-headline {
        font-family: 'Figtree', Arial, sans-serif;
        font-size: 3.8rem;
        font-weight: 400;
        color: rgb(44, 62, 81);
        margin-top: 5rem;
        margin-bottom: 1.2rem;
        margin-left: 1rem;
        line-height: 1.2;
        letter-spacing: 3px;
      }

      /* Responsive: Only reduce headline font size for small screens */
      @media (max-width: 600px) {
        .sakthi-headline {
          font-size: 2.1rem !important;
        }
      }

      .sakthi-desc {
        font-family: 'Poppins', Arial, sans-serif;
        font-size: 0.95rem;
        color: #1f3a57;
        margin-bottom: 3rem;
        line-height: 1.6;
        margin-left: 0.5rem;
        max-width: 460px;
      }

      .sakthi-play-row {
        display: flex;
        align-items: center;
        gap: 0.7rem;
        margin-top: -1rem;
        color: #307bc4;
        margin-left: 0.2rem;
        font-size: 1rem;
        font-family: 'Poppins', Arial, sans-serif;
        font-weight: 500;
      }

      .sakthi-play-btn {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        border: 2px solid #307bc4;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        color: #307bc4;
        font-size: 1rem;
        flex-shrink: 0;
        padding: 0;
      }

      .sakthi-play-btn svg {
        display: block;
      }

      .sakthi-right {
        flex: 1.1 1 600px;
        min-width: 350px;
        max-width: 700px;
        display: flex;
        align-items: flex-start;
        justify-content: flex-end;
        position: relative;
        overflow: visible;
      }

      .sakthi-image-card {
        width: 100%;
        max-width: 1000px;
        height: 640px;
        min-height: 460px;
        background: transparent;
        position: relative;
        aspect-ratio: 16 / 9;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: -4.2rem;
        z-index: 1;
        border: none !important;
      }

      .sakthi-img-main {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        border-radius: 10px;
        display: block;
        background: transparent;
        z-index: 1;
      }

      .sakthi-img-overlay {
        position: absolute;
        top: -40px;
        left: -90px;
        width: 120%;
        height: 130%;
        z-index: 10;
        pointer-events: none;
        object-fit: contain;
      }

      .sakthi-patient-overlay, .sakthi-doctor-overlay {
        display: none !important;
      }

      .sakthi-booking-bar {
        background: white;
        margin: 0 auto;
        border-radius: 16px;
        box-shadow: 0 8px 20px rgb(0 39 105 / 0.09);
        padding: 2rem 3rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 22px;
        max-width: 1080px;
        position: relative;
        z-index: 5;
        margin-top: 1.rem;
      }

      .sakthi-booking-item {
        display: flex;
        align-items: center;
        gap: 16px;
        min-width: 180px;
        flex: 1 1 180px;
      }

      .sakthi-booking-icon {
        background: #307bc4;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .sakthi-booking-label {
        font-size: 0.95rem;
        font-weight: 700;
        color: #1f3a57;
        font-family: 'Poppins', Arial, sans-serif;
      }

      .sakthi-booking-value {
        font-size: 1rem;
        font-weight: 400;
        color: #6b7280;
        font-family: 'Poppins', Arial, sans-serif;
      }

      .sakthi-book-btn {
        background: #284c69;
        border: none;
        border-radius: 9999px;
        color: white;
        padding: 13px 36px;
        cursor: pointer;
        font-weight: 700;
        font-size: 1rem;
        display: flex;
        align-items: center;
        gap: 8px;
        min-width: 140px;
        justify-content: center;
        box-shadow: 0 6px 20px rgb(41 82 117 / 0.18);
        transition: background 0.3s ease;
        font-family: 'Poppins', Arial, sans-serif;
      }

      .sakthi-book-btn:hover {
        background: #295275;
      }

      @media (max-width: 1200px) {
        .sakthi-container {
          padding: 0 1.2rem;
        }
        .sakthi-hero {
          flex-direction: column;
          gap: 2rem;
          align-items: center;
          padding: 4rem 0 0 0;
        }
        .sakthi-image-card {
          max-width: 99vw;
          height: 320px;
          margin-bottom: -2rem;
        }
        .sakthi-booking-bar {
          max-width: 99vw;
          padding: 1.2rem 0.7rem;
          gap: 1.1rem;
        }
      }
      @media (max-width: 600px) {
        .sakthi-booking-bar {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          margin-top: 0 !important;
          padding: 0 2rem 0.2rem !important;
          gap: 0 !important;
        }
        .sakthi-booking-item {
          margin-bottom: -6rem !important;
          gap: 20px !important;
          min-width: 0 !important;
        }
        .sakthi-book-btn {
          margin-top: 3rem !important;
          padding: 8px 14px !important;
          min-width: 90px !important;
          font-size: 0.92rem !important;
        }
      }
    `}</style>

    <div className="sakthi-container">
      <div className="sakthi-hero">
        <div className="sakthi-left">
          <div className="sakthi-headline">Your Trust is<br />Our Sakthi</div>
          <div className="sakthi-desc">
            Sakthi Hospital has a team of reputed doctors who are highly qualified and have many years of experience as diagnostician.
          </div>
         <div
  className="sakthi-play-row"
  style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}
  onClick={() => window.open("https://youtu.be/GWtlEUmtcwE?si=wlsWg8K-8ObFGpqE", "_blank", "noopener,noreferrer")}
  tabIndex={0}
  role="button"
  aria-label="See how we work"
  onKeyPress={e => {
    if (e.key === "Enter" || e.key === " ") {
      window.open("https://youtu.be/GWtlEUmtcwE?si=wlsWg8K-8ObFGpqE", "_blank", "noopener,noreferrer");
    }
  }}
>
  <span className="sakthi-play-btn" aria-label="See how we work">
    <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="11" cy="11" r="10" fill="transparent" stroke="#307bc4" strokeWidth="1" />
      <polygon points="8,6.5 16,11 8,15.5" fill="#307bc4" />
    </svg>
  </span>
  See how we work
</div>

        </div>
        <div className="sakthi-right">
          <div className="sakthi-image-card">
            <img src={firstImage} alt="Sakthi Hospital" className="sakthi-img-main" loading="lazy"/>
            <img src={elementsImage} alt="Decorative Elements" className="sakthi-img-overlay" loading="lazy" />
          </div>
        </div>
      </div>

      <div className="sakthi-booking-bar">
        <div className="sakthi-booking-item">
          <div className="sakthi-booking-icon">
            <Calendar size={22} color="#fff" />
          </div>
          <div>
            <div className="sakthi-booking-label">Date</div>
            <div className="sakthi-booking-value">June 26, 2025</div>
          </div>
        </div>
        <div className="sakthi-booking-item">
          <div className="sakthi-booking-icon">
            <Stethoscope size={22} color="#fff" />
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <div>
              <div className="sakthi-booking-label">Specialization</div>
              <div className="sakthi-booking-value">Gynecology</div>
            </div>
            <ChevronDown size={16} color="#6b7280" />
          </div>
        </div>
        <div className="sakthi-booking-item">
          <div className="sakthi-booking-icon">
            <MapPin size={22} color="#fff" />
          </div>
          <div>
            <div className="sakthi-booking-label">Mobile Number</div>
            <div className="sakthi-booking-value">+91 8870711987</div>
          </div>
        </div>
        <button className="sakthi-book-btn">
          Book Now <ArrowRight size={18} />
        </button>
      </div>
    </div>
  </>
);

export default Sakthi;
