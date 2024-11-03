import { useEffect } from "react";
import TokenRole from "../hooks/TokenRole";

const Dashboard = () => {
  const role = TokenRole();

  return (
    <div>
      test
      <p>test2 {role}</p>
    </div>
  );
};

export default Dashboard;
