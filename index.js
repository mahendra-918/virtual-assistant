let btn = document.querySelector("#btn");
let myText = document.querySelector("#myText");
let voice = document.querySelector("#voice")
let myLable = document.querySelector("#myLable")

function speak(text){
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume = 1;
    window.speechSynthesis.speak(text_speak);
}
function wishMe(){
    let day = new Date();
    let hours = day.getHours;
    if(hours>=0&&hours<12){
        speak("Good morning")
    }else if(hours>=12&&hours<=16){
        speak("Good afternoon ")
    }else{
        speak("Good evening ")
    }
}
window.addEventListener("load",()=>{
    wishMe();
})

let speakRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = new speakRecognition();

recognition.onresult = (event)=>{
    let currrentIndex = event.resultIndex;
    let transcript = event.results[currrentIndex][0].transcript;
    myText.innerHTML = transcript
    transCommand(transcript.toLowerCase());
}
btn.addEventListener("click",()=>{
    recognition.start();
    btn.style.display = "none"
    voice.style.display="block"
    myLable.innerHTML = "speak now"

})
function transCommand(massage){
    btn.style.display = "block"
    voice.style.display="none"
    if(massage.includes("hello")){
        speak("hello sir ")
    }else if(massage.includes("who are you")||massage.includes("hu r u")){
        speak("iam Sofiyan a virtual assistant")
    }else{
        let search = massage.replace("sofiyan","")
        speak(`this what i found in internet about ${search}`)
        window.open(`https://www.google.com/search?q=${search}`)
    }
}