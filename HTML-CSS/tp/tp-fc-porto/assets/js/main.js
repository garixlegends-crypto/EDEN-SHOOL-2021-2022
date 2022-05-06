
//fetching the data  

let elapsedTime = document.querySelector("#elapsed");
let homeTeamLogo = document.querySelector("#homeLogo");
let homeTeamName = document.querySelector("#homeName");
let awayTeamLogo = document.querySelector("#awayLogo");
let awayTeamName = document.querySelector("#awayName");
let lastMatchGoals = document.querySelector("#goals");
let matchTable = document.querySelector("#matchTable");



function getData() {
fetch("https://app.sportdataapi.com/api/v1/soccer/leagues", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": "453ceb70-5414-11ec-8dcf-2740ee198896"
    }
  })

  .then(response => response.json().then(data => {
      console.log(response);

      let matchesList = data['response'];
      let fixture = matchesList[0]['fixture'];
      let goals = matchesList[0]['goals'];
      let teams = matchesList[0]['teams'];

      elapsedTime.innerHTML = fixture['status']['elapsed'] + "'";
      homeTeamLogo.src = teams['home']['logo'];
      homeTeamName.innerHTML  = teams['home']['name'];
      awayTeamLogo.src = teams['away']['logo'];
      awayTeamLogo.innerHTML = teams['home']['name'];
      lastMatchGoals.innerHTML = goals['home'] + " : " + goals['away'];
  }))
  
  .catch(err =>{
        console.log(err);
    })
}
    
getData();
