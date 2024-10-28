import { Request, Response } from "express";
import { Users } from "../entities/testpk.entity";
import { Profile } from "../entities/testfk.entity";
import { getEntityManager } from "../config/entity-manager";

export const basicinsert = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const entityManager = await getEntityManager();
    const users = [{ name: "test111", profile: { age: 333, bio: "bio11" } }];
    const createdUsers = users.map((user) => entityManager.create(Users, user));
    await entityManager.save(Users, createdUsers);

    res.status(200).json("done");
  } catch (err) {
    console.log(err);
    return;
  }
};

export const findProfileByUserId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const entityManager = await getEntityManager();
    const { id } = req.params;

    const user = await entityManager.findOne(Users, {
      where: { id: Number(id) },
      relations: ["profile"], // Ensure the profile relation is loaded
    });

    if (user && user.profile) {
      console.log(
        `Profile for user ${user.name}: Age - ${user.profile.age}, Bio - ${user.profile.bio}`
      );
      res.status(200).json({ message: "nice" });
    } else {
      console.log("User or Profile not found");
      res.status(404).json({ message: "notniec" });
    }
  } catch (err) {
    console.log("Error fetching profile:", err);
    res.status(500).json({ message: "error" });
  }
};
