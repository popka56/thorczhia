/*===General Scripts===*/
var topButton = document.getElementById("topAnchor");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (screen.width > 850) {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("topAnchor").style.visibility = "visible";
    } else {
      document.getElementById("topAnchor").style.visibility = "hidden";
    }
  }
}

function toTopFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*===DM Tools===*/
function diceD4() {
  document.getElementById("dice-result").innerHTML = "Result: " + Math.floor((Math.random() * 4) + 1);
}

function diceD6() {
  document.getElementById("dice-result").innerHTML = "Result: " + Math.floor((Math.random() * 6) + 1);
}

function diceD8() {
  document.getElementById("dice-result").innerHTML = "Result: " + Math.floor((Math.random() * 8) + 1);
}

function diceD10() {
  document.getElementById("dice-result").innerHTML = "Result: " + Math.floor((Math.random() * 10) + 1);
}

function diceD12() {
  document.getElementById("dice-result").innerHTML = "Result: " + Math.floor((Math.random() * 12) + 1);
}

function diceD20() {
  document.getElementById("dice-result").innerHTML = "Result: " + Math.floor((Math.random() * 20) + 1);
}

function generateNumber() {
  min = Math.ceil(document.getElementById("minValue").value);
  max = Math.floor(document.getElementById("maxValue").value);
  if (min < 0 || max < 0) {
    document.getElementById("numberResult").innerHTML = "Result: Please enter only positive integers!";
  }
  else if (max <= min) {
    document.getElementById("numberResult").innerHTML = "Result: Max Value must be lower than the Min Value!";
  }
  else {
    document.getElementById("numberResult").innerHTML = "Result: " + Math.floor(Math.random() * (max - min + 1) + min);
  }
}

