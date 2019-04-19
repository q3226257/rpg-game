//=============================================================================
// TMVplugin - 详细说明窗口
// 版本号: 2.0.3
// 最终更新日: 2017/02/21
// 配布元    : http://hikimoki.sakura.ne.jp/
//-----------------------------------------------------------------------------
// Copyright (c) 2016 tomoaky
// Released under the MIT license.
// http://opensource.org/licenses/mit-license.php
//=============================================================================

/*:
 * @plugindesc 显示道具和技能的详细情报。
 *
 * @author tomoaky http://hikimoki.sakura.ne.jp/ /汉化:多卡多卡
 *
 * @param descriptionKeyCode
 * @desc 调用详细说明窗口的按键
 * 初期値: 65(0x41,字符:A)
 * @default 65
 *
 * @param leftPaneWidth
 * @desc 左侧参数的宽度
 * 初期値: 300
 * @default 300
 *
 * @param rightPaneWidth
 * @desc 右侧参数的宽度
 * 初期値: 400
 * @default 400
 *
 * @param horzLineHeight
 * @desc 包括横线边距的高度
 * 初期値: 28
 * @default 28
 *
 * @param secretItemA
 * @desc 隐藏物品A的名称
 * 初期値: 隐藏物品A
 * @default 隐藏物品A
 *
 * @param secretItemB
 * @desc 隐藏物品A的名称
 * 初期値: 隐藏物品A
 * @default 隐藏物品A
 *
 * @param consumableText
 * @desc 消耗品的名称
 * 初期値: 消耗
 * @default 消耗
 *
 * @param occasionText
 * @desc 使用场合的名称
 * 初期値: 使用场合
 * @default 使用场合
 *
 * @param scopeText
 * @desc 范围的名称
 * 初期値: 范围
 * @default 范围
 *
 * @param speedText
 * @desc 速度补正的名称
 * 初期値: 速度补正
 * @default 速度补正
 *
 * @param successRateText
 * @desc 成功率的名称
 * 初期値: 成功率
 * @default 成功率
 *
 * @param repeatsText
 * @desc 连续次数的名称的名称
 * 初期値: 连续次数
 * @default 连续次数
 *
 * @param tpGainText
 * @desc 获得TP的名称
 * 初期値: 获得TP
 * @default 获得TP
 *
 * @param hitTypeText
 * @desc 命中类型的名称
 * 初期値: 命中类型
 * @default 命中类型
 *
 * @param priceText
 * @desc 价格的名称
 * 初期値: 出售价格
 * @default 出售价格
 *
 * @param priceRate
 * @desc 价格表示的倍率(默认半价出售)
 * 初期値: 0.5
 * @default 0.5
 *
 * @param mpCostText
 * @desc MP消耗的名称
 * 初期値: MP消耗
 * @default MP消耗
 *
 * @param tpCostText
 * @desc TP消耗的名称
 * 初期値: TP消耗
 * @default TP消耗
 *
 * @param requiredWtypeText
 * @desc 需要武器的名称
 * 初期値: 需要武器
 * @default 需要武器
 *
 * @param effectText
 * @desc 使用效果的名称
 * 初期値: 效果
 * @default 效果
 *
 * @param traitText
 * @desc 特征的名称
 * 初期値: 特征
 * @default 特征
 *
 * @param effectTextRecoverHp
 * @desc HP恢复的表现形式
 * 初期値: 恢复%1HP
 * @default 恢复%1HP
 *
 * @param effectTextRecoverMp
 * @desc MP恢复的表现形式
 * 初期値: 恢复%1MP
 * @default 恢复%1MP
 *
 * @param effectTextGainTp
 * @desc TP获得的表现形式
 * 初期値: 获得%1TP
 * @default 获得%1TP
 *
 * @param effectTextAddState
 * @desc 附加状态的表现形式
 * 初期値: %2%的概率赋予%1效果
 * @default %2%的概率赋予%1效果
 *
 * @param effectTextRemoveState
 * @desc 解除状态的表现形式
 * 初期値: %2%的概率解除%1效果
 * @default %2%的概率解除%1效果
 *
 * @param effectTextAddBuff
 * @desc 强化效果的表现形式
 * 初期値: %2回合内提高%1
 * @default %2回合内提高%1
 *
 * @param effectTextAddDebuff
 * @desc 弱化效果的表现形式
 * 初期値:  %2回合内降低%1
 * @default %2回合内降低%1
 *
 * @param effectTextRemoveBuff
 * @desc 强化效果解除的表现形式
 * 初期値: 解除%1提高的效果
 * @default 解除%1提高的效果
 *
 * @param effectTextRemoveDebuff
 * @desc 弱化效果解除的表现形式
 * 初期値: 解除%1降低的效果
 * @default 解除%1降低的效果
 *
 * @param effectTextSpecial
 * @desc 特殊效果的表现形式
 * 初期値: 从战斗中逃跑
 * @default 从战斗中逃跑
 *
 * @param effectTextGrow
 * @desc 能力值成长的表现形式
 * 初期値: 永久提高%1%2点
 * @default 永久提高%1%2点
 *
 * @param effectTextLearnSkill
 * @desc 技能习得的表现形式
 * 初期値: 习得技能:%1
 * @default 习得技能:%1
 *
 * @param damageTextDamageHp
 * @desc  伤害类型"HP伤害"的表现形式
 * 初期値: 造成%1伤害
 * @default 造成%1伤害
 *
 * @param damageTextDamageMp
 * @desc 伤害类型"MP伤害"的表现形式
 * 初期値: 造成%1MP伤害
 * @default 造成%1MP伤害
 *
 * @param damageTextRecoverHp
 * @desc 伤害类型"HP恢复"的表现形式
 * 初期値: 恢复HP
 * @default 恢复HP
 *
 * @param damageTextRecoverMp
 * @desc 伤害类型"MP恢复"的表现形式
 * 初期値: 恢复MP
 * @default 恢复MP
 *
 * @param damageTextDrainHp
 * @desc 伤害类型"HP吸收"的表现形式
 * 初期値: 吸收造成的伤害，转化为HP
 * @default 吸收造成的伤害，转化为HP
 *
 * @param damageTextDrainMp
 * @desc 伤害类型"MP吸收"的表现形式
 * 初期値: 吸收造成的伤害，转化为MP
 * @default 吸收造成的伤害，转化为MP
 *
 * @param traitTextElementRate
 * @desc 属性有效度的表现形式
 * 初期値: %1耐性%2%
 * @default %1耐性%2%
 *
 * @param traitTextDebuffRate
 * @desc 弱化有效度的表现形式
 * 初期値: %1降低耐性%2%
 * @default %1降低耐性%2%
 *
 * @param traitTextStateRate
 * @desc 状态有效度的表现形式
 * 初期値: %1有效度%2%
 * @default %1有效度%2%
 *
 * @param traitTextStateResist
 * @desc 状态免疫的表现形式
 * 初期値: %1无效
 * @default %1无效
 *
 * @param traitTextParam
 * @desc 通常能力值的表现形式
 * 初期値: %1%2%
 * @default %1%2%
 *
 * @param traitTextXparam
 * @desc 追加能力值的表现形式
 * 初期値: %1%2
 * @default %1%2
 *
 * @param traitTextSparam
 * @desc 特殊能力的表现形式
 * 初期値: %1%2%
 * @default %1%2%
 *
 * @param traitTextAttackElement
 * @desc 攻击属性的表现形式
 * 初期値: 攻击属性:%1
 * @default 攻击属性:%1
 *
 * @param traitTextAttackState
 * @desc 攻击附加状态的表现形式
 * 初期値:攻击时%2%的概率附加%1
 * @default 攻击时%2%的概率附加%1
 *
 * @param traitTextAttackSpeed
 * @desc 攻击速度补正的表现形式
 * 初期値: 攻击速度%1
 * @default 攻击速度%1
 *
 * @param traitTextAttackTimes
 * @desc 攻击次数追加的表现形式
 * 初期値: 攻击回数%1
 * @default 攻击回数%1
 *
 * @param traitTextStypeAdd
 * @desc 添加技能类型的表现形式
 * 初期値: 可以使用%1类技能
 * @default 可以使用%1类技能
 *
 * @param traitTextStypeSeal
 * @desc 封印技能类型的表现形式
 * 初期値: 不能使用%1类技能
 * @default 不能使用%1类技能
 *
 * @param traitTextSkillAdd
 * @desc 添加技能的表现形式
 * 初期値: 可以使用%1
 * @default 可以使用%1
 *
 * @param traitTextSkillSeal
 * @desc 封印技能的表现形式
 * 初期値: 不能使用%1
 * @default 不能使用%1
 *
 * @param traitTextEquipWtype
 * @desc 装备武器类型的表现形式
 * 初期値: 可以装备%1
 * @default可以装备%1
 *
 * @param traitTextEquipAtype
 * @desc 装备防具类型的表现形式
 * 初期値: 可以装备%1
 * @default 可以装备%1
 *
 * @param traitTextEquipLock
 * @desc 固定装备的表现形式
 * 初期値: 
 * @default 
 *
 * @param traitTextEquipSeal
 * @desc 封印装备的表现形式
 * 初期値: 不能装备%1
 * @default 不能装备%1
 *
 * @param traitTextActionPlus
 * @desc 行动次数追加的表现形式
 * 初期値: %1%的概率连续行动
 * @default %1%的概率连续行动
 *
 * @param xparamText
 * @desc 追加能力值的名称(10个,用逗号区分)
 * 初期値: 命中,回避,暴击,暴击回避,魔法回避,魔法反射等...
 * @default 命中,回避,暴击,暴击回避,魔法回避,魔法反射,反击,HP自动恢复,MP自动恢复,TP自动恢复
 *
 * @param sparamText
 * @desc 特殊能力值的名称(10个,用逗号区分)
 * 初期値: 受到攻击概率,防御效果,回复效果,药理知识等...
 * @default 受到攻击概率,防御效果,回复效果,药理知识,MP消费率,MP补充率,物理伤害,魔法伤害,地形伤害,经验值获得
 *
 * @param consumableValue
 * @desc 能否消耗的名称
 * 初期値: 是,否
 * @default 是,否
 *
 * @param occasionValue
 * @desc 使用场合的名称
 * 初期値: 随时可用,战斗中,战斗外,不可使用
 * @default 随时可用,战斗中,战斗外,不可使用
 *
 * @param scopeValue
 * @desc 范围的名称（12个,用逗号区分）
 * 初期値: 无,敌方单体,敌方全体,随机1个敌人,随机2个敌人…
 * @default 无,敌方单体,敌方全体,随机1个敌人,随机2个敌人,随机3个敌人,随机4个敌人,我方单体,我方全体,我方单体,我方全体,使用者
 *
 * @param hitTypeValue
 * @desc 命中类型的名称
 * 初期値: 必中,物理,魔法
 * @default 必中,物理,魔法
 *
 * @param slotTypeValue
 * @desc 特殊能力值
 * 初期値: 不能使用二刀流,可以使用二刀流
 * @default 不能使用二刀流,可以使用二刀流
 *
 * @param specialFlagValue
 * @desc 特殊标志
 * 初期値: 自动战斗,防御,掩护,保留TP
 * @default 自动战斗,防御,掩护,保留TP
 *
 * @param partyAbilityValue
 * @desc 队伍能力值（6个，用逗号区分）
 * 初期値: 遇敌率减半,不会遇敌…
 * @default 遇敌率减半,不会遇敌,不会被敌人偷袭,提高偷袭敌人的概率,获得金钱2倍,道具掉率2倍
 *
 * @param elementFooter
 * @desc 属性的后缀名
 * 初期値: 属性
 * @default 属性
 *
 * @param costExTextHp
 * @desc HP消耗的表现形式（需要 TMSkillCostEx.js ）
 * 初期値: 消耗%1HP
 * @default 消耗%1HP
 *
 * @param costExTextItem
 * @desc 道具消耗的表现形式（需要 TMSkillCostEx.js）
 * 初期値: 消耗%2个%1
 * @default 消耗%2个%1
 *
 * @param costExTextExp
 * @desc 经验值消耗的表现形式（需要 TMSkillCostEx.js）
 * 初期値: 消耗%1经验值
 * @default 消耗%1经验值
 *
 * @param costExTextGold
 * @desc 金钱消耗的表现形式（需要 TMSkillCostEx.js）
 * 初期値: 消耗金钱%1\G
 * @default 消耗金钱%1\G
 *
 * @param passiveAlwaysText
 * @desc 通常效果的表现形式（需要 TMSkillCostEx.js）
 * 初期値: 在通常时也可以使用效果
 * @default 在通常时也可以使用效果
 *
 * @param passiveTpText
 * @desc TP○○以上发动效果的表现形式（需要 TMSkillCostEx.js）
 * 初期値: TP%1以上时使用效果
 * @default TP%1以上时使用效果
 *
 * @param passiveTpText2
 * @desc TP○○以下发动效果的表现形式（需要 TMSkillCostEx.js）
 * 初期値: TP%1以下时使用效果
 * @default TP%1以下时使用效果
 *
 * @param passiveStateText
 * @desc ○○状态中发动效果的表现形式（需要 TMSkillCostEx.js）
 * 初期値: %1状态时使用效果
 * @default %1状态时使用效果
 *
 * @help
 * TMPlugin - 详细说明窗口 ver2.0.3
 * 
 * 使用方法:
 *
 *   此插件能够通过A键在窗口中显示道具和技能的详细信息
 *   也可以通过点击帮助窗口打开。
 *
 *   打开窗口所需的按键可以通过改变 descriptionKeyCode 的值进行变更。
 *   65(0x41)为A，66(0x42)为B，按字母表排序，以此类推。
 *   但像X或Z之类的有特殊功能的按键不能设置。
 *   下面为部分ASCII码的对照表,理论上特殊符号也可以使用(手动滑稽)
 *   (推荐改为32，即空格键，因为按起来比较方便(滑稽*2))
 *   十进制     十六进制       字符
 *   32           0x20            (空格)
 *   33           0x21            !
 *   34           0x22            "
 *   35           0x23            #
 *   36           0x24            $
 *   37           0x25            %
 *   38           0x26            &
 *   39           0x27            '
 *   40           0x28            (
 *   41           0x29            )
 *   42           0x2A            *
 *   43           0x2B            +
 *   44           0x2C            ,
 *   45           0x2D            -
 *   46           0x2E            .
 *   47           0x2F            /
 *   48-57        0x30-0x39       0-9
 *   58           0x3A            :
 *   59           0x3B            ;
 *   60           0x3C            <
 *   61           0x3D            =
 *   62           0x3E            >
 *   63           0x3F            ?
 *   64           0x40            at(这里如果把符号打出来会导致显示不完整)
 *   65-90        0x41-0x5A       A-Z
 *   91           0x5B            [
 *   92           0x5C            \
 *   93           0x5D            ]
 *   94           0x5E            ^
 *   95           0x5F            _
 *   96           0x60            `
 *   97-122       0x61-0x7A       a-z
 *   123          0x7B            {
 *   124          0x7C            |
 *   125          0x7D            }
 *   126          0x7E            ~
 *
 *   不需要插件指令，自动生效。
 *   此插件在 RPG Maker MV 的 V1.3.4版本中可以正常运行
 *
 *   注释栏的指令名称（技能、道具、武器、防具共通）:
 *
 *   <dType:素材>       # 类型名（在右上角表示）为素材
 *   <dText:[文本]>     # 在右侧的参数下追加文字（可以换行）
 *   作者还有一个能够多样化技能消耗的插件TMSkillCostEx，
 *   可以与该插件配合使用
 *   下载地址 https://hikimoki.sakura.ne.jp/plugin/plugin_skill.html#TMSkillCostEx
 *
 *   插件版权归原作者tomoaky所有
 */

