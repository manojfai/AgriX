import { HashRouter } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";
import AppSider from "./Sidebar";
import { Layout } from "antd";
import ContentPage from './Content'
import '../../design.scss';
import AppHeader from "../header/Header";

const Layouts = ({ routes, isAuthed }) => {

  const [collapsed, setCollapsed] = useState(true);
  const ref = useRef(null);

  //   const userInfo = useSelector(
  //     (state) => get(state, "AuthReducer.userData", {}),
  //     shallowEqual
  //   );

  const userInfo = "welcome";

  useEffect(() => {
    if (window.innerWidth <= 600) {
      console.log("called");
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setCollapsed(!collapsed)
        }
      };
      document.addEventListener('click', handleClickOutside, true);
      return () => {
        document.removeEventListener('click', handleClickOutside, true);
      };
    }
  }, [collapsed])

  return (
    <div>
      {isAuthed && (
        <HashRouter>
          <Layout className="dashboard-height" >
            {collapsed && <AppSider
              userInfo={userInfo}
              collapsedMenu={collapsed}
              setCollapsed={setCollapsed}
            />}

            {window.innerWidth <= 600 && <AppSider
              ref={ref}
              userInfo={userInfo}
              collapsedMenu={collapsed}
              setCollapsed={() => {
                setCollapsed(!collapsed)
              }}
            />
            }
            <Layout className="main-page" >
              <AppHeader
                setCollapsed={() => {
                  setCollapsed(!collapsed)
                }}
                collapsedMenu={collapsed}
                style={{ position: "fixed" }}
              />
              <ContentPage routes={routes} isAuthed={isAuthed} />
            </Layout>
          </Layout>
        </HashRouter>
      )}
    </div>
  );
}

export default Layouts;