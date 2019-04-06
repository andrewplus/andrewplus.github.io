num = 0;

names = ["oswald", "ortensia", "horace", "clarabelle", "pete", "animatronics", "maddoctor", "yensid", "blot", "gus", "mickey", "spatters"]

descriptions = ["He\'s got it all! Friends who admire him! A girl who adores him! 420 kids who want him to play with them! Detachable feet that can be rubbed strenuously to give him an extra boost of luck! So why can\'t Oswald, Disney\'s first cartoon star, put Mickey Mouse and the outside world into his rearview mirror? Why can\'t he just focus on Wasteland, the amazing world he\'s rebuilding in his image? Could it be that the luckiest rabbit in Wasteland simply doesn\'t know how lucky he is?<br><br>It almost makes you wonder what kind of disaster would have to hit to make him appreciate everything he\'s got. Let\'s hope he never finds out!", "Ortensia is Oswald\'s one true love. Her dedication to Oswald is absolutely unstinting, but she\'s nobody\'s pushover. She\'s no-nonsense and direct, and will not hesitate to let anyone —most of all Oswald — know exactly what\'s on her mind.<br><br>Whether she\'s busy fending off unwelcome advances from the notorious Pete or wishing that Oswald would spend more time with her and their copious children, Ortensia is —in every way— Oswald\'s better half. Now if she could just get him to stop obsessing about Mickey and thinking more about her!", "You can\'t beat a dead horse, but you have even less of a chance of defeating an equine who\'s as alive and kicking as private detective Horace Horsecollar.<br><br>He made his film debut in the Plow Boy back in 1929 as one of Mickey\'s best pals. And even though Mickey went on to fame and glory while the forgotten Horace was consigned to Wasteland, he\'s too cheerful to hold a grudge.<br><br>Being a private eye is the perfect job for someone who\'s as much of a know-it-all as Horace, but when it comes to getting down to the facts of a case, we promise he\'s not just horsing around!","You won\'t find a sweeter, gentler soul in the whole Wasteland than Clarabelle. Once upon a time, she was a bright star in the Disney firmament. Yet now she is simply another neglected character who is remembered — if recalled at all — as one of Mickey\'s supporting players.<br><br>Yet unlike Oswald who continues to stew over his forgotten glory days, Clarabelle has accepted her enforced retirement gracefully. She\'s perfectly happy, tending her garden in OsTown and engaging in the occasional flirtation with old pal Horace Horsecollar.", "So Oswald didn\'t get the universal acclaim and adoration that Mickey became hier to. What did he manage to acquire? Mickey\'s arch nemesis, the formidable and ubiquitous \"Pete\" who —in a variety of incarnations— has bedeviled everyone\'s favorite mouse since 1928.<br><br>And now he\'s in Wasteland, keeping up with his old tricks, wearing just as many hats and identities as he ever did.<br><br>Whether he\'s thrusting his unwanted attentions on Ortensia or wreaking havoc while attired as an ersatz Peter Pan, you can count on this two-bit thug to be up to some new villany.", "Mickey Mouse has a couple of intrepid pals who don\'t seem to have anything better to do than share his adventures, so why not Oswald? That was certainly the Lucky Rabbit\'s thinking when he cobbled together spare animatronic parts and fasioned his very own versions of Donald Duck and the inimitable Goofy.<br><br>Sure, they look kind of creepy, but their mechanical hearts are in the right place (or at least pretty close\; Goofy\'s heart might have been closer to where his kidney should be, and you don\'t wanna know where his brain is.) And yeah, they know they\'re not the originals. But that doesn\'t make them any less devoted to Oswald, and always ready for whatever misadventure he has in mind!", "Talk about your one-hit wonders. The Mad Doctor made his single appearance as the titular villain in the 1933 Cartoon \"The Mad Doctor.\" And even then, he was dismissed as being a simple nightmare conjured up by a sleeping Mickey Mouse.<br><br>Well, this nightmare is all too real, but even Oswald would admit that the real-life Doc seems pretty benign in comparison.<br><br>Using his masterful skills in cartoon technical design, the Mad Doctor cooked up the Beetleworx, mechanical helpers who aided him in fixing and beautifying Wasteland. If he\'s got an evil side, he\'s sure doing a good job of hiding it. Maybe... too good...", "Walt Disney\'s boundless imagination resulted in a creation whose potential even he didn\'t realize: Yen Sid, the formidable wizard from Fantasia, who is basically Walt\'s alter ego. It was Yen Sid who crafted Wasteland as a home for Walt\'s forgotten creations, serving as a benevolent, albiet unseen creator, watching from \"on high\" and enjoying their antics.<br><br>Of course, he could not have foreseen that history would eventually repeat itself as his former \"sorcerer\'s apprentice\", Mickey Mouse, would accidentally have an important role in the destiny of Wasteland...", "The most devastating enemy ever unleashed upon Wasteland, the Blot is more than just a garden-variety villain. The Blot is practically a force of nature, rampaging at will through Wasteland and inflicting carnage and catastrophe wherever he (it?) goes. Whether he\'s sucking the color out of the world, or transforming its inhabitants into lifeless slabs of stone, the Blot is out of control and it would seem that nothing, and no one, could possibly stop him. Nothing except for, maybe, a determined mouse wielding a magical paint brush.", "If you need a guide through the wilds of Wasteland, you couldn\'t do better than Gus the Gremlin. The Gremlins have been kept tightly under wraps thanks to the machinations of the Mad Doctor, but Gus manages to escape the Doc\'s clutches just in time to aid Mickey on his quest to save Wasteland. Posessed of magical powers, copious knowledge of every aspect of Wasteland, and a crisp British accent, Gus the Gremlin is a totally dedicated and unswervingly loyal companion who can help steer any quest into a successful conclusion... especially when the future of the entire world hinges upon it!", "He\'s the leader of the club. He\'s the most recognized movie star in the world. Walt Disney said \"It all started with a mouse,\" and he was right. But it may all end with a mouse as well, because Mickey accientally sets into motion the greatest catastrophe in the history of Wasteland. Oh, he didn\'t mean any harm—he never does—but that doesn\'t mean a thing to Oswald and the Wasteland denizens who find themselves hip deep in the Thinner Disaster. Oswald already had a mad-on for the mouse, feeling that Mickey replaced him in the hearts and minds of movie goers, but Mickey\'s actions take that resentment to a whole new level...and only Mickey himself can set things right!", "What would a monster be without his minions? The Blot is no exception to this rule, and he has shown that he\'s more than capable of cranking out as many of his minions as he wants. Spatters come in all shapes and sizes, and each of them poses a different danger. How Mickey chooses to deal with the Spatters will say a great deal about his character. The Spatters either may be wiped out of existence...or else they could wind up being redeemed and becoming devoted aides to Mickey Mouse in his determination to right the wrong he has unleashed upon...Wasteland!"];

function loadCharacter() {
  name = names[num];
  description = descriptions[num];

  $(".splash").addClass("animated");

  setTimeout(function(){
    $(".characters-wrapper .title").css('background-image', 'url(images/characters/' + name + '/title.png)');
    $(".characters-wrapper .image").css('background-image', 'url(images/characters/' + name + '/main.png)');
    $(".characters-wrapper .overlay").css('background-image', 'url(images/characters/' + name + '/info.png)');
    $(".characters-wrapper .description").html("<p> " + description + "</p>");
    $(".characters-wrapper .description").scrollTop(0);
  }, 500);

  setTimeout(function(){
    $(".splash").removeClass("animated");
  }, 1000);
}

function moreInfo() {
  $(".characters-wrapper .overlay").toggleClass("active");
  $(".characters-wrapper .moreinfo").toggleClass("active");
}

$( document ).ready(function() {
  $("body").on("click", ".arrow-right", function() {
    if ($(".splash").hasClass( "animated" ) != true) {
      if (num >= 11) {
        num = 0;
      } else {
        num++;
      }
      loadCharacter();
    }
	});

  $("body").on("click", ".arrow-left", function() {
    if ($(".splash").hasClass( "animated" ) != true) {
      if (num <= 0) {
        num = 11;
      } else {
        num--;
      }
      loadCharacter();
    }
	});

  $("body").on("click", ".characters-wrapper .moreinfo", function() {
    moreInfo();
	});

  $("body").on("click", ".characters-wrapper .overlay", function() {
    moreInfo();
	});
});