function generateNpc() {
  randomNameMinValue = Math.ceil(1);
  randomNameMaxValue = Math.floor(20);
  randomName = Math.floor(Math.random() * (randomNameMaxValue - randomNameMinValue + 1) + randomNameMinValue);

  randomRaceMinValue = Math.ceil(1);
  randomRaceMaxValue = Math.floor(8);
  randomRace = Math.floor(Math.random() * (randomRaceMaxValue - randomRaceMinValue + 1) + randomRaceMinValue);

  randomSexMinValue = Math.ceil(1);
  randomSexMaxValue = Math.floor(2);
  randomSex = Math.floor(Math.random() * (randomSexMaxValue - randomSexMinValue + 1) + randomSexMinValue);

  randomPersonalityMinValue = Math.ceil(1);
  randomPersonalityMaxValue = Math.floor(10);
  randomPersonality = Math.floor(Math.random() * (randomPersonalityMaxValue - randomPersonalityMinValue + 1) + randomPersonalityMinValue);

  randomGoalMinValue = Math.ceil(1);
  randomGoalMaxValue = Math.floor(15);
  randomGoal = Math.floor(Math.random() * (randomGoalMaxValue - randomGoalMinValue + 1) + randomGoalMinValue);

  switch (randomRace) {
    case 1:
      document.getElementById("npcRace").innerHTML = "Race: Saldi";
      break;
    case 2:
      document.getElementById("npcRace").innerHTML = "Race: Noble Elf";
      break;
    case 3:
      document.getElementById("npcRace").innerHTML = "Race: Elf (or Half-elf)";
      break;
    case 4:
      document.getElementById("npcRace").innerHTML = "Race: Dwarf";
      break;
    case 5:
      document.getElementById("npcRace").innerHTML = "Race: Dragonfolk";
      break;
    case 6:
      document.getElementById("npcRace").innerHTML = "Race: Halfling";
      break;
    case 7:
      document.getElementById("npcRace").innerHTML = "Race: Feline";
      break;
    case 8:
      document.getElementById("npcRace").innerHTML = "Race: Demonkin";
      break;
  }

  switch (randomPersonality) {
    case 1:
      document.getElementById("npcPersonality").innerHTML = "Personality Trait: Jolly";
      break;
    case 2:
      document.getElementById("npcPersonality").innerHTML = "Personality Trait: Grumpy";
      break;
    case 3:
      document.getElementById("npcPersonality").innerHTML = "Personality Trait: Stoic";
      break;
    case 4:
      document.getElementById("npcPersonality").innerHTML = "Personality Trait: Charming";
      break;
    case 5:
      document.getElementById("npcPersonality").innerHTML = "Personality Trait: Hardworking";
      break;
    case 6:
      document.getElementById("npcPersonality").innerHTML = "Personality Trait: Tired";
      break;
    case 7:
      document.getElementById("npcPersonality").innerHTML = "Personality Trait: Lazy";
      break;
    case 8:
      document.getElementById("npcPersonality").innerHTML = "Personality Trait: Shy";
      break;
    case 9:
      document.getElementById("npcPersonality").innerHTML = "Personality Trait: Solemn";
      break;
    case 10:
      document.getElementById("npcPersonality").innerHTML = "Personality Trait: Naive";
      break;
  }

  switch (randomGoal) {
    case 1:
      document.getElementById("npcGoal").innerHTML = "Life Goal: Living a quiet life.";
      break;
    case 2:
      document.getElementById("npcGoal").innerHTML = "Life Goal: Finding love.";
      break;
    case 3:
      document.getElementById("npcGoal").innerHTML = "Life Goal: Becoming an adventurer.";
      break;
    case 4:
      document.getElementById("npcGoal").innerHTML = "Life Goal: Create a big happy family.";
      break;
    case 5:
      document.getElementById("npcGoal").innerHTML = "Life Goal: Being happy.";
      break;
    case 6:
      document.getElementById("npcGoal").innerHTML = "Life Goal: Going on a journey to see the world.";
      break;
    case 7:
      document.getElementById("npcGoal").innerHTML = "Life Goal: Reuniting with a long lost family member.";
      break;
    case 8:
      document.getElementById("npcGoal").innerHTML = "Life Goal: Learning a unique skill.";
      break;
    case 9:
      document.getElementById("npcGoal").innerHTML = "Life Goal: Get a respectible position within society.";
      break;
    case 10:
      document.getElementById("npcGoal").innerHTML = "Life Goal: Get filthy rich.";
      break;
    case 11:
      document.getElementById("npcGoal").innerHTML = "Life Goal: Searching for the meaning of life.";
      break;
    case 12:
      document.getElementById("npcGoal").innerHTML = "Life Goal: Meeting the gods of the realm.";
      break;
    case 13:
      document.getElementById("npcGoal").innerHTML = "Life Goal: Establishing a place to call their own.";
      break;
    case 14:
      document.getElementById("npcGoal").innerHTML = "Life Goal: Meeting their life-long idol.";
      break;
    case 15:
      document.getElementById("npcGoal").innerHTML = "Life Goal: Improve their current life situation.";
      break;
  }

  switch (randomSex) {
    case 1:
      document.getElementById("npcSex").innerHTML = "Sex: M";
      break;
    case 2:
      document.getElementById("npcSex").innerHTML = "Sex: F";
      break;
  }

  if (randomSex == 1) {
    switch (randomName) {
      case 1:
        document.getElementById("npcName").innerHTML = "Name: Peter";
        break;
      case 2:
        document.getElementById("npcName").innerHTML = "Name: Noa";
        break;
      case 3:
        document.getElementById("npcName").innerHTML = "Name: Hans";
        break;
      case 4:
        document.getElementById("npcName").innerHTML = "Name: Paul";
        break;
      case 5:
        document.getElementById("npcName").innerHTML = "Name: Markus";
        break;
      case 6:
        document.getElementById("npcName").innerHTML = "Name: Ian";
        break;
      case 7:
        document.getElementById("npcName").innerHTML = "Name: David";
        break;
      case 8:
        document.getElementById("npcName").innerHTML = "Name: Erik";
        break;
      case 9:
        document.getElementById("npcName").innerHTML = "Name: Logan";
        break;
      case 10:
        document.getElementById("npcName").innerHTML = "Name: Bob";
        break;
      case 11:
        document.getElementById("npcName").innerHTML = "Name: Carl";
        break;
      case 12:
        document.getElementById("npcName").innerHTML = "Name: Oskar";
        break;
      case 13:
        document.getElementById("npcName").innerHTML = "Name: Lars";
        break;
      case 14:
        document.getElementById("npcName").innerHTML = "Name: William";
        break;
      case 15:
        document.getElementById("npcName").innerHTML = "Name: Will";
        break;
      case 16:
        document.getElementById("npcName").innerHTML = "Name: Anders";
        break;
      case 17:
        document.getElementById("npcName").innerHTML = "Name: Rin";
        break;
      case 18:
        document.getElementById("npcName").innerHTML = "Name: Gabriel";
        break;
      case 19:
        document.getElementById("npcName").innerHTML = "Name: Dan";
        break;
      case 20:
        document.getElementById("npcName").innerHTML = "Name: Christoffer";
        break;
    }
  }
  else {
    switch (randomName) {
      case 1:
        document.getElementById("npcName").innerHTML = "Name: Mia";
        break;
      case 2:
        document.getElementById("npcName").innerHTML = "Name: Sofi";
        break;
      case 3:
        document.getElementById("npcName").innerHTML = "Name: Dory";
        break;
      case 4:
        document.getElementById("npcName").innerHTML = "Name: Margaret";
        break;
      case 5:
        document.getElementById("npcName").innerHTML = "Name: Tanya";
        break;
      case 6:
        document.getElementById("npcName").innerHTML = "Name: Erica";
        break;
      case 7:
        document.getElementById("npcName").innerHTML = "Name: Christina";
        break;
      case 8:
        document.getElementById("npcName").innerHTML = "Name: Linn";
        break;
      case 9:
        document.getElementById("npcName").innerHTML = "Name: Anne";
        break;
      case 10:
        document.getElementById("npcName").innerHTML = "Name: Maria";
        break;
      case 11:
        document.getElementById("npcName").innerHTML = "Name: Sofia";
        break;
      case 12:
        document.getElementById("npcName").innerHTML = "Name: Catherine";
        break;
      case 13:
        document.getElementById("npcName").innerHTML = "Name: Rin";
        break;
      case 14:
        document.getElementById("npcName").innerHTML = "Name: Beatrice";
        break;
      case 15:
        document.getElementById("npcName").innerHTML = "Name: Trisha";
        break;
      case 16:
        document.getElementById("npcName").innerHTML = "Name: Ellen";
        break;
      case 17:
        document.getElementById("npcName").innerHTML = "Name: Hilda";
        break;
      case 18:
        document.getElementById("npcName").innerHTML = "Name: Veronica";
        break;
      case 19:
        document.getElementById("npcName").innerHTML = "Name: Ophelia";
        break;
      case 20:
        document.getElementById("npcName").innerHTML = "Name: Emma";
        break;
    }
  }
}

