import React, { useState, useEffect } from "react";
import { Radio } from "antd";
import "antd/dist/antd.css";
import { Checkbox } from "antd";
import { Select } from "antd";
import axios from "axios";
import { CheckOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";

import { type } from "@testing-library/user-event/dist/type";
import { triggerActionButton } from "../redux/action";

function WelcomePage() {
  const [value, setValue] = useState();

  const [data, setData] = useState({});
  const [err, setErr] = useState({});

  const [name, setName] = useState("");
  const [validateName, setValidateName] = useState(false);
  const [nameErr, setNameErr] = useState(false);

  const [email, setEmail] = useState("");
  const [validateEmail, setValidateEmail] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const [phone, setPhone] = useState("");
  const [validatePhone, setValidatePhone] = useState(false);
  const [phoneErr, setPhoneErr] = useState(false);

  const [role, setRole] = useState("");
  const [validateRole, setvalidateRole] = useState(false);
  const [roleErr, setRoleErr] = useState(false);

  const [gender, setGender] = useState("");
  const [validateGender, setValidateGender] = useState(false);
  const [genderErr, setGenderErr] = useState(false);

  const NAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}/;
  const PHONE_REGEX = /^\d{10}/;
  const EMAIL_REGEX =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const dispatch = useDispatch();

  useEffect(() => {
    const result = NAME_REGEX.test(name);
    console.log(name, result);
    setValidateName(result);
  }, [name]);

  useEffect(() => {
    console.log(typeof phone);
    const result = PHONE_REGEX.test(phone);
    console.log(phone, result);
    setValidatePhone(result);
  }, [phone]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    console.log(email, result);
    setValidateEmail(result);
  }, [email]);

  const { Option } = Select;

  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setGender(e.target.value);
  };

  const onActiveChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setRole(value);
  };

  const saveUser = (e) => {
    e.preventDefault();
    console.log("api", gender, role);

    if (validateEmail && validateName && validatePhone && role && gender) {
      const valuesRecieved = {
        name,
        gender,
        role,
        email,
        phone,
      };

      dispatch(
        triggerActionButton({
          name,
          gender,
          role,
          email,
          phone,
        })
      );
    } else {
      !validateName && setNameErr(true);
      !validateEmail && setEmailErr(true);
      !validatePhone && setPhoneErr(true);

      alert("Enter correct credentials");
    }
  };

  return (
    <div className="welcome-page-container">
      <div className="welcome-page">
        <div className="header">
          <h1>Hi ! , Welcome</h1>
          <p>Enter the details below</p>
        </div>
        <form action="">
          <div>
            <div className={`${nameErr}?'error':${validateName}?'valid':''`}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                onChange={(e) => {
                  nameErr && setNameErr(false);
                  setName(e.target.value);
                }}
              />
              {nameErr && <span className="error">Incorrect Name</span>}
              {/* {validateName && (
                <span>
                  <CheckOutlined />
                </span>
              )} */}
            </div>
          </div>
          <div>
            <label htmlFor="gender">Gender</label>

            <Radio.Group onChange={onChange} value={gender}>
              <Radio value={1}>male</Radio>
              <Radio value={2}>female</Radio>
            </Radio.Group>
          </div>
          <div>
            <label htmlFor="">Active</label>
            <Checkbox onChange={onActiveChange}></Checkbox>
          </div>
          <div>
            <label htmlFor="role">Role</label>
            <Select
              defaultValue="select"
              style={{
                width: 120,
              }}
              onChange={handleChange}
            >
              <Option value="js">Javascript Developer</Option>
              <Option value="python">Python Developer</Option>
              <Option value="java">Java developer</Option>
            </Select>
          </div>
          <div>
            <div className={`${phoneErr}?'error':${validatePhone}?'valid':''`}>
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                onChange={(e) => {
                  phoneErr && setPhoneErr(false);
                  setPhone(e.target.value);
                }}
              />
              {phoneErr && <span className="error">Incorrect Phone</span>}
              {/* {validatePhone && (
                <span>
                  <CheckOutlined />
                </span>
              )} */}
            </div>
          </div>
          <div>
            <div className={`${emailErr}?'error':${validateEmail}?'valid':''`}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                onChange={(e) => {
                  emailErr && setEmailErr(false);
                  setEmail(e.target.value);
                }}
              />
              {emailErr && <span className="error">Incorrect email</span>}
              {/* {validateEmail && (
                <span>
                  <CheckOutlined />
                </span>
              )} */}
            </div>
          </div>
          <div className="footer">
            <button>Discard</button>
            <button onClick={saveUser}>Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default WelcomePage;
