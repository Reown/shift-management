import { useNavigate } from "react-router-dom";
import TokenRole from "../hooks/TokenRole";
import AdminDashboard from "./AdminDashboard";
import ManagerDashboard from "./ManagerDashboard";
import UserDashboard from "./UserDashboard";

const Dashboard = () => {
  const navigate = useNavigate();
  const role = TokenRole();

  const renderDashboard = (role: any) => {
    switch (role) {
      case "admin":
        return <AdminDashboard />;
      case "manager":
        return <ManagerDashboard />;
      case "user":
        return <UserDashboard />;
      default:
        navigate("/login");
    }
  };

  return <div> {renderDashboard(role)} </div>;
};

export default Dashboard;
