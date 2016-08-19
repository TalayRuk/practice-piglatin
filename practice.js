function translate(piglatinphrase) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  var qu = ['qu'];

    result = piglatinphrase.split("");


    for (var i = 0; i < piglatinphrase.length; i++)


  if (!isNaN(piglatinphrase[i])) {
    return "Enter Alphabets only please";

  } else if (vowels.includes(piglatinphrase.charAt(0))) {
    return piglatinphrase + "ay";

  } else if
    (!vowels.includes(piglatinphrase[i])) {
    result.push(result.shift());

// Not working
//   } else if
//     (qu.includes(piglatinphrase.charAt(i))) {
//     result.push(result.shift());
//     console.log("queen");
  } else  {
    result.push("ay");
    return result.join("");
  }


}


// console.log(translate("quear"));

$(function(){
  $("#translatorform").submit(function(event){
    event.preventDefault();
    var piglatinphrase = $("input#yourphrase").val().toLowerCase();
    var result = translate(piglatinphrase);
    $(".finalresult").text(result);
  });
});
