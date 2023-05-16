import { useDebugValue, useState } from "react";
import Layouts from "../component/layout/Layout";
import Design from "../component/dashboard/Designs";

const Rootstack = () => {

    const[isAuthed] = useState(true);

    const routes = [
        { path: "/hospital" },
        { path: "/", component: <Design /> },
        { path: "/appointments", component: <Design />, },
        { path: "/doctors", component: <Design />, },
        { path: "/patients", component: <Design />, },
        { path: "/roomallotments", component: <Design />, },
        { path: "/payments", component: <Design />, },
        { path: "/experiencereport", component: <Design />, },
        { path: "/departments", component: <Design />, },
        { path: "/insurance", component: <Design />, },
        { path: "/events", component: <Design />},
        { path: "/chat", component: <Design />},
      ];
    
      return <Layouts routes={routes} isAuthed={isAuthed} />;
}

export default Rootstack;