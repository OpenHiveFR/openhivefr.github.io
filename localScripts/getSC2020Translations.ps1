$translatedAmount = 15
$translationPath = "../summercode/2020/translations/"

# Getting days translations
for ($i = 0; $i -lt $translatedAmount; $i++) {
    $url = "https://raw.githubusercontent.com/OpenHiveFR/aoc2019FR/master/day"+$i+"/day"+$i+".html"
    $outPath = $translationPath+"day/"+$i+".html"
    Invoke-WebRequest $url -OutFile $outPath
}