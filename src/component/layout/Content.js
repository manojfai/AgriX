import { Layout } from "antd";
import React from "react";
import { Route, Routes } from "react-router-dom";

const { Content } = Layout;
const AppContent = ({ routes, isAuthed }) => {

    const getRoutes = () => {
          return (
            <Routes>
              <Route  path="/hospital"  element={routes[0].component}></Route>
              <Route  path="/"  element={routes[1].component}></Route>
              <Route  path="/appointments"  element={routes[2].component}></Route>
              <Route  path="/doctors"  element={routes[3].component}></Route>
              <Route  path="/patients"  element={routes[4].component}></Route>
              <Route  path="/roomallotments"  element={routes[5].component}></Route>
              <Route  path="/payments"  element={routes[6].component}></Route>
              <Route  path="/experiencereport"  element={routes[7].component}></Route>
              <Route  path="/departments"  element={routes[8].component}></Route>
              <Route  path="/insurance"  element={routes[9].component}></Route>
              <Route  path="/events"  element={routes[10].component}></Route>
              <Route  path="/chat"  element={routes[11].component}></Route>
            </Routes>
          );
      };

    return (
        <>
          <Content>{getRoutes()}</Content>
        </>
      );
}

export default AppContent;