import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verifyTokenRole } from "../services/Auth";

const useVerifyTokenRole = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const callVerifyTokenRole = async () => {
    const role = await verifyTokenRole();
    if (role) {
      setIsValid(true);
      setRole(role);
    } else {
      setIsValid(false);
    }
  };

  useEffect(() => {
    callVerifyTokenRole();
  }, []);

  useEffect(() => {
    if (isValid === false) {
      navigate("/login");
    }
  }, [isValid, role]);

  return { role, isValid };
};

export default useVerifyTokenRole;
