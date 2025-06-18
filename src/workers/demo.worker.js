// txiki.js兼容的Worker实现
const { parentPort } = require('worker_threads');

parentPort.on('message', (msg) => {
  console.log('Worker received:', msg);
  
  // 执行计算任务
  const startTime = Date.now();
  let sum = 0;
  for (let i = 0; i < 10000000; i++) { sum += i; }
  const endTime = Date.now();
  
  parentPort.postMessage({
    sum: sum,
    time: endTime - startTime
  });
});