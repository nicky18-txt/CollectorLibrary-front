import React from "react";
import styles from "./button.module.css"

let DifferentButton = ({ socialName, iconRef, siteRef}) => {
    return (
        
        <a href={siteRef} target="_blank">
            <button className={styles.btn}>
                <svg
                    className={styles.btnIcon}
                    role="presentation"
                    aria-hidden="true"
                    >
                    <use href={iconRef}></use>
                    </svg>
                    {socialName}
            </button>
        </a>  
    );
};

export default DifferentButton;