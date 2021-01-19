let words = [];
function firstButtonClicked() {
    for (let i = 0; i < 3; i++) {
        let word = prompt("Please enter a word");
        words.push(word);
    }
    document.getElementById("FirstButton").style.display = "none";
    document.getElementById("list1").innerHTML = words[0];
    document.getElementById("list2").innerHTML = words[1];
    document.getElementById("list3").innerHTML = words[2];
    Array1.style.display = "block";
    Array2.style.display = "none";
}

function secondButtonClicked() {
    let new_words = words.map(function(oneWord){
        return oneWord.charAt(oneWord.length-1)+oneWord.substring(1,oneWord.length-1)+oneWord.charAt(0);
    })
    document.getElementById("SecondButton").style.display = "none";
    document.getElementById("list1.2").innerHTML = new_words[0];
    document.getElementById("list2.2").innerHTML = new_words[1];
    document.getElementById("list3.2").innerHTML = new_words[2];
    Array1.style.display = "none";
    Array2.style.display = "block";
}