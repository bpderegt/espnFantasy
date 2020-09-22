const { Client, Player, BaseObject } = require('espn-fantasy-football-api/node'); // node
const { swid, espn_s2 } = require("../espn.config.js");
const league_id = `14702948`;
const league_year = `2020`;

const myClient = new Client({ leagueId: league_id});
myClient.setCookies({ espns2: espn_s2, SWID: swid })



const freeAgents = async (callback) => {
  let freeAgents = await myClient.getFreeAgents({ seasonId: league_year, scoringPeriodId: `2` })
  let byPosition = {};
  let positions = [];
  console.log(freeAgents.length);
  freeAgents.map((n, index) => {
    if (byPosition[n.player.defaultPosition]) {
      byPosition[n.player.defaultPosition].push(n.player)
    } else {
      byPosition[n.player.defaultPosition] = [n.player];
      positions.push(n.player.defaultPosition);
    }
  })
  // console.log(byPosition)
  callback(null, { byPosition, positions });
}

const getTeams = async () => {
  let teams = await myClient.getTeamsAtWeek({ seasonId: league_year, scoringPeriodId: `2` });
  let justNames = [];

  teams.map(i => {
    justNames.push(i.name);
  })
  console.log(justNames);

}

const getCamNewton = async () => {
  const camNewton = new Player({ seasonId: league_year, id: 3917232 });
  let cam = await camNewton.PlayerMap()
  console.log(cam);
}

// freeAgents()
// getTeams()
// getCamNewton();

module.exports = {
  freeAgents
}