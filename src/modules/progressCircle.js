const ProgressBar = require('progressbar.js');

const circle = new ProgressBar.Circle(container, {
  color: '#aaa',
  // This has to be the same size as the maximum width to prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false,
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }
  },
});

// circle.animate(0.5); // Number from 0.0 to 1.0

export { ProgressBar, circle };
