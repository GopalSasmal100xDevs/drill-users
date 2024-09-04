import users from "./user.js";

// Q1 Find all users who are interested in playing video games.
function interestedInVideoGame(users) {
  if (!Object.keys(users).length === 0) {
    return [];
  }

  const interestedVideoGamePlayers = [];
  for (let user in users) {
    const { interests, interest } = users[user];
    if (interests && interests.length === 0) {
      continue;
    }
    if (interest && interest.length === 0) {
      continue;
    }

    const regex = /video game/i;
    for (let index = 0; interests && index < interests.length; index++) {
      if (regex.test(interests[index])) {
        interestedVideoGamePlayers.push(user);
      }
    }

    for (let index = 0; interest && index < interest.length; index++) {
      if (regex.test(interest[index])) {
        interestedVideoGamePlayers.push(user);
      }
    }
  }

  return interestedVideoGamePlayers;
}

// Q2 Find all users staying in Germany.

function getAllUserStayInGermany(users) {
  if (!Object.keys(users).length === 0) {
    return [];
  }

  const usersLiveInGermany = [];
  for (let user in users) {
    if (users[user]?.nationality === "Germany") {
      usersLiveInGermany.push(user);
    }
  }

  return usersLiveInGermany;
}

export { interestedInVideoGame, getAllUserStayInGermany };

/*
Q3 Find all users with masters Degree.
Q4 Group users based on their Programming language mentioned in their designation.
*/
