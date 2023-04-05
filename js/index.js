function print_game_introduction() {
  let box1 = document.getElementById("main-box1")
  let box2 = document.getElementById("main-box2")
  let box3 = document.getElementById("main-box3")
  let box4 = document.getElementById("main-box4")
  let a = document.getElementById("game_introduction")
  let span = document.getElementById("sidebar1")
  a.style.color = "blue"
  Role_Introduction.style.color = "#fff"
  Faction_Introduction.style.color = "#fff"
  span.style.borderRight = "5px solid blue"
  sidebar3.style.borderRight = "0"
  sidebar2.style.borderRight = "0"
  box1.style.display = "block"
  box2.style.display = "none"
  box3.style.display = "none"
  box4.style.display = "none"
}
function print_Faction_Introduction() {
  let box1 = document.getElementById("main-box1")
  let box2 = document.getElementById("main-box2")
  let box3 = document.getElementById("main-box3")
  let box4 = document.getElementById("main-box4")
  let a = document.getElementById("Faction_Introduction")
  let span = document.getElementById("sidebar2")
  a.style.color = "blue"
  game_introduction.style.color = "#fff"
  Role_Introduction.style.color = "#fff"
  span.style.borderRight = "5px solid blue"
  sidebar3.style.borderRight = "0"
  sidebar1.style.borderRight = "0"
  box1.style.display = "none"
  box2.style.display = "block"
  box3.style.display = "none"
  box4.style.display = "none"
}
function print_Role_Introduction() {
  let box1 = document.getElementById("main-box1")
  let box2 = document.getElementById("main-box2")
  let box3 = document.getElementById("main-box3")
  let box4 = document.getElementById("main-box4")
  let a = document.getElementById("Role_Introduction")
  let span = document.getElementById("sidebar3")
  a.style.color = "blue"
  game_introduction.style.color = "#fff"
  Faction_Introduction.style.color = "#fff"
  span.style.borderRight = "5px solid blue"
  sidebar2.style.borderRight = "0"
  sidebar1.style.borderRight = "0"
  box1.style.display = "none"
  box2.style.display = "none"
  box3.style.display = "block"
  box4.style.display = "none"
}
function exuxiai() {
  let img = document.getElementById('role_pic')
  let cn = document.getElementById('chineseName')
  let en = document.getElementById('englishName')
  let cv = document.getElementById('cv')
  let Role_Introduction = document.getElementById('role_introduction1')
  img.src = "image/能天使.webp"
  cn.innerHTML = "能天使"
  en.innerHTML = "Exuxiai"
  cv.innerHTML = "CV：石见舞菜香"
  Role_Introduction.innerHTML = "能天使，拉特兰公民，适用拉特兰一至十三项公民权益。企鹅物流公司成员。从事秘密联络，武装押运等非公开活动，推测身份：信使。于合约期内任企鹅物流驻罗德岛联络人员，同时为罗德岛多项行动提供协助。"
}
function texas() {
  let img = document.getElementById('role_pic')
  let cn = document.getElementById('chineseName')
  let en = document.getElementById('englishName')
  let cv = document.getElementById('cv')
  let Role_Introduction = document.getElementById('role_introduction1')
  img.src = "image/德克萨斯.webp"
  cn.innerHTML = "德克萨斯"
  en.innerHTML = "Tesas"
  cv.innerHTML = "CV：田所梓"
  Role_Introduction.innerHTML = "企鹅物流员工，单兵作战能力出类拔萃。于合约期内任企鹅物流驻罗德岛联络人员，同时为罗德岛的多项行动提供协助。"
}
function platinum() {
  let img = document.getElementById('role_pic')
  let cn = document.getElementById('chineseName')
  let en = document.getElementById('englishName')
  let cv = document.getElementById('cv')
  let Role_Introduction = document.getElementById('role_introduction1')
  img.src = "image/白金.webp"
  cn.innerHTML = "白金"
  en.innerHTML = "Platinum"
  cv.innerHTML = "CV：北岛瑞月"
  Role_Introduction.innerHTML = "白金，卡西米尔无胄盟刺客，其他履历缺失。在机动作战、歼灭战与巷战中皆表现出极高的战斗技巧与特殊的战术素养。"
}
function schwarz() {
  let img = document.getElementById('role_pic')
  let cn = document.getElementById('chineseName')
  let en = document.getElementById('englishName')
  let cv = document.getElementById('cv')
  let Role_Introduction = document.getElementById('role_introduction1')
  img.src = "image/黑.webp"
  cn.innerHTML = "黑"
  en.innerHTML = "Schwarz"
  cv.innerHTML = "CV：伊藤静"
  Role_Introduction.innerHTML = "前汐斯塔市市长SP兼城市治安局局长，随干员锡兰共同加入罗德岛。在隐秘行动、侦察与反侦察、野外求生、弩使用等技能上拥有卓越的造诣。在担任博士护卫的同时，负责一部分罗德岛基层干员的训练工作。"
}
function skadi() {
  let img = document.getElementById('role_pic')
  let cn = document.getElementById('chineseName')
  let en = document.getElementById('englishName')
  let cv = document.getElementById('cv')
  let Role_Introduction = document.getElementById('role_introduction1')
  img.src = "image/斯卡蒂.webp"
  cn.innerHTML = "斯卡蒂"
  en.innerHTML = "Skadi"
  cv.innerHTML = "CV：佐藤利奈"
  Role_Introduction.innerHTML = "斯卡蒂，赏金猎人，现为罗德岛所雇佣。在过去完成的赏金任务中，于对抗大型生物，破坏硬目标，攻坚战，歼灭战等多类行动中展现出强劲实力，推测与其过往战斗经验相关。成为赏金猎人之前的履历缺失。"
}
function mostima() {
  let img = document.getElementById('role_pic')
  let cn = document.getElementById('chineseName')
  let en = document.getElementById('englishName')
  let cv = document.getElementById('cv')
  let Role_Introduction = document.getElementById('role_introduction1')
  img.src = "image/莫斯提马.webp"
  cn.innerHTML = "莫斯提马"
  en.innerHTML = "Mostima"
  cv.innerHTML = "CV：水树奈奈"
  Role_Introduction.innerHTML = "神秘的信使，莫斯提马。见多识广，对泰拉各国的风土人情都有着相当的了解。但总是神出鬼没，没人知道必要的时候能在哪里找到她。和谁都能友好相处，但又似乎和谁都保持着距离。在她漫长的信使生活中，孤独地流浪在群山峻岭中的时间远超想象……"
}
function blaze() {
  let img = document.getElementById('role_pic')
  let cn = document.getElementById('chineseName')
  let en = document.getElementById('englishName')
  let cv = document.getElementById('cv')
  let Role_Introduction = document.getElementById('role_introduction1')
  img.src = "image/煌.webp"
  cn.innerHTML = "煌"
  en.innerHTML = "Blaze"
  cv.innerHTML = "CV：中原麻衣"
  Role_Introduction.innerHTML = "煌，罗德岛精英干员，在机动作战、歼灭战与突袭作战中体现出了专业的战斗技巧与战术素养。现由阿米娅带领，作为攻坚战的战术核心之一发挥作用。"
}
function greyThroat() {
  let img = document.getElementById('role_pic')
  let cn = document.getElementById('chineseName')
  let en = document.getElementById('englishName')
  let cv = document.getElementById('cv')
  let Role_Introduction = document.getElementById('role_introduction1')
  img.src = "image/灰喉.webp"
  cn.innerHTML = "灰喉"
  en.innerHTML = "GreyThroat"
  cv.innerHTML = "CV：福圆美里"
  Role_Introduction.innerHTML = "干员灰喉，虽然取得这个代号时日尚短，但她加入罗德岛的时间远比她成为干员的时间要长得多。双亲曾是矿石病相关的研究者，游走各地，其母在失踪前将灰喉委托给了罗德岛。现通过考核后成为罗德岛行动队成员。"
}
function liskarm() {
  let img = document.getElementById('role_pic')
  let cn = document.getElementById('chineseName')
  let en = document.getElementById('englishName')
  let cv = document.getElementById('cv')
  let Role_Introduction = document.getElementById('role_introduction1')
  img.src = "image/雷蛇.webp"
  cn.innerHTML = "雷蛇"
  en.innerHTML = "Liskarm"
  cv.innerHTML = "CV：石川由依"
  Role_Introduction.innerHTML = "雷蛇，黑钢国际私人安全顾问公司雇员，为跨国企业、政府部门和无国界组织等提供安全防卫服务，于冲突地带积累了丰富的实战经验。现于安保条约期内，为罗德岛提供专业的安全保障与咨询。"
}
function nian() {
  let img = document.getElementById('role_pic')
  let cn = document.getElementById('chineseName')
  let en = document.getElementById('englishName')
  let cv = document.getElementById('cv')
  let Role_Introduction = document.getElementById('role_introduction1')
  img.src = "image/年.webp"
  cn.innerHTML = "年"
  en.innerHTML = "Nian"
  cv.innerHTML = "CV：悠木碧"
  Role_Introduction.innerHTML = "年，无业游民，熟习各类金属工艺，拥有与身份不符的渊博冶金知识。现凭访客身份逗留于罗德岛，偶尔为罗德岛的金属加工项目提供建议。声称自己擅长音像娱乐工作，经常提供一些罗德岛干员普遍不太喜爱的音像产品。"
}
function provence() {
  let img = document.getElementById('role_pic')
  let cn = document.getElementById('chineseName')
  let en = document.getElementById('englishName')
  let cv = document.getElementById('cv')
  let Role_Introduction = document.getElementById('role_introduction1')
  img.src = "image/普罗旺斯.webp"
  cn.innerHTML = "普罗旺斯"
  en.innerHTML = "Provence"
  cv.innerHTML = "CV：影三灯"
  Role_Introduction.innerHTML = "普罗旺斯，天灾信使。于战术协同，精准射击等行动中展现出较为优秀的作战能力。现作为狙击干员于罗德岛干员组任职，并提供天灾区调查与天灾预警等相关服务。"
}
function shining() {
  let img = document.getElementById('role_pic')
  let cn = document.getElementById('chineseName')
  let en = document.getElementById('englishName')
  let cv = document.getElementById('cv')
  let Role_Introduction = document.getElementById('role_introduction1')
  img.src = "image/闪灵.webp"
  cn.innerHTML = "闪灵"
  en.innerHTML = "Shining"
  cv.innerHTML = "CV：清水理沙"
  Role_Introduction.innerHTML = "闪灵，萨卡兹医师，前萨卡兹医疗组织“赦罪师”成员，感染者援助团体“使徒”的一员。于源石技艺、战场急救、医学理论、临床医学等领域拥有渊博知识。 现作为医疗干员为罗德岛医疗部门提供源石技艺理论，并为多项行动提供战场医疗救护服务。"
}
function april() {
  let img = document.getElementById('role_pic')
  let cn = document.getElementById('chineseName')
  let en = document.getElementById('englishName')
  let cv = document.getElementById('cv')
  let Role_Introduction = document.getElementById('role_introduction1')
  img.src = "image/四月.webp"
  cn.innerHTML = "四月"
  en.innerHTML = "April"
  cv.innerHTML = "CV：田中美海"
  Role_Introduction.innerHTML = "原雷姆必拓猎人，因感染矿石病而失业，辗转加入罗德岛。没有接受过专业训练，各项指标平均，由于过往职业原因在狙击方向的培训上展现出较高接受度，现作为狙击干员活跃在各种任务中"
}
// function blemishine() {
//   let img = document.getElementById('role_pic')
//   let cn = document.getElementById('chineseName')
//   let en = document.getElementById('englishName')
//   let cv = document.getElementById('cv')
//   let Role_Introduction = document.getElementById('role_introduction1')
//   img.src = "image/瑕光.webp"
//   cn.innerHTML = "瑕光"
//   en.innerHTML = "Blemishine"
//   cv.innerHTML = "CV：花泽香菜"
//   Role_Introduction.innerHTML = "玛莉娅·临光，来自卡西米尔的年轻骑士，干员临光的妹妹，曾有骑士竞技经验，在各项测试中均展露出优秀的作战素质。应本人期望，与干员临光共同作为重装干员行动。"
// }
// function chen() {
//   let img = document.getElementById('role_pic')
//   let cn = document.getElementById('chineseName')
//   let en = document.getElementById('englishName')
//   let cv = document.getElementById('cv')
//   let Role_Introduction = document.getElementById('role_introduction1')
//   img.src = "image/陈.webp"
//   cn.innerHTML = "陈"
//   en.innerHTML = "Chen"
//   cv.innerHTML = "CV：石上静香"
//   Role_Introduction.innerHTML = "陈，龙门高级警司，龙门近卫局特别督察组组长，毕业于维多利亚皇家近卫学校，成绩优异，表现突出。在龙门近卫局供职期间，力主取缔龙门境内非法活动，对抗暴力犯罪和有组织犯罪，追缉武装逃犯与国际重犯等行动，并取得多项重大成果。现作为特别人员协助罗德岛行动，并为现场提供战术指挥支援。"
// }
// function w() {
//   let img = document.getElementById('role_pic')
//   let cn = document.getElementById('chineseName')
//   let en = document.getElementById('englishName')
//   let cv = document.getElementById('cv')
//   let Role_Introduction = document.getElementById('role_introduction1')
//   img.src = "image/w.webp"
//   cn.innerHTML = "W"
//   en.innerHTML = "W"
//   cv.innerHTML = "CV：竹达彩奈"
//   Role_Introduction.innerHTML = "萨卡兹佣兵头目，W。曾参与卡兹戴尔漫长的内战，其小队以残暴而高效的作战手段闻名。在切尔诺伯格事件中与罗德岛发生冲突，后因为某些原因叛出整合运动，在凯尔希医生亲自进行了充分交涉后，与罗德岛签订战略合作条款。"
// }



