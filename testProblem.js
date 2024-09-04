import users from "./user.js";
import {
  interestedInVideoGame,
  getAllUserStayInGermany,
  getAllUsersWithMastersDeg,
  getDevelopers,
} from "./problem.js";

console.log("Interested Video game players are ", interestedInVideoGame(users));
// console.log("Interested Video game players are ", interestedInVideoGame());

console.log("Users who stay in Germany", getAllUserStayInGermany(users));
// console.log("Users who stay in Germany", getAllUserStayInGermany());

console.log("Users who have master degree", getAllUsersWithMastersDeg(users));
// console.log("Users who have master degree", getAllUsersWithMastersDeg({}));

console.log("Developers ", getDevelopers(users));
// console.log("Developers ", getDevelopers());
