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
    'Unlock ???': '解锁 ???',
    'EXPANSION': '扩张',
    'Expansion': '扩张',
    'HOTKEYS': '快捷键',
    'Hybrid': '混合',
    'Improves the resimulation': '改善重新模拟',
    'Info': '信息',
    'Generator': '发生器',
    'Generators': '发生器',
    'GENERATORS': '发生器',
    'Prestige doesn\'t': '声望不',
    'prestige limit.': '声望上限。',
    'Reset Electrons for Atoms': '重置电子的原子',
    'Expansion Generator': '扩展发生器',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    '': '',
    'Prestige resets your generators and your Energy, but you get a 2x multiplier to everything.': '声望会重置你的发生器和能量，但你的所有东西会得到x2的加成。',

    //原样
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
    "First ": "第一",
    "Second ": "第二",
    "Third ": "第三",
    "Fourth ": "第四",
    "Fifth ": "第五",
    "Sixth ": "第六",
    "Seventh ": "第七",
    "Eighth ": "第八",
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
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^x?\d+(\.\d+)?[A-Za-z%]{0,2}(\s.C)?\s*$/, //12.34K,23.4 °C
    /^x?\d+(\.\d+)?(e[+\-]?\d+)?\s*$/, //12.34e+4
    /^\s*$/, //纯空格
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
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^You have (.+) Energy$/, '你有 $1 能量'],
    [/^You\'re getting (.+) Energy per second$/, '您每秒获得 $1 能量'],
    [/^You\'re getting (.+) Electricity per second$/, '您每秒获得 $1 电力'],
    [/^You\'re getting (.+) Omega per second$/, '您每秒获得 $1 欧米伽'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);