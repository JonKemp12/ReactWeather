// Change from 5.33 ES6 promises

function addPromise (a, b) {
  return new Promise(function (resolve, reject){
    if (typeof a === 'number' && typeof b ==='number') {
      resolve(a+b);
    }
    reject('Params must be numbers please!');
  });
}

addPromise(3,4).then(function (ans) {
  console.log('3+4=', ans);
}, function (err) {
  console.log('ERROR:', err);
});

addPromise(3,'Four').then(function (ans) {
  console.log('3+Four=', ans);
}, function (err) {
  console.log('ERROR:', err);
});
