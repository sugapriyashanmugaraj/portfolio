import React, { ChangeEvent, Fragment, useState } from "react";
import "../../style/screens/auth.css";
import { Checkbox, CircularProgress, MenuItem, TextField } from "@mui/material";
import { Info, Visibility, VisibilityOff } from "@mui/icons-material";
import {
  checkEmpty,
  checkValidEmail,
  checkValidPass,
} from "../../utils/formFunctions";
import FormError from "../../components/FormError";
import constants from "../../utils/constants";
import { enqueueSnackbar } from "notistack";
import { signUp } from "../../api/calls/formCalls";
import { useNavigate } from "react-router-dom";

interface UserDetails {
  email: string;
  password: string;
  role: number;
  terms: boolean;
}

interface ErrorDetails {
  email: any;
  password: any;
  role: any;
  terms: any;
}
const SignUp = () => {
  const navigate = useNavigate();
  const [passVisible, setPassVisible] = useState<boolean>(false);
  const [details, setDetails] = React.useState<UserDetails>({
    email: "",
    password: "",
    role: 1,
    terms: true,
  });
  const [errors, setErrors] = React.useState<ErrorDetails>({
    email: false,
    password: false,
    role: false,
    terms: false,
  });
  const [isPasswordInfoVisible, setIsPasswordInfoVisible] = useState<boolean>(
    false,
  );
  const [progress, setProgress] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
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
      formData && formData.append("role", details.role.toString());
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
    if (!details.terms) {
      valErr.terms = "You should accept our terms and conditions";
      formData = undefined as any;
    } else {
      valErr.terms = false;
    }
    setErrors(valErr);
    return formData;
  };
  const handleSubmit = () => {
    setLoading(true);
    const data = validateFields();
    if (data) {
      signUp(data, async (response: any) => {
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
  const openFileInNewTab = () => {
    const fileUrl = process.env.PUBLIC_URL + "/termsandconditions";
    window.open(fileUrl, "_blank");
  };
  const handleInputs = (key: string, event: any) => {
    setDetails({ ...details, [key]: event.target.value });
    setErrors({ ...errors, [key]: false });
  };
  React.useEffect(() => {
    const containsUC = constants.upperCaseRegEx.test(details.password);
    const containsLC = constants.lowerCaseRegEx.test(details.password);
    const containsNum = constants.numberRegEx.test(details.password);
    const containsSC = constants.specialRegEx.test(details.password);
    const isEight = String(details.password).length >= 8;

    if (checkEmpty(details.password)) {
      setProgress(0);
    } else if (
      containsUC &&
      containsLC &&
      containsNum &&
      containsSC &&
      isEight
    ) {
      setProgress(100);
    } else if (containsUC && containsLC && containsNum) {
      setProgress(55);
    } else if (containsUC && containsLC) {
      setProgress(35);
    } else if (containsUC) {
      setProgress(15);
    }
  }, [details.password]);
  return (
    <Fragment>
      <div className="authCont">
        <div className="authInnCont">
          <h1 className="authHeading">Sign Up</h1>
          <TextField
            fullWidth
            name="email"
            value={details.email}
            className="mt20"
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
            name="password"
            value={details.password}
            type={!passVisible ? "password" : "text"}
            className="mt10"
            variant="outlined"
            placeholder="Password"
            required
            InputProps={{
              endAdornment: (
                <div className="dfac">
                  <span
                    className="infoIcon cp"
                    onMouseOver={() => setIsPasswordInfoVisible(true)}
                  >
                    <Info className="mr10 cp formIcons infoIcon" />
                  </span>
                  {isPasswordInfoVisible && (
                    <div
                      className="passwordInfoCont"
                      onMouseOut={() => setIsPasswordInfoVisible(false)}
                    >
                      <ul className="passwordInfoDet">
                        <p className="passHintHead">
                          Password should contain minimum of 8 characters with
                          atleast one
                        </p>
                        <li className="singlePassOpt">Uppercase letter(A-Z)</li>
                        <li className="singlePassOpt">Lowercase letter(a-z)</li>
                        <li className="singlePassOpt">Numeric value(0-9)</li>
                        <li className="singlePassOpt">Special Charater(@,$)</li>
                      </ul>
                    </div>
                  )}
                  <span
                    className="cp"
                    onClick={() => {
                      setPassVisible(!passVisible);
                    }}
                  >
                    {!passVisible ? (
                      <VisibilityOff className="formIcons" />
                    ) : (
                      <Visibility className="formIcons" />
                    )}
                  </span>
                </div>
              ),
            }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleInputs("password", event);
            }}
          />
          {errors.password && <FormError error={errors.password} />}
          {details.password.length > 1 && (
            <div className="mt10 passProgOut">
              <div
                style={{
                  width: `${progress}%`,
                  backgroundColor: "#4CAF50",
                  height: "5px",
                  transition: "width 0.5s",
                }}
              ></div>
            </div>
          )}
          <TextField
            fullWidth
            name="role"
            select
            className="mt10"
            defaultValue={Number(details.role)}
            value={Number(details.role)}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              handleInputs("role", e);
            }}
          >
            <MenuItem value={1}>I am a Recruiter</MenuItem>
            <MenuItem value={0}>I am a Job Seeker</MenuItem>
          </TextField>
          {errors.role && <FormError error={errors.role} />}

          <div className="dfac mt10">
            <Checkbox
              checked={details.terms}
              style={{
                padding: "0px 0px",
                color: "#60A5FA",
              }}
              className="mr10"
              onChange={(e) => {
                setDetails({ ...details, terms: !details.terms });
                setErrors({ ...errors, terms: false });
              }}
            />
            <span>
              <p>
                I accept the{" "}
                <span
                  onClick={() => openFileInNewTab()}
                  className="termsCond cp"
                >
                  terms and conditions
                </span>
              </p>
            </span>
          </div>
          {errors.terms && <FormError error={errors.terms} />}

          <button
            disabled={loading}
            className="signUpBtn mt25 cp"
            onClick={handleSubmit}
          >
            {loading ? (
              <CircularProgress size={20} className="progressWhite20" />
            ) : details?.role === 1 ? (
              "Start Hiring"
            ) : (
              "Start Exploring"
            )}
          </button>
          <span className="db mt10 " style={{ textAlign: "center" }}>
            <p className="smallTextAuth">Already having account ? </p>
            <p
              className="smallTextUndAuth cp"
              onClick={() => {
                setDetails({
                  email: "",
                  password: "",
                  role: 1,
                  terms: true,
                });
                setErrors({
                  email: false,
                  password: false,
                  role: false,
                  terms: false,
                });
                navigate("/login");
              }}
            >
              Login
            </p>
          </span>
        </div>
      </div>
    </Fragment>
  );
};
export default SignUp;
