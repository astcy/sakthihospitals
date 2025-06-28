import React from "react";
import shieldLogo from "../assets/shield-logo.png"; // replace with your image path

const Backtest = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to right, #7DB6E8, #C6DFF3)",
        borderRadius: "10px",
        padding: "20px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        maxWidth: "1160px",
        margin: "100px auto",
      }}
    >
      {/* Left Text Section */}
      <div
        style={{
          flex: "1 1 60%",
          color: "#ffffff",
          paddingRight: "30px",
          minWidth: "400px",
        }}
      >
        <h1
          style={{
            fontSize: "44px",
            fontWeight: "800",
            lineHeight: "1.3",
            marginBottom: "12px",
                letterSpacing: "2px", // 👈 Add this line

          }}
        >
          Don’t Let Your Health <br />
          Take a Backseat!
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#1E293B",
            fontWeight: "400",
            maxWidth: "300px",
          }}
        >
          Schedule an appointment with one of our <br />
          experienced medical professionals today!
        </p>
      </div>

      {/* Right Image Section */}
      <div
        style={{
          flexShrink: 0,
          marginTop: "-80px",
        }}
      >
        <img
          src={shieldLogo}
          alt="Shield Logo"
          style={{
            width: "240px",
            height: "260px",
          }}
        />
      </div>
    </div>
  );
};

export default Backtest;