var Imported = Imported || {};
Imported.TMDescriptionEx = true;

var TMPlugin = TMPlugin || {};
TMPlugin.DescriptionEx = {};
TMPlugin.DescriptionEx.Parameters = PluginManager.parameters('TMDescriptionEx');
TMPlugin.DescriptionEx.LeftPaneWidth = +TMPlugin.DescriptionEx.Parameters['leftPaneWidth'];
TMPlugin.DescriptionEx.RightPaneWidth = +TMPlugin.DescriptionEx.Parameters['rightPaneWidth'];
TMPlugin.DescriptionEx.HorzLineHeight = +TMPlugin.DescriptionEx.Parameters['horzLineHeight'];
TMPlugin.DescriptionEx.SecretItemA = TMPlugin.DescriptionEx.Parameters['secretItemA'];
TMPlugin.DescriptionEx.SecretItemB = TMPlugin.DescriptionEx.Parameters['secretItemB'];
TMPlugin.DescriptionEx.ConsumableText = TMPlugin.DescriptionEx.Parameters['consumableText'];
TMPlugin.DescriptionEx.OccasionText = TMPlugin.DescriptionEx.Parameters['occasionText'];
TMPlugin.DescriptionEx.ScopeText = TMPlugin.DescriptionEx.Parameters['scopeText'];
TMPlugin.DescriptionEx.SpeedText = TMPlugin.DescriptionEx.Parameters['speedText'];
TMPlugin.DescriptionEx.SuccessRateText = TMPlugin.DescriptionEx.Parameters['successRateText'];
TMPlugin.DescriptionEx.RepeatsText = TMPlugin.DescriptionEx.Parameters['repeatsText'];
TMPlugin.DescriptionEx.TpGainText = TMPlugin.DescriptionEx.Parameters['tpGainText'];
TMPlugin.DescriptionEx.HitTypeText = TMPlugin.DescriptionEx.Parameters['hitTypeText'];
TMPlugin.DescriptionEx.PriceText = TMPlugin.DescriptionEx.Parameters['priceText'];
TMPlugin.DescriptionEx.PriceRate = +TMPlugin.DescriptionEx.Parameters['priceRate'];
TMPlugin.DescriptionEx.MpCostText = TMPlugin.DescriptionEx.Parameters['mpCostText'];
TMPlugin.DescriptionEx.TpCostText = TMPlugin.DescriptionEx.Parameters['tpCostText'];
TMPlugin.DescriptionEx.RequiredWtypeText = TMPlugin.DescriptionEx.Parameters['requiredWtypeText'];
TMPlugin.DescriptionEx.EffectText = TMPlugin.DescriptionEx.Parameters['effectText'];
TMPlugin.DescriptionEx.TraitText = TMPlugin.DescriptionEx.Parameters['traitText'];
TMPlugin.DescriptionEx.EffectTextRecoverHp = TMPlugin.DescriptionEx.Parameters['effectTextRecoverHp'];
TMPlugin.DescriptionEx.EffectTextRecoverMp = TMPlugin.DescriptionEx.Parameters['effectTextRecoverMp'];
TMPlugin.DescriptionEx.EffectTextGainTp = TMPlugin.DescriptionEx.Parameters['effectTextGainTp'];
TMPlugin.DescriptionEx.EffectTextAddState = TMPlugin.DescriptionEx.Parameters['effectTextAddState'];
TMPlugin.DescriptionEx.EffectTextRemoveState = TMPlugin.DescriptionEx.Parameters['effectTextRemoveState'];
TMPlugin.DescriptionEx.EffectTextAddBuff = TMPlugin.DescriptionEx.Parameters['effectTextAddBuff'];
TMPlugin.DescriptionEx.EffectTextAddDebuff = TMPlugin.DescriptionEx.Parameters['effectTextAddDebuff'];
TMPlugin.DescriptionEx.EffectTextRemoveBuff = TMPlugin.DescriptionEx.Parameters['effectTextRemoveBuff'];
TMPlugin.DescriptionEx.EffectTextRemoveDebuff = TMPlugin.DescriptionEx.Parameters['effectTextRemoveDebuff'];
TMPlugin.DescriptionEx.EffectTextSpecial = TMPlugin.DescriptionEx.Parameters['effectTextSpecial'];
TMPlugin.DescriptionEx.EffectTextGrow = TMPlugin.DescriptionEx.Parameters['effectTextGrow'];
TMPlugin.DescriptionEx.EffectTextLearnSkill = TMPlugin.DescriptionEx.Parameters['effectTextLearnSkill'];
TMPlugin.DescriptionEx.DamageTextDamageHp  = TMPlugin.DescriptionEx.Parameters['damageTextDamageHp'];
TMPlugin.DescriptionEx.DamageTextDamageMp  = TMPlugin.DescriptionEx.Parameters['damageTextDamageMp'];
TMPlugin.DescriptionEx.DamageTextRecoverHp = TMPlugin.DescriptionEx.Parameters['damageTextRecoverHp'];
TMPlugin.DescriptionEx.DamageTextRecoverMp = TMPlugin.DescriptionEx.Parameters['damageTextRecoverMp'];
TMPlugin.DescriptionEx.DamageTextDrainHp   = TMPlugin.DescriptionEx.Parameters['damageTextDrainHp'];
TMPlugin.DescriptionEx.DamageTextDrainMp   = TMPlugin.DescriptionEx.Parameters['damageTextDrainMp'];
TMPlugin.DescriptionEx.TraitTextElementRate = TMPlugin.DescriptionEx.Parameters['traitTextElementRate'];
TMPlugin.DescriptionEx.TraitTextDebuffRate = TMPlugin.DescriptionEx.Parameters['traitTextDebuffRate'];
TMPlugin.DescriptionEx.TraitTextStateRate = TMPlugin.DescriptionEx.Parameters['traitTextStateRate'];
TMPlugin.DescriptionEx.TraitTextStateResist = TMPlugin.DescriptionEx.Parameters['traitTextStateResist'];
TMPlugin.DescriptionEx.TraitTextParam = TMPlugin.DescriptionEx.Parameters['traitTextParam'];
TMPlugin.DescriptionEx.TraitTextXparam = TMPlugin.DescriptionEx.Parameters['traitTextXparam'];
TMPlugin.DescriptionEx.TraitTextSparam = TMPlugin.DescriptionEx.Parameters['traitTextSparam'];
TMPlugin.DescriptionEx.TraitTextAttackElement = TMPlugin.DescriptionEx.Parameters['traitTextAttackElement'];
TMPlugin.DescriptionEx.TraitTextAttackState = TMPlugin.DescriptionEx.Parameters['traitTextAttackState'];
TMPlugin.DescriptionEx.TraitTextAttackSpeed = TMPlugin.DescriptionEx.Parameters['traitTextAttackSpeed'];
TMPlugin.DescriptionEx.TraitTextAttackTimes = TMPlugin.DescriptionEx.Parameters['traitTextAttackTimes'];
TMPlugin.DescriptionEx.TraitTextStypeAdd = TMPlugin.DescriptionEx.Parameters['traitTextStypeAdd'];
TMPlugin.DescriptionEx.TraitTextStypeSeal = TMPlugin.DescriptionEx.Parameters['traitTextStypeSeal'];
TMPlugin.DescriptionEx.TraitTextSkillAdd = TMPlugin.DescriptionEx.Parameters['traitTextSkillAdd'];
TMPlugin.DescriptionEx.TraitTextSkillSeal = TMPlugin.DescriptionEx.Parameters['traitTextSkillSeal'];
TMPlugin.DescriptionEx.TraitTextEquipWtype = TMPlugin.DescriptionEx.Parameters['traitTextEquipWtype'];
TMPlugin.DescriptionEx.TraitTextEquipAtype = TMPlugin.DescriptionEx.Parameters['traitTextEquipAtype'];
TMPlugin.DescriptionEx.TraitTextEquipLock = TMPlugin.DescriptionEx.Parameters['traitTextEquipLock'];
TMPlugin.DescriptionEx.TraitTextEquipSeal = TMPlugin.DescriptionEx.Parameters['traitTextEquipSeal'];
TMPlugin.DescriptionEx.TraitTextActionPlus = TMPlugin.DescriptionEx.Parameters['traitTextActionPlus'];
TMPlugin.DescriptionEx.XparamText = TMPlugin.DescriptionEx.Parameters['xparamText'].split(',');
TMPlugin.DescriptionEx.SparamText = TMPlugin.DescriptionEx.Parameters['sparamText'].split(',');
TMPlugin.DescriptionEx.ConsumableValue = TMPlugin.DescriptionEx.Parameters['consumableValue'].split(',');
TMPlugin.DescriptionEx.OccasionValue = TMPlugin.DescriptionEx.Parameters['occasionValue'].split(',');
TMPlugin.DescriptionEx.ScopeValue = TMPlugin.DescriptionEx.Parameters['scopeValue'].split(',');
TMPlugin.DescriptionEx.HitTypeValue = TMPlugin.DescriptionEx.Parameters['hitTypeValue'].split(',');
TMPlugin.DescriptionEx.SlotTypeValue = TMPlugin.DescriptionEx.Parameters['slotTypeValue'].split(',');
TMPlugin.DescriptionEx.SpecialFlagValue = TMPlugin.DescriptionEx.Parameters['specialFlagValue'].split(',');
TMPlugin.DescriptionEx.PartyAbilityValue = TMPlugin.DescriptionEx.Parameters['partyAbilityValue'].split(',');
TMPlugin.DescriptionEx.ElementFooter = TMPlugin.DescriptionEx.Parameters['elementFooter'];
TMPlugin.DescriptionEx.CostExTextHp   = TMPlugin.DescriptionEx.Parameters['costExTextHp'];
TMPlugin.DescriptionEx.CostExTextItem = TMPlugin.DescriptionEx.Parameters['costExTextItem'];
TMPlugin.DescriptionEx.CostExTextExp  = TMPlugin.DescriptionEx.Parameters['costExTextExp'];
TMPlugin.DescriptionEx.CostExTextGold = TMPlugin.DescriptionEx.Parameters['costExTextGold'];
TMPlugin.DescriptionEx.PassiveAlwaysText = TMPlugin.DescriptionEx.Parameters['passiveAlwaysText'];
TMPlugin.DescriptionEx.PassiveTpText = TMPlugin.DescriptionEx.Parameters['passiveTpText'];
TMPlugin.DescriptionEx.PassiveTpText2 = TMPlugin.DescriptionEx.Parameters['passiveTpText2'];
TMPlugin.DescriptionEx.PassiveStateText = TMPlugin.DescriptionEx.Parameters['passiveStateText'];

