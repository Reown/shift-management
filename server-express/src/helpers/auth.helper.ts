import jwt from "jsonwebtoken";

export const newToken = (email: string, role: string) => {
  console.log("test" + email);
  const token = jwt.sign(
    { email: email, role: role },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );
  console.log(token);
  return token;
};
