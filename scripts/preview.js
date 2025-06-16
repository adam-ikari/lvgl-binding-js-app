const { run } = require('sdk-dev');
const env = process.env.NODE_ENV || 'development';
const dir = process.argv[2] || 'uncompressed';

console.log(`Starting ${env} preview in ${dir} directory...`);
try {
  run('main.view.js', dir);
  console.log('Preview server started');
} catch (err) {
  console.error('Preview failed:', err);
  process.exit(1);
}