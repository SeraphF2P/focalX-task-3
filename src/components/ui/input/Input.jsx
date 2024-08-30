import React, { forwardRef, useId } from "react";
import styles from "./input.module.css";
export const Input = forwardRef(({ label, ...props }, forwardedRef) => {
  const id = useId();
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input {...props} className={styles.input} id={id} ref={forwardedRef} />
    </div>
  );
});
