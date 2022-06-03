import React, { useEffect, useState } from "react";
import { Radio, Checkbox, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { postUserData, clearPostUserData } from '../redux/action'
const PHONE_REGEX = /^\d{10}/;
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const { Option } = Select;

function WelcomePage() {
  const [data, setData] = useState({});
  const [error, setError] = useState({});
  const dispatch = useDispatch();
  const welcome = useSelector(state => state.welcome)
  useEffect(()=> {
    if(welcome.createUserData) {
      clearData()
      dispatch(clearPostUserData())
    }
  }, [welcome.createUserData])
  const clearData = () => {
    let temp = {
      name: "",
      email:"",
      phone: "",
      role: undefined,
      gender: ""
    }
    setData(temp)
  }
  const onChange = (e, label) => {
    setData({...data, [label]: e});
    setError({...error, [label]: false});
  };

  const onActiveChange = (e) => {
    setData({...data, active: e.target.checked});
  };

  const handleChange = (e, label) => {
    setData({...data, [label]: e.target.value});
    setError({...error, [label]: false});
  };

  const validate = () => {
    let valid = true;
    let tempError = {};
    if(!data.name) {
      valid = false;
      tempError.name = true;
    }
    if(!data.gender) {
      valid = false;
      tempError.gender = true;
    }
    if(!data.role) {
      valid = false;
      tempError.role = true;
    }
    if(!data.phone || !PHONE_REGEX.test(data.phone)) {
      valid = false;
      tempError.phone = true;
    }
    if(!data.email || !EMAIL_REGEX.test(data.email)) {
      valid = false;
      tempError.email = true;
    }
    if(!valid) {
      setError(tempError);
    }
    return valid;
  }
  const saveUser = () => {
    if(validate()) {
      dispatch(postUserData(data))
    }
  }

  return (
    <div className="welcome-page-container">
      <div className="welcome-page">
        <div className="header">
          <h1>Hi ! , Welcome</h1>
          <p>Enter the details below</p>
        </div>
        <div className="form">
          <div>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" value={data.name} onChange={(e)=> handleChange(e, "name")}/>
              {error.name && <span className="error">Incorrect Name</span>}
            </div>
          </div>
          <div>
            <label htmlFor="gender">Gender</label>
            <Radio.Group onChange={(e)=>handleChange(e, "gender")} value={data.gender}>
              <Radio value={1}>male</Radio>
              <Radio value={2}>female</Radio>
            </Radio.Group>
            {error.gender && <span className="error">Incorrect gender</span>}
          </div>
          <div>
            <label htmlFor="">Active</label>
            <Checkbox checked={data.active} onChange={onActiveChange}></Checkbox>
          </div>
          <div>
            <label htmlFor="role">Role</label>
            <Select defaultValue="select" value={data.role} onChange={(e) => onChange(e, "role")} >
              <Option value="js">Javascript Developer</Option>
              <Option value="python">Python Developer</Option>
              <Option value="java">Java developer</Option>
            </Select>
            {error.role && <span className="error">Incorrect role</span>}
          </div>
          <div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input type="text" onChange={(e) => handleChange(e, "phone")} value={data.phone}/>
              {error.phone && <span className="error">Incorrect Phone</span>}
            </div>
          </div>
          <div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="text" onChange={(e) => handleChange(e, "email")} value={data.email}/>
              {error.email && <span className="error">Incorrect email</span>}
            </div>
          </div>
          <div className="footer">
            <button onClick={clearData}>Discard</button>
            <button onClick={saveUser}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
