import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import Society from "./Pages/Societies/Society";
import Transaction from "./Pages/Transaction/Transaction";
import Member from "./Pages/Member/Member";
import Profile from "./Pages/Member/Profile";
import MemberList from "./Pages/Member/MemberList";
import Test from "./Pages/Member/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "society",
        element: <Society />,
      },
      {
        path: "transaction",
        element: <Transaction />,
      },
      {
        path: "member",
        element: <Member />,
      },
      {
        path: "/member/profile",
        element: <Profile />,
      },
      {
        path: "/member/member-list",
        element: <MemberList />,
      },
      {
        path: "/member/transactions",
        element: <Test />,
      },
    ],
  },
]);

export default router;
