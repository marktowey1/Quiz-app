let countries = ["Ireland", "England", "France", "Wales", "Scotland"];

let shuffledCountries = countries.sort(() => Math.random() - 0.5);

console.log(shuffledCountries);
