/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Omega Point mult based': '欧米伽点数加成基于',
    'Omega Upgrades': '欧米伽升级',
    'on current Energy': '当前的能源',
    'on current Omega.': '当前的欧米伽.',
    'PVP Legend': 'PVP传奇',
    'RESET OMEGA UPGRADES': '重置欧米伽升级',
    'RESIMULATION': '重新模拟',
    'Resimulate for': '重新模拟',
    'Simulation': '模拟',
    'reset.': '重置.',
    'Raise Expansion Upgrade': '提升扩展升级',
    'Raise max Electrons by ^': '将最大电子数提高^',
    'Raise the power of all': '提升所有的力量',
    'Remove the max': '移除最大',
    'Stage': '阶段',
    'Stage Gold Exponent Multiplier': '阶段金指数乘数',
    '???': '???',
    'EXPANSION': '扩张',
    'Expansion': '扩张',
    'HOTKEYS': '快捷键',
    'Hybrid': '混合',
    'Improves the resimulation': '改善重新模拟',
    'Info': '信息',
    'generator': '发生器',
    'generators': '发生器',
    'Generator': '发生器',
    'Generators': '发生器',
    'GENERATORS': '发生器',
    'Prestige doesn\'t': '声望不',
    'prestige limit.': '声望上限。',
    'Reset Electrons for Atoms': '重置电子的原子',
    'Expansion Generator': '扩展发生器',
    'PRESTIGE': '声望',
    'automatic': '自动',
    'to damage per second': '损坏每秒',
    'to EP gain': '到EP收益',
    'to every generator': '到每个发生器',
    'to all': '到所有',
    'to all generators': '到所有发生器',
    ' $x': '你有 $x',
    'upgrade': '升级',
    'upgrades': '升级',
    'Upgrade': '升级',
    'Upgrades': '升级',
    'to gold per second': '到黄金每秒',
    'prestige autobuyer.': '声望自动购买器.',
    'Prestige Autobuyer.': '声望自动购买器.',
    'ON NEXT EXPANSION': '下一步扩张',
    'Omega Points': '欧米伽点数',
    'All Mult': '全部加成',
    'all generators based': '基于所有发生器',
    'Alpha': '阿尔法',
    "Alpha Beta Gamma": "阿尔法贝塔伽马",
    'Amount': '数量',
    'Atoms': '原子',
    'autobuyer': '自动购买器',
    'autobuyers': '自动购买器',
    'Autobuyers': '自动购买器',
    'Autobuyer': '自动购买器',
    'Automatically Fight': '自动战斗',
    'current OP': '当前OP',
    'electricity': '电力',
    'Fighting Mode': '战斗模式',
    'Gamma': '伽马',
    'Generator creates': '发生器创建',
    'Generator Prestige': '发生器声望',
    'generator prestiges': '发生器声望',
    'Gold': '黄金',
    'Gold/DPS Multiplier': '黄金/DPS 倍数',
    'Heroes': '英雄',
    'Heroe': '英雄',
    'Hero': '英雄',
    'Farmer': '农民',
    'highest amount': '最高数量',
    'highest EP': '最高EP',
    'Level': '等级',
    'Keep some Electrons': '保留一些电子',
    'Mode': '模式',
    'Mult': '加成',
    'Multiplier': '倍数',
    'Omega': '欧米伽',
    'omega': '欧米伽',
    'Per Second': '每秒',
    'Per Sec': '每秒',
    'Prestige': '声望',
    'stages completed': '阶段完成',
    'stages in simulation': '模拟阶段',
    'test': '测试',
    'when purchasing a Generator': '购买发生器时',
    'when resetting for Atoms': '重置原子时',
    'x Gold Per Second': 'x 黄金每秒',
    'Currently': '当前',
    'Electricity': '电力',
    'Electrons': '电子',
    'Electron effect': '电子效率',
    'first': '第一个',
    'Max Electrons': '最大电子',
    'They multiply all mult gain by': '他们将所有多重收益乘以',
    'They increase something by': '他们增加了一些',
    'Not unlocked': '未解锁',
    'Multiply EP gain by': 'EP增益乘以',
    'Increase your all': '提升你全部',
    'Bought': '已买',
    'Current': '当前',
    'Current multiplier': '当前倍数',
    'Beta': '贝塔',
    'BECOME OMEGA': '成为欧米伽',
    'autobuyers when becoming': '自动购买器时成为',
    'Atom reset no longer resets Electrons': '原子重置不再重置电子',
    'at heavily reduced rate': '大幅降低',
    'formulas by': '公式',
    'Get the ability to skip': '获得跳过的能力',
    'Multiply your all': '乘以你全部',
    'of first prestiges': '第一声望',
    'Points': '点数',
    'to the power of Electron gain': '电子增益的力量',
    'Point mult based': '点数加成基于',
    'Point Multiplier': '点数倍数',
    'Increase 2nd electron upgrade': '提高第二电子升级',
    'Increase 2nd Electron upgrade by': '提高第二电子升级',
    'expansion': '扩张',
    'expansions': '扩张',
    'Gain more EP based on': '获得更多EP基于',
    'Generator and EP mult autobuyers': '发生器和EP加成自动购买器',
    'Increase max prestige': '提升最大声望',
    'Increase prestige effect by': '提升声望效果',
    'Increase prestige multiplier': '提升声望倍数',
    'Increase the electricity price reduction effect': '增加电力降价效果',
    'Increase the multiplier you get': '提高倍数当你获得',
    'It increases electricity effect by': '通过增加电力效果',
    'M: Buys all generators and all mult': 'M：购买所有发生器和全部加成',
    'A/B/G Upgrade': 'A/B/G 升级',
    'and all mult': '和全部加成',
    'and you keep all': '和保留你的全部',
    'on current': '在当前',
    'Multiply Electron gain by': '电子增益乘以',
    'Gain 2x more gold and': '获得2倍的黄金和',
    'Gain 3x more gold for': '获得3倍的黄金',
    'Gain 5x more DPS for': '获得5倍的DPS',
    'Gain a 20x multiplier': '获得20倍的乘数',
    'on': '开启',
    'Get 100% of EP you would get': '获得100％扩张点你会得到',
    'DPS for every 4th Hybrid': 'DPS为每4个混合',
    'Gamma unlocked!': '伽玛已解锁！',
    'makes electricity stronger.': '使电力更强大。',
    'OMEGA': '欧米伽',
    'on highest ever': '有史以来最高',
    'SIMULATION': '模拟',
    'Unlocked!': '已解锁!',
    'ALPHA BETA GAMMA': '阿尔法贝塔伽马',
    'Alpha, Beta and': '阿尔法，贝塔和',
    'are 1.5x stronger for every': '1.5x更强为每个',
    'AUTOBUYERS': '自动购买器',
    'EXPORT SAVEFILE': '导出存档',
    'Export/Import': '导出/导入',
    'IMPORT SAVEFILE': '导入存档',
    'All Expansion Upgrades are unlocked': '所有扩展升级均已解锁',
    'Next Expansion Upgrade at XeY Electricity!': 'XeY 电力的下一次扩张升级！',
    'Next Expansion Upgrade is unlocked at': '下次扩张升级解锁于',
    'O: Become': 'O：成为',
    'P: Prestige': 'P: 声望',
    'X: Expand': '"X: 扩张',
    'Autobuyers Unlocked': '自动购买者已解锁',
    'exponent by': '指数',
    'formula by': '公式',
    'Gain 1.43e13x more gold and': '增加1.43e13倍黄金和',
    'Gain 2.15e13x more gold for': '增加2.15e13倍金币',
    'Gain 3.58e13x more DPS for': '增加3.58e13倍DPS',
    'ELECTRONS': '电子',
    "You unlock the Battle Tower Autobuyer.": "你解锁了战斗塔自动购买者。",
    "You unlock the Load Build Autobuyer.": "您解锁了 加载构建自动购买者。",
    "You unlock the lvl 1000 Talent row.": "你解锁了 1000 级天赋行。",
    "your Armor blocks for 1% more.": "你的护甲格挡增加 1%。",
    "Your armor is spiky and now gives you": "你的盔甲很尖，现在给你",
    "your Regeneration regenerates for 0.2 more per second.": "你的再生每秒再再生 0.2 倍。",
    "You deal 10% of your Max Health as DPS.": "你将 10% 的最大生命值作为 DPS。",
    "You gain 0.03 Agility for every point you have in Armor.": "你的护甲每有一点，你就获得 0.03 敏捷。",
    "You gain 20% of the enemies Stamina as your own.": "你获得敌人 20% 的耐力作为自己的耐力。",
    "You get 1.1x more Atoms from Legendary Enemies for every Atom Shop Item you have bought.": "每购买一个原子商店物品，您从传奇敌人那里获得的原子数量增加 1.1 倍。",
    "You keep Atoms when Reaching Reality.": "当你到达现实时，你会保留原子。",
    "You keep your Autobuyers, Atom Upgrades, and ABG upgrades": "您保留您的 自动购买者、原子 升级和 ABG 升级",
    "You now only need 10 kills to gain a Skillpoint from Atom Shop Item 1 and 9.": "您现在只需击杀 10 次即可从 原子 商店项目 1 和 9 中获得技能点。",
    "You Regenerate 10% of your max HP every second while Fighting and 1000% while Resting. Super Armor and Super Regeneration now also affects Talent 6. You gain 0.05 Armor for every point you have in Agility.": "战斗时每秒回复 10% 的最大生命值，休息时回复 1000%。超级护甲和超级再生现在也影响天赋 6。你每有一点敏捷，你就会获得 0.05 点护甲。",
    "you remove 0.5 Agility from the enemy,": "你从敌人身上移除 0.5 敏捷，",
    "You unlock a 2x OP Button and the Omega Generator Autobuyer also buys this. Unlock ??? (Not out yet": "您解锁 2x OP 按钮，欧米伽生成器自动购买者 也会购买此按钮。开锁 ？？？ （还没出",
    "Skillpoints": "技能点",
    "Skillpoints equal to 3x your highest Level ever.": "技能点等于您有史以来最高等级的 3 倍。",
    "Skillpoints equal to the highest Level Enemy killed.": "技能点等于杀死的最高等级敌人。",
    "Stamina": "耐力",
    "Strength": "力量",
    "Strength also removes 2 Regeneration from the Enemy,": "力量还会从敌人身上移除 2 点再生，",
    "Strength now does 2 more DPS per point.": "力量现在每点增加 2 点 DPS。",
    "Super Agility": "超级敏捷",
    "Super Armor": "超级装甲",
    "Super Regeneration": "超级再生",
    "Super Stamina": "超级耐力",
    "Super Stamina is 15% instead of": "超级耐力是 15% 而不是",
    "Super Strength": "超级力量",
    "Taking 100 DPS": "以 100 DPS",
    "Talent 2 is now affected by Super Strength at reduced rate. Every 10th point in Strength also now gives you 3 points of Armor. This is also affected by Super Strength.": "天赋 2 现在受超力量影响的几率降低。现在每 10 点力量值也会给你 3 点护甲。这也受到超强的影响。",
    "Talents": "人才",
    "The info tab will update as you unlock more of the game.": "信息选项卡将随着您解锁更多游戏而更新。",
    "times you have": "你有的时候",
    "to EP gain based": "以 EP 增益为基础",
    "to every generator.": "到每一台发生器。",
    "WHEN YOU BECOME OMEGA": "当你成为欧米茄",
    "REACH REALITY": "达到现实",
    "Reach reality for ee(e^NaN)NaNeNaNeNaN Reality Points": "达到 ee(e^NaN)NaNeNaNeNaN 现实点的现实",
    "Reality Generator": "现实生成器",
    "Reality Generators": "现实生成器",
    "recieve 1 skillpoint. You can get": "获得1技能点。你可以得到",
    "Regenerating 1.00 HPS": "再生 1.00 HPS",
    "Regeneration": "再生",
    "Requires": "需要",
    "Rest": "休息",
    "Retire": "退休",
    "RETIRE": "退休",
    "Save": "保存",
    "Prestige All": "声望全部",
    "Previous": "上一个",
    "You currenctly have": "你当前有",
    "Normal": "正常",
    "ON NEXT EXPANSION OR": "在下一次扩展或",
    "Next": "下一个",
    "Max All": "最大全部",
    "Load": "加载",
    "HARD RESET SAVE FILE": "硬重置存档文件",
    "If you're confused about something then check the Info tab first and see if that helps.": "如果您对某事感到困惑，请先检查“信息”选项卡，看看是否有帮助。",
    "If it doesn't, then you can get help by joining the Discord and asking other players or the Dev.": "如果没有，那么您可以通过加入 Discord 并询问其他玩家或 Dev 来获得帮助。",
    "Increase Electron gain by Stage Gold Exponent Multiplier times the log of Atoms. You also now automatically Resimulate and Resimulation no longer resets.": "通过 阶段黄金指数乘数 乘以 原子日志 来增加电子增益。 您现在还可以自动重新模拟并且重新模拟不再重置。",
    "NOTE": "注意",
    "All Expansion Upgrades are unlocked! You Currently have": "所有扩展升级均已解锁！ 您目前有",
    "Atom Shop": "原子商店",
    "Buy All Expansion Generators and EP Multiplier": "购买所有扩展发生器和 EP 乘数",
    "E: Buys all Expansion Generators and": "E：购买所有扩展发生器和",
    "electricity.": "电力。",
    "Electron Upgrades": "电子升级",
    "generator prestiges.": "发生器声望。",
    "on current Energy.": "在当前的能量。",
    "on highest ever EP.": "在有史以来最高的EP。",
    "on how many": "在多少",
    "the next. If you're unhappy with a choice you made, or want to try a different build, you can reset your Upgrades.": "下一个。 如果您对所做的选择不满意，或者想尝试不同的构建，您可以重置您的升级。",
    "Tip: Farm Expansions for a little while to increase the Expansion Upgrade 13 multiplier.": "提示：农场扩展一段时间以增加扩展升级 13 乘数。",
    "You currently have": "你当前有",
    "Expanded.": "已扩展。",
    "and all mult.": "和所有批量。",
    "autobuyer.": "自动购买者。",
    "Multiply EP based on total Skillpoints. Keep Simulation Upgrades and Omega Upgrades on Reality.": "根据总技能点乘以 EP。 在现实中保持模拟升级和欧米茄升级。",
    "Multiply OP based": "乘以 OP 为基础",
    "Multiply OP gain by": "将 OP 增益乘以",
    " x Reality": " x 现实",
    " x Reality Points": " x 现实点数",
    " x Super Skillpoints": " x 超级技能点",
    "Agility": "敏捷",
    "and every 5th point in Armor": "并且每5点在护甲",
    "Armor": "护甲",
    "Automatically Battle": "自动战斗",
    "Automatically Load Builds": "自动加载构建",
    "Battle Tower": "战斗塔",
    "Beta costs EP, and Gamma costs electricity. You can use them to buy different upgrades.": "贝塔 消耗 EP，而 伽马 消耗电力。 您可以使用它们购买不同的升级。",
    "But remember, your Omega won't be refunded.": "但请记住，您的 欧米伽 不会退款。",
    "but they can not have less than 0.": "但它们不能小于 0。",
    "by 35.": "到 35 岁。",
    "Every 10th point in Regeneration": "每 10 点再生",
    "Every 10th point in Strength": "每 10 点力量",
    "Fight": "斗争",
    "For every 1000 enemies you kill": "每杀死 1000 个敌人",
    "For every point you have in Armor,": "对于您在 Armor 中的每一点，",
    "For every point you have in Regeneration,": "对于你在重生中的每一点，",
    "from fighting and gain 0 Super Skillpoints": "从战斗中获得 0 超级技能点",
    "Generator Autobuyer and Electron Upgrades Autobuyer.": "发生器 自动购买者 和 电子 升级 自动购买者。",
    "increases HP from Stamina by": "增加耐力的生命值",
    "increases your Agility by": "提高你的敏捷",
    "Legendary": "传奇",
    "Ascension": "转生",
    "HYPERCENSION": "高产",
    "Hypercension": "高产",
    "Hypercension Upgrades": "高产升级",
    "Next Level": "下一级",
    "Reality": "现实",
    "Blablabla": "布拉布拉布拉",
    "X Hyper Points": "X 超级点",
    "X Transcension Points": "X超越点",
    "XXX Particles": "XXX 粒子",
    "2x to Reality Points": "2x 到现实点数",
    "Divide Costs by /": "将成本除以 /",
    "Divide Speed per Level Multiplier by /": "每级乘数的速度除以 /",
    "ee(e^NaN)NaNeNaNeNaN": "ee(e^NaN)NaNeNaNeNaN",
    "EP to reset": "EP 重置",
    "Expand for ee(e^NaN)NaNeNaNeNaN": "扩展为 ee(e^NaN)NaNeNaNeNaN",
    "Exponentiate Particles per Fill by ^": "将每个填充的粒子取幂 ^",
    "Extra": "其它",
    "HP to reset": "HP 重置",
    "Mult increase: +0.01 Per Fill": "乘数增加：+0.01 每次填充",
    "Multiply Ascension Reward based on HP and TP": "根据HP和TP乘以提升奖励",
    "Multiply Ascension Reward by": "将提升奖励乘以",
    "Multiply Mult per Fill by": "将每个填充乘以乘以",
    "Multiply Particles per Fill by": "将每个填充的粒子乘以",
    "Multiply Recreation Effect by": "将娱乐效果乘以",
    "Multiply Speed by": "乘以速度",
    "Multiply Speed equal to TP": "乘以速度等于 TP",
    "Multiply TP gain based on HP": "根据HP乘以TP增益",
    "NOTE: This does not have an effect before around 5.7e11 Omega.": "注意：这在 5.7e11 Omega 之前没有效果。",
    "Particle Assimilator": "粒子同化器",
    "Particle Milestones": "粒子里程碑",
    "Reality": "现实",
    "RECREATION": "娱乐",
    "TRANSCENSION": "超越",
    "Transcension Upgrades": "超越升级",
    "TU1 is 1e5x instead and TU2 is 3x instead": "TU1 改为 1e5x，TU2 改为 3x",
    "x more particles than cost": "x 多于成本的粒子",
    "You unlock a 2x OP Button and the Omega Generator Autobuyer also buys this. Unlock ???": "您解锁 2x OP 按钮，Omega Generator Autobuyer 也会购买此按钮。 解锁？？？",
    " max SSP, you can increase it by killing higher level Enemies.": "最大SSP，您可以通过杀死更高级别的敌人来增加它。",
    " now Reached Reality! As a reward you now have access to Reality Generators.": " 现在达到了现实！作为奖励，您现在可以使用现实生成器。",
    " X Hyper Points": " X 超点",
    " X Transcension Points": " X超越点",
    " XXX Particles": " XXX 粒子",
    "←: Previous Enemy": "←: 上一个敌人",
    "→: Next Enemy": "→: 下一个敌人",
    "After Reaching Reality again you unlocked the Battle Tower. Could this be what the simulation was simulating?": "再次到达现实后，您解锁了战斗塔。这可能是模拟所模拟的吗？",
    "After you Reach Reality for the second time you unlock ???": "第二次到达现实后解锁？？？",
    "Agility reduces Armor by 0.75 and it can even go below 0 which increases damage instead": "敏捷会降低 0.75 护甲，甚至可以低于 0，从而增加伤害",
    "ALT: 100% Stats or 1000 Enemy Levels": "ALT：100% 统计或 1000 敌人等级",
    "Armor reduces incoming damage": "护甲减少受到的伤害",
    "BATTLE TOWER": "战斗塔",
    "but later on you will be able to use more. You are freely able to switch between which bonuses you want to use,": "但稍后您将能够使用更多。您可以自由切换要使用的奖金，",
    "But remember, your Omega won't be refunded. At 1e16 OP you unlock ???": "但请记住，您的 Omega 不会退款。在 1e16 OP 你解锁？？？",
    "CTRL: 10 Stats or 100 Enemy Levels": "CTRL：10 属性或 100 敌人等级",
    "Divides the cost of Electron Upgrades": "划分电子升级的成本",
    "Here you will fight enemies and level up. Every time you level up you gain 3 Skillpoints that you can use on whatever you want!": "在这里，您将与敌人战斗并升级。每次升级时，您都会获得 3 个技能点，您可以随意使用它们！",
    "Increases the Electron effect": "增加电子效应",
    "Instead of directly making you strong, they make your Skillpoints more effective. The max amount of Super Skillpoints you can have": "它们不是直接让你变得强大，而是让你的技能点更有效。您可以拥有的最大超级技能点数",
    "is equal to the highest level Enemy you have ever killed. When you retire you keep the permanent Skillpoints you gained from some of the Atom Shop items.": "等于你曾经杀死的最高级别的敌人。当您退休时，您会保留从某些原子商店物品中获得的永久技能点数。",
    "Kill count": "杀死计数",
    "Makes the Electron interval lower": "使电子间隔更低",
    "MAX": "最大限度",
    "Particles per Fill = 1.00 * 1.00 * 1.00 * 1.00 * 1.00 * 1.00 * 1.00 * 1.00 =": "每个填充的粒子数 = 1.00 * 1.00 * 1.00 * 1.00 * 1.00 * 1.00 * 1.00 * 1.00 =",
    "R: Reach Reality": "R：到达现实",
    "REALITY": "现实",
    "Regeneration regenerates 1 HP per second": "再生每秒再生 1 HP",
    "SHIFT: 10% Stats or 10 Enemy Levels": "SHIFT：10% 统计数据或 10 个敌人等级",
    "Skillpoints gained": "获得的技能点",
    "so don't worry about picking the 'wrong' buff. They are all useful in different stages of reality.": "所以不要担心选择“错误”的buff。它们在现实的不同阶段都很有用。",
    "Sometimes the enemy will be Legendary. Legendary enemies drop Atoms when they die. The higher the level of the enemy,": "有时敌人会是传奇人物。传说中的敌人在死亡时会掉落原子。敌人等级越高，",
    "Stamina gives 10 HP": "耐力提供 10 HP",
    "Strength increases DPS by": "力量 增加 DPS",
    "Text text": "文字文本",
    "TEXT TEXT TEXT": "文字 文字 文字",
    "the higher the chance for the enemy to be Legendary and the more Atoms they will drop. Higher level enemies also gives more XP.": "敌人成为传奇的机会越高，他们掉落的原子就越多。更高级别的敌人也会提供更多的 XP。",
    "These Skillpoints will stay with you forever, even after Retiring. Super Skillpoints work differently from your normal Skillpoints.": "这些技能点将永远留在你身边，即使在退休之后也是如此。超级技能点的工作方式与您的普通技能点不同。",
    "They generate Reality Energy, which can be used on 6 different buffs. At first you can only use 1 at once,": "它们产生现实能量，可用于 6 种不同的增益。一开始你一次只能使用1个，",
    "You can also allocate your stats however you wish without any cost, so go ahead and experiment with different builds!": "您还可以免费分配您的统计数据，因此请继续尝试不同的构建！",
    "You just Retired from the Battle Tower, resetting your character. However, you just gained some fancy new Super Skillpoints!": "你刚刚从战斗塔退休，重置了你的角色。但是，您刚刚获得了一些花哨的新超级技能点！",
    "You unlocked the Battle Tower Autobuyer.": "你解锁了 战斗塔自动购买者。",
    "x more Particles than cost": "x 比成本多的粒子",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    'Divide the cost of Electron Upgrades by': '电子升级成本除以',
    'You can choose to reset your electrons and gain an atom. You can use your atoms to buy several upgrades.': '您可以选择重置电子并获得原子。 您可以使用自己的原子来购买多个升级。',
    'Every second you will multiply your current amount of electrons by your electron gain.': '每一秒钟，您会将当前的电子数量乘以电子增益。',
    'However there is a cap. At some point you will stop gaining electrons. This cap can be increased by spending OP.': '但是有一个上限，在某一点上，你将停止得到电子。这个上限可以通过支出欧米伽点数来增加。',
    'Increase the Electron effect': '增强电子效果',
    'Make the Electron interval lower': '降低电子间隔',
    'This can be upgraded by spending OP. You get a multiplier to how much your all mult multiplies, based on your electrons.': '可以通过花费欧米伽点数进行升级。 您会根据电子获得乘数乘以所有倍数的倍数。',
    'But like with all the other prestige mechanics, you get stronger.': '但就像所有其他声望机制一样，你会变得更强大。',
    'Beta costs EP and Gamma costs electricity. You can use them to buy different upgrades!': '贝塔消耗扩张点和伽玛消耗电力。你可以使用它们来购买不同的升级!',
    'Becoming Omega resets everything you\'ve done so far, but with some big rewards.': '成为欧米伽会重置你到目前为止所做的一切，但会有一些巨大的回报。',
    'Autobuyers do things for you automatically! They can automatically prestige, buy generators,': '自动发生器为你自动地做事情!他们可以自动声望、自动购买发生器',
    'You unlock a new set of generators, and upgrades. Omega Generators produce Omega.': '你解锁了一组新的发生器，和升级。欧米伽发生器产生欧米伽。',
    'You can purchase three different currencies; Alpha, Beta and Gamma. Alpha costs energy,': '你可以购买三种不同的货币;阿尔法、贝塔和伽玛。阿尔法成本是能量,',
    'When you expand you reset everything and gain expansion points (EP). They are used to': '当你扩张时，你重置了所有的东西并获得了扩张点(EP)。他们用于',
    'when you expand with the expansion autobuyer. Just type in however much you want.': '当你扩张和扩张自动购买一起。你想输入多少就输入多少。',
    'what stage you\'re at. Later you will be able to Resimulate, resetting your simulation back to the beginning.': '你所处的阶段。稍后，您将能够重新模拟，将模拟重新设置为开始。',
    'Use your gold to upgrade your three heroes. You also get a multiplier to your gold income based on': '',
    'upgrades are automatically unlocked every 100x electricity, starting at 1.': '升级会自动解锁每 100x 电力,从1开始。',
    'upgrades is kind of like a skill tree. You need to buy every previous upgrade to be able to purchase': '升级就像一个技能树。你需要购买之前的每一个升级才能购买',
    'upgrade expansion generators or your EP gain multiplier.': '升级扩张发生器或扩张点获得倍数。',
    'There are two different modes you can be in: Gold Mode and Fighting Mode.': '你可以进入两种不同的模式:黄金模式和战斗模式。',
    'The upgrades costs Omega, and it goes up every time you buy another upgrade.': '升级需要消耗欧米伽的成本，并且每次你购买另一个升级时成本都会上升。',
    'the next. If you\'re unhappy with a choice you made, or want to try a different build, you can reset for free!': '下一个。如果您对所做的选择不满意，或者想尝试不同的构建，您可以免费重置!',
    'or even expand. To activate them just check the box. You can decide how much EP you wanna get': '甚至扩大。要激活它们，请勾选方框。你可以决定你想要多少扩张点',
    'In the simulation you have to fight your way through hordes of monsters, and infinite floors.': '在模拟游戏中，你必须通过成群的怪物和无限的楼层去战斗。',
    'In Gold Mode you will earn gold, and in Fighting Mode you will fight (duh).': '在黄金模式下你将获得金币，在战斗模式下你将战斗(废话)。',
    'generators works like normal generators, except they make electricity instead of energy.': '发生器的工作原理与普通发生器类似，只是它们代替电能发电。',
    'Electricity reduces the cost of the all mult upgrade.': '电力减少了所有升级的成本。',
    'Increase the effect of Expansion Upgrade 13 by': '通过以下方式增强扩张升级13的效果',
    'Increase EP gain based on time spend in this expansion': '根据此扩张中的时间花费来增加扩张点收益',
    'Gain a multiplier to': '获得乘数',
    'Gain a multiplier': '获得乘数',
    'is every 29th instead': '是每一个第29，而不是',
    'The 3 previous upgrades': '之前的3个升级',
    'Increase Alpha': '提高阿尔法',
    'Increase Beta': '提高贝塔',
    'Increase Gamma': '提高伽马',
    'Upgrade 5 autobuyer': '升级5个自动购买器',
    'Increase Electron gain': '增加电子增益',
    'Expand for': '扩展为',
    'on Expansion every sec': '每秒扩张一次',
    'Multiply all mult gain based on highest ever': '根据有史以来的最高水平乘以所有多重收益',
    'Multiply all expansion generators by': '将所有扩张发生器乘以',
    'Multiplier to stage gold exponent': '乘以黄金指数',
    'expansion generators': '扩张发生器',
    'for each stage beaten': '每一个被打败的阶段',
    'current': '当前',
    'Atom reset no longer resets': '原子重置不再重置',
    'It multiplies your expansion generator by xx': '它将您的扩张发生器乘以xx',
    'It\'s very worth it, and is necessary to progress.': '这是非常值得的，也是进步的必要条件。',
    'Reset Electrons for': '重置电子对',
    'when resetting for': '当重置',
    'mult gain by': '多重收益',
    'mult gain based': '多重收益基于',
    'Keep some': '保留一些',
    'highest': '最高',
    'Alpha Beta': '阿尔法 贝塔',
    'DPS Multiplier': 'DPS 倍数',
    'and your all mult. The second generator creates the first, the third creates the second and so on.': '和你的全部加成。 第二个发生器创建第一个，第三个发生器创建第二个，依此类推。',
    'The first generator makes energy. Energy is the main currency you use to upgrade your generators': '第一台发生器产生能量。能量是你用来升级发生器的主要货币',
    'Prestige resets your generators and your Energy, but you get a 2x multiplier to everything.': '声望会重置你的发生器和能量，但你的所有东西会得到x2的加成。',

    //原样
    'by': 'by',
    'DPS': 'DPS',
    'EP': '扩张点',
    'OP': '欧米伽点',
    'QQ群号': 'QQ群号',
    'Git游戏': 'Git游戏',
    'x': 'x',
    'EP.': 'EP.',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\t": "\t",
    "First ": "第一",
    "Second ": "第二",
    "Third ": "第三",
    "Fourth ": "第四",
    "Fifth ": "第五",
    "Sixth ": "第六",
    "Seventh ": "第七",
    "Eighth ": "第八",
    "Unlock ": "解锁 ",
    "Simulation ": "模拟 ",
    "Alpha Beta Gamma ": "阿尔法贝塔伽马",
    "based on ": "基于",
    "Gold ": "黄金",
    "Expansion ": "扩张",
    "Omega ": "欧米伽",
    "Cost: ": "成本: ",
    "Multiply all generators by": "将所有发生器乘以",
    "It divides your all mult cost by": "它会将您的全部加成的费用除以",
    "You have": "你有",
    "You need": "你需要",
    'Become Omega for': '把欧米伽变成',
    "Multiply first expansion generator by ": "将第一个扩张发生器乘以",
    "every ": "每",
    "Multiplier to DPS and ": "乘以DPS和",
    "Mult:": "加成:",
    "Current: ": "当前: ",
    "It increases electricity effect by ": "它增加电效应",
    "Currently: ": "当前: ",
    "Current multiplier: ": "当前乘数:",
    "Multiply all expansion generators by": "乘以所有扩展发生器",
    "They multiply all mult gain by": "他们将所有多重收益乘以",
    "Multiplier: ": "倍数: ",
    "Gold/DPS Multiplier:": "黄金/倍数乘数:",
    "DPS Multiplier: ": "DPS倍数: ",
    "Amount:": "数量:",
    "Multiply OP gain by Level": "将 OP 增益乘以 等级",
    "Next Level: ": "下一级：",
    "Particles per fill = ": "每次填充的粒子数 = ",
    "Level: ": "等级：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    " ": "",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    "\n": "",
    ": x": ": x",
    " Autobuyer": "自动购买器",
    ' EP': '扩张点',
    ' OP': '欧米伽点',
    " Energy": "能量",
    " Electricity": " 电力",
    " Electrons": "电子",
    " First Generators Bought": " 第一发生器买",
    " Second Generators Bought": " 第二发生器已买",
    " Third Generators Bought": " 第三发生器已买",
    " Fourth Generators Bought": " 第四发生器已买",
    " Fifth Generators Bought": " 第五发生器已买",
    " Sixth Generators Bought": " 第六发生器已买",
    " Seventh Generators Bought": " 第七发生器已买",
    " Eighth Generators Bought": " 第八发生器已买",
    " Alpha": "阿尔法",
    " Beta": "贝塔",
    " Gamma": "伽马",
    " Gold": "黄金",
    " Atoms": "原子",
    " Omega": "欧米伽",
    " Omega Points": "欧米伽点",
    " Expansion Points": "扩张点",
    " total levels bought": "总等级已购买",
    " root Atom reset cost": "根原子重置成本",
    " Gold Farmer": "黄金农夫",
    " PVP Legend": "PVP传奇",
    " Upgrade 5 effect": "升级 5 效果",
    "Infinite": "无限",
    " when you Reach Reality.": " 当你到达现实。",
    "x to": "x 到",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^你有(.+)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^([\d\.,]+) \/$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+) HP$/,
    /^([\d\.]+)e([\d\.,]+) TP$/,
    /^([\d\.]+)e([\d\.,]+) RP$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/,
    /^ e([\d\.]+)e$/, //纯空格
    /^([\d\.]+)e([\d\.,]+) \/$/, //纯空格
    /^\d+(\.\d+)?[A-Za-z]{0,2}.?\(?([+\-]?(\d+(\.\d+)?[A-Za-z]{0,2})?)?$/, //12.34M (+34.34K
    /^(\d+(\.\d+)?[A-Za-z]{0,2}\/s)?.?\(?([+\-]?\d+(\.\d+)?[A-Za-z]{0,2})?\/s\stot$/, //2.74M/s (112.4K/s tot
    /^\d+(\.\d+)?(e[+\-]?\d+)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?$/, //2.177e+6 (+4.01+4
    /^(\d+(\.\d+)?(e[+\-]?\d+)?\/s)?.?\(?([+\-]?(\d+(\.\d+)?(e[+\-]?\d+)?)?)?\/s\stot$/, //2.177e+6/s (+4.01+4/s tot
];
var cnExcludePostfix = [
    /:?\s*x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /:?\s*x?\d+(\.\d+)?[A-Za-z]{0,2}$/, //: 12.34K, x1.5
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
var cnRegReplace = new Map([
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^ ([\d\.]+)e$/, ' $1e'],
    [/^Recreate for (.+) to your Recreation multiplier.$/, '重新创造 $1 倍的娱乐乘数。'],
    [/^Hypercend for (.+) Hyper Points.$/, '超高产以获得 $1 超级点。'],
    [/^Transcend for (.+) Transcension Points.$/, '超越以获得 $1 超越点。'],
    [/^Speed: (.+) Seconds per Fill$/, '速度： $1 秒每次填充'],
    [/^You can save (\d+) build.$/, '您可以保存 $1 个构建。'],
    [/^You can save (\d+) builds.$/, '您可以保存 $1 个构建。'],
    [/^You can save (\d+) builds, and Super Skill Point gain is increased the higher level you are.$/, '您可以保存 $1 个构建, 等级越高，获得的超级技能点数越高。'],
    [/^You can use (.+) Reality Bonuses at the same time.$/, '您可以同时使用 $1 个现实奖励。'],
    [/^Regenerating (.+) HPS$/, '再生 $1 HPS'],
    [/^Gain (.+)x more gold and$/, '获得 $1x 更多的金币和'],
    [/^Gain (.+)x more gold for$/, '获得 $1x 更多的金币'],
    [/^Gain (.+)x more DPS for$/, '获得 $1x 更多的DPS'],
    [/^The next mechanic is unlocked at (.+) EP.$/, '下一个机制在 $1 EP 解锁。'],
    [/^Next Expansion Upgrade is unlocked at (.+) Electricity and you Currently have$/, '下一次扩展升级在 $1 能量时解锁，您目前拥有'],
    [/^Reach reality for (.+) Reality Points$/, '$1 现实点 达到 现实'],
    [/^Agility now removes (.+) additional armor.$/, '敏捷现在移除 $1 额外护甲。'],
    [/^(.+) DPS per point.$/, '$1 DPS 每点数.'],
    [/^(.+)x to all Generators$/, '$1x 到全部 发生器'],
    [/^(.+)x to all Omega Generators$/, '$1x 到全部 欧米伽发生器'],
    [/^(.+)x to all Expansion Generators$/, '$1x 到全部 扩张发生器'],
    [/^(.+)x to DPS and GPS$/, '$1x 到 DPS 和 GPS'],
    [/^LEVEL (\d+) TALENT$/, '$1级 天赋'],
    [/^ (\d+) Reality$/, ' $1 现实'],
    [/^ ([\d\.]+)e([\d\.,]+) Reality$/, ' $1e$2 现实'],
    [/^ (\d+) Reality Points$/, ' $1 现实点数'],
    [/^ (\d+) Super Skillpoints$/, ' $1 超级技能点'],
    [/^(\d+) Bonus Stamina$/, '$1 奖励耐力'],
    [/^(\d+) Bonus HP per Stamina$/, '$1 生命值奖励\/每点耐力'],
    [/^(\d+) Regeneration Removed$/, '$1 回复移除的'],
    [/^(\d+) More per Second$/, '$1 更多每秒'],
    [/^(\d+) Armor$/, '$1 护甲'],
    [/^(\d+) Agility$/, '$1 敏捷'],
    [/^(\d+) Agility Removed$/, '$1 敏捷移除的'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^ ([\d\.]+) Hyper Points$/, ' $1 超级点数'],
    [/^ ([\d\.]+) Particles$/, ' $1 粒子'],
    [/^([\d\.]+) Particles$/, '$1 粒子'],
    [/^ ([\d\.]+) Transcension Points$/, ' $1 超越点数'],
    [/^([\d\.]+)e([\d\.,]+) Particles$/, '$1e$2 粒子'],
    [/^at ([\d\.]+)e([\d\.,]+) Particles$/, '在 $1e$2 粒子'],
    [/^at ([\d\.]+)e([\d\.,]+) TP$/, '在 $1e$2 TP'],
    [/^at ([\d\.]+)e([\d\.,]+) RP$/, '在 $1e$2 RP'],
    [/^at ([\d\.]+)e([\d\.,]+) HP$/, '在 $1e$2 HP'],
    [/^([\d\.,]+) Atom$/, '$1 原子'],
    [/^([\d\.,]+)\% More$/, '$1\% 更多'],
    [/^([\d\.,]+) DPS$/, '$1 DPS'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^at ([\d\.,]+) TP$/, '$1 TP'],
    [/^at ([\d\.,]+) HP$/, '$1 HP'],
    [/^at ([\d\.,]+) RP$/, '$1 RP'],
    [/^Get a (.+) multiplier$/, '获得一个 $1 倍数'],
    [/^You\'re getting (.+) Reality Energy per second$/, '您每秒获得 $1 现实能量'],
    [/^You\'re getting (.+) Energy per second$/, '您每秒获得 $1 能量'],
    [/^You\'re getting (.+) Electricity per second$/, '您每秒获得 $1 电力'],
    [/^You\'re getting (.+) Omega per second$/, '您每秒获得 $1 欧米伽'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);