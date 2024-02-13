var c = 0;

var when = ["give me directions",
    "smile",
    "teach me things",
    "send me cat videos",
    "change the colour of your hair",
    "are with me", 
    "get the best deals on Facebook marketplace",
    "show me your pottery",
    "say 'I’m just a girl'", 
    "show me a recipe", 
    "tell me how your day went", 
    "draw on my whiteboard",
    "throw me a surprise party", 
    "travel with me", 
    "ask me to hold your bags", 
    "make me think before I buy something", 
    "pronounce french words", 
    "send me photos you took",
    "work out with me",
    "sleep in longer than me",
    "wear my undershirts",
    "laugh at your own jokes",
    "say 'mm' when you're half asleep",
    "make me proud",
    "style my hair",
    "smell good (24/7)",
    "facetime me",
    "try to 360 flip me",
    "know exactly what to say",
    "finish a bottle of wine with me",
    "give me your art",
    "are near me",
    "help me fix my resume for the hundredth time",
    "laugh at the Sun Ra vinyl with me",
    "mix me drinks",
    



    ];

function shuffle(array) {
    array.sort(()=>Math.random() - 0.5);
}

// shuffle on start
$(function() {
    shuffle(when);
});

$(document).click(function(e) {

    $("main").removeAttr("title");

    const love = setInterval(function() {

        $("<p>" + when[c] + "</p>").hide().prependTo("#when-you").fadeIn(2000);

        c++;

        if (c == when.length) {

            $("<p>love me too </p>").hide().prependTo("#when-you").fadeIn(2000);

            $("body").css('background', '#FF0000');
            $("#g p").css('color', '#fff');
            clearInterval(love);

        }

    }, 3000);

});
