function sleep(miliseconds) {
  var currentTime = new Date().getTime();

  while (currentTime + miliseconds >= new Date().getTime()) {}
}

const dad_joke_array = {
  "I have a joke about chemistry": "but I don’t think it’ll get a reaction",
  "I have a joke about banking": "but I lost interest.",
  "I have a joke about cows": "but I don't want to milk it.",
  "I have a joke about kites": "but it would just sail over your head.",
  "I have a scary joke about math": "but I'm 2² to say it.",
  "I have a joke about construction": "but I’m still working on it.",
  "I have a joke about time travel": "but you guys didn’t get it.",
  "I have a joke about being an electrician": "but it’s too shocking.",
  "I have a joke about hunting for fossils":
    "but you probably wouldn’t dig it.",
  "I have a joke about a broken pencil": "but it’s pointless.",
  "I have a joke about the flu": "but I hope you don’t get it.",
  "I have a joke about statistics": "but it’s not significant.",
  "I have a joke about pizza": "but it’s too cheesy.",
  "I have a joke about immortality": "and it never gets old.",
  "I have a joke about paper": "but it’s tearable.",
  "I have a joke about trickle-down economics":
    "but 99% of you will never get it.",
  "I have a joke about drilling": "but it’s boring.",
  "I have a joke about being a rejected organ donor":
    "but I just don't have the guts.",
  "I had a joke about canned juice": "but I couldn't concentrate.",
  "I have a few jokes about retired people": "but none of them work.",
  "I have a joke about a broken clock": "but it’s not the right time.",
  "I have a joke about butter": "but I’m not going to spread it.",
  "I have a joke about a roof": "but it would just go over your head.",
  "I have a joke about inferiority complexes": "but it’s not very good.",
  "I have a joke about procrastination": "but I’ll tell it to you later.",
};


count = 0
let joke_teller = function() {
    let rando = Math.floor(Math.random() * Object.keys(dad_joke_array).length);
    console.log(rando);
    console.log(Object.keys(dad_joke_array).length);
    console.log(Object.keys(dad_joke_array)[rando].toString());
    sleep(2000);
    console.log(dad_joke_array[Object.keys(dad_joke_array)[rando]]);
    count ++;
    console.log(count);
    joke_teller();
};

joke_teller();