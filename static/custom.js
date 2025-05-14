// 检测本地语言设置并在必要时设置默认值
function checkAndSetLanguage() {
  // 检查语言设置是否已存在
  const languageSetting = localStorage.getItem('__AURORA__Language');

  // 如果语言设置不存在（null 或 undefined）
  if (!languageSetting) {
    // 设置默认语言为中文
    localStorage.setItem('__AURORA__Language', '{"value":"zhCN","expire":null}');
    console.log('已设置默认语言为中文 (zhCN)');
  } else {
    console.log('语言设置已存在，保持不变');
  }
}

// 执行检查
checkAndSetLanguage();


// 然后修改 isDarkMode 函数确保它始终返回 false
function isDarkMode() {

  console.log('isDarkMode 函数被调用');
  // 读取当前设置（仅用于日志）
  var currentSetting = localStorage.getItem('__AURORA__Darkmode');
  console.log('调用前的主题设置:', currentSetting);

  
  // 强制设置为浅色模式
  localStorage.setItem('__AURORA__Darkmode', '{"value":"light","expire":null}');
  console.log('已重新设置主题为浅色模式 (light)');
  
  // 始终返回 false，表示使用浅色模式
  console.log('返回值: false (浅色模式)');
  return false;
}
