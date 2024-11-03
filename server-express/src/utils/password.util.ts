import { genSalt, hash, compare } from "bcryptjs";

export const bcrypt = async (password: string) => {
  return await hash(password, await genSalt(10));
};

export const match = async (password: string, input: string) => {
  return await compare(password, input);
};

export const genRandomPw = (length: number) => {
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
};
