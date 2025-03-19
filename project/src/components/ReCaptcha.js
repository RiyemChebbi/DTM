import React from "react";
import styles from "../styles/ReCaptcha.module.css";

function ReCaptcha() {
  return (
    <div className={styles.recaptchaWrapper}>
      <svg
        width="320"
        height="79"
        viewBox="0 0 320 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.recaptcha}
      >
        <rect
          x="0.5"
          y="0.5"
          width="319"
          height="78"
          rx="3.5"
          stroke="#C3C8CF"
        ></rect>
        <text
          fill="#2E3339"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Sansation"
          fontSize="15"
          letterSpacing="0em"
        >
          <tspan x="55" y="44.6855">
            I'm not a robot
          </tspan>
        </text>
        <text
          fill="#555555"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Inter"
          fontSize="8"
          fontWeight="500"
          letterSpacing="0em"
        >
          <tspan x="251" y="71.9091">
            Privacy -{" "}
          </tspan>
        </text>
        <text
          fill="#555555"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Sansation"
          fontSize="8"
          letterSpacing="0em"
        >
          <tspan x="287.148" y="71.9091">
            Terms
          </tspan>
        </text>
        <text
          fill="#555555"
          xmlSpace="preserve"
          style={{ whiteSpace: "pre" }}
          fontFamily="Sansation"
          fontSize="10"
          letterSpacing="0em"
        >
          <tspan x="253" y="60.457">
            reCAPTCHA
          </tspan>
        </text>
        <path
          d="M298.09 28.4782C298.09 28.2552 298.084 28.0335 298.074 27.8128V15.2318L294.596 18.71C291.75 15.2255 287.419 13 282.569 13C277.521 13 273.036 15.4094 270.202 19.1408L275.903 24.9018C276.461 23.8685 277.255 22.981 278.212 22.3107C279.207 21.534 280.618 20.899 282.569 20.899C282.804 20.899 282.986 20.9265 283.12 20.9784C285.537 21.1692 287.632 22.5031 288.866 24.4392L284.83 28.4747C289.942 28.4546 295.716 28.4428 298.09 28.4773"
          fill="#1C3AA9"
        ></path>
        <path
          d="M282.478 13.0006C282.255 13.0013 282.033 13.0065 281.813 13.0165H269.232L272.71 16.4946C269.226 19.3412 267 23.6717 267 28.5222C267 33.57 269.409 38.0545 273.141 40.8893L278.902 35.1882C277.869 34.6295 276.981 33.8358 276.311 32.8788C275.534 31.8835 274.899 30.4732 274.899 28.5224C274.899 28.2867 274.926 28.1048 274.978 27.9712C275.169 25.5541 276.503 23.459 278.439 22.2253L282.475 26.2608C282.455 21.1494 282.443 15.375 282.477 13.001"
          fill="#4285F4"
        ></path>
        <path
          d="M267.001 28.5218C267.001 28.7448 267.007 28.9665 267.017 29.1872V41.7682L270.495 38.29C273.341 41.7745 277.672 44 282.522 44C287.57 44 292.055 41.5906 294.889 37.8592L289.188 32.0982C288.63 33.1315 287.836 34.019 286.879 34.6893C285.884 35.466 284.473 36.101 282.523 36.101C282.287 36.101 282.105 36.0735 281.971 36.0216C279.554 35.8308 277.459 34.4969 276.225 32.5608L280.261 28.5253C275.15 28.5454 269.375 28.5572 267.001 28.5227"
          fill="#ABABAB"
        ></path>
        <rect
          x="14"
          y="25"
          width="28"
          height="28"
          rx="1"
          stroke="#C1C1C1"
          strokeWidth="2"
        ></rect>
      </svg>
    </div>
  );
}

export default ReCaptcha;
