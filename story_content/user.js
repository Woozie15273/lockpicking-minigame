function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5Zk1GXGyQe8":
        Script1();
        break;
      case "5c5Ly4MFeah":
        Script2();
        break;
      case "6hW31YIstqP":
        Script3();
        break;
      case "6H8oQks6qIM":
        Script4();
        break;
      case "6TXspeGrskn":
        Script5();
        break;
  }
}

function Script1()
{
  const setKeyVariable = (key, value) => {
    const player = GetPlayer();
    switch (key) {
        case 'a': case 'A': player.SetVar('ifBtnA', value); break;
        case 'd': case 'D': player.SetVar('ifBtnD', value); break;
        case 'b': case 'B': player.SetVar('ifBtnB', value); break;
        case 'e': case 'E': player.SetVar('ifBtnE', value); break;
    }
}

if (!window.keyListenersAdded) {
    window.addEventListener('keydown', (e) => setKeyVariable(e.key, true));
    window.addEventListener('keyup', (e) => setKeyVariable(e.key, false));
    window.keyListenersAdded = true;
}
}

function Script2()
{
  var player = GetPlayer();
var valueThisRound = Math.floor(Math.random() * 120) + 1;
player.SetVar("valueThisRound", valueThisRound);
player.SetVar("lockSet", 0);
player.SetVar("pick", 60);
player.SetVar("pickEndurance", 6);
player.SetVar("ifPicked", "false");
player.SetVar("ifGreen", "false");
}

function Script3()
{
  var player = GetPlayer();
var x = player.GetVar("valueThisRound");
var userGuess = player.GetVar("pick");
var pickEndurance = player.GetVar("pickEndurance");

const guessNumber = userGuess => {
    if (userGuess >= x - 5 && userGuess <= x + 5) {
        player.SetVar("ifGreen", true);
        player.SetVar("ifPicked", true);
    } else if (userGuess >= x - 10 && userGuess <= x + 10) {
        player.SetVar("ifYellow", true);
        pickEndurance--;
        player.SetVar("pickEndurance", pickEndurance);
        setTimeout(() => {
            player.SetVar("ifYellow", false)
        }, 1000);
    } else {
        player.SetVar("ifRed", true);
        pickEndurance--;
        player.SetVar("pickEndurance", pickEndurance);
        setTimeout(() => {
            player.SetVar("ifRed", false)
        }, 1000);
    }
};

guessNumber(userGuess);
}

function Script4()
{
  var player = GetPlayer();
var lockSet = player.GetVar("lockSet");

const increment = async () => {
    while (lockSet < 90) {
        lockSet++;
        player.SetVar("lockSet", lockSet);
        await new Promise(resolve => setTimeout(resolve, 10)); 
    }
};

increment();
}

function Script5()
{
  var player = GetPlayer();
var x = player.GetVar("valueThisRound");
var userGuess = player.GetVar("pick");
var pickEndurance = player.GetVar("pickEndurance");

const guessNumber = userGuess => {
    if (userGuess >= x - 5 && userGuess <= x + 5) {
        player.SetVar("ifPicked", true);
        player.SetVar("ifGreen", true);
    } else if (userGuess >= x - 10 && userGuess <= x + 10) {
        player.SetVar("ifYellow", true);
        pickEndurance--;
        player.SetVar("pickEndurance", pickEndurance);
        setTimeout(() => {
            player.SetVar("ifYellow", false)
        }, 1000);
    } else {
        player.SetVar("ifRed", true);
        pickEndurance--;
        player.SetVar("pickEndurance", pickEndurance);
        setTimeout(() => {
            player.SetVar("ifRed", false)
        }, 1000);
    }
};

guessNumber(userGuess);
}

