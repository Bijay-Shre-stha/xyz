import bcrypt from "bcryptjs";
import prisma from "../../prisma/prisma";
import { getToken } from "../../libs/utils";
import { Request, Response } from "express";

const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // TODO: change this to use JOI
  // Validate user input
  if (!(email && password)) {
    res.status(400).send("All input is required");
  }

  // find user
  const user = await prisma.user.findFirst({ where: { email: email } });

  // check user
  if (user && (await bcrypt.compare(password, user.password))) {
    const token = getToken({ user_id: user.id, email: user.email });

    res.cookie("Authorization", `Bearer ${token}`);

    return res.status(200).json({
      error: null,
      success: true,
      data: {
        accessToken: token,
      },
    });
  }

  return res.status(400).json({ error: "Invalid Credentials", success: false });
};

export default loginController;
