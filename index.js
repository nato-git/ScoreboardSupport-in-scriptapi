import * as server from '@minecraft/server';

/**
 *
 * @param {string} score_name
 * @param {import('@minecraft/server').Player } player
 * @returns {number}
 */
export function get_score(score_name, player) {
  try {
    const scoreboard = server.world.scoreboard;
    let objective = scoreboard.getObjective(score_name);
    let score = objective.getScore(player.scoreboardIdentity);
    if (score != undefined) {
      return score;
    } else {
      return 0;
    }
  } catch {
    return 0;
  }
}

/**
 *
 * @param {string} score_name
 * @param {import('@minecraft/server').Player} player
 * @param {number} value
 * @returns {void}
 */
export function add_score(score_name, player, value) {
  const scoreboard = server.world.scoreboard;
  let objective = scoreboard.getObjective(score_name);
  if (!objective) {
    console.log('');
    return;
  }
  objective.addScore(player, value);
}

/**
 *
 * @param {string} score_name
 * @param {import('@minecraft/server').Player} player
 * @param {number} value
 * @returns {void}
 */
export function set_score(score_name, player, value) {
  const scoreboard = server.world.scoreboard;
  let objective = scoreboard.getObjective(score_name);
  if (!objective) {
    return;
  }
  objective.setScore(player, value);
}

/**
 *
 * @param {string} object_name
 * @returns {void}
 */
export function create_scoreboard(object_name) {
  const scoreboard = server.world.scoreboard;
  let objective = scoreboard.getObjective(object_name);
  if (objective) {
    return;
  }
  server.world.scoreboard.addObjective(object_name, object_name);
}
