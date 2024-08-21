import React, { forwardRef } from "react";
import styles from "./btn.module.css";
const Btn = forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <button ref={forwardedRef} className={styles.btn} {...props}>
      {children}
    </button>
  );
});

export default Btn;
