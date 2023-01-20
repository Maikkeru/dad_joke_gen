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
  "To the person who stole my glasses": "I will find you. I have contacts.",
  "To the person who stole my place in line": "I’m after you now.",
  "To the person who stole my limbo stick": "That was a new low.",
  "To the person who stole my dictionary": "I have no words.",
  "To the person who stole my bed": "I won't rest until I find you.",
  "To the person who stole my depression medication":
    "I hope you're happy now.",
  "To the person who stole my case of energy drinks":
    "I hope you can't sleep at night.",
  "To the person who stole my power steering": "I just can't handle it.",
  "To the person who stole my diary and then died":
    "My thoughts are with your family.",
  "People are surprised that I have a Police record":
    "but I love “Every Little Thing She Does Is Magic.”",
  "My daughter asked me to stop singing 'Wonderwall.'": "I said maybe.",
  "I had a joke about Nirvana": "but Nevermind.",
  "I saw a theft at an Apple store": "so that makes me an iWitness.",
  "I only know 25 letters of the alphabet": "— I just don't know y.",
  "My dream job is to clean mirrors":
    "because I can really see myself doing that.",
  "I don't trust stairs.": "They're always up to something.",
  "RIP, boiling water.": "You will be mist.",
  "Two guys walked into a bar.": "The third guy ducked.",
  "Two peanuts went walking down the street.": "One was assaulted.",
  "I'm so good at sleeping": "I can do it with my eyes closed!",
  "I had a dream that I weighed less than a thousandth of a gram.":
    "I was like, 0mg.",
  "Mom said I should do lunges to stay in shape.":
    "That would be a big step forward.",
  "Time flies like an arrow.": "Fruit flies like a banana.",
  "Every time I take my dog to the park, the ducks try to bite him.":
    "That’s what I get for buying a pure bread dog.",
  "6:30 is my favorite time of day": "hands down.",
  "My dog is a genius. I asked him": "'What's two minus two?' He said nothing.",
  "I used to run a dating service for chickens":
    "but I was struggling to make hens meet.",
  "I’m friends with almost all the letters of the alphabet.":
    "I just don’t know Y.",
  "Mom texted me from the grocery store to say they’re out of pasta":
    "and we’re penneless.",
  "Justice is a dish best served cold. If it were served warm":
    "it would be justwater.",
  "I used to hate facial hair": "but then it grew on me.",
  "Most people can’t tell the difference between entomology and etymology":
    "I can’t find the words for how much this bugs me.",
  "A magician was walking down the street": "— then he turned into a store.",
  "We’re renovating the house, and the first floor is going great":
    "but the second floor is another story.",
  "I'm reading an anti-gravity book": "and I just can't put it down!",
  "At first, I thought my chiropractor wasn’t any good":
    "but now I stand corrected.",
  "My toddler is refusing to nap.": "He’s guilty of resisting a rest.",
  "I used to be able to play piano by ear": " but now I have to use my hands.",
  "I failed my calculus exam because I was sitting in the middle of identical twins":
    "— I couldn’t differentiate between them.",
  "My boss asked me why I only get sick on work days.":
    "I said it must be my weekend immune system.",
  "Every night, I have hard time remembering something":
    "but then it dawns on me.",
  "The wedding was so beautiful": "even the cake was in tiers.",
  "I can tolerate algebra maybe even a little calculus but geometry":
    " is where I draw the line.",
  "I was wondering why the baseball kept getting bigger and bigger":
    "Then it hit me.",
  "Have you heard about the new corduroy pillows":
    "— they're making headlines!",
  "My therapist told me I have problems expressing my emotions.":
    "Can’t say I’m surprised.",
  "I was once a personal trainer": "until I gave a too-weak notice.",
  "I just paid $100 for a belt that doesn’t fit": "— what a huge waist!",
  "I finally watched that documentary on clocks.": "It was about time.",
};

count = 0;
linebreak = "=".repeat(40);
let joke_teller = function () {
  if (count <= 10) {
    let rando = Math.floor(Math.random() * Object.keys(dad_joke_array).length);
    //console.log(Object.keys(dad_joke_array).length);
    console.log(Object.keys(dad_joke_array)[rando].toString());
    sleep(2000);
    console.log(dad_joke_array[Object.keys(dad_joke_array)[rando]]);
    count++;
    console.log(linebreak);
    joke_teller();
  } else {
    console.log("That's all I got. Now leave me be!");
  }
};

joke_teller();
