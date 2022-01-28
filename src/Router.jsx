import { getAuth } from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Authentication/Login";
import SignUp from "./components/Authentication/SignUp";
import Bell from "./components/Bell";
import BellUi from "./components/Bell-UI";
import CabinBell from "./components/CabinBell";
import Order from "./components/CabinBell/components/Order";
import Helper from "./components/Helper";
import HelperBellUi from "./components/helper-Bell-UI";
import Dashboard from "./components/Pages/Dashboard";
import Home from "./components/Pages/Home";
import Offices from "./components/Pages/offices";
import OfficeLayout from "./components/Pages/offices/Components/OfficeLayout";
import PrivateRoute from "./components/Router/PrivateRoute";
import PublicRoute from "./components/Router/publicRoute";
import { db, firebaseApp } from "./services/firebase/firebase";

const Router = () => {
  const [isLogin, setIsLogin] = useState(null);
  const [userData, setUserData] = useState({});
  const [memberOfHouses, setMemberOfHouses] = useState([]);
  const [updateRequest, setUpdateRequest] = useState([]);
  const auth = getAuth(firebaseApp);

  useEffect(() => {
    auth.onAuthStateChanged((state) => {
      if (state?.uid) {
        const docRef = doc(db, "users", state?.uid);
        getDoc(docRef).then((userDoc) => {
          setUserData({ ...userDoc.data(), uid: state.uid });
        });
      }
      return state?.uid ? setIsLogin(true) : setIsLogin(false);
    });
  }, []);

  useEffect(() => {
    if (userData.uid) {
      const houseRef = collection(db, "houses");
      const houseQuery = query(houseRef, where("ownerId", "==", userData.uid));
      const memberOf = [];
      getDocs(houseQuery).then((data) => {
        data.forEach((doc) => {
          memberOf.push({ ...doc.data(), houseId: doc.id });
        });

        setMemberOfHouses(memberOf);
      });
    }
  }, [userData]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute isLogin={isLogin} />} path="/">
          <Route element={<Login />} path="/" />
        </Route>
        <Route element={<PublicRoute isLogin={isLogin} />} path="/login">
          <Route element={<Login />} path="/login" />
        </Route>
        <Route element={<PublicRoute isLogin={isLogin} />} path="/signup">
          <Route element={<SignUp />} path="/signup" />
        </Route>
        <Route element={<PrivateRoute isLogin={isLogin} />} path="/dashboard">
          <Route
            element={
              <Dashboard
                user={userData}
                memberOfHouses={memberOfHouses}
                setUpdateRequest={setUpdateRequest}
              />
            }
            path="/dashboard"
          />
        </Route>
        <Route element={<PrivateRoute isLogin={isLogin} />} path="/homes">
          <Route element={<Home user={userData} />} path="/homes" />
        </Route>
        <Route element={<PrivateRoute isLogin={isLogin} />} path="/office">
          <Route
            element={<Offices user={userData} houseMember={memberOfHouses} />}
            path="/office"
          />
        </Route>

        <Route element={<PrivateRoute isLogin={isLogin} />} path="/:id">
          <Route element={<OfficeLayout user={userData} />} path="/:id" />
        </Route>

        <Route element={<PrivateRoute isLogin={isLogin} />} path="/bell">
          <Route
            element={<BellUi user={userData} updateRequest={updateRequest} />}
            path="/bell"
          />
        </Route>

        <Route element={<Bell />} path="/doorbell" />

        <Route
          element={<PrivateRoute isLogin={isLogin} />}
          path="/cabinbell/:officeId"
        >
          <Route
            element={<CabinBell user={userData} />}
            path="/cabinbell/:officeId"
          />
        </Route>
        <Route
          element={<PrivateRoute isLogin={isLogin} />}
          path="/cabinbell/:officeId/order/:orderId"
        >
          <Route
            element={<Order />}
            path="/cabinbell/:officeId/order/:orderId"
          />
        </Route>

        <Route
          element={<PrivateRoute isLogin={isLogin} />}
          path="/helper/:officeId"
        >
          <Route element={<HelperBellUi />} path="/helper/:officeId" />
        </Route>
        <Route
          element={<PrivateRoute isLogin={isLogin} />}
          path="/received/:officeId/:orderId"
        >
          <Route
            element={<Helper user={userData} />}
            path="/received/:officeId/:orderId"
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
