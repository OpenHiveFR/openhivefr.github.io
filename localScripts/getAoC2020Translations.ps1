$translatedAmount = 6
$translationPath = "../santacode/2020/translations/"

# Getting days translations
for ($i = 1; $i -lt $translatedAmount; $i++) {
    $url = "https://raw.githubusercontent.com/OpenHiveFR/aoc2020FR/main/day"+$i+"/day"+$i+".html"
    $outPath = $translationPath+"day/"+$i+".html"
    Invoke-WebRequest $url -OutFile $outPath
}