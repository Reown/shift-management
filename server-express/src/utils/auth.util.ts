import jwt from "jsonwebtoken";

export const newToken = (email: string, role: string) => {
  const token = jwt.sign(
    { email: email, role: role },
    process.env.JWT_SECRET as string,
    { expiresIn: "1h" }
  );
  return token;
};

export const verToken = (token: string) => {
  return jwt.verify(token, process.env.JWT_SECRET as string);
};
