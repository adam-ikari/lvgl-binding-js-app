const { run } = require('sdk-dev');
const env = process.env.NODE_ENV || 'development';

console.log(`Starting ${env} preview...`);
try {
  run('main.view.js');
  console.log('Preview server started');
} catch (err) {
  console.error('Preview failed:', err);
  process.exit(1);
}