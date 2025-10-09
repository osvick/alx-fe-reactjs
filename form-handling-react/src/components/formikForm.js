import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
});

const FormikForm = () => {
  // Pass the initial values, validation schema, and submission handler to useFormik
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // Handle form submission logic (e.g., API call)
      alert(JSON.stringify(values, null, 2));
      
      // Simulate an asynchronous API call
      setTimeout(() => {
        setSubmitting(false); // Enable the submit button
        resetForm(); // Optional: reset the form fields
      }, 500);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Login</h2>
      
      {/* Email Input Field */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} // Important for triggering validation on field exit
          value={formik.values.email}
        />
        {/* Display validation errors */}
        {formik.touched.email && formik.errors.email ? (
          <div style={{ color: 'red' }}>{formik.errors.email}</div>
        ) : null}
      </div>

      {/* Password Input Field */}
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password ? (
          <div style={{ color: 'red' }}>{formik.errors.password}</div>
        ) : null}
      </div>

      <button type="submit" disabled={formik.isSubmitting}>
        {formik.isSubmitting ? 'Logging In...' : 'Submit'}
      </button>
    </form>
  );
};

export default FormikForm;