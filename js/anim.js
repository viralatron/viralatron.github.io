// fix that
var elem = '.main__svg path';

var timeline = anime.timeline({
        easing: 'linear',
        duration: 1500,
        loop: false
    }
);

timeline.add({
    targets: elem,
    strokeDashoffset: [anime.setDashoffset, 0]
})
.add({
    targets: elem,
    fillOpacity: ['0', '1'],
}, 1000);