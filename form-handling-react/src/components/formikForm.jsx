import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Formik Registration</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          console.log("Formik submitted:", values);

          try {
            const response = await fetch("https://jsonplaceholder.typicode.com/users", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values),
            });

            const result = await response.json();
            console.log("✅ API Response:", result);
            resetForm();
          } catch (error) {
            console.error("❌ API Error:", error);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form className="space-y-4">
            <div>
              <label htmlFor="username" className="block mb-1">Username</label>
              <Field
                type="text"
                name="username"
                className="w-full border rounded-lg p-2"
              />
              <ErrorMessage name="username" component="div" className="text-red-600 text-sm" />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <Field
                type="email"
                name="email"
                className="w-full border rounded-lg p-2"
              />
              <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
            </div>

            <div>
              <label htmlFor="password" className="block mb-1">Password</label>
              <Field
                type="password"
                name="password"
                className="w-full border rounded-lg p-2"
              />
              <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
