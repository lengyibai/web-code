const fs = require("fs");

const opencc = require("node-opencc");

const readFile = (p) => {
  const path = require("path");
  const filePath = path.resolve(__dirname, p);
  return new Promise((resolve) => {
    fs.readFile(filePath, "utf-8", (err, data) => {
      resolve(data);
    });
  });
};

const getPathFiles = (src) => {
  return new Promise((resolve) => {
    const path = require("path");
    const fs = require("fs");
    const filePath = path.resolve(__dirname, src);
    fs.readdir(filePath, function (err, files) {
      resolve(files);
    });
  });
};

const writeFile = (url, data) => {
  const fs = require("fs");
  const path = require("path");
  const filePath = path.resolve(__dirname, url);
  fs.writeFile(filePath, JSON.stringify(data, null, 2), (err, data) => {
    console.log(`创建成功`);
  });
};

function convert(data, file_name) {
  if (typeof data === "string") {
    if (/[\u4e00-\u9fff]/.test(data)) {
      return opencc.simplifiedToTraditional(data);
    }
  } else if (typeof data === "object" && data !== null) {
    for (const key in data) {
      console.log(file_name, data[key]);
      data[key] = convert(data[key]);
    }
  }
  return data;
}

const start = (data, file_name) => {
  const convertedData = convert(data, file_name);
  writeFile(`./finish/${file_name}`, convertedData);
};

// getPathFiles("./start").then((files) => {
//   files.forEach((file_name) => {
//     readFile(`./start/${file_name}`).then((file) => {
//       const data = JSON.parse(file);
//       start(data, file_name);
//     });
//   });
// });

const zh = {
  冷弋白: "冷弋白",
  王者图鉴: "王者图鉴",
  英雄: "英雄",
  皮肤: "皮肤",
  装备: "装备",
  铭文: " 铭文",
  系统管理: "系统管理",
  添加: "添加",
  本地数据管理: "本地数据管理",
  帧率: "帧率",
  屏幕尺寸: "屏幕尺寸",
  内核: "内核",
  数据: "数据",
  网页: "网页",
  正在更新数据: "正在更新数据",
  登录后更新: "登录后更新",
  正在加载: "正在加载",
  页面: "页面",
  全部: "全部",
  坦克: "坦克",
  战士: "战士",
  刺客: "刺客",
  法师: "法师",
  射手: "射手",
  辅助: "辅助",
  攻击: "攻击",
  法术: "法术",
  防御: "防御",
  移动: "移动",
  打野: "打野",
  游走: "游走",
  生命: "生命",
  功能: "功能",
  吸血: "吸血",
  只看: "只看",
  搜索英雄: "英雄/字母",
  搜索皮肤: "皮肤/英雄",
  动画: "动画",
  迅速: "迅速",
  均衡: "均衡",
  优雅: "优雅",
  音效: "音效",
  音乐: "音效",
  音乐进度控制: "音乐进度控制",
  音乐进度控制描述: "开启后，点击底部导航栏就可以调整播放进度",
  元素线条: "元素线条",
  元素阴影: "元素阴影",
  元素发光: "元素发光",
  元素发光描述: "开启后，在一些地方悬浮、选中元素会有发光效果",
  粒子特效: "粒子特效",
  粒子特效描述:
    "开启后，对性能有一点影响，主要是对登录页logo、登录注册按钮、蓝黄红按钮、底部音乐播放器添加粒子效果",
  视频背景: "视频背景",
  视频背景描述:
    "主要是登录页和登录后的背景，PC端默认为视频背景，手机端默认为图片背景是为了解决手机端部分浏览器使用视频背景会全屏遮挡的问题，但注意的是重置配置会开启视频背景，手机端如果出现全屏遮挡问题需要刷新浏览器解决",
  小贴士: "场景小贴士",
  小贴士描述:
    "在某些场景会触发小贴士，在左上、右上、左下、右下角弹出，介绍一些功能信息",
  已恢复所有小贴士: "已恢复所有小贴士",
  重置配置: "重置配置",
  开启: "开启",
  恢复: "恢复",
  恢复所有小贴士: "恢复所有小贴士",
  保存成功: "保存成功",
  已重置所有配置项: "已重置所有配置项",
  设置: "设置",
  自动登录成功: "自动登录成功",
  编辑个人信息: "编辑个人信息",
  退出登录: "退出登录",
  注销帐号: "注销帐号",
  取消: "取消",
  确定: "确定",
  注销提醒: "注销后，当前帐号需重新注册才能登录，确定注销吗？",
  资料保存关闭: "资料未保存，确定关闭吗？",
  保存草稿: "即将关闭，是否保存为草稿？",
  头像: "头像",
  身份: "身份",
  用户: "用户",
  帐号: "帐号",
  管理员: "管理员",
  午夜好: "午夜好",
  早上好: "早上好",
  上午好: "上午好",
  中午好: "中午好",
  下午好: "下午好",
  晚上好: "晚上好",
  用户名: "用户名",
  密码: "密码",
  保存: "保存",
  更新日志: "更新日志",
  页面更新: "页面更新",
  基础数据更新: "基础数据更新",
  语音更新: "语音更新",
  更新并重启: "更新并重启",
  技能: "技能",
  检查更新: "检查更新",
  重置: "重置",
  更新: "更新",
  导出: "导出",
  下载覆盖: "即将从远程下载当前数据进行覆盖",
  确认重置: "确认重置",
  本地已更改: "本地已更改",
  待更新: "待更新",
  正在检查: "正在检查...",
  最新: "最新",
  数据类型: "数据类型",
  数据量: "数据量",
  状态: "状态",
  操作: "操作",
  游戏职业: "游戏职业",
  细分定位: "细分定位",
  游戏特长: "游戏特长",
  强势时期: "强势时期",
  阵营: "阵营",
  身高: "身高",
  生存能力: "生存能力",
  攻击伤害: "攻击伤害",
  技能效果: "技能效果",
  上手难度: "上手难度",
  皮肤语音列表: "皮肤语音列表",
  语言: "语言",
  登录: "登录",
  系统公告: "系统公告",
  登录成功: "登录成功",
  请输入帐号: "请输入帐号",
  请输入密码: "请输入密码",
  请输入昵称: "请输入昵称",
  重新选择: "重新选择",
  注册: "注册",
  记住密码: "记住密码",
  请完整填写: "请完整填写",
  请正确填写: "请正确填写",
  用户不存在: "用户不存在",
  密码错误: "密码错误",
  静音: "静音",
  介绍: "介绍",
  公告: "公告",
  计划: "计划",
  开黑: "开黑",
  男: "男",
  女: "女",
};

start(zh, "tc");
