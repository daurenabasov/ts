enum Membership {
  Simple,
  Standard,
  Premium,
}

const membership = Membership.Simple; // Даст нам индекс
const membershipReverse = Membership[2]; // Даст нам значение
console.log(membership);
console.log(membershipReverse);

// ===========

enum Social {
  VK = "VK",
  FACEBOOK = "FACEBOOK",
  INSTAGRAM = "INSTAGRAM",
}

const social = Social.VK;
console.log(social);
