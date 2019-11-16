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
    document.getElementById("numberResult").innerHTML = "Result: Please make sure the Max Value is higher than the Min Value!";
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

/*===Search Example===*/
formElementName = document.getElementById('form-submit');

function search() {
  var words = document.getElementById('searchbar').value;
  if (words == 'world') {
    window.location.href = 'pageName.html';
  }
  else {
    window.location.href = 'errorPageName.html';
  }
}

formElementName.addEventListener('submit', search);