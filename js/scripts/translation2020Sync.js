function removeVoidStrings(list) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] != '') {
            result.push(list[i])
        }
    }
    return result;
}

let syncCallback = function trackNewIFrameURL(mutations) {
    let translationsBasePath = "http://gist-it.appspot.com/raw.githubusercontent.com/OpenHiveFR/aoc2019FR/master/";

    let translatedGlobalPages = [] // ["unavailable", "about", "settings", "auth", "support", "sponsors",
                                   // "stats", "leaderboard"];
    let translatedAuthPages = [] // ["login", "logout"]
    let translatedDays = 14;

    for (let mutation in mutations) {
        if (mutation.type == 'attributes') {
            let newAOCIFrameURL = removeVoidStrings(mutation.target.getAttribute('src').split('/'));
            let hostName = newAOCIFrameURL[1];
            let path = newAOCIFrameURL.slice(2, newAOCIFrameURL.length + 1);

            if (hostName != 'adventofcode.com' &&
                    hostName != 'github.com' &&
                    hostName != 'twitter.com' &&
                    hostName != 'www.reddit.com' &&
                    hostName != 'accounts.google.com') { // Whitelisting some domains
                mutation.target.setAttribute('src', 'https://adventofcode.com/2019');
                document.getElementById("translation").setAttribute("src",
                                                                    translationsBasePath+"index.html");
            } else if (path.length = 0) { // If on root of AOC site
                mutation.target.setAttribute('src', 'https://adventofcode.com/2019');
                document.getElementById("translation").setAttribute("src",
                                                                     translationsBasePath+"index.html");
            } else if (path[0] != "2019") { /// If on 2019 calendar page
                mutation.target.setAttribute('src', 'https://adventofcode.com/2019');
                document.getElementById("translation").setAttribute("src",
                                                                     translationsBasePath+"index.html");
                if (path[1] == "day") { // If on a day page
                    if (path.length < 3) { // If on day directory root
                        mutation.target.setAttribute('src', 'https://adventofcode.com/2019');
                        document.getElementById("translation").setAttribute("src",
                                                                            translationsBasePath+"index.html");
                    } else if (path[2] > translatedDays) { // If day is not translated
                        document.getElementById("translation").setAttribute("src",
                                                                            translationsBasePath+"unavailable.html");
                    } else { // If day is translated
                        document.getElementById("translation").setAttribute("src",
                                                                            translationsBasePath+"/day"+path[2]+"/day"+path[2]+".html");
                    }
                } else if (path[1] == "auth") { // If on an auth page
                    if (path.length < 3) { // If on auth page root
                        mutation.target.setAttribute('src', 'https://adventofcode.com/2019');
                        document.getElementById("translation").setAttribute("src",
                                                                            translationsBasePath+"index.html");
                    } else if (!translatedAuthPages.includes(path[2])) { // If page is not translated
                        mutation.target.setAttribute('src', 'https://adventofcode.com/2019');
                        document.getElementById("translation").setAttribute("src",
                                                                            translationsBasePath+"index.html");
                    } else { // If auth page is translated
                        document.getElementById("translation").setAttribute("src",
                                                                            translationsBasePath+"auth/"+path[2]+".html");
                    }
                } else if (!translatedGlobalPages.includes(path[1])) { // If on an untranslated global (non day/auth) page
                    document.getElementById("translation").setAttribute("src",
                                                                        translationsBasePath+"unavailable.html/");
                } else if (translatedGlobalPages.includes(path[1])) { // If on a translated global page
                    document.getElementById("translation").setAttribute("src",
                                                                        translationsBasePath+path[1]+".html");
                } else { // If wtf
                    document.getElementById("translation").setAttribute("src",
                                                                        translationsBasePath+"unavailable.html/");
                }
            }
        }
    }
}

let urlChangeObserverConfig = {attributes: true};

let urlChangeObserver = new MutationObserver(syncCallback);


let aocIFrame = document.getElementById("aoc");
let translationIFrame = document.getElementById("translation");


urlChangeObserver.observe(aocIFrame, urlChangeObserverConfig);