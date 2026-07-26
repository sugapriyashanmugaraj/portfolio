import React from "react";

interface MyComponentProps {
  error?: any;
  style?: object;
}

const FormError: React.FC<MyComponentProps> = ({ error, style }) => {
  return (
    <p className="formError" style={{ ...style }}>
      {error}
    </p>
  );
};

export default FormError;
