const { build } = require('sdk-cli');
const env = process.env.NODE_ENV || 'development';

console.log(`Starting ${env} build...`);
try {
  build();
  console.log('Build completed successfully');
} catch (err) {
  console.error('Build failed:', err);
  process.exit(1);
}