import React from "react";
import {Helmet} from "react-helmet";
import * as Yup from "yup";
import { Formik } from "formik";
import { PostById } from "../../api/request";
import {  useNavigate } from "react-router-dom";

const Addelement = () => {
  const navigate = useNavigate()
  return (
    <div className="application  classik">
    <Helmet>
        <meta charSet="utf-8" />
        <title>Add Element</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <div style={{ paddingTop: "150px" }}>
      <Formik
        initialValues={{
          name: "",
          title: "",
          about: "",
          image: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().min(5).required(),
          title: Yup.string().min(6).required(),
          image: Yup.string()
            .min(5, "Link tamamlanmayib")
            .required("Link elave edin!"),
          about: Yup.string().required(" bosh buraxdin!"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setTimeout(() => {
            PostById(values)
            navigate("/")
            setSubmitting(false);
            resetForm();
          }, 2000);
        }}
      >
        {({
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleSubmit,
          handleReset,
          handleChange,
        }) => (
          <form className="magic-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className="input"
              value={values.name}
              onChange={handleChange}
              style={{
                borderColor: touched.name && errors.name ? "red" : "black",
              }}
            />
            {errors.name && touched.name && (
              <div className="input-feedback">{errors.name}</div>
            )}

            <label htmlFor="title" className="topMargin">
              title
            </label>
            <input
              name="title"
              type="text"
              placeholder="Title"
              className="input"
              value={values.title}
              onChange={handleChange}
              style={{
                borderColor: touched.title && errors.title ? "red" : "black",
              }}
            />
            {errors.title && touched.title && (
              <div className="input-feedback">{errors.title}</div>
            )}

            <label htmlFor="image" className="topMargin">
              Image
            </label>
            <input
              name="image"
              type="text"
              placeholder="Image"
              className="input"
              value={values.image}
              onChange={handleChange}
              style={{
                borderColor: touched.image && errors.image ? "red" : "black",
              }}
            />
            {errors.image && touched.image && (
              <div className="input-feedback">{errors.image}</div>
            )}
            <label htmlFor="about" className="topMargin">
              about
            </label>
            <input
              name="about"
              type="text"
              placeholder="about"
              className="input"
              value={values.about}
              onChange={handleChange}
              style={{
                borderColor: touched.about && errors.about ? "red" : "black",
              }}
            />
            {errors.about && touched.about && (
              <div className="input-feedback">{errors.about}</div>
            )}

            <button type="submit" disabled={!dirty || isSubmitting}>
              Add Element
            </button>
          </form>
        )}
      </Formik>
    </div>
</div>
   
  );
};

export default Addelement;
