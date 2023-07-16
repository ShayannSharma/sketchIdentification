function setup(){
    canvas = createCanvas(540,540)
    canvas.center()
    canvas.mouseReleased(classifyCanvas)
    background("white")
    synth = window.speechSynthesis
}
function clear_canvas(){
    background("white")
}
function preload(){
    classifier = ml5.imageClassifier('DoodleNet')
}
function classifyCanvas(){
    classifier.classify(canvas, gotResult)
}
function gotResult(error, result){
    if (error) {
        console.log(error)
    } else {
        console.log(result)
        document.getElementById("label").innerHTML = "Label: " + result[0].label
        document.getElementById("confidence").innerHTML = "Confidence: " + Math.floor(result[0].confidence*100) + "%"
        speaks = new SpeechSynthesisUtterance(result[0].label)
        synth.speak(speaks)

    }
}
function draw(){
    strokeWeight(7)
    stroke("black")
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY)
    }
}