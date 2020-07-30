var titles = [
    "perpetually under construction",
    "helscome my wedsite.",
    "WHERE IS THE CONTENT?????",
    "is there an html status for \"under construction\"",
    "i'm still working on it guys"
    ];
  var subtitles = [
    "please check back next eternity",
    "its not done.",
    "answer: not here",
    "because i sure could use one right now",
    "please don't go :("
    ];
  var randVal;
  var prevVal;
  
  genRandomPage();
  
  function genRandomPage()
  {
    if(titles.length != subtitles.length)
    {
      randVal = Math.min(titles.length, subtitles.length);
      console.log("WARNING: Titles array length is not equal to subtitles array length, going with smallest value");
    }
    else
      randVal = titles.length;
    
    var rand = Math.floor(Math.random() * randVal);
    
    while(rand == prevVal)
    {
      rand = Math.floor(Math.random() * randVal);
    }
  
    prevVal = rand;
    document.getElementById("title").innerHTML = titles[rand];
    document.getElementById("subtitle").innerHTML = subtitles[rand];
  }