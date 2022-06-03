import MainContainer from "../containers/main-container";
import User from "../containers/user";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Locations from "../locations";
import { StoredKeys } from "../constants";
import { getCookie } from "../utils";
import WelcomePage from "../containers/main-container/welcomepage/WelcomePage";

export const Router = () => {
  const loginReducer = useSelector((state) => state.login);
  // let storedData = '{}';
  // if(localStorage.getItem(StoredKeys.USER_DETAILS)) {
  //     storedData = localStorage.getItem(StoredKeys.USER_DETAILS) ? localStorage.getItem(StoredKeys.USER_DETAILS) : '';
  //     storedData = (typeof storedData === 'string') ?  window.atob(storedData) : '{}';
  // }
  if (getCookie(StoredKeys.USER_DETAILS)) {
    return (
      <Routes>
        <Route path={Locations.DASHBOARD} element={<MainContainer />} />
        <Route
          path="*"
          element={<Navigate to={Locations.DASHBOARD} replace />}
        />
      </Routes>
    );
  } else {
    return (
      <Routes>
        {/* <Route path={Locations.DASHBOARD} element={<User />} /> */}
        <Route
          path="*"
          element={<Navigate to={Locations.DASHBOARD} replace />}
        />
        <Route path={Locations.DASHBOARD} element={<WelcomePage />} />
      </Routes>
    );
  }
};
