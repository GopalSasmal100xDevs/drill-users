import users from "./user.js";
import {
  interestedInVideoGame,
  getAllUserStayInGermany,
  getAllUsersWithMastersDeg,
} from "./problem.js";

// const ans = interestedInVideoGame(users);
// const ans2 = getAllUserStayInGermany(users);
const ans3 = getAllUsersWithMastersDeg(users);
// const ans4 = getAllUsersWithMastersDeg({});
console.log(ans3);
