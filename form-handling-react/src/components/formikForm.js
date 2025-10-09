import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// ✅ Validation Schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required."),
  email: Yup.string().email("Invalid email address.").required("Email is required."),
  password: Yup.string().min(6, "Password must be at least 6 characters.").required("Password is required."),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Formik form submitted:", values);
        resetForm();
      }}
    >
      {() => (
        <Form style={styles.form}>
          <h2>Formik Registration Form</h2>

          {/* Username Field */}
          <div style={styles.inputGroup}>
            <label>Username:</label>
            <Field
              type="text"
              name="username"
              placeholder="Enter your username"
            />
            {/* ✅ Using ErrorMessage */}
            <ErrorMessage name="username" component="p" style={styles.error} />
          </div>

          {/* Email Field */}
          <div style={styles.inputGroup}>
            <label>Email:</label>
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            {/* ✅ Using ErrorMessage */}
            <ErrorMessage name="email" component="p" style={styles.error} />
          </div>

          {/* Password Field */}
          <div style={styles.inputGroup}>
            <label>Password:</label>
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            {/* ✅ Using ErrorMessage */}
            <ErrorMessage name="password" component="p" style={styles.error} />
          </div>

          <button type="submit" style={styles.button}>
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
}

const styles = {
  form: {
    maxWidth: "400px",
    margin: "2rem auto",
    padding: "1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  },
  inputGroup: {
    marginBottom: "1rem",
    display: "flex",
    flexDirection: "column",
  },
  button: {
    padding: "0.5rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "0.9rem",
    marginTop: "4px",
  },
};

export default FormikForm;
