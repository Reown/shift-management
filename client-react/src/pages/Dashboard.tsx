import useVerifyTokenRole from "../hooks/useVerifyTokenRole";
import AdminDashboard from "./AdminDashboard";
import ManagerDashboard from "./ManagerDashboard";
import UserDashboard from "./UserDashboard";

const Dashboard = () => {
  const { role, isValid } = useVerifyTokenRole();

  const renderDashboard = (role: any) => {
    switch (role) {
      case "admin":
        return <AdminDashboard />;
      case "manager":
        return <ManagerDashboard />;
      case "user":
        return <UserDashboard />;
    }
  };

  if (isValid === null) {
    return <div>Loading...</div>;
  }

  if (role) {
    return <div> {renderDashboard(role)}</div>;
  }
};

export default Dashboard;
