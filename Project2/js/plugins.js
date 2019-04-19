// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"Community_Basic","status":true,"description":"Basic plugin for manipulating important parameters.","parameters":{"cacheLimit":"20","screenWidth":"816","screenHeight":"624","changeWindowWidthTo":"","changeWindowHeightTo":"","renderingMode":"auto","alwaysDash":"off"}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.23 核心引擎","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Stats---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_ShopMenuCore","status":true,"description":"v1.03 商店菜单核心","parameters":{"---General---":"","Command Order":"Buy Sell Equip Custom Cancel","Shop List Width":"Graphics.boxWidth / 2 + Graphics.boxWidth / 10","Command Alignment":"center","---Status Window---":"","Default Mode":"actor","Stat Switching":"true","Cannot Equip":"Can't Equip","Stat Font Size":"20","Cannot Equip Font Size":"20","---Info Window---":"","Show Icon":"true","Icon Size":"128","Font Size":"20","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4"}},
{"name":"Yami_SkipTitle","status":true,"description":"跳过标题场景进行测试.","parameters":{}},
{"name":"YEP_ItemCore","status":true,"description":"v1.26 物品核心","parameters":{"---General---":"","Max Items":"0","Max Weapons":"100","Max Armors":"100","Starting ID":"3000","Random Variance":"0","Negative Variance":"false","Name Format":"%1%2%3%4","Name Spacing":"true","Boost Format":"(+%1)","---Item Scene---":"","Updated Scene Item":"true","List Equipped Items":"true","Show Icon":"true","Icon Size":"128","Font Size":"20","Command Alignment":"center","Recovery Format":"%1 Heal","Add State":"+State","Add Buff":"+Buff","Remove State":"-State","Remove Buff":"-Buff","Maximum Icons":"4","Use Command":"Use %1","Carry Format":"%1/%2","--Independent Items--":"","Midgame Note Parsing":"false"}},
{"name":"YEP_BaseParamControl","status":true,"description":"v1.04 Gain control over the method of calculation for base\nparameters: MaxHP, MaxMP, ATK, DEF, MAT, MDF, AGI, LUK.","parameters":{"---MaxHP---":"","MHP Formula":"(base + plus) * paramRate * buffRate + flat + user.atk","MHP Maximum":"customMax || (user.isActor() ? 999999 : 999999999)","MHP Minimum":"customMin || 1","---MaxMP---":"","MMP Formula":"(base + plus) * paramRate * buffRate + flat","MMP Maximum":"customMax || (user.isActor() ? 9999 : 9999)","MMP Minimum":"customMin || 0","---Attack---":"","ATK Formula":"(base + plus) * paramRate * buffRate + flat","ATK Maximum":"customMax || (user.isActor() ? 999 : 999)","ATK Minimum":"customMin || 1","---Defense---":"","DEF Formula":"(base + plus) * paramRate * buffRate + flat","DEF Maximum":"customMax || (user.isActor() ? 999 : 999)","DEF Minimum":"customMin || 1","---M.Attack---":"","MAT Formula":"(base + plus) * paramRate * buffRate + flat","MAT Maximum":"customMax || (user.isActor() ? 999 : 999)","MAT Minimum":"customMin || 1","---M.Defense---":"","MDF Formula":"(base + plus) * paramRate * buffRate + flat","MDF Maximum":"customMax || (user.isActor() ? 999 : 999)","MDF Minimum":"customMin || 1","---Agility---":"","AGI Formula":"(base + plus) * paramRate * buffRate + flat","AGI Maximum":"customMax || (user.isActor() ? 999 : 999)","AGI Minimum":"customMin || 1","---Luck---":"","LUK Formula":"(base + plus) * paramRate * buffRate + flat","LUK Maximum":"customMax || (user.isActor() ? 999 : 999)","LUK Minimum":"customMin || 1","LUK Effect":"Math.max(1.0 + (user.luk - target.luk) * 0.001, 0.0)"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.43a 战斗引擎核心","parameters":{"---General---":"","Action Speed":"agi","Default System":"dtb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"120","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32","Home Position Y":"screenHeight - statusHeight - maxSize * 48 + (index+1) * 48 - 32","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"false","Timed Buffs":"false","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"center","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"true","Show Surprise Text":"true","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"true","Show Reflect Text":"true","Show Substitute Text":"true","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_ItemUpgradeSlots","status":true,"description":"v1.07 物品提升改造","parameters":{"Default Slots":"3","Slot Variance":"1","Upgrade Command":"Upgrade %1","Show Only":"true","Slots Available":"Slots Available","Show Slot Upgrades":"true","Slot Upgrade Format":"\\}Slot%1: %2\\{","Default Sound":"Heal2"}},
{"name":"zSRD_EquipCompareUpgrade","status":false,"description":"Allows for developers to customize all the visible parameters that can be seen on the Equip Screen.","parameters":{"Default Pos Color":"#80ff80","Default Neg Color":"#c08080","Window Width":"356","Font Size":"24","Line Padding":"8","== Stat 1 ==":"","Stat 1 Name":"Max HP","Stat 1 Eval":"actor.mhp","Stat 1 Format":"val","== Stat 2 ==":"","Stat 2 Name":"Max MP","Stat 2 Eval":"actor.mmp","Stat 2 Format":"val","== Stat 3 ==":"","Stat 3 Name":"Attack","Stat 3 Eval":"actor.atk","Stat 3 Format":"val","== Stat 4 ==":"","Stat 4 Name":"Defense","Stat 4 Eval":"actor.def","Stat 4 Format":"val","== Stat 5 ==":"","Stat 5 Name":"M. Attack","Stat 5 Eval":"actor.mat","Stat 5 Format":"val","== Stat 6 ==":"","Stat 6 Name":"M. Defense","Stat 6 Eval":"actor.mdf","Stat 6 Format":"val","== Stat 7 ==":"","Stat 7 Name":"Agility","Stat 7 Eval":"actor.agi","Stat 7 Format":"val","== Stat 8 ==":"","Stat 8 Name":"Luck","Stat 8 Eval":"actor.luk","Stat 8 Format":"val","== Stat 9 ==":"","Stat 9 Name":"Hit Rate","Stat 9 Eval":"Math.floor(actor.hit * 100)","Stat 9 Format":"val%","== Stat 10 ==":"","Stat 10 Name":"Evade Rate","Stat 10 Eval":"Math.floor(actor.eva * 100)","Stat 10 Format":"val%","== Stat 11 ==":"","Stat 11 Name":"Critical Rate","Stat 11 Eval":"Math.floor(actor.cri * 100)","Stat 11 Format":"val%","== Stat 12 ==":"","Stat 12 Name":"Critical Evade","Stat 12 Eval":"Math.floor(actor.cev * 100)","Stat 12 Format":"val%","== Stat 13 ==":"","Stat 13 Name":"M. Evasion","Stat 13 Eval":"Math.floor(actor.mev * 100)","Stat 13 Format":"val%","== Stat 14 ==":"","Stat 14 Name":"M. Reflect","Stat 14 Eval":"Math.floor(actor.mrf * 100)","Stat 14 Format":"val%","== Stat 15 ==":"","Stat 15 Name":"Counter Rate","Stat 15 Eval":"Math.floor(actor.cnt * 100)","Stat 15 Format":"val%","== Stat 16 ==":"","Stat 16 Name":"HP Regen","Stat 16 Eval":"Math.floor(actor.hrg * 100)","Stat 16 Format":"val%","== Stat 17 ==":"","Stat 17 Name":"MP Regen","Stat 17 Eval":"Math.floor(actor.mrg * 100)","Stat 17 Format":"val%","== Stat 18 ==":"","Stat 18 Name":"TP Regen","Stat 18 Eval":"Math.floor(actor.trg * 100)","Stat 18 Format":"val%","== Stat 19 ==":"","Stat 19 Name":"Target Rate","Stat 19 Eval":"Math.floor(actor.tgr * 100)","Stat 19 Format":"val%","== Stat 20 ==":"","Stat 20 Name":"Guard Effect","Stat 20 Eval":"Math.floor(actor.grd * 100)","Stat 20 Format":"val%","== Stat 21 ==":"","Stat 21 Name":"Recover Rate","Stat 21 Eval":"Math.floor(actor.rec * 100)","Stat 21 Format":"val%","== Stat 22 ==":"","Stat 22 Name":"Pharmacology","Stat 22 Eval":"Math.floor(actor.pha * 100)","Stat 22 Format":"val%","== Stat 23 ==":"","Stat 23 Name":"MP Cost Rate","Stat 23 Eval":"Math.floor(actor.mcr * 100)","Stat 23 Format":"val%","== Stat 24 ==":"","Stat 24 Name":"TP Cost Rate","Stat 24 Eval":"Math.floor(actor.tcr * 100)","Stat 24 Format":"val%","== Stat 25 ==":"","Stat 25 Name":"Damage Rate","Stat 25 Eval":"Math.floor(actor.pdr * 100)","Stat 25 Format":"val%","== Stat 26 ==":"","Stat 26 Name":"M. Damage Rate","Stat 26 Eval":"Math.floor(actor.mdr * 100)","Stat 26 Format":"val%","== Stat 27 ==":"","Stat 27 Name":"Floor Damage Rate","Stat 27 Eval":"Math.floor(actor.fdr * 100)","Stat 27 Format":"val%","== Stat 28 ==":"","Stat 28 Name":"EXP Rate","Stat 28 Eval":"Math.floor(actor.exr * 100)","Stat 28 Format":"val%","== Stat 29 ==":"","Stat 29 Name":"","Stat 29 Eval":"","Stat 29 Format":"val","== Stat 30 ==":"","Stat 30 Name":"","Stat 30 Eval":"","Stat 30 Format":"val","== Stat 31 ==":"","Stat 31 Name":"","Stat 31 Eval":"","Stat 31 Format":"val","== Stat 32 ==":"","Stat 32 Name":"","Stat 32 Eval":"","Stat 32 Format":"val","== Stat 33 ==":"","Stat 33 Name":"","Stat 33 Eval":"","Stat 33 Format":"val","== Stat 34 ==":"","Stat 34 Name":"","Stat 34 Eval":"","Stat 34 Format":"val","== Stat 35 ==":"","Stat 35 Name":"","Stat 35 Eval":"","Stat 35 Format":"val","== Stat 36 ==":"","Stat 36 Name":"","Stat 36 Eval":"","Stat 36 Format":"val","== Stat 37 ==":"","Stat 37 Name":"","Stat 37 Eval":"","Stat 37 Format":"val","== Stat 38 ==":"","Stat 38 Name":"","Stat 38 Eval":"","Stat 38 Format":"val","== Stat 39 ==":"","Stat 39 Name":"","Stat 39 Eval":"","Stat 39 Format":"val","== Stat 40 ==":"","Stat 40 Name":"","Stat 40 Eval":"","Stat 40 Format":"val","== Stat 41 ==":"","Stat 41 Name":"","Stat 41 Eval":"","Stat 41 Format":"val","== Stat 42 ==":"","Stat 42 Name":"","Stat 42 Eval":"","Stat 42 Format":"val","== Stat 43 ==":"","Stat 43 Name":"","Stat 43 Eval":"","Stat 43 Format":"val","== Stat 44 ==":"","Stat 44 Name":"","Stat 44 Eval":"","Stat 44 Format":"val","== Stat 45 ==":"","Stat 45 Name":"","Stat 45 Eval":"","Stat 45 Format":"val","== Stat 46 ==":"","Stat 46 Name":"","Stat 46 Eval":"","Stat 46 Format":"val","== Stat 47 ==":"","Stat 47 Name":"","Stat 47 Eval":"","Stat 47 Format":"val","== Stat 48 ==":"","Stat 48 Name":"","Stat 48 Eval":"","Stat 48 Format":"val","== Stat 49 ==":"","Stat 49 Name":"","Stat 49 Eval":"","Stat 49 Format":"val","== Stat 50 ==":"","Stat 50 Name":"","Stat 50 Eval":"","Stat 50 Format":"val","== Stat 51 ==":"","Stat 51 Name":"","Stat 51 Eval":"","Stat 51 Format":"val","== Stat 52 ==":"","Stat 52 Name":"","Stat 52 Eval":"","Stat 52 Format":"val","== Stat 53 ==":"","Stat 53 Name":"","Stat 53 Eval":"","Stat 53 Format":"val","== Stat 54 ==":"","Stat 54 Name":"","Stat 54 Eval":"","Stat 54 Format":"val","== Stat 55 ==":"","Stat 55 Name":"","Stat 55 Eval":"","Stat 55 Format":"val","== Stat 56 ==":"","Stat 56 Name":"","Stat 56 Eval":"","Stat 56 Format":"val","== Stat 57 ==":"","Stat 57 Name":"","Stat 57 Eval":"","Stat 57 Format":"val","== Stat 58 ==":"","Stat 58 Name":"","Stat 58 Eval":"","Stat 58 Format":"val","== Stat 59 ==":"","Stat 59 Name":"","Stat 59 Eval":"","Stat 59 Format":"val","== Stat 60 ==":"","Stat 60 Name":"","Stat 60 Eval":"","Stat 60 Format":"val","== Stat 61 ==":"","Stat 61 Name":"","Stat 61 Eval":"","Stat 61 Format":"val","== Stat 62 ==":"","Stat 62 Name":"","Stat 62 Eval":"","Stat 62 Format":"val","== Stat 63 ==":"","Stat 63 Name":"","Stat 63 Eval":"","Stat 63 Format":"val","== Stat 64 ==":"","Stat 64 Name":"","Stat 64 Eval":"","Stat 64 Format":"val","== Stat 65 ==":"","Stat 65 Name":"","Stat 65 Eval":"","Stat 65 Format":"val","== Stat 66 ==":"","Stat 66 Name":"","Stat 66 Eval":"","Stat 66 Format":"val","== Stat 67 ==":"","Stat 67 Name":"","Stat 67 Eval":"","Stat 67 Format":"val","== Stat 68 ==":"","Stat 68 Name":"","Stat 68 Eval":"","Stat 68 Format":"val","== Stat 69 ==":"","Stat 69 Name":"","Stat 69 Eval":"","Stat 69 Format":"val","== Stat 70 ==":"","Stat 70 Name":"","Stat 70 Eval":"","Stat 70 Format":"val","== Stat 71 ==":"","Stat 71 Name":"","Stat 71 Eval":"","Stat 71 Format":"val","== Stat 72 ==":"","Stat 72 Name":"","Stat 72 Eval":"","Stat 72 Format":"val","== Stat 73 ==":"","Stat 73 Name":"","Stat 73 Eval":"","Stat 73 Format":"val","== Stat 74 ==":"","Stat 74 Name":"","Stat 74 Eval":"","Stat 74 Format":"val","== Stat 75 ==":"","Stat 75 Name":"","Stat 75 Eval":"","Stat 75 Format":"val","== Stat 76 ==":"","Stat 76 Name":"","Stat 76 Eval":"","Stat 76 Format":"val","== Stat 77 ==":"","Stat 77 Name":"","Stat 77 Eval":"","Stat 77 Format":"val","== Stat 78 ==":"","Stat 78 Name":"","Stat 78 Eval":"","Stat 78 Format":"val","== Stat 79 ==":"","Stat 79 Name":"","Stat 79 Eval":"","Stat 79 Format":"val","== Stat 80 ==":"","Stat 80 Name":"","Stat 80 Eval":"","Stat 80 Format":"val","== Stat 81 ==":"","Stat 81 Name":"","Stat 81 Eval":"","Stat 81 Format":"val","== Stat 82 ==":"","Stat 82 Name":"","Stat 82 Eval":"","Stat 82 Format":"val","== Stat 83 ==":"","Stat 83 Name":"","Stat 83 Eval":"","Stat 83 Format":"val","== Stat 84 ==":"","Stat 84 Name":"","Stat 84 Eval":"","Stat 84 Format":"val","== Stat 85 ==":"","Stat 85 Name":"","Stat 85 Eval":"","Stat 85 Format":"val","== Stat 86 ==":"","Stat 86 Name":"","Stat 86 Eval":"","Stat 86 Format":"val","== Stat 87 ==":"","Stat 87 Name":"","Stat 87 Eval":"","Stat 87 Format":"val","== Stat 88 ==":"","Stat 88 Name":"","Stat 88 Eval":"","Stat 88 Format":"val","== Stat 89 ==":"","Stat 89 Name":"","Stat 89 Eval":"","Stat 89 Format":"val","== Stat 90 ==":"","Stat 90 Name":"","Stat 90 Eval":"","Stat 90 Format":"val","== Stat 91 ==":"","Stat 91 Name":"","Stat 91 Eval":"","Stat 91 Format":"val","== Stat 92 ==":"","Stat 92 Name":"","Stat 92 Eval":"","Stat 92 Format":"val","== Stat 93 ==":"","Stat 93 Name":"","Stat 93 Eval":"","Stat 93 Format":"val","== Stat 94 ==":"","Stat 94 Name":"","Stat 94 Eval":"","Stat 94 Format":"val","== Stat 95 ==":"","Stat 95 Name":"","Stat 95 Eval":"","Stat 95 Format":"val","== Stat 96 ==":"","Stat 96 Name":"","Stat 96 Eval":"","Stat 96 Format":"val","== Stat 97 ==":"","Stat 97 Name":"","Stat 97 Eval":"","Stat 97 Format":"val","== Stat 98 ==":"","Stat 98 Name":"","Stat 98 Eval":"","Stat 98 Format":"val","== Stat 99 ==":"","Stat 99 Name":"","Stat 99 Eval":"","Stat 99 Format":"val","== Stat 100 ==":"","Stat 100 Name":"","Stat 100 Eval":"","Stat 100 Format":"val"}},
{"name":"YEP_StatusMenuCore","status":true,"description":"v1.04 Changes the Status menu for your characters into\na hub that displays more character information.","parameters":{"---Settings---":"","Command Order":"General Parameters Elements States Attributes Custom Cancel","Command Window Width":"240","Command Window Rows":"4","Command Alignment":"center","---General---":"","General Command":"基本属性","Parameters Text":"Parameters","Experience Text":"Experience","Total Format":"Total %1 for Next %2","EXP Gauge Color 1":"30","EXP Gauge Color 2":"31","---Parameters---":"","Parameters Command":"一般属性","Graph Text":"Parameter Graph","ATK Color":"#ed1c24 #f26c4f","DEF Color":"#f7941d #fdc689","MAT Color":"#605ca8 #bd8cbf","MDF Color":"#448ccb #a6caf4","AGI Color":"#39b54a #82ca9c","LUK Color":"#fff568 #fffac3","---Resist Colors---":"","Above 300%":"10","200% to 300%":"20","150% to 200%":"14","120% to 150%":"6","100% to 120%":"0","80% to 100%":"24","50% to 80%":"29","1% to 50%":"23","Exactly 0%":"31","Below 0%":"27","---Elements---":"","Elements Command":"元素属性","Elements Decimal":"2","Element Column 1":"1","Element Column 2":"2 3 4 5 6 7 8 9","Element Column 3":"","Element Column 4":"","---States---":"","States Command":"状态属性","States Decimal":"2","States Column 1":"1 4 5 6","States Column 2":"7 8 9 10","States Column 3":"","States Column 4":"","---Attributes---":"","Attributes Command":"详细属性","Attribute Font Size":"20","Attribute Decimal":"0","Attributes Column 1":"exr hit eva cri cev mev mrf cnt","Attributes Column 2":"mcr tcr pdr mdr fdr grd rec pha","Attributes Column 3":"hrg mrg trg tgr","Attributes Column 4":"","---XParam Names---":"","hit Name":"命中率","eva Name":"闪避率","cri Name":"暴击率","cev Name":"躲爆率","mev Name":"回射率","mrf Name":"反射率","cnt Name":"反击率","hrg Name":"HP回复率","mrg Name":"MP回复率","trg Name":"T回复率","tgr Name":"收益率","grd Name":"保护效果","rec Name":"回复效果","pha Name":"药物效果","mcr Name":"MP损耗率","tcr Name":"TP使用率","pdr Name":"物理伤害率","mdr Name":"魔法伤害率","fdr Name":"最低伤害率","exr Name":"经验等级"}},
{"name":"YEP_ExtraParamFormula","status":true,"description":"v1.03 额外参数公式\nHIT, EVA, CRI, CEV, MEV, MRF, CNT, HRG, MRG, and TRG.","parameters":{"HIT Formula":"(base + plus) * rate + flat","EVA Formula":"(base + plus) * rate + flat","CRI Formula":"(base + plus) * rate + flat","CEV Formula":"(base + plus) * rate + flat","MEV Formula":"(base + plus) * rate + flat","MRF Formula":"(base + plus) * rate + flat","CNT Formula":"(base + plus) * rate + flat","HRG Formula":"(base + plus) * rate + flat","MRG Formula":"(base + plus) * rate + flat","TRG Formula":"(base + plus) * rate + flat"}},
{"name":"YEP_StatAllocation","status":true,"description":"v1.01 Add a menu to your game to allocate stats for party\nmembers. Stats can be allocated through AP, JP, or items!","parameters":{"---General---":"","Command Text":"Allocate","Auto Add Menu":"true","Show Command":"true","Enable Command":"true","Auto Place Command":"true","Left/Right Allocate":"true","---AP---":"","AP Name":"AP","AP Icon":"87","AP Formula":"(level - 1) * 5","AP Amount Format":"%1\\c[4]%2\\c[0]%3","Show AP in Menu":"true","---Command Window---":"","Text Alignment":"center","Allocate Command":"Allocate","Revert Command":"Revert","Show Revert":"true","Enable Revert":"true","Finish Command":"Finish","---Allocation Window---":"","Default Parameters":"[\"mhp\",\"mmp\",\"atk\",\"def\",\"mat\",\"mdf\",\"agi\",\"luk\"]","Allocate Refresh":"false","Small Item Names":"false","drawCode":"\"// Initialize Variables\\nvar param = this._list[index].ext;\\nvar data = this.paramData(param);\\nvar rect = this.itemRectForText(index);\\n// Draw Gauge\\nvar gaugeColor1 = data.gaugeColor1 || '#000000';\\nvar gaugeColor2 = data.gaugeColor2 || '#000000';\\nvar rate = this.paramAllocationRate(param);\\nvar width = this.contentsWidth() - 330;\\nthis.drawGauge(rect.x, rect.y, width, rate, gaugeColor1, gaugeColor2);\\n// Draw Parameter Name\\nthis.drawParamName(param, rect.x + this.textPadding(), rect.y, width);\\n// Draw Parameter Values\\nthis.drawParamValues(param, rect.x + this.textPadding(), rect.y, width);\\n// Draw Parameter Cost\\nthis.drawParamCost(param, rect.x + rect.width - width, rect.y, width);\"","Base Parameters":"","mhp Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the maximum health of this unit by +10.\\\"\",\"gaugeColor1\":\"#e08040\",\"gaugeColor2\":\"#f0c040\",\"allocationBonus\":\"10\",\"maxAllocations\":\"100\",\"apCost\":\"\\\"cost = 1 + Math.floor(times / 10);\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","mmp Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the maximum MP of this unit by +5.\\\"\",\"gaugeColor1\":\"#4080c0\",\"gaugeColor2\":\"#40c0f0\",\"allocationBonus\":\"5\",\"maxAllocations\":\"100\",\"apCost\":\"\\\"cost = 1 + Math.floor(times / 10);\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","atk Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the physical attack power of this unit by +1.\\\"\",\"gaugeColor1\":\"#ed1c24\",\"gaugeColor2\":\"#f26c4f\",\"allocationBonus\":\"1\",\"maxAllocations\":\"100\",\"apCost\":\"\\\"cost = 1;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","def Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the physical defense of this unit by +1.\\\"\",\"gaugeColor1\":\"#f7941d\",\"gaugeColor2\":\"#fdc689\",\"allocationBonus\":\"1\",\"maxAllocations\":\"100\",\"apCost\":\"\\\"cost = 1;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","mat Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the magical attack power of this unit by +1.\\\"\",\"gaugeColor1\":\"#605ca8\",\"gaugeColor2\":\"#bd8cbf\",\"allocationBonus\":\"1\",\"maxAllocations\":\"100\",\"apCost\":\"\\\"cost = 1;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","mdf Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the magical defense of this unit by +1.\\\"\",\"gaugeColor1\":\"#448ccb\",\"gaugeColor2\":\"#a6caf4\",\"allocationBonus\":\"1\",\"maxAllocations\":\"100\",\"apCost\":\"\\\"cost = 1;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","agi Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the agility of this unit by +1.\\\"\",\"gaugeColor1\":\"#39b54a\",\"gaugeColor2\":\"#82ca9c\",\"allocationBonus\":\"1\",\"maxAllocations\":\"100\",\"apCost\":\"\\\"cost = 1;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","luk Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the luck of this unit by +1.\\\"\",\"gaugeColor1\":\"#fff568\",\"gaugeColor2\":\"#fffac3\",\"allocationBonus\":\"1\",\"maxAllocations\":\"100\",\"apCost\":\"\\\"cost = 1;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","Extra Parameters":"","hit Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the physical hit rate of this unit by +0.5%.\\\"\",\"gaugeColor1\":\"#ca3c7a\",\"gaugeColor2\":\"#ff9fc9\",\"allocationBonus\":\"0.005\",\"maxAllocations\":\"10\",\"apCost\":\"\\\"cost = 3;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","eva Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the physical evasion rate of this unit by +0.5%.\\\"\",\"gaugeColor1\":\"#ca3c7a\",\"gaugeColor2\":\"#ff9fc9\",\"allocationBonus\":\"0.005\",\"maxAllocations\":\"10\",\"apCost\":\"\\\"cost = 3;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","cri Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the critical hit rate of this unit by +0.5%.\\\"\",\"gaugeColor1\":\"#ca3c7a\",\"gaugeColor2\":\"#ff9fc9\",\"allocationBonus\":\"0.005\",\"maxAllocations\":\"10\",\"apCost\":\"\\\"cost = 3;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","cev Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the critical evasion rate of this unit by +0.5%.\\\"\",\"gaugeColor1\":\"#ca3c7a\",\"gaugeColor2\":\"#ff9fc9\",\"allocationBonus\":\"0.005\",\"maxAllocations\":\"10\",\"apCost\":\"\\\"cost = 3;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","mev Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the magic evasion rate of this unit by +0.5%.\\\"\",\"gaugeColor1\":\"#ca3c7a\",\"gaugeColor2\":\"#ff9fc9\",\"allocationBonus\":\"0.005\",\"maxAllocations\":\"10\",\"apCost\":\"\\\"cost = 3;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","mrf Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the magic reflection rate of this unit by +1%.\\\"\",\"gaugeColor1\":\"#ca3c7a\",\"gaugeColor2\":\"#ff9fc9\",\"allocationBonus\":\"0.01\",\"maxAllocations\":\"10\",\"apCost\":\"\\\"cost = 3;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","cnt Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the counterattack rate of this unit by +1%.\\\"\",\"gaugeColor1\":\"#ca3c7a\",\"gaugeColor2\":\"#ff9fc9\",\"allocationBonus\":\"0.01\",\"maxAllocations\":\"10\",\"apCost\":\"\\\"cost = 3;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","hrg Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the HP regeneration rate of this unit by +1%.\\\"\",\"gaugeColor1\":\"#ca3c7a\",\"gaugeColor2\":\"#ff9fc9\",\"allocationBonus\":\"0.01\",\"maxAllocations\":\"20\",\"apCost\":\"\\\"cost = 3;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","mrg Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the MP regeneration rate of this unit by +1%.\\\"\",\"gaugeColor1\":\"#ca3c7a\",\"gaugeColor2\":\"#ff9fc9\",\"allocationBonus\":\"0.01\",\"maxAllocations\":\"20\",\"apCost\":\"\\\"cost = 3;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","trg Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the TP regeneration rate of this unit by +1%.\\\"\",\"gaugeColor1\":\"#ca3c7a\",\"gaugeColor2\":\"#ff9fc9\",\"allocationBonus\":\"0.01\",\"maxAllocations\":\"20\",\"apCost\":\"\\\"cost = 3;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","Special Parameters":"","tgr Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the target rate of this unit by -1%.\\\"\",\"gaugeColor1\":\"#8c6239\",\"gaugeColor2\":\"#c69c6d\",\"allocationBonus\":\"0.01\",\"maxAllocations\":\"10\",\"apCost\":\"\\\"cost = 5;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","grd Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the guard effect rate of this unit by +5%.\\\"\",\"gaugeColor1\":\"#8c6239\",\"gaugeColor2\":\"#c69c6d\",\"allocationBonus\":\"0.05\",\"maxAllocations\":\"20\",\"apCost\":\"\\\"cost = 5;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","rec Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the recovery effect rate of this unit by +5%.\\\"\",\"gaugeColor1\":\"#8c6239\",\"gaugeColor2\":\"#c69c6d\",\"allocationBonus\":\"0.05\",\"maxAllocations\":\"20\",\"apCost\":\"\\\"cost = 5;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","pha Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increases the item effectiveness rate of this unit by +5%.\\\"\",\"gaugeColor1\":\"#8c6239\",\"gaugeColor2\":\"#c69c6d\",\"allocationBonus\":\"0.05\",\"maxAllocations\":\"20\",\"apCost\":\"\\\"cost = 5;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","mcr Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Decrease the MP cost of skills of this unit by -1%.\\\"\",\"gaugeColor1\":\"#8c6239\",\"gaugeColor2\":\"#c69c6d\",\"allocationBonus\":\"-0.01\",\"maxAllocations\":\"50\",\"apCost\":\"\\\"cost = 5;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","tcr Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increase the TP charge rate of this unit by +1%.\\\"\",\"gaugeColor1\":\"#8c6239\",\"gaugeColor2\":\"#c69c6d\",\"allocationBonus\":\"0.01\",\"maxAllocations\":\"50\",\"apCost\":\"\\\"cost = 5;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","pdr Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Decrease the physical damage received by this unit by -1%.\\\"\",\"gaugeColor1\":\"#8c6239\",\"gaugeColor2\":\"#c69c6d\",\"allocationBonus\":\"-0.01\",\"maxAllocations\":\"50\",\"apCost\":\"\\\"cost = 5;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","mdr Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Decrease the magical damage received by this unit by -1%.\\\"\",\"gaugeColor1\":\"#8c6239\",\"gaugeColor2\":\"#c69c6d\",\"allocationBonus\":\"-0.01\",\"maxAllocations\":\"50\",\"apCost\":\"\\\"cost = 5;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","fdr Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Decrease the floord damage received by this unit by -1%.\\\"\",\"gaugeColor1\":\"#8c6239\",\"gaugeColor2\":\"#c69c6d\",\"allocationBonus\":\"-0.01\",\"maxAllocations\":\"50\",\"apCost\":\"\\\"cost = 1;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","exr Settings":"{\"name\":\"auto\",\"iconIndex\":\"0\",\"description\":\"\\\"Increase the EXP received by this unit by +1%.\\\"\",\"gaugeColor1\":\"#8c6239\",\"gaugeColor2\":\"#c69c6d\",\"allocationBonus\":\"0.01\",\"maxAllocations\":\"100\",\"apCost\":\"\\\"cost = 1;\\\"\",\"jpCost\":\"\\\"cost = 0;\\\"\",\"itemId\":\"0\",\"itemCost\":\"\\\"cost = 1;\\\"\"}","---Revert---":"","RevertConfirmationText":"\"Do you wish to revert all allocated parmeters?\\nAll \\\\c[4]AP\\\\c[0], \\\\c[4]JP\\\\c[0], and \\\\c[4]Items\\\\c[0] will be refunded.\"","RevertWinWidth":"700","RevertYes":"Revert","RevertNo":"Don't Revert"}},
{"name":"MadeWithMv","status":false,"description":"Show a Splash Screen \"Made with MV\" and/or a Custom Splash Screen before going to main screen.","parameters":{"Show Made With MV":"true","Made with MV Image":"MadeWithMv","Show Custom Splash":"false","Custom Image":"","Fade Out Time":"120","Fade In Time":"120","Wait Time":"160"}}
];