import { useState } from "react";
import "../../design.scss";
import Calender from "../../assets/images/calendar.png"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import ColumnChart from "../chart/Chart";
import img1 from "../../assets/images/alarm.png";


const Design = () => {
    const [value, onChange] = useState(new Date());

    return (
            <div className="body">
                <div className="cards">
                    <div className="carousel-card">

                        <div className="todayavailable">
                            TODAY AVAILABLE
                        </div>
                        <div className="from">
                            FROM: ABC HOSPITAL
                        </div>
                        <div className = "doc_details" >
                            <div className="doc_img" >
                                <div>
                                    <input type="button" value="<" className="button-input"></input>
                                </div>
                                <div>
                                    <img src={img1} width="85px"></img>
                                </div>
                                <div>
                                    <input type="button" value=">" className="button-input"></input>
                                </div>
                            </div>
                            <div>
                                Dr.Janagiraman
                            </div>
                            <div>
                                Orthopedist: 11:00AM-03:00PM
                            </div>
                        </div>
                    </div>
                    <div className="card-flex">
                        <div className="card-group first" >
                            <div className="normal-card">
                                <div className="detail_card">
                                    <div>
                                        <p className="count">40</p>
                                        <h5 className="heading">Appointments</h5>
                                    </div>
                                    <div className="icon-img">
                                        <img src={Calender} alt="" width={35} />
                                    </div>
                                </div>
                                <p className="status">Yesterday 32 Appointments</p>
                            </div>
                            <div className="normal-card">
                                <div className="detail_card">
                                    <div>
                                        <p className="count">21</p>
                                        <h5 className="heading">New Admit</h5>
                                    </div>
                                    <div className="icon-img">
                                        <img src={Calender} alt="" width={35} />
                                    </div>
                                </div>
                                <p className="status">Yesterday 32 New Admit</p>
                            </div>
                            <div className="normal-card">
                                <div className="detail_card" >
                                    <div>
                                        <p className="count">3</p>
                                        <h5 className="heading">Operations</h5>
                                    </div>
                                    <div className="icon-img">
                                        <img src={Calender} alt="" width={35} />
                                    </div>
                                </div>
                                <p className="status">Yesterday 32 Operations</p>
                            </div>
                        </div>
                        <div className="card-group">
                            <div className="normal-card">
                                <div className="detail_card" >
                                    <div>
                                        <p className="count">5</p>
                                        <h5 className="heading">Doctors</h5>
                                    </div>
                                    <div className="icon-img">
                                        <img src={Calender} alt="" width={35} />
                                    </div>
                                </div>
                                <p className="status">Yesterday 32 Doctors</p>
                            </div><div className="normal-card">
                                <div className="detail_card">
                                    <div>
                                        <p className="count">12</p>
                                        <h5 className="heading">Nurses</h5>
                                    </div>
                                    <div className="icon-img">
                                        <img src={Calender} alt="" width={35} />
                                    </div>
                                </div>
                                <p className="status">Yesterday 32 Nurses</p>
                            </div>
                            <div className="normal-card">
                                <div className="detail_card">
                                    <div>
                                        <p className="count">40000</p>
                                        <h5 className="heading">Earnings</h5>
                                    </div>
                                    <div className="icon-img">
                                        <img src={Calender} alt="" width={35} />
                                    </div>
                                </div>
                                <p className="status">Yesterday 32000 Earnings</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="graph">
                    <div className="chart">
                        <ColumnChart span={6}
                            title={"Registered Users"}
                            y={"No. of Users"}
                            //dataList={userCountData}
                            //drilldownData={userCountDrillDown}
                            widthVal={"300px"}
                            type="column"
                        />
                    </div>
                    <div className="calender">
                        <Calendar value={value} />
                    </div>
                </div>
            </div>
    );
}

export default Design;