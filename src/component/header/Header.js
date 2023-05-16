import React from "react";
import { FaBars } from "react-icons/fa";

const AppHeader = ({ setCollapsed, collapsedMenu }) => {

    return (
        <>
            <div className="headerbar">
                <div className="search-wrap search-wrap-2">
                    <div className="search-box">
                        <span className="cusomMargin">
                            {React.createElement(FaBars, {
                                className: "trigger",
                                onClick: () => setCollapsed(),
                            })}
                        </span>
                        <input className="input" placeholder="Search" type="text" />
                        <div className="btn btn-common">
                            {/* <i className="">i</i> */}
                        </div>
                    </div>
                </div>
                <div className="header-right">
                    <div className="vl"></div>
                    <select className="input-select">
                        <option className="input-select_option">ENG</option>
                        <option>TAM</option>
                        <option>HIN</option>
                    </select>
                    <div className="vl"></div>
                    <div className="icon">
                        <i className="fa fa-bell"></i>
                        <span className="notification-bell">2</span>
                    </div>
                    <div className="vl"></div>
                    <div className="profile">
                        <i className="fa fa-user-circle"></i>
                        <select className="input-select">
                            <option>Mani</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="line"></div>
        </>
    )
}

export default AppHeader;