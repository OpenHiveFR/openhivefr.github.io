function createMember(member) {
    console.log(member)

    for (field in member) {
        if (member[field] == null) {
            if (field == "surname" || field == "name") {
                member[field] = " ";
            } else {
                member[field] = "N/A";
            }
        }
    }

    console.log(member.surname);

    let divRoot = document.createElement("div");
    divRoot.setAttribute("class", "member");

    let nameTitle = document.createElement("h4");
    nameTitle.appendChild(document.createTextNode(member.surname));
    
    let pseudoEM = document.createElement("em");
    pseudoEM.appendChild(document.createTextNode(" \""+member.pseudo+"\" "));

    nameTitle.appendChild(pseudoEM);
    nameTitle.appendChild(document.createTextNode(member.name));

    divRoot.appendChild(nameTitle);

    let avatar = document.createElement("img");
    avatar.setAttribute("class", "img-fluid");
    avatar.setAttribute("src", "images/avatars/"+member.avatar);
    
    divRoot.appendChild(avatar);


    let discord = document.createElement("p");
    discord.setAttribute("class", "discord");
    discord.appendChild(document.createTextNode(member.discord));
    
    divRoot.appendChild(discord);


    let mailP = document.createElement("p");
    mailP.setAttribute("class", "mail");
    
    let mailA = document.createElement("a");
    mailA.setAttribute("href", "mailto:"+member.mail);
    mailA.appendChild(document.createTextNode(member.mail));

    mailP.appendChild(mailA);

    divRoot.appendChild(mailP);


    let siteP = document.createElement("p");
    siteP.setAttribute("class", "site");

    let siteA = document.createElement("a");
    siteA.setAttribute("href", "https://"+member.site);
    siteA.appendChild(document.createTextNode(member.site));

    siteP.appendChild(siteA);

    divRoot.appendChild(siteP);


    let githubP = document.createElement("p");
    githubP.setAttribute("class", "github");

    let githubA = document.createElement("a");
    githubA.setAttribute("href", "https://github.com/"+member.github);
    githubA.appendChild(document.createTextNode(member.github));

    githubP.appendChild(githubA);
    divRoot.appendChild(githubP);

    return divRoot;
}

function createTeam(team) {
    let sectionRoot = document.createElement("section");
    sectionRoot.setAttribute("class", "team");
    sectionRoot.setAttribute("id", team.id);

    let sectionTitle = document.createElement("h3");
    sectionTitle.appendChild(document.createTextNode(team.title));

    sectionRoot.appendChild(sectionTitle);

    let membersSectionRoot = document.createElement("section");
    membersSectionRoot.setAttribute("class", "team-members");

    sectionRoot.appendChild(membersSectionRoot);

    for (let member in team.content) {
        membersSectionRoot.appendChild(createMember(team.content[member]));
    }

    return sectionRoot;
}

let members = {};

let xmlhttp = new XMLHttpRequest();
xmlhttp.open("POST", "https://openhivefr.github.io/js/jsons/members.json", false);
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
      members = JSON.parse(xmlhttp.responseText);
    }
};
xmlhttp.send(null);

let root = document.getElementById("members");
console.log(members);
for (let team in members) {
    root.appendChild(createTeam(members[team]));
}