var gameTips = [
    "Do not chase kills when you can take a turret instead.",
    "Check the map before you try to take Turtle.",
    "Gold helps your hero get stronger by buying items.",
    "Push with your minions when Lord is coming."
]

function showRandomTip() {
    var number = Math.floor(Math.random() * gameTips.length);
    document.getElementById("randomTip").textContent = gameTips[number];
}

function showRoleDescription() {
    var role = document.getElementById("roleChoice").value;
    var result = document.getElementById("roleResult");
    if (role === "Marksman") {
        result.textContent = "Marksmen usually go to Gold Lane to farm and deal damage.";
    } else if (role === "Assassin") {
        result.textContent = "Assassins often jungle and gank enemy lanes.";
    } else if (role === "Mage") {
        result.textContent = "Mages usually play Mid Lane and help other lanes.";
    } else if (role === "Fighter") {
        result.textContent = "Fighters often play EXP Lane, dealing sustained damage while absorbing enemy attacks.";
    } else if (role === "Tank") {
        result.textContent = "Tanks often roam and protect teammates.";
    } else if (role === "Support") {
        result.textContent = "Supports often roam and heal or help teammates.";
    } else {
        result.textContent = "Choose a hero class above.";
    }
    var image = document.getElementById("roleImage");

    if (role !== "") {
        image.src = "images/" + role.toLowerCase() + ".png";
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}


function showEmblemTip() {
    var emblem = document.getElementById("emblemChoice").value;
    var info = "";

    if (emblem == "Common") {
        info = "Provides regeneration and balanced stats, making it a flexible option for many classes.";
    }
    else if (emblem == "Tank") {
        info = "Increases health and defense, helping Tanks absorb damage and survive teamfights.";
    }
    else if (emblem == "Assassin") {
        info = "Provides penetration, damage, and movement speed, helping Assassins eliminate enemies quickly.";
    }
    else if (emblem == "Fighter") {
        info = "Combines damage, defense, and lifesteal, making it useful for Fighters in extended fights.";
    }
    else if (emblem == "Marksman") {
        info = "Improves attack speed and lifesteal, helping Marksmen deal consistent basic attack damage.";
    }
    else if (emblem == "Mage") {
        info = "Provides magic power, penetration, and cooldown reduction, helping Mages deal magic damage more effectively.";
    }
    else if (emblem == "Support") {
        info = "Improves healing and movement speed while reducing cooldowns, helping Supports assist their teammates.";
    }

    document.getElementById("emblemResult").textContent = info;
    
    var image = document.getElementById("emblemImage");

    if (emblem !== "") {
        image.src = "images/" + emblem.toLowerCase() + ".png";
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}


function showPhaseTip() {
    var phase = document.getElementById("phaseChoice").value;
    var result = document.getElementById("phaseResult");
    if (phase === "Early") {
        result.textContent = "Farm, reach level 4, and prepare for Turtle.";
    } else if (phase === "Mid") {
        result.textContent = "Take turrets, open the map, and look for Lord.";
    } else if (phase === "Late") {
        result.textContent = "Stay together and push with Lord toward the enemy base.";
    } else {
        result.textContent = "Choose a game phase above.";
    }
    var image = document.getElementById("phaseImage");

    if (phase !== "") {
        image.src = "images/" + phase.toLowerCase() + ".png";
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
}

function toggleAnswers() {
    var table = document.getElementById("answerTable");
    if (table.style.display === "none") {
        table.style.display = "table";
    } else {
        table.style.display = "none";
    }
}