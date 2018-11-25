'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;
var GAP_CLOUD = 25;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + CLOUD_WIDTH, y);
  ctx.lineTo(x + CLOUD_WIDTH - GAP_CLOUD, y + CLOUD_HEIGHT);
  ctx.lineTo(x + GAP_CLOUD, y + CLOUD_HEIGHT);
  ctx.closePath();
  ctx.fill();
};

var createText = function (ctx, text, x, y) {
  ctx.fillText(text, x, y);
  ctx.font = 'bold 16px PT Mono';
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  createText(ctx, 'Ура, вы победили!', 200, 40);
  createText(ctx, 'Cписок результатов:', 200, 60);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else if (players[i] === 'Катя') {
      ctx.fillStyle = 'rgba(27, 30, 158, 1)';
    } else if (players[i] === 'Кекс') {
      ctx.fillStyle = 'rgba(27, 90, 158, 1)';
    } else if (players[i] === 'Игорь') {
      ctx.fillStyle = 'rgba(27, 60, 158, 1)';
    }
    ctx.fillText(players[i], CLOUD_X + GAP * 6 + (GAP * 4 + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP);
    ctx.fillRect(CLOUD_X + GAP * 6 + (GAP * 4 + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - GAP * 4, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);

  }
};
