// interface User {
//   name: string;
//   email: string;
//   dob: string;
//   phone: string;
//   github_profile: string;
//   linkedin_profile: string;
// }

import prisma from "../prisma/prisma";

const User = prisma.user;

export default User;
