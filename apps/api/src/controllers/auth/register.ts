import { Request, Response } from "express";
import Register from "../../models/register";
import bcrypt from "bcryptjs";
import prisma from "../../prisma/prisma";
import { getToken } from "../../libs/utils";
import { Prisma } from "@prisma/client";

const registerController = async (req: Request, res: Response) => {
  const { error, value } = Register.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error, success: false });
  }

  //Encrypt user password
  const encryptedPassword = await bcrypt.hash(value.password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        name: value.name,
        email: value.email,
        dob: value.dob,
        password: encryptedPassword,
        phone: value.phone,
        github_profile: value.github,
        linkedin_profile: value.linkedin,
      },
    });

    const token = getToken({ user_id: user.id, email: user.email });

    res.cookie("Authorization", `Bearer ${token}`);

    return res.status(200).json({
      error: null,
      success: true,
      data: {
        accessToken: token,
      },
    });
  } catch (e) {
    // if (e instanceof Prisma.PrismaClientKnownRequestError) {
    //   if (e.code === "P2002") {
    return res.status(400).json({
      error: { message: "Email address already in use." },
      success: false,
    });
    // }
  }

  // return res
  //   .status(500)
  //   .json({ error: { message: "Something went wrong!" }, success: false });
  // }
};

export default registerController;
