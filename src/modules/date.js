import moment from 'moment';

function getDate() {
  return moment().format('dddd, MMM Do YYYY');
}

function displayDate() {
  const dateWrapper = document.querySelector('.nav-date');
  dateWrapper.textContent = getDate();
}

export { displayDate };