(function() {

  //-----------------------------------------------------------------------------
  // Input
  //

  Input.keyMapper[+TMPlugin.DescriptionEx.Parameters['descriptionKeyCode']] = 'description';

  //-----------------------------------------------------------------------------
  // Window_Selectable
  //

  var _Window_Selectable_processHandling = Window_Selectable.prototype.processHandling;
  Window_Selectable.prototype.processHandling = function() {
    if (this.isOpenAndActive() && this.isDescriptionEnabled() &&
        this.isDescriptionTriggered()) {
      this.processDescription();
    } else {
      _Window_Selectable_processHandling.call(this);
    }
  };

  Window_Selectable.prototype.isDescriptionEnabled = function() {
    return this.isHandled('description');
  };

  Window_Selectable.prototype.isDescriptionTriggered = function() {
    if (this._helpWindow && TouchInput.isTriggered()) {
      var wx = (Graphics.width - Graphics.boxWidth) / 2 + this._helpWindow.x;
      var wy = (Graphics.height - Graphics.boxHeight) / 2 + this._helpWindow.y;
      return (TouchInput.x >= wx && TouchInput.x < wx + this._helpWindow.width &&
              TouchInput.y >= wy && TouchInput.y < wy + this._helpWindow.height);
    }
    return Input.isRepeated('description');
  };

  Window_Selectable.prototype.processDescription = function() {
    if (this.isCurrentItemDescriptionEnabled()) {
      SoundManager.playOk();
      this.updateInputData();
      this.deactivate();
      this.callDescriptionHandler();
    } else {
      this.playBuzzerSound();
    }
  };

  Window_Selectable.prototype.isCurrentItemDescriptionEnabled = function() {
    return true;
  };
  
  Window_Selectable.prototype.callDescriptionHandler = function() {
    if (this.isHandled('description')) {
      this._handlers['description'](this);
    }
  };
  
  //-----------------------------------------------------------------------------
  // Window_ItemList
  //

  Window_ItemList.prototype.isCurrentItemDescriptionEnabled = function() {
    return this.item();
  };
  
  //-----------------------------------------------------------------------------
  // Window_SkillList
  //

  Window_SkillList.prototype.isCurrentItemDescriptionEnabled = function() {
    return this.item();
  };
  
  //-----------------------------------------------------------------------------
  // Window_EquipSlot
  //

  Window_EquipSlot.prototype.isCurrentItemDescriptionEnabled = function() {
    return this.item();
  };
  
  //-----------------------------------------------------------------------------
  // Window_ShopBuy
  //

  Window_ShopBuy.prototype.isCurrentItemDescriptionEnabled = function() {
    return this.item();
  };
  
  //-----------------------------------------------------------------------------
  // Window_Message
  //
  
  Window_Message.prototype.setDescriptionExWindow = function(descriptionExWindow) {
    this._descriptionExWindow = descriptionExWindow;
  };

  var _Window_Message_isAnySubWindowActive = Window_Message.prototype.isAnySubWindowActive;
  Window_Message.prototype.isAnySubWindowActive = function() {
    return (_Window_Message_isAnySubWindowActive.call(this) ||
            this._descriptionExWindow.active);
  };

  //-----------------------------------------------------------------------------
  // Window_DescriptionEx
  //

  function Window_DescriptionEx() {
    this.initialize.apply(this, arguments);
  }

  Window_DescriptionEx.prototype = Object.create(Window_Selectable.prototype);
  Window_DescriptionEx.prototype.constructor = Window_DescriptionEx;

  Window_DescriptionEx.prototype.initialize = function() {
    var width = Graphics.boxWidth;
    var height = Graphics.boxHeight;
    Window_Selectable.prototype.initialize.call(this, 0, 0, width, height);
    this.openness = 0;
  };

  Window_DescriptionEx.prototype.setItem = function(item) {
    if (this._item !== item) {
      this._item = item;
      this.refresh();
    }
  };

  Window_DescriptionEx.prototype.refresh = function() {
    this.contents.clear();
    if (this._item) {
      if (DataManager.isItem(this._item)) {
        this.refreshItem();
      } else if (DataManager.isWeapon(this._item)) {
        this.refreshWeapon();
      } else if (DataManager.isArmor(this._item)) {
        this.refreshArmor();
      } else if (DataManager.isSkill(this._item)) {
        this.refreshSkill();
      }
    }
  };

  Window_DescriptionEx.prototype.refreshItem = function() {
    var y = 0;
    this.drawItemName(this._item, 0, y);
    this.drawItemType();
    y = this.drawHorzLine(y + this.lineHeight());
    this.drawItemParameters(this.textPadding(), y);
    this.drawEffects(this.contents.width - this.textPadding() - TMPlugin.DescriptionEx.RightPaneWidth, y);
    var profileY = this.profileY();
    y = this.drawHorzLine(profileY);
    this.drawProfile(0, y);
  };

  Window_DescriptionEx.prototype.refreshWeapon = function() {
    var y = 0;
    this.drawItemName(this._item, 0, y);
    this.drawWeaponType();
    y = this.drawHorzLine(y + this.lineHeight());
    this.drawEquipParameters(this.textPadding(), y);
    this.drawTraits(this.contents.width - this.textPadding() - TMPlugin.DescriptionEx.RightPaneWidth, y);
    var profileY = this.profileY();
    y = this.drawHorzLine(profileY);
    this.drawProfile(0, y);
  };

  Window_DescriptionEx.prototype.refreshArmor = function() {
    var y = 0;
    this.drawItemName(this._item, 0, y);
    this.drawArmorType();
    y = this.drawHorzLine(y + this.lineHeight());
    this.drawEquipParameters(this.textPadding(), y);
    this.drawTraits(this.contents.width - this.textPadding() - TMPlugin.DescriptionEx.RightPaneWidth, y);
    var profileY = this.profileY();
    y = this.drawHorzLine(profileY);
    this.drawProfile(0, y);
  };
  
  Window_DescriptionEx.prototype.refreshSkill = function() {
    var y = 0;
    this.drawItemName(this._item, 0, y);
    this.drawSkillType();
    y = this.drawHorzLine(y + this.lineHeight());
    if (Imported.TMPassiveSkill && this._item.meta.passive) {
      this.drawPassiveSkillParameters(this.textPadding(), y);
    } else {
      this.drawSkillParameters(this.textPadding(), y);
      this.drawEffects(this.contents.width - this.textPadding() - TMPlugin.DescriptionEx.RightPaneWidth, y);
    }
    var profileY = this.profileY();
    y = this.drawHorzLine(profileY);
    this.drawProfile(0, y);
  };

  Window_DescriptionEx.prototype.drawItemType = function() {
    if (this._item.meta.dType) {
      var text = this._item.meta.dType;
    } else if (this._item.itypeId === 1) {
      var text = TextManager.item;
    } else if (this._item.itypeId === 2) {
      var text = TextManager.keyItem;
    } else if (this._item.itypeId === 3) {
      var text = TMPlugin.DescriptionEx.SecretItemA;
    } else if (this._item.itypeId === 4) {
      var text = TMPlugin.DescriptionEx.SecretItemB;
    }
    this.drawText(text, 0, 0, this.contents.width - this.textPadding(), 'right');
  };
  
  Window_DescriptionEx.prototype.drawWeaponType = function() {
    var text = this._item.meta.dType ? this._item.meta.dType :
               $dataSystem.weaponTypes[this._item.wtypeId];
    this.drawText(text, 0, 0, this.contents.width - this.textPadding(), 'right');
  };
  
  Window_DescriptionEx.prototype.drawArmorType = function() {
    var text = this._item.meta.dType ? this._item.meta.dType :
               $dataSystem.armorTypes[this._item.atypeId];
    this.drawText(text, 0, 0, this.contents.width - this.textPadding(), 'right');
  };
  
  Window_DescriptionEx.prototype.drawSkillType = function() {
    var text = this._item.meta.dType ? this._item.meta.dType :
               $dataSystem.skillTypes[this._item.stypeId];
    this.drawText(text, 0, 0, this.contents.width - this.textPadding(), 'right');
  };
  
  Window_DescriptionEx.prototype.drawItemParameters = function(x, y) {
    var lineHeight = this.lineHeight();
    y = this.drawLeftParameter(x, y, TMPlugin.DescriptionEx.ConsumableText,
                               TMPlugin.DescriptionEx.ConsumableValue[this._item.consumable ? 0 : 1]);
    y = this.drawLeftParameter(x, y, TMPlugin.DescriptionEx.OccasionText,
                               TMPlugin.DescriptionEx.OccasionValue[this._item.occasion]);
    y = this.drawBattleItemParameters(x, y + lineHeight);
    this.drawPrice(x, y + lineHeight);
  };
  
  Window_DescriptionEx.prototype.drawEquipParameters = function(x, y, item) {
    item = item || this._item;
    var lineHeight = this.lineHeight();
    for (var i = 0; i < 8; i++) {
      if (TextManager.param(i)) {
        this.changeTextColor(this.systemColor());
        this.drawText(TextManager.param(i), x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
        this.resetTextColor();;
        this.drawText(item.params[i], x, y, TMPlugin.DescriptionEx.LeftPaneWidth, 'right');
        y += lineHeight;
      }
    }
    this.drawPrice(x, y + lineHeight);
  };
  
  Window_DescriptionEx.prototype.drawSkillParameters = function(x, y) {
    var lineHeight = this.lineHeight();
    this.changeTextColor(this.systemColor());
    this.drawText(TMPlugin.DescriptionEx.MpCostText, x, y + lineHeight * 0, TMPlugin.DescriptionEx.LeftPaneWidth);
    this.drawText(TMPlugin.DescriptionEx.TpCostText, x, y + lineHeight * 1, TMPlugin.DescriptionEx.LeftPaneWidth);
    this.drawText(TMPlugin.DescriptionEx.OccasionText, x, y + lineHeight * 2, TMPlugin.DescriptionEx.LeftPaneWidth);
    this.resetTextColor();
    var text = this._item.mpCost;
    if (Imported.TMSkillCostEx && this._item.meta.mpRateCost) {
      text = this._item.meta.mpRateCost + '%';
    }
    this.drawText(text, x, y + lineHeight * 0, TMPlugin.DescriptionEx.LeftPaneWidth, 'right');
    this.drawText(this._item.tpCost, x, y + lineHeight * 1, TMPlugin.DescriptionEx.LeftPaneWidth, 'right');
    text = TMPlugin.DescriptionEx.OccasionValue[this._item.occasion];
    this.drawText(text, x, y + lineHeight * 2, TMPlugin.DescriptionEx.LeftPaneWidth, 'right');
    this.drawLeftParameter(x, y + lineHeight * 3, TMPlugin.DescriptionEx.RequiredWtypeText,
                           this.requiredWtypeValue());
    this.drawBattleItemParameters(x, y + lineHeight * 5);
  };
  
  Window_DescriptionEx.prototype.elementText = function(elementId) {
    if (elementId > 0) {
      return $dataSystem.elements[elementId] + TMPlugin.DescriptionEx.ElementFooter;
    } else if (elementId === 0) {
      return '无' + TMPlugin.DescriptionEx.ElementFooter;
    } else {
      return '';
    }
  };
  
  Window_DescriptionEx.prototype.requiredWtypeValue = function() {
    if (this._item.requiredWtypeId1 > 0) {
      text = $dataSystem.weaponTypes[this._item.requiredWtypeId1];
      if (this._item.requiredWtypeId2 > 0) {
        text += ' ' + $dataSystem.weaponTypes[this._item.requiredWtypeId2];
      }
    } else if (this._item.requiredWtypeId2 > 0) {
      text = $dataSystem.weaponTypes[this._item.requiredWtypeId2];
    } else {
      text = '无';
    }
    return text;
  };
  
  Window_DescriptionEx.prototype.valueToText = function(value) {
    return (value >= 0 ? '+' : '') + value;
  };
  
  Window_DescriptionEx.prototype.rateToText = function(rate, useSign) {
    if (useSign === undefined) useSign = true;
    return (useSign && rate > 1 ? '+' : '') + (rate * 1000000 - 1000000) / 10000;
  };
  
  Window_DescriptionEx.prototype.drawBattleItemParameters = function(x, y) {
    y = this.drawLeftParameter(x, y, TMPlugin.DescriptionEx.ScopeText,
                               TMPlugin.DescriptionEx.ScopeValue[this._item.scope]);
    y = this.drawLeftParameter(x, y, TMPlugin.DescriptionEx.SpeedText, this._item.speed);
    y = this.drawLeftParameter(x, y, TMPlugin.DescriptionEx.SuccessRateText, this._item.successRate + '%');
    y = this.drawLeftParameter(x, y, TMPlugin.DescriptionEx.RepeatsText, this._item.repeats);
    y = this.drawLeftParameter(x, y, TMPlugin.DescriptionEx.TpGainText, this._item.tpGain);
    y = this.drawLeftParameter(x, y, TMPlugin.DescriptionEx.HitTypeText,
                               TMPlugin.DescriptionEx.HitTypeValue[this._item.hitType]);
    return y;
  };
  
  Window_DescriptionEx.prototype.drawLeftParameter = function(x, y, text, value) {
    if (text === '') return y;
    this.changeTextColor(this.systemColor());
    this.drawText(text, x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    this.resetTextColor();;
    this.drawText(value, x, y, TMPlugin.DescriptionEx.LeftPaneWidth, 'right');
    return y + this.lineHeight();
  };
  
  Window_DescriptionEx.prototype.drawRightParameter = function(x, y, text) {
    if (text === '') return y;
    var lineHeight = this.lineHeight();
    y += lineHeight;
    if (y <= this.profileY() - lineHeight) {
      this.resetTextColor();
      this.drawText(text, x, y, TMPlugin.DescriptionEx.RightPaneWidth);
    }
    return y;
  };
  
  Window_DescriptionEx.prototype.drawPrice = function(x, y) {
    if (TMPlugin.DescriptionEx.PriceText === '' || this._item.price === undefined) return y;
    this.changeTextColor(this.systemColor());
    this.drawText(TMPlugin.DescriptionEx.PriceText, x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    this.drawCurrencyValue((this._item.price * TMPlugin.DescriptionEx.PriceRate).toFixed(0),
        TextManager.currencyUnit, x, y, TMPlugin.DescriptionEx.LeftPaneWidth);
    return y + this.lineHeight();
  };
  
  Window_DescriptionEx.prototype.drawEffects = function(x, y) {
    this.changeTextColor(this.systemColor());
    this.drawText(TMPlugin.DescriptionEx.EffectText, x, y, TMPlugin.DescriptionEx.RightPaneWidth);
    this.resetTextColor();;
    if (Imported.TMSkillCostEx) y = this.drawCostEx(x, y);
    y = this.drawDamage(x, y);
    for (var i = 0; i < this._item.effects.length; i++) {
      var effect = this._item.effects[i];
      var text = '';
      if (effect.code === Game_Action.EFFECT_RECOVER_HP) {
        if (effect.value1 !== 0) {
          text = TMPlugin.DescriptionEx.EffectTextRecoverHp.format(effect.value1 * 1000000 / 10000 + '%');
        } else {
          text = TMPlugin.DescriptionEx.EffectTextRecoverHp.format(effect.value2);
        }
      } else if (effect.code === Game_Action.EFFECT_RECOVER_MP) {
        if (effect.value1 !== 0) {
          text = TMPlugin.DescriptionEx.EffectTextRecoverMp.format(effect.value1 * 1000000 / 10000 + '%');
        } else {
          text = TMPlugin.DescriptionEx.EffectTextRecoverMp.format(effect.value2);
        }
      } else if (effect.code === Game_Action.EFFECT_GAIN_TP) {
        text = TMPlugin.DescriptionEx.EffectTextGainTp.format(effect.value1);
      } else if (effect.code === Game_Action.EFFECT_ADD_STATE) {
        if (effect.dataId > 0) {
          text = TMPlugin.DescriptionEx.EffectTextAddState.format($dataStates[effect.dataId].name,
                 Math.floor(effect.value1 * 1000000 / 10000));
        }
      } else if (effect.code === Game_Action.EFFECT_REMOVE_STATE) {
        text = TMPlugin.DescriptionEx.EffectTextRemoveState.format($dataStates[effect.dataId].name,
               Math.floor(effect.value1 * 1000000 / 10000));
      } else if (effect.code === Game_Action.EFFECT_ADD_BUFF) {
        text = TMPlugin.DescriptionEx.EffectTextAddBuff.format(TextManager.param(effect.dataId), effect.value1);
      } else if (effect.code === Game_Action.EFFECT_ADD_DEBUFF) {
        text = TMPlugin.DescriptionEx.EffectTextAddDebuff.format(TextManager.param(effect.dataId), effect.value1);
      } else if (effect.code === Game_Action.EFFECT_REMOVE_BUFF) {
        text = TMPlugin.DescriptionEx.EffectTextRemoveBuff.format(TextManager.param(effect.dataId), effect.value1);
      } else if (effect.code === Game_Action.EFFECT_REMOVE_DEBUFF) {
        text = TMPlugin.DescriptionEx.EffectTextRemoveDebuff.format(TextManager.param(effect.dataId), effect.value1);
      } else if (effect.code === Game_Action.EFFECT_SPECIAL) {
        text = TMPlugin.DescriptionEx.EffectTextSpecial;
      } else if (effect.code === Game_Action.EFFECT_GROW) {
        text = TMPlugin.DescriptionEx.EffectTextGrow.format(TextManager.param(effect.dataId), effect.value1);
      } else if (effect.code === Game_Action.EFFECT_LEARN_SKILL) {
        text = TMPlugin.DescriptionEx.EffectTextLearnSkill.format($dataSkills[effect.dataId].name);
      }
      y = this.drawRightParameter(x, y, text);
    }
    this.drawOptionText(x, y);
  };
  
  Window_DescriptionEx.prototype.profileY = function() {
    return this.contents.height - this.lineHeight() * 2 - TMPlugin.DescriptionEx.HorzLineHeight;
  };
  
  Window_DescriptionEx.prototype.drawDamage = function(x, y) {
    var text = '';
    if (this._item.damage.type === 1 || this._item.damage.type === 5) {
      text = TMPlugin.DescriptionEx.DamageTextDamageHp.format(this.elementText(this._item.damage.elementId));
    } else if (this._item.damage.type === 2 || this._item.damage.type === 6) {
      text = TMPlugin.DescriptionEx.DamageTextDamageMp.format(this.elementText(this._item.damage.elementId));
    } else if (this._item.damage.type === 3) {
      text = TMPlugin.DescriptionEx.DamageTextRecoverHp;
    } else if (this._item.damage.type === 4) {
      text = TMPlugin.DescriptionEx.DamageTextRecoverMp;
    }
    y = this.drawRightParameter(x, y, text);
    if (this._item.damage.type >= 5) {
      text = this._item.damage.type === 5 ? TMPlugin.DescriptionEx.DamageTextDrainHp :
             TMPlugin.DescriptionEx.DamageTextDrainMp;
      y = this.drawRightParameter(x, y, text);
    }
    return y;
  };
  
  Window_DescriptionEx.prototype.drawTraits = function(x, y, item) {
    item = item || this._item
    this.changeTextColor(this.systemColor());
    this.drawText(TMPlugin.DescriptionEx.TraitText, x, y, TMPlugin.DescriptionEx.RightPaneWidth);
    this.resetTextColor();;
    if (Imported.TMPassiveSkill && this._item.meta.passive) {
      y = this.drawPassiveSkillOccasion(x, y);
    }
    for (var i = 0; i < item.traits.length; i++) {
      var trait = item.traits[i];
      var text = '';
      if (trait.code === Game_BattlerBase.TRAIT_ELEMENT_RATE) {
        text = TMPlugin.DescriptionEx.TraitTextElementRate.format(this.elementText(trait.dataId),
               this.rateToText(trait.value));
      } else if (trait.code === Game_BattlerBase.TRAIT_DEBUFF_RATE) {
        text = TMPlugin.DescriptionEx.TraitTextDebuffRate.format(TextManager.param(trait.dataId),
               this.rateToText(trait.value));
      } else if (trait.code === Game_BattlerBase.TRAIT_STATE_RATE) {
        text = TMPlugin.DescriptionEx.TraitTextStateRate.format($dataStates[trait.dataId].name,
               this.rateToText(trait.value));
      } else if (trait.code === Game_BattlerBase.TRAIT_STATE_RESIST) {
        text = TMPlugin.DescriptionEx.TraitTextStateResist.format($dataStates[trait.dataId].name);
      } else if (trait.code === Game_BattlerBase.TRAIT_PARAM) {
        text = TMPlugin.DescriptionEx.TraitTextParam.format(TextManager.param(trait.dataId),
               this.rateToText(trait.value));
      } else if (trait.code === Game_BattlerBase.TRAIT_XPARAM) {
        text = TMPlugin.DescriptionEx.TraitTextXparam.format(TMPlugin.DescriptionEx.XparamText[trait.dataId],
               this.valueToText(trait.value * 1000000 / 10000));
      } else if (trait.code === Game_BattlerBase.TRAIT_SPARAM) {
        text = TMPlugin.DescriptionEx.TraitTextSparam.format(TMPlugin.DescriptionEx.SparamText[trait.dataId],
               this.rateToText(trait.value));
      } else if (trait.code === Game_BattlerBase.TRAIT_ATTACK_ELEMENT) {
        text = TMPlugin.DescriptionEx.TraitTextAttackElement.format(this.elementText(trait.dataId));
      } else if (trait.code === Game_BattlerBase.TRAIT_ATTACK_STATE) {
        text = TMPlugin.DescriptionEx.TraitTextAttackState.format($dataStates[trait.dataId].name,
               trait.value * 1000000 / 10000);
      } else if (trait.code === Game_BattlerBase.TRAIT_ATTACK_SPEED) {
        text = TMPlugin.DescriptionEx.TraitTextAttackSpeed.format(this.valueToText(trait.value));
      } else if (trait.code === Game_BattlerBase.TRAIT_ATTACK_TIMES) {
        text = TMPlugin.DescriptionEx.TraitTextAttackTimes.format(this.valueToText(trait.value));
      } else if (trait.code === Game_BattlerBase.TRAIT_STYPE_ADD) {
        text = TMPlugin.DescriptionEx.TraitTextStypeAdd.format($dataSystem.skillTypes[trait.dataId]);
      } else if (trait.code === Game_BattlerBase.TRAIT_STYPE_SEAL) {
        text = TMPlugin.DescriptionEx.TraitTextStypeSeal.format($dataSystem.skillTypes[trait.dataId]);
      } else if (trait.code === Game_BattlerBase.TRAIT_SKILL_ADD) {
        text = TMPlugin.DescriptionEx.TraitTextSkillAdd.format($dataSkills[trait.dataId].name);
      } else if (trait.code === Game_BattlerBase.TRAIT_SKILL_SEAL) {
        text = TMPlugin.DescriptionEx.TraitTextSkillSeal.format($dataSkills[trait.dataId].name);
      } else if (trait.code === Game_BattlerBase.TRAIT_EQUIP_WTYPE) {
        text = TMPlugin.DescriptionEx.TraitTextEquipWtype.format($dataSystem.weaponTypes[trait.dataId]);
      } else if (trait.code === Game_BattlerBase.TRAIT_EQUIP_ATYPE) {
        text = TMPlugin.DescriptionEx.TraitTextEquipAtype.format($dataSystem.armorTypes[trait.dataId]);
      } else if (trait.code === Game_BattlerBase.TRAIT_EQUIP_LOCK) {
        text = TMPlugin.DescriptionEx.TraitTextEquipLock.format($dataSystem.equipTypes[trait.dataId]);
      } else if (trait.code === Game_BattlerBase.TRAIT_EQUIP_SEAL) {
        text = TMPlugin.DescriptionEx.TraitTextEquipSeal.format($dataSystem.equipTypes[trait.dataId]);
      } else if (trait.code === Game_BattlerBase.TRAIT_SLOT_TYPE) {
        text = TMPlugin.DescriptionEx.SlotTypeValue[trait.value];
      } else if (trait.code === Game_BattlerBase.TRAIT_ACTION_PLUS) {
        text = TMPlugin.DescriptionEx.TraitTextActionPlus.format(trait.value * 1000000 / 10000);
      } else if (trait.code === Game_BattlerBase.TRAIT_SPECIAL_FLAG) {
        text = TMPlugin.DescriptionEx.SpecialFlagValue[trait.dataId];
      } else if (trait.code === Game_BattlerBase.TRAIT_PARTY_ABILITY) {
        text = TMPlugin.DescriptionEx.PartyAbilityValue[trait.dataId];
      }
      y = this.drawRightParameter(x, y, text);
    }
    this.drawOptionText(x, y);
  };
  
  Window_DescriptionEx.prototype.drawOptionText = function(x, y) {
    if (this._item.meta.dText) {
      var textArray = this._item.meta.dText.split(/\r\n|\r|\n/);
      for (var i = 0; i < textArray.length; i++) {
        y = this.drawRightParameter(x, y, textArray[i]);
      }
    }
  };
  
  Window_DescriptionEx.prototype.drawHorzLine = function(y) {
    var lineY = y + TMPlugin.DescriptionEx.HorzLineHeight / 2 - 1;
    this.contents.paintOpacity = 48;
    this.contents.fillRect(0, lineY, this.contentsWidth(), 2, this.lineColor());
    this.contents.paintOpacity = 255;
    return y + TMPlugin.DescriptionEx.HorzLineHeight;
  };

  Window_DescriptionEx.prototype.lineColor = function() {
    return this.normalColor();
  };

  Window_DescriptionEx.prototype.drawProfile = function(x, y) {
    this.drawTextEx(this._item.description, x + this.textPadding(), y);
  };

  Window_DescriptionEx.prototype.drawCostEx = function(x, y) {
    var dummyActor = new Game_Actor(1);
    var text = '';
    if (this._item.meta.hpRateCost) {
      text = TMPlugin.DescriptionEx.CostExTextHp.format(this._item.meta.hpRateCost + '%');
    } else if (this._item.meta.hpCost) {
      text = TMPlugin.DescriptionEx.CostExTextHp.format(this._item.meta.hpCost);
    }
    y = this.drawRightParameter(x, y, text);
    var cost = dummyActor.skillItemCost(this._item);
    if (cost) {
      text = TMPlugin.DescriptionEx.CostExTextItem.format(cost.item.name, cost.num);
      y = this.drawRightParameter(x, y, text);
    }
    if (this._item.meta.expCost) {
      text = TMPlugin.DescriptionEx.CostExTextExp.format(this._item.meta.expCost);
      y = this.drawRightParameter(x, y, text);
    }
    if (this._item.meta.goldCost) {
      text = TMPlugin.DescriptionEx.CostExTextGold.format(this._item.meta.goldCost +
             TextManager.currencyUnit);
      y = this.drawRightParameter(x, y, text);
    }
    return y;
  };
  
  Window_DescriptionEx.prototype.drawPassiveSkillParameters = function(x, y) {
    var item = $dataWeapons[+this._item.meta.passive];
    this.drawTraits(this.contents.width - this.textPadding() - TMPlugin.DescriptionEx.RightPaneWidth, y, item);
    this.drawLeftParameter(x, y, TMPlugin.DescriptionEx.RequiredWtypeText, this.requiredWtypeValue());
    y += this.lineHeight() * 2;
    this.drawEquipParameters(this.textPadding(), y, item);
  };
  
  Window_DescriptionEx.prototype.drawPassiveSkillOccasion = function(x, y) {
    var lastY = y;
    if (this._item.meta.passiveTp) {
      if (+this._item.meta.passiveTp > 0) {
        var text = TMPlugin.DescriptionEx.PassiveTpText.format(this._item.meta.passiveTp);
      } else {
        var text = TMPlugin.DescriptionEx.PassiveTpText2.format(-this._item.meta.passiveTp);
      }
      y = this.drawRightParameter(x, y, text);
    }
    if (this._item.meta.passiveState) {
      var text = TMPlugin.DescriptionEx.PassiveStateText.format($dataStates[+this._item.meta.passiveState].name);
      y = this.drawRightParameter(x, y, text);
    }
    if (lastY === y) {
      y = this.drawRightParameter(x, y, TMPlugin.DescriptionEx.PassiveAlwaysText);
    }
    return y;
  };
  
  //-----------------------------------------------------------------------------
  // Scene_Base
  //

  Scene_Base.prototype.createDescriptionExWindow = function() {
    this._descriptionExWindow = new Window_DescriptionEx();
    this._descriptionExWindow.setHandler('description', this.descriptionClose.bind(this));
    this._descriptionExWindow.setHandler('cancel',      this.descriptionClose.bind(this));
    this.addWindow(this._descriptionExWindow);
  };
  
  Scene_Base.prototype.descriptionOpen = function(mainWindow) {
    this._descriptionMainWindow = mainWindow;
    this._descriptionExWindow.setItem(this._descriptionMainWindow.item());
    this._descriptionExWindow.open();
    this._descriptionExWindow.activate();
  };
  
  Scene_Base.prototype.descriptionClose = function() {
    this._descriptionExWindow.close();
    this._descriptionMainWindow.activate();
  };

  //-----------------------------------------------------------------------------
  // Scene_Map
  //

  var _Scene_Map_createMessageWindow = Scene_Map.prototype.createMessageWindow;
  Scene_Map.prototype.createMessageWindow = function() {
    _Scene_Map_createMessageWindow.call(this);
    this._messageWindow._itemWindow.setHandler('description',
        this.descriptionOpen.bind(this));
    this.createDescriptionExWindow();
    this._messageWindow.setDescriptionExWindow(this._descriptionExWindow);
  };

  //-----------------------------------------------------------------------------
  // Scene_Item
  //

  var _Scene_Item_createItemWindow = Scene_Item.prototype.createItemWindow;
  Scene_Item.prototype.createItemWindow = function() {
    _Scene_Item_createItemWindow.call(this);
    this._itemWindow.setHandler('description', this.descriptionOpen.bind(this));
    this.createDescriptionExWindow();
  };

  //-----------------------------------------------------------------------------
  // Scene_Skill
  //

  var _Scene_Skill_createItemWindow = Scene_Skill.prototype.createItemWindow;
  Scene_Skill.prototype.createItemWindow = function() {
    _Scene_Skill_createItemWindow.call(this);
    this._itemWindow.setHandler('description', this.descriptionOpen.bind(this));
    this.createDescriptionExWindow();
  };

  //-----------------------------------------------------------------------------
  // Scene_Equip
  //

  var _Scene_Equip_createItemWindow = Scene_Equip.prototype.createItemWindow;
  Scene_Equip.prototype.createItemWindow = function() {
    _Scene_Equip_createItemWindow.call(this);
    this._itemWindow.setHandler('description', this.descriptionOpen.bind(this));
    this.createDescriptionExWindow();
  };

  var _Scene_Equip_createSlotWindow = Scene_Equip.prototype.createSlotWindow;
  Scene_Equip.prototype.createSlotWindow = function() {
    _Scene_Equip_createSlotWindow.call(this);
    this._slotWindow.setHandler('description', this.descriptionOpen.bind(this));
  };

  //-----------------------------------------------------------------------------
  // Scene_Shop
  //

  var _Scene_Shop_createBuyWindow = Scene_Shop.prototype.createBuyWindow;
  Scene_Shop.prototype.createBuyWindow = function() {
    _Scene_Shop_createBuyWindow.call(this);
    this._buyWindow.setHandler('description', this.descriptionOpen.bind(this));
  };

  var _Scene_Shop_createSellWindow = Scene_Shop.prototype.createSellWindow;
  Scene_Shop.prototype.createSellWindow = function() {
    _Scene_Shop_createSellWindow.call(this);
    this._sellWindow.setHandler('description', this.descriptionOpen.bind(this));
    this.createDescriptionExWindow();
  };

  var _Scene_Shop_descriptionOpen = Scene_Shop.prototype.descriptionOpen;
  Scene_Shop.prototype.descriptionOpen = function(mainWindow) {
    _Scene_Shop_descriptionOpen.call(this, mainWindow);
    if (Imported.TMGreedShop) {
      if (this._materialWindow) this._materialWindow.hide();
    }
  };
  
  var _Scene_Shop_descriptionClose = Scene_Shop.prototype.descriptionClose;
  Scene_Shop.prototype.descriptionClose = function() {
    _Scene_Shop_descriptionClose.call(this);
    if (Imported.TMGreedShop) {
      if (this._materialWindow) this._materialWindow.show();
    }
  };

  //-----------------------------------------------------------------------------
  // Scene_Battle
  //

  var _Scene_Battle_isAnyInputWindowActive = Scene_Battle.prototype.isAnyInputWindowActive;
  Scene_Battle.prototype.isAnyInputWindowActive = function() {
    return _Scene_Battle_isAnyInputWindowActive.call(this) ||
           this._descriptionExWindow.active;
  };

  var _Scene_Battle_createSkillWindow = Scene_Battle.prototype.createSkillWindow;
  Scene_Battle.prototype.createSkillWindow = function() {
    _Scene_Battle_createSkillWindow.call(this);
    this._skillWindow.setHandler('description', this.descriptionOpen.bind(this));
  };

  var _Scene_Battle_createItemWindow = Scene_Battle.prototype.createItemWindow;
  Scene_Battle.prototype.createItemWindow = function() {
    _Scene_Battle_createItemWindow.call(this);
    this._itemWindow.setHandler('description', this.descriptionOpen.bind(this));
  };

  var _Scene_Battle_createMessageWindow = Scene_Battle.prototype.createMessageWindow;
  Scene_Battle.prototype.createMessageWindow = function() {
    _Scene_Battle_createMessageWindow.call(this);
    this._messageWindow._itemWindow.setHandler('description',
        this.descriptionOpen.bind(this));
    this.createDescriptionExWindow();
    this._messageWindow.setDescriptionExWindow(this._descriptionExWindow);
  };

})();
