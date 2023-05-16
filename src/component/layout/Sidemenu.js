import { Link, useLocation } from "react-router-dom";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { Layout, Menu } from "antd";
import heart from "../../assets/images/WhiteHeart.png";

const { Sider } = Layout;

const SidebarMenu = ({ collapsedMenu, setCollapsed }) => {
  const currentLocation = useLocation().pathname;

  const onClick = (e) => {
    if (e.key === "/logout") {
      // dispatch(setLogout());
    }
    if (window.innerWidth <= 600) {
      setCollapsed();
    }
  };

  function getItem(label, key, icon, children, path) {
    return {
      key,
      icon,
      children,
      label,
      path,
    };
  }

  const items = [
    getItem(
      <Link to={"/hospital"}>Hospital</Link>,
      "/hospital",
      <HiOutlineViewGridAdd />,
      ""
    ),

    getItem(<Link to={"/"}>Dashboard</Link>, "/", <HiOutlineViewGridAdd />, ""),

    getItem(
      <Link to={"/appointments"}>Appointments</Link>,
      "/appointments",
      <HiOutlineViewGridAdd />,
      ""
    ),

    getItem(
      <Link to={"/doctors"}>Doctors</Link>,
      "/doctors",
      <HiOutlineViewGridAdd />,
      ""
    ),

    getItem(
      <Link to={"/patients"}>Patients</Link>,
      "/patients",
      <HiOutlineViewGridAdd />,
      ""
    ),

    getItem(
      <Link to={"/roomallotments"}>Room Allotments</Link>,
      "/roomallotments",
      <HiOutlineViewGridAdd />,
      ""
    ),

    getItem(
      <Link to={"/payments"}>Payments</Link>,
      "/payments",
      <HiOutlineViewGridAdd />,
      ""
    ),

    getItem(
      <Link to={"/experiencereport"}>Experience Report</Link>,
      "/experiencereport",
      <HiOutlineViewGridAdd />,
      ""
    ),

    getItem(
      <Link to={"/departments"}>Departments</Link>,
      "/departments",
      <HiOutlineViewGridAdd />,
      ""
    ),

    getItem(
      <Link to={"/insurance"}>Insurance Company</Link>,
      "/insurance",
      <HiOutlineViewGridAdd />,
      ""
    ),

    getItem(
      <Link to={"/events"}>Events</Link>,
      "/events",
      <HiOutlineViewGridAdd />,
      ""
    ),

    getItem(
      <Link to={"/chat"}>Chat</Link>,
      "/chat",
      <HiOutlineViewGridAdd />,
      ""
    ),
  ];

  return (
    <>
      <Sider
        submenuopendelay={5}
        submenuclosedelay={5}
        trigger={null}
        id={"customDrawer"}
        collapsible
        collapsed={!collapsedMenu}
        collapsedWidth="0"
        className="sidebarStyle"
      >
        <div className="sidebarStyle">
          <div className="sidetitle" style={{}}>
            <div className="med-logo">
              <img
                style={{ display: "flex" }}
                src={heart}
                width={"100%"}
                height={30}
              ></img>
            </div>
            <span className="appname">MEDILINE</span>
          </div>
          <Menu
            mode="inline"
            onClick={onClick}
            selectedKeys={[currentLocation]}
            items={items}
            className="menuitems"
          ></Menu>
        </div>
      </Sider>
    </>
  );
};

export default SidebarMenu;
