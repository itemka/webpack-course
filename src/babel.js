async function testFuncStart() {
  return await Promise.resolve('async is working')
}

testFuncStart().then(console.log);

const unused = 24;

class Util {
  static id = Date.now()
}

console.log('Util id: ', Util.id)

import('lodash').then(_ => {
  console.log('Lodash', _.random(0, 24, true));
})