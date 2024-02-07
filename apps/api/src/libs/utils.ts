import jwt from "jsonwebtoken";

const getToken = (data: Object) => {
  const token = jwt.sign(data, process.env.TOKEN_KEY || "", {
    expiresIn: "2h",
  });
  return token;
};

export { getToken };
