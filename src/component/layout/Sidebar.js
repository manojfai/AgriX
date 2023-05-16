import SideMenu from './Sidemenu';
import { Drawer } from "antd";
const Appsidebar = ({ collapsedMenu, setCollapsed }) => {
    const onClose = () => {
        setCollapsed(!collapsedMenu);
      };    
    //   const userInfo = useSelector(
    //     (state) => get(state, "AuthReducer.userData", []),
    //     shallowEqual
    //   );
    const userInfo = "welcome";
    
      return (
        <>
          {window.innerWidth <= 600 ? (     
            <Drawer
              placement={"left"}
              closable={false}
              onClose={onClose}
              open={!collapsedMenu}
              width={200}
              key={"left"}
            >     
              <SideMenu collapsedMenu={!collapsedMenu} setCollapsed={setCollapsed} userInfo={userInfo} />
            </Drawer>       
          ) : (
            <SideMenu collapsedMenu={collapsedMenu} setCollapsed={setCollapsed} userInfo={userInfo} />
          )}
        </>
      );
}

export default Appsidebar;