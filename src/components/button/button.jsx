import React from "react";
import styles from "./button.module.css"

let DifferentButton = ({ socialName, iconRef, siteRef, onClick, variant = "default", type = "button" }) => {
    const botoncito = variant === "submit" ? styles.btnSubmit : styles.btn;
    const content = (
        <button className={botoncito} onClick={onClick} type={type}>
                <svg
                    className={styles.btnIcon}
                    role="presentation"
                    aria-hidden="true"
                    >
                    <use href={iconRef}></use>
                    </svg>
                    {socialName}
            </button>
    );
    return siteRef ? (
        <a href={siteRef} target="_blank" style={{ textDecoration: 'none' }}>
            {content}
        </a>
    ) : (
        content
    );
};

export default DifferentButton;