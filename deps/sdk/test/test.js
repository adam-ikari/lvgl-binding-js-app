const { build, run } = require('../index');

// 测试构建功能
async function testBuild() {
  console.log('Testing build function...');
  try {
    await build();
    console.log('✅ Build test passed');
  } catch (error) {
    console.error('❌ Build test failed:', error);
  }
}

// 测试运行功能
async function testRun() {
  console.log('Testing run function...');
  try {
    // 先确保构建完成
    await build();
    // 运行主入口文件
    run('main.view.js');
    console.log('✅ Run test passed');
  } catch (error) {
    console.error('❌ Run test failed:', error);
  }
}

// 运行所有测试
(async () => {
  console.log('Starting SDK tests...');
  await testBuild();
  await testRun();
  console.log('All tests completed');
})();