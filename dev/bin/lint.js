// ESLINT CONFIGURATION - for this file only!
//   + console.log allowed
/* eslint-disable no-console */
// END ESLINT CONFIGURATION

//script variables
var execSync = require('child_process').execSync;
var glob = require('glob');



//methods
var mid_print = function (message) {
    var lines = message.split("\n");
    var len = lines.length;
    var i;
    
    for (i = 0; i < len; i++){
        console.log(mid_spacer + lines[i]);
    }
    console.log(mid_header);
};
var stdout_to_string = function (stdout) {
    var message = stdout.toString("utf8");

    if (message === "") {
        message = "\nAll clean!\n";
    }

    return message;
};
var mid_exec = function (command, command_text, message) {
    var result = "";

    console.log("#");
    console.log("#");
    console.log("#");
    console.log(mid_header);
    console.log(mid_spacer_header + message);
    console.log(mid_spacer_header + code_spacer + command_text);
    console.log(mid_header);

    try {
        result = execSync(command);
    } catch (err) {
        result = err.stdout;
    }

    mid_print(stdout_to_string(result));
};



//characters
var terminal_width = 80;
var heavy_char = "#";
var medium_char = "+";
//var light_char = "-";
var terminal_char = "$";

//header
var big_header = heavy_char;
var mid_header = heavy_char
//var small_header = heavy_char;

//spacing
var space = " ";
var spacer = space + space + space + space;
var mid_spacer = heavy_char + space + spacer + medium_char + space;
var mid_spacer_header = heavy_char + space + spacer + medium_char + space;
//var small_spacer = heavy_char + space + spacer + spacer + light_char + space;
var code_spacer = spacer + terminal_char + space;

//globs
var js_source_glob = "src/code/**/*.js";
var js_tests_glob = "src/tests/**/*.js";
var js_tools_glob = "*.js dev/**/*.js test/**/*.js";
var json_other_glob = "*.json";
var json_other_glob_results = glob.sync(json_other_glob).join(space);

//commands
var eslint = "eslint";
var eslint_path = "\"node_modules/.bin/eslint\"";
var eslint_options = "-c package.json --no-eslintrc";
var eslint_cmd_js_source = eslint_path + space + eslint_options + space + js_source_glob;
var eslint_cmd_js_tests = eslint_path + space + eslint_options + space + js_tests_glob;
var eslint_cmd_js_tools = eslint_path + space + eslint_options + space + js_tools_glob;
var eslint_js_source_cmd_txt = eslint + space + eslint_options + space + js_source_glob;
var eslint_js_tests_cmd_txt = eslint + space + eslint_options + space + js_tests_glob;
var eslint_js_tools_cmd_txt = eslint + space + eslint_options + space + js_tools_glob;


var jsonlint = "jsonlint";
var jsonlint_path = "\"node_modules/.bin/jsonlint\"";
var jsonlint_options = "-q";
var jsonlint_cmd_other = jsonlint_path + space + jsonlint_options + space + json_other_glob_results;
var jsonlint_other_cmd_txt = jsonlint + space + jsonlint_options + space + json_other_glob;

console.log(jsonlint_cmd_other);

//others vars
var ilen = 0;
var i = 0;



//header setup
ilen = terminal_width;
ilen--;
for (i = 0; i < ilen; i++) {
    big_header += heavy_char;
    mid_header += medium_char;
//    small_header += "-";
}

console.log(big_header);
console.log("# Beginning lint sequence:");
console.log(big_header);

mid_exec(eslint_cmd_js_source, eslint_js_source_cmd_txt, "JavaScript: source code");
mid_exec(eslint_cmd_js_tests, eslint_js_tests_cmd_txt, "JavaScript: test code");
mid_exec(eslint_cmd_js_tools, eslint_js_tools_cmd_txt, "JavaScript: tools code");
mid_exec(jsonlint_cmd_other, jsonlint_other_cmd_txt, "JSON: other data");



//ESLINT CONFIGURATION - for this file only!
//+ console.log allowed
/* eslint-enable no-console */
//END ESLINT CONFIGURATION
