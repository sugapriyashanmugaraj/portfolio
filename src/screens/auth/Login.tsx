import React, { Fragment, useState } from "react";
import "../../style/screens/auth.css";
import { CircularProgress, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  checkEmpty,
  checkValidEmail,
  checkValidPass,
} from "../../utils/formFunctions";
import FormError from "../../components/FormError";
import { login } from "../../api/calls/formCalls";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

interface UserDetails {
  email: string;
  password: string;
}

interface ErrorDetails {
  email: any;
  password: any;
}
const Login = () => {
  const [passVisible, setpassVisible] = useState<boolean>(false);
  const [details, setDetails] = React.useState<UserDetails>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState<ErrorDetails>({
    email: false,
    password: false,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const validateFields = () => {
    let valErr = { ...errors };
    let formData = new FormData();

    if (checkEmpty(details.email)) {
      valErr.email = "Enter email";
      formData = undefined as any;
    } else if (!checkValidEmail(details.email)) {
      valErr.email = "Enter valid email";
      formData = undefined as any;
    } else {
      valErr.email = false;
      formData && formData.append("email", details.email);
    }

    if (checkEmpty(details.password)) {
      valErr.password = "Enter password";
      formData = undefined as any;
    } else if (!checkValidPass(details.password)) {
      valErr.password = "Enter valid password";
      formData = undefined as any;
    } else {
      valErr.password = false;
      formData && formData.append("password", details.password);
    }

    setErrors(valErr);
    return formData;
  };
  const handleSubmit = () => {
    setLoading(true);
    const data = validateFields();
    if (data) {
      login(data, async (response: any) => {
        const resJson = await response;
        if (resJson?.statusCode === 200) {
          enqueueSnackbar(resJson?.msg, {
            variant: "success",
            autoHideDuration: 2000,
          });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        } else {
          enqueueSnackbar(resJson?.msg, {
            variant: "error",
            autoHideDuration: 2000,
          });
        }
      });
      setLoading(false);
    } else {
      enqueueSnackbar("Please check the fields!", {
        variant: "error",
        autoHideDuration: 2000,
      });
      setLoading(false);
    }
  };

  const handleInputs = (key: string, event: any) => {
    setDetails({ ...details, [key]: event.target.value });
    setErrors({ ...errors, [key]: false });
  };

  return (
    <Fragment>
      <div className="authCont authLoginCont">
        <div className="authInnCont">
          <h1 className="authHeading">Login</h1>
          <TextField
            fullWidth
            value={details.email}
            className="mt10"
            variant="outlined"
            placeholder="Email"
            required
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleInputs("email", event);
            }}
          />
          {errors.email && <FormError error={errors.email} />}

          <TextField
            fullWidth
            value={details.password}
            type={!passVisible ? "password" : "text"}
            className="mt10"
            variant="outlined"
            placeholder="Password"
            required
            InputProps={{
              endAdornment: (
                <div
                  onClick={() => setpassVisible(!passVisible)}
                  className="cp"
                >
                  {!passVisible ? (
                    <VisibilityOff className="formIcons" />
                  ) : (
                    <Visibility className="formIcons" />
                  )}
                </div>
              ),
            }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleInputs("password", event);
            }}
          />
          {errors.password && <FormError error={errors.password} />}

          <button className="signUpBtn mt20 cp" onClick={handleSubmit}>
            {loading ? (
              <CircularProgress size={20} className="progressWhite20" />
            ) : (
              "Login"
            )}
          </button>

          <div className="centerMargin mt10">
            <span className="dfac">
              <p className="smallTextAuth">Can't remember ? &nbsp;&nbsp;</p>
              <p
                className="smallTextUndAuth cp"
                onClick={() => navigate("/password")}
              >
                Forgot password
              </p>
            </span>
            <span className="dfac mt5">
              <p className="smallTextAuth">
                Already having account ? &nbsp;&nbsp;
              </p>
              <p
                className="smallTextUndAuth cp"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign Up
              </p>
            </span>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