function generateCompanion() {
  randomNameMinValue = Math.ceil(1);
  randomNameMaxValue = Math.floor(20);
  randomName = Math.floor(Math.random() * (randomNameMaxValue - randomNameMinValue + 1) + randomNameMinValue);

  randomRaceMinValue = Math.ceil(1);
  randomRaceMaxValue = Math.floor(9);
  randomRace = Math.floor(Math.random() * (randomRaceMaxValue - randomRaceMinValue + 1) + randomRaceMinValue);

  randomAgeMinValue = Math.ceil(1);
  randomAgeMaxValue = Math.floor(4);
  randomAge = Math.floor(Math.random() * (randomAgeMaxValue - randomAgeMinValue + 1) + randomAgeMinValue);

  randomSexMinValue = Math.ceil(1);
  randomSexMaxValue = Math.floor(2);
  randomSex = Math.floor(Math.random() * (randomSexMaxValue - randomSexMinValue + 1) + randomSexMinValue);

  randomClassMinValue = Math.ceil(1);
  randomClassMaxValue = Math.floor(6);
  randomClass = Math.floor(Math.random() * (randomClassMaxValue - randomClassMinValue + 1) + randomClassMinValue);

  randomPersonalityMinValue = Math.ceil(1);
  randomPersonalityMaxValue = Math.floor(10);
  randomPersonality = Math.floor(Math.random() * (randomPersonalityMaxValue - randomPersonalityMinValue + 1) + randomPersonalityMinValue);

  randomOriginMinValue = Math.ceil(1);
  randomOriginMaxValue = Math.floor(7);
  randomOrigin = Math.floor(Math.random() * (randomOriginMaxValue - randomOriginMinValue + 1) + randomOriginMinValue);

  randomGoalMinValue = Math.ceil(1);
  randomGoalMaxValue = Math.floor(15);
  randomGoal = Math.floor(Math.random() * (randomGoalMaxValue - randomGoalMinValue + 1) + randomGoalMinValue);

  if (randomOrigin == 7 && randomRace != 9) {
    document.getElementById("companionRace").innerHTML = "Race: Saldi";
  } else {
    switch (randomRace) {
      case 1:
        document.getElementById("companionRace").innerHTML = "Race: Saldi";
        break;
      case 2:
        document.getElementById("companionRace").innerHTML = "Race: Noble Elf";
        break;
      case 3:
        document.getElementById("companionRace").innerHTML = "Race: Elf";
        break;
      case 4:
        document.getElementById("companionRace").innerHTML = "Race: Half-Elf";
        break;
      case 5:
        document.getElementById("companionRace").innerHTML = "Race: Dwarf";
        break;
      case 6:
        document.getElementById("companionRace").innerHTML = "Race: Dragonfolk";
        break;
      case 7:
        document.getElementById("companionRace").innerHTML = "Race: Halfling";
        break;
      case 8:
        document.getElementById("companionRace").innerHTML = "Race: Feline";
        break;
      case 9:
        document.getElementById("companionRace").innerHTML = "Race: Demonkin";
        break;
    }
  }

  switch (randomAge) {
    case 1:
      document.getElementById("companionAge").innerHTML = "Age: Young";
      break;
    case 2:
      document.getElementById("companionAge").innerHTML = "Age: Young";
      break;
    case 3:
      document.getElementById("companionAge").innerHTML = "Age: Middle-aged";
      break;
    case 4:
      document.getElementById("companionAge").innerHTML = "Age: Old";
      break;
  }

  switch (randomPersonality) {
    case 1:
      document.getElementById("companionPersonality").innerHTML = "Personality Trait: Jolly";
      break;
    case 2:
      document.getElementById("companionPersonality").innerHTML = "Personality Trait: Grumpy";
      break;
    case 3:
      document.getElementById("companionPersonality").innerHTML = "Personality Trait: Stoic";
      break;
    case 4:
      document.getElementById("companionPersonality").innerHTML = "Personality Trait: Charming";
      break;
    case 5:
      document.getElementById("companionPersonality").innerHTML = "Personality Trait: Gluttonous";
      break;
    case 6:
      document.getElementById("companionPersonality").innerHTML = "Personality Trait: Loyal";
      break;
    case 7:
      document.getElementById("companionPersonality").innerHTML = "Personality Trait: Greedy";
      break;
    case 8:
      document.getElementById("companionPersonality").innerHTML = "Personality Trait: Scaredy-cat";
      break;
    case 9:
      document.getElementById("companionPersonality").innerHTML = "Personality Trait: Solemn";
      break;
    case 10:
      document.getElementById("companionPersonality").innerHTML = "Personality Trait: Naive";
      break;
  }

  switch (randomGoal) {
    case 1:
      document.getElementById("companionGoal").innerHTML = "Life Goal: Exploring all the corners of the world.";
      break;
    case 2:
      document.getElementById("companionGoal").innerHTML = "Life Goal: Finding true love in an unexpected place.";
      break;
    case 3:
      document.getElementById("companionGoal").innerHTML = "Life Goal: Becoming a world-famous adventurer.";
      break;
    case 4:
      document.getElementById("companionGoal").innerHTML = "Life Goal: Finding a worthy opponent/rival.";
      break;
    case 5:
      document.getElementById("companionGoal").innerHTML = "Life Goal: Slaying an infamous monster.";
      break;
    case 6:
      document.getElementById("companionGoal").innerHTML = "Life Goal: Solving an infamous mystery.";
      break;
    case 7:
      document.getElementById("companionGoal").innerHTML = "Life Goal: Finding out the truth of their past.";
      break;
    case 8:
      document.getElementById("companionGoal").innerHTML = "Life Goal: Become the greatest of their fighting style.";
      break;
    case 9:
      document.getElementById("companionGoal").innerHTML = "Life Goal: Saving as many lives as they can.";
      break;
    case 10:
      document.getElementById("companionGoal").innerHTML = "Life Goal: Get filthy rich.";
      break;
    case 11:
      document.getElementById("companionGoal").innerHTML = "Life Goal: Avenging their lost family/friend(s).";
      break;
    case 12:
      document.getElementById("companionGoal").innerHTML = "Life Goal: Meet the gods of the realm.";
      break;
    case 13:
      document.getElementById("companionGoal").innerHTML = "Life Goal: Establish their own country/kingdom.";
      break;
    case 14:
      document.getElementById("companionGoal").innerHTML = "Life Goal: Meeting/reuniting with their hero/master.";
      break;
    case 15:
      document.getElementById("companionGoal").innerHTML = "Life Goal: Ridding the world of evil.";
      break;
  }

  switch (randomSex) {
    case 1:
      document.getElementById("companionSex").innerHTML = "Sex: M";
      break;
    case 2:
      document.getElementById("companionSex").innerHTML = "Sex: F";
      break;
  }

  if (randomOrigin == 7 && randomRace != 9) {
    switch (randomClass) {
      case 1:
        document.getElementById("companionClass").innerHTML = "Class: Artillery (Ashigaru, Red Monk).";
        break;
      case 2:
        document.getElementById("companionClass").innerHTML = "Class: Brute (Ronin, Monk).";
        break;
      case 3:
        document.getElementById("companionClass").innerHTML = "Class: Controller (Beast-tamer, Red Monk).";
        break;
      case 4:
        document.getElementById("companionClass").innerHTML = "Class: Lurker (Shinobi, Ashigaru).";
        break;
      case 5:
        document.getElementById("companionClass").innerHTML = "Class: Skirmisher (Monk, Beast-tamer).";
        break;
      case 6:
        document.getElementById("companionClass").innerHTML = "Class: Soldier (Ronin, Shinobi).";
        break;
    }
  }
  else {
    switch (randomClass) {
      case 1:
        document.getElementById("companionClass").innerHTML = "Class: Artillery (Ranger, Wizard).";
        break;
      case 2:
        document.getElementById("companionClass").innerHTML = "Class: Brute (Barbarian, Fighter).";
        break;
      case 3:
        document.getElementById("companionClass").innerHTML = "Class: Controller (Warlord, Bard).";
        break;
      case 4:
        document.getElementById("companionClass").innerHTML = "Class: Lurker (Rogue, Assassin).";
        break;
      case 5:
        document.getElementById("companionClass").innerHTML = "Class: Skirmisher (Druid, Warlock).";
        break;
      case 6:
        document.getElementById("companionClass").innerHTML = "Class: Soldier (Cleric, Paladin).";
        break;
    }
  }


  if (randomRace == 9) {
    switch (randomOrigin) {
      case 1:
        document.getElementById("companionOrigin").innerHTML = "Origin: Inferno.";
        break;
      case 2:
        document.getElementById("companionOrigin").innerHTML = "Origin: The Depths.";
        break;
      case 3:
        document.getElementById("companionOrigin").innerHTML = "Origin: The Ruins of Pandemonium.";
        break;
      case 4:
        document.getElementById("companionOrigin").innerHTML = "Origin: The Vile Soil.";
        break;
      case 5:
        document.getElementById("companionOrigin").innerHTML = "Origin: Domain of Flames.";
        break;
      case 6:
        document.getElementById("companionOrigin").innerHTML = "Origin: Realm of the Depraved.";
        break;
      case 7:
        document.getElementById("companionOrigin").innerHTML = "Origin: The Fiendish Grounds.";
        break;
    }
  } else {
    switch (randomOrigin) {
      case 1:
        document.getElementById("companionOrigin").innerHTML = "Origin: Kirmer.";
        break;
      case 2:
        document.getElementById("companionOrigin").innerHTML = "Origin: Skriiod.";
        break;
      case 3:
        document.getElementById("companionOrigin").innerHTML = "Origin: Gircish.";
        break;
      case 4:
        document.getElementById("companionOrigin").innerHTML = "Origin: Oqpa.";
        break;
      case 5:
        document.getElementById("companionOrigin").innerHTML = "Origin: Sissaro.";
        break;
      case 6:
        document.getElementById("companionOrigin").innerHTML = "Origin: Wusari.";
        break;
      case 7:
        document.getElementById("companionOrigin").innerHTML = "Origin: Na'ak.";
        break;
    }
  }

  if (randomOrigin == 7 && randomRace != 9) {
    switch (randomName) {
      case 1:
        document.getElementById("companionName").innerHTML = "Name: Kanda";
        break;
      case 2:
        document.getElementById("companionName").innerHTML = "Name: Okayamachi";
        break;
      case 3:
        document.getElementById("companionName").innerHTML = "Name: Koyoen";
        break;
      case 4:
        document.getElementById("companionName").innerHTML = "Name: Umeda";
        break;
      case 5:
        document.getElementById("companionName").innerHTML = "Name: Ueno";
        break;
      case 6:
        document.getElementById("companionName").innerHTML = "Name: Shimbashi";
        break;
      case 7:
        document.getElementById("companionName").innerHTML = "Name: Shinagawa";
        break;
      case 8:
        document.getElementById("companionName").innerHTML = "Name: Shinjuku";
        break;
      case 9:
        document.getElementById("companionName").innerHTML = "Name: Ikebukuro";
        break;
      case 10:
        document.getElementById("companionName").innerHTML = "Name: Nagita";
        break;
      case 11:
        document.getElementById("companionName").innerHTML = "Name: Haneda";
        break;
      case 12:
        document.getElementById("companionName").innerHTML = "Name: Roppongi";
        break;
      case 13:
        document.getElementById("companionName").innerHTML = "Name: Ginza";
        break;
      case 14:
        document.getElementById("companionName").innerHTML = "Name: Yamanote";
        break;
      case 15:
        document.getElementById("companionName").innerHTML = "Name: Asakusa";
        break;
      case 16:
        document.getElementById("companionName").innerHTML = "Name: Nikko";
        break;
      case 17:
        document.getElementById("companionName").innerHTML = "Name: Nishi-Shin";
        break;
      case 18:
        document.getElementById("companionName").innerHTML = "Name: Uji";
        break;
      case 19:
        document.getElementById("companionName").innerHTML = "Name: Kobe";
        break;
      case 20:
        document.getElementById("companionName").innerHTML = "Name: Nishinomiya";
        break;
    }
  }
  else if (randomSex == 1) {
    switch (randomName) {
      case 1:
        document.getElementById("companionName").innerHTML = "Name: Ian";
        break;
      case 2:
        document.getElementById("companionName").innerHTML = "Name: Noa";
        break;
      case 3:
        document.getElementById("companionName").innerHTML = "Name: Dan";
        break;
      case 4:
        document.getElementById("companionName").innerHTML = "Name: Feo";
        break;
      case 5:
        document.getElementById("companionName").innerHTML = "Name: Prelgar";
        break;
      case 6:
        document.getElementById("companionName").innerHTML = "Name: Fhudor";
        break;
      case 7:
        document.getElementById("companionName").innerHTML = "Name: Agnacious";
        break;
      case 8:
        document.getElementById("companionName").innerHTML = "Name: Kindal";
        break;
      case 9:
        document.getElementById("companionName").innerHTML = "Name: Viggo";
        break;
      case 10:
        document.getElementById("companionName").innerHTML = "Name: Q'ert";
        break;
      case 11:
        document.getElementById("companionName").innerHTML = "Name: Ythir";
        break;
      case 12:
        document.getElementById("companionName").innerHTML = "Name: Banman";
        break;
      case 13:
        document.getElementById("companionName").innerHTML = "Name: Ernsti";
        break;
      case 14:
        document.getElementById("companionName").innerHTML = "Name: Jergo";
        break;
      case 15:
        document.getElementById("companionName").innerHTML = "Name: Churmi";
        break;
      case 16:
        document.getElementById("companionName").innerHTML = "Name: Shu";
        break;
      case 17:
        document.getElementById("companionName").innerHTML = "Name: Lo'Bavn";
        break;
      case 18:
        document.getElementById("companionName").innerHTML = "Name: Ferdi";
        break;
      case 19:
        document.getElementById("companionName").innerHTML = "Name: Mankio";
        break;
      case 20:
        document.getElementById("companionName").innerHTML = "Name: Tjen";
        break;
    }
  }
  else {
    switch (randomName) {
      case 1:
        document.getElementById("companionName").innerHTML = "Name: Mia";
        break;
      case 2:
        document.getElementById("companionName").innerHTML = "Name: Emma";
        break;
      case 3:
        document.getElementById("companionName").innerHTML = "Name: Tanya";
        break;
      case 4:
        document.getElementById("companionName").innerHTML = "Name: Vayka";
        break;
      case 5:
        document.getElementById("companionName").innerHTML = "Name: Rein";
        break;
      case 6:
        document.getElementById("companionName").innerHTML = "Name: Eï";
        break;
      case 7:
        document.getElementById("companionName").innerHTML = "Name: Ne'Sul";
        break;
      case 8:
        document.getElementById("companionName").innerHTML = "Name: Antha";
        break;
      case 9:
        document.getElementById("companionName").innerHTML = "Name: Lasva";
        break;
      case 10:
        document.getElementById("companionName").innerHTML = "Name: Yorna";
        break;
      case 11:
        document.getElementById("companionName").innerHTML = "Name: Zöé";
        break;
      case 12:
        document.getElementById("companionName").innerHTML = "Name: Vertalonika";
        break;
      case 13:
        document.getElementById("companionName").innerHTML = "Name: Kattla";
        break;
      case 14:
        document.getElementById("companionName").innerHTML = "Name: Mae";
        break;
      case 15:
        document.getElementById("companionName").innerHTML = "Name: Pafiga";
        break;
      case 16:
        document.getElementById("companionName").innerHTML = "Name: Nisogufa";
        break;
      case 17:
        document.getElementById("companionName").innerHTML = "Name: Ciri";
        break;
      case 18:
        document.getElementById("companionName").innerHTML = "Name: Falala";
        break;
      case 19:
        document.getElementById("companionName").innerHTML = "Name: Sina";
        break;
      case 20:
        document.getElementById("companionName").innerHTML = "Name: Saravana";
        break;
    }
  }
}

/*===Search Test===*/
function search() {
  var words = document.getElementById('searchBar').value;

  if (words == 'world') {
    window.location.href = 'https://thorczhia.com/world.html';
  }
  else {
    window.location.href = 'https://thorczhia.com/404.html';
  }
}