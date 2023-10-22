function start() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/I7EaQEYIy/model.json", modelReady)
}

function modelReady() {
    classifier.classify(gotresults)
}

function gotresults(error, result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
        document.getElementById("resultlabel").innerHTML = "I can hear- " + result[0].label
        document.getElementById("resultaccuracy").innerHTML = "Accuracy- " + (result[0].confidence * 100).toFixed(2) + "%"


        img = document.getElementById("pic")


        if (result[0].label == "Meowing") {

            img.src = "cat.jpg"
        }
        else if (result[0].label == "Barking") {
            img.src = "dog.jpg"
        }
        else if (result[0].label == "Elephant") {
            img.src = "elephant.jpg"
        }
        else {
            img.src = "ear.jpg"
        }
    }
}





