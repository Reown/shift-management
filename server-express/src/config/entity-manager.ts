import { AppDataSource } from "./data-source";

export const getEntityManager = async () => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
  }
  return AppDataSource.manager;
};
