//definiing the main function generate to create the attributes
function generateAtts() {

    //the skill function is used to create 1 skill
    function skill() {
        //roll a 6 sided dice 4 times mand stores it in an array
        var randoms = [];
        for (i = 0; i < 4; i++) {
            randoms[i] = Math.floor(Math.random()*7);
        }

        //this should discard the lowest of the 4 numbers
        var lowest = randoms[0];
        var lowestSpot = 0;
        for (k = 1; k < 4; k++) {
            if (randoms[k] < lowest) {
                lowest = randoms[k];
                lowestSpot = i;
            } 
        }

        //saved the lowest spot of the lowest dice roll and will discard it from array
        randoms.splice(lowestSpot, 1);

        var total = randoms[0] + randoms[1] + randoms[2];
        return total;
    }

    //creates the main array of all 6 skills, each attained 
    var allSkills = [];
    for (j = 0; j < 6; j++) {
        allSkills[j] = skill();
        console.log(allSkills)
    }

    //doing some checking, i had to change all the i variable in my for loops to new letters, and that started to make things work alot better
    var skillsAdded = (allSkills[0] + allSkills[1] + allSkills[2] + allSkills[3] + allSkills[4] + allSkills[5]);
    console.log(allSkills[0] + allSkills[1] + allSkills[2] + allSkills[3] + allSkills[4] + allSkills[5]);

    //checks if the total is over 75 and if not starts the generate all over
    if (skillsAdded < 75) {
        generateAtts()
    }

    //grabbed this from w3school that can help print my array of allSkills
    if (skillsAdded > 74) {
        var text = "<ul>";
        allSkills.forEach(myFunction);
        text += "</ul>";
        document.getElementById("stats").innerHTML = text;

        function myFunction(value) {
            text += "<li>" + value + "</li>";
        }
    }

}


var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generateAtts)
