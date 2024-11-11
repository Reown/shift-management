import { useState, useEffect } from "react";
import { verifyTokenRole } from "../services/Auth";
import { useNavigate } from "react-router-dom";

const useVerifyTokenRole = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<string | null>(null);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  useEffect(() => {
    const callVerifyTokenRole = async () => {
      try {
        const role = await verifyTokenRole();
        if (role) {
          setIsValid(true);
          setRole(role);
        } else {
          setIsValid(false);
        }
      } catch (err) {
        setIsValid(false);
      }
    };
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
