var pcommand = Game_Interpreter.prototype.pluginCommand
//处理插件指令
Game_Interpreter.prototype.pluginCommand = function (command, args) {
    pcommand.call(this, command, args);
    if (command === "monitor") {
        $gameVariables.slice(20, 40).forEach(function (elem) {
            if(elem===0){

            }
        })
    }
};