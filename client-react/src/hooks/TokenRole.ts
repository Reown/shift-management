import { useState, useEffect } from "react";
import { getTokenRole } from "../services/Auth";

const TokenRole = () => {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const getRole = async () => {
      const role = await getTokenRole();
      setRole(role);
    };

    getRole();
  });

  return role;
};

export default TokenRole;
