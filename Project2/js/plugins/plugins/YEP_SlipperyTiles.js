﻿//=============================================================================
// Yanfly Engine Plugins - Slippery Tiles
// YEP_SlipperyTiles.js
//=============================================================================

var Imported = Imported || {};
Imported.YEP_SlipperyTiles = true;

var Yanfly = Yanfly || {};
Yanfly.Slip = Yanfly.Slip || {};

//=============================================================================
 /*:
 * @plugindesc v1.04 滑动图块
 * @author Yanfly Engine Plugins
 *
 * @param Slippery Frame
 * @desc This is the frame used while characters are sliding.
 * @default 2
 *
 * @param Slippery Region
 * @desc Any tile marked with this region is a slippery tile
 * regardless of terrain tag. Use 0 to ignore.
 * @default 0
 *
 * @param Slippery Speed
 * @desc Change the speed of the player while on a slippery tile to
 * this speed instead. Leave at 0 to keep current speed.
 * @default 0
 *
 * @help
 * ============================================================================
 * Introduction
 * ============================================================================
 *
 * 这个插件可以让你设置图块的滑动效果。你可以设置区域ID数来设置滑动图块
 *
 * ============================================================================
 * Notetags
 * ============================================================================
 *
 * 你可以使用下面标签来增加滑动图块
 *
 * Tileset Notetag:
 *   <Slippery Tile: x>
 *   <Slippery Tile: x, x, x>   设置图块ID
 *   Tiles with terrain ID x will be designated as slippery tiles.
 *
 * ============================================================================
 * Changelog
 * ============================================================================
 *
 * Version 1.04:
 * - Added 'Slippery Speed' plugin parameter to let you change the speed of
 * a character when its on a slippery tile.
 *
 * Version 1.03:
 * - Added anti-crash for switch checks from battle tests.
 *
 * Version 1.02:
 * - Updated for RPG Maker MV version 1.1.0.
 *
 * Version 1.01:
 * - Added failsafe for people who aren't using tilesets 
 *
 * Version 1.00:
 * - Finished Plugin!
 */
//=============================================================================

//=============================================================================
// Parameter Variables
//=============================================================================

Yanfly.Parameters = PluginManager.parameters('YEP_SlipperyTiles');
Yanfly.Param = Yanfly.Param || {};

Yanfly.Param.SlipRegion = Number(Yanfly.Parameters['Slippery Region']);
Yanfly.Param.SlipFrame = Number(Yanfly.Parameters['Slippery Frame']);
Yanfly.Param.SlipSpeed = Number(Yanfly.Parameters['Slippery Speed']);

//=============================================================================
// DataManager
//=============================================================================

Yanfly.Slip.DataManager_isDatabaseLoaded = DataManager.isDatabaseLoaded;
DataManager.isDatabaseLoaded = function() {
  if (!Yanfly.Slip.DataManager_isDatabaseLoaded.call(this)) return false;
  if (!Yanfly._loaded_YEP_SlipperyTiles) {
	  this.processSlipNotetags($dataTilesets);
    Yanfly._loaded_YEP_SlipperyTiles = true;
  }
	return true;
};

DataManager.processSlipNotetags = function(group) {
  var regexp1 = /<(?:SLIPPERY|slippery tile):[ ]*(\d+(?:\s*,\s*\d+)*)>/i;
	for (var n = 1; n < group.length; n++) {
		var obj = group[n];
		var notedata = obj.note.split(/[\r\n]+/);

    obj.slippery = [];

		for (var i = 0; i < notedata.length; i++) {
			var line = notedata[i];
			if (line.match(regexp1)) {
        var array = JSON.parse('[' + RegExp.$1.match(/\d+/g) + ']');
        obj.slippery = obj.slippery.concat(array);
      }
		}
	}
};

//=============================================================================
// Game_Map
//=============================================================================

Game_Map.prototype.isSlippery = function(mx, my) {
    if ($gameParty.inBattle()) return false;
    if (this.isValid(mx, my) && this.tileset()) {
      if (Yanfly.Param.SlipRegion !== 0 &&
        this.regionId(mx, my) === Yanfly.Param.SlipRegion) return true;
      var tagId = this.terrainTag(mx, my);
      var slipTiles = this.tileset().slippery;
      return slipTiles.contains(tagId);
    }
    return false;
};

//=============================================================================
// Game_CharacterBase
//=============================================================================

Game_CharacterBase.prototype.onSlipperyFloor = function() {
    return $gameMap.isSlippery(this._x, this._y);
};

Game_CharacterBase.prototype.slipperyPose = function() {
    if (!this.onSlipperyFloor()) return false;
    if (this._stepAnime) return false;
    return true;
};

Yanfly.Slip.Game_CharacterBase_pattern = Game_CharacterBase.prototype.pattern;
Game_CharacterBase.prototype.pattern = function() {
    if (this.slipperyPose()) return Yanfly.Param.SlipFrame;
    return Yanfly.Slip.Game_CharacterBase_pattern.call(this);
};

Yanfly.Slip.Game_CharacterBase_realMoveSpeed =
  Game_CharacterBase.prototype.realMoveSpeed;
Game_CharacterBase.prototype.realMoveSpeed = function() {
    if (this.onSlipperyFloor() && Yanfly.Param.SlipSpeed > 0) {
      return Yanfly.Param.SlipSpeed;
    }
    return Yanfly.Slip.Game_CharacterBase_realMoveSpeed.call(this);
};

//=============================================================================
// Game_Player
//=============================================================================

Yanfly.Slip.Game_Player_isDashing = Game_Player.prototype.isDashing;
Game_Player.prototype.isDashing = function() {
    if (this.onSlipperyFloor()) return false;
    return Yanfly.Slip.Game_Player_isDashing.call(this);
};

Yanfly.Slip.Game_Player_update = Game_Player.prototype.update;
Game_Player.prototype.update = function(sceneActive) {
    Yanfly.Slip.Game_Player_update.call(this, sceneActive);
    this.updateSlippery();
};

Game_Player.prototype.updateSlippery = function() {
    if ($gameMap.isEventRunning()) return;
    if (this.onSlipperyFloor() && !this.isMoving()) {
      $gameTemp.clearDestination();
			this.moveStraight(this._direction);
    }
};

//=============================================================================
// End of File
//=============================================================================
