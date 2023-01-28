//timer function that allows for partial delays in the program
function sleep(miliseconds) {
  var currentTime = new Date().getTime();
  while (currentTime + miliseconds >= new Date().getTime()) {}
}

//Main joke object
const dad_joke_obj = {
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
  "What did one plate whisper to the other plate?": "Dinner is on me.",
  "What's 90 degrees but covered with ice?": "The North and South Poles.",
  "What happened when the blue ship and the red ship collided at sea?": "Their crews were marooned.",
  "What are the strongest days of the week? Saturday and Sunday.": "All the others are weekdays.",
  "What's the difference between the bird flu and the swine flu?": "One requires tweetment and the other an oinkment.",
  "Why did the golfer bring two pairs of pants?": "In case he got a hole in one.",
  "How do you stop a bull from charging?": "Cancel its credit card.",
  "What do you call a line of men waiting to get haircuts?": "A barberqueue.",
  "Why do seagulls fly over the sea?": "If they flew over the bay, they would be bagels.",
  "Am I the only man my wife has ever dated?": "Unfortunately yes, she said the others were all nines or tens!",
  "I'm thinking I should do lunges to stay in shape.": "That would be a big step forward.",
  "What's the difference between a man's wallet before and after kids?": "There are pictures where the money used to be.",
  "What did the baby corn say to the mama corn?": "Where's popcorn?",
  "I wish my gray hair started in Las Vegas because what happens in Vegas,": "stays in Vegas.",
  "What vegetable is cool,": "but not that cool? Radish.",
  "My kid is blaming me for ruining their birthday.": "That's ridiculous, I didn't even know it was today!",
  "I haven't spoken to my wife in four years.": "I thought it would be rude to interrupt her!",
  "My kid gave me a 'World's Best Dad' mug.": "At least she inherited my sense of humor.",
  "When a toddler reaches the 'why?' stage, it's like opening a bottle of champagne":"—once it's uncorked, there's no going back.",
  "What do you call two monkeys who share an Amazon Prime account?": "Prime mates.",
  "How do you measure the mass of an influencer's following?": "By Instagrams!",
  "How do you teach kids about taxes?": "Eat 38% of their ice cream.",
  "Two sheep walk into a—baaaa.": "what, that's it...",
  "What do you call a beehive without an exit?": "Un-bee-lievable.",
  "What did the seal with one fin say to the shark?": "If seal is broken, do not consume.",
  "I wish my kids weren't offended by my Frozen jokes.": "They really need to let it go!",
  "Why did the football coach go to the bank?": "To get his quarter back.",
  "Why can't a leopard hide?": "He's always spotted.",
  "Air used to be free at the gas station, now it costs 2.50. You want to know why?": "Inflation.",
  "I tried to get a smart car the other day but they sold out too fast. Why?": "I guess I'm just a bit slow.",
  "I told my wife that a husband is like a fine wine: we just get better with age.": "The next day she locked me in the cellar.",
  "Did you hear about the claustrophobic astronaut?": "He just wanted a bit more space.",
  "Why did the orange lose the race?": "It ran out of juice.",
  "How do you fix a broken pumpkin?": "With a pumpkin patch.",
  "Why are fish so smart?": "They live in schools!",
  "What's the best thing about Switzerland?" :"I don't know, but the flag is a big plus.",
  "Why did the man fall down the well?": "Because he couldn't see that well!",
  "Why do peppers make such good archers?": "Because they habanero.",
  "What did the sink tell the toilet?": "You look flushed!",
  "Where do boats go when they're sick?": "To the dock.",
  "What has ears but cannot hear?": "A cornfield!",
  "Stop looking for the perfect match": "use a lighter.",
  "Can February March?": "No, but April May!",
  "Why was 6 afraid of 7?": "Because 7 ate nine!",
  "I'm so good at sleeping": "that I do it with my eyes closed.",
  "Try the seafood diet—you see food,": "then you eat it.",
  "What do you call a pencil with two erasers?": "Pointless.",
  "Did you hear the one about the roof?": "Never mind, it's over your head.",
  "What's brown and sticky?": "A stick.",
  "I hated facial hair": "but then it grew on me.",
  "It really takes guts": "to be an organ donor.",
  "Did you hear the rumor about butter?": "Well, I'm not going to go spreading it!",
  "What did the plumber say to the singer?": "Nice pipes.",
  "I was going to tell a time-traveling joke,": "but you didn't like it.",
  "How do you deal with a fear of speed bumps?": "You slowly get over it.",
  "I ordered a chicken and an egg online.": "I'll let you know.",
  "I'm reading an anti-gravity book.": "I can't put it down!",
  "I'd avoid the sushi if I were you.": "It's a little fishy!",
  "What state is known for its small drinks?": "Minnesota.",
  "What's Forrest Gump's password?": "1forrest1",
  "What do houses wear?": "An address.",
  "What did the two pieces of bread say on their wedding day?": "It was loaf at first sight.",
  "What kind of shoes does a lazy person wear?": "Loafers.",
  "What did the ocean say to the beach?": "Nothing, it just waved.",
  "What happens when a snowman throws a tantrum?": "He has a meltdown."
};

//improv jokes that act as filler between the main jokes
const improv_adlib = [
  "How about another...",
  "just one more, what do you say",
  "if you like that one, you may like this one",
  "if you hated that one, give this one a go",
  "you may enjoy this one too",
  "okay okay, last one",
  "okay, no really, last one",
  "should i stop?! LOL",
  "sorry, i just need to get this one out!",
  "maybe just one more...",
  "You may think the last one was lame but just listen to this",
  "You want something better than that",
];

count = 1; //cycle counter

const joke_limit = 3; //upper limit for jokes
linebreak = "=".repeat(40); //separator for each joke and adlib
let joke_teller = function () {
  if (count <= joke_limit) {
    let rando = Math.floor(Math.random() * Object.keys(dad_joke_obj).length);
    let rando_adlib = Math.floor(
      Math.random() * Object.keys(improv_adlib).length
    );
    //All sleep functions used to give spatial timing for comedic effect.
    console.log(Object.keys(dad_joke_obj)[rando].toString()); //The joke Leadup
    sleep(2000);
    console.log(dad_joke_obj[Object.keys(dad_joke_obj)[rando]]); //The joke Punchline
    sleep(1500);
    count++;
    if (count <= joke_limit) {
      console.log(linebreak);
      console.log(improv_adlib[rando_adlib]);
      console.log(linebreak);
      sleep(2000);
      console.log(`On to Joke number ${count}`);
      joke_teller();
    } else {
      console.log(linebreak);
      sleep(2000);
      console.log("That's all I got. Now leave me be!");
      sleep(1000);
      console.log(
        "By the way, you may want to use these in the future. Be careful with them, they are absolute gold!"
      );
    }
  }
};

joke_teller();
sleep(2000);
console.table(dad_joke_obj);
