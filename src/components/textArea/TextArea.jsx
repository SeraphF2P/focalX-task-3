import React, { forwardRef, useId } from "react";
import styles from "./textArea.module.css";
const TextArea = forwardRef(({ label, ...props }, forwardedRef) => {
  const id = useId();
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <textarea
        {...props}
        className={styles.textarea}
        id={id}
        ref={forwardedRef}
      />
    </div>
  );
});

export default TextArea;
