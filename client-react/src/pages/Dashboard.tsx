import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import tokenRole from "../hooks/TokenRole";
import AdminDashboard from "./AdminDashboard";
import ManagerDashboard from "./ManagerDashboard";
import UserDashboard from "./UserDashboard";

const Dashboard = () => {
  const navigate = useNavigate();
  const role = tokenRole();

  const renderDashboard = (role: any) => {
    switch (role) {
      case "admin":
        return <AdminDashboard />;
      case "manager":
        return <ManagerDashboard />;
      case "user":
        return <UserDashboard />;
      default:
        return (
          <Link to="/login">
            <button type="button" className="btn">
              Error, retry
            </button>
          </Link>
        );
    }
  };

  return <div> {renderDashboard(role)}</div>;
};

export default Dashboard;
