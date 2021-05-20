import Form from 'react-bootstrap/Form';

export default function InputWithValidation({
  label,
  formik,
  id,
  type,
  placeholder,
}) {
  return (
    <Form.Group>
      <Form.Label htmlFor={id}>{label}</Form.Label>
      <Form.Control
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[id]}
        isInvalid={formik.errors[id] && formik.touched[id]}
      />
      <Form.Control.Feedback type="invalid">
        {formik.errors[id]}
      </Form.Control.Feedback>
    </Form.Group>
  );
}
