import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const player = new Player('vimeo-player', {
  id: '236203659', 
  width: 640,
  height: 360,
});

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime !== null) {
  player.setCurrentTime(parseFloat(savedTime));
}

player.on('timeupdate', throttle(function (event) {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000)); 
