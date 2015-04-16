module.exports = function(source) {
	if(this.cacheable) this.cacheable();
	var conf = JSON.parse(source);
	var result = "module.exports = {" + Object.keys(conf).map(function(key) {
		return '"' + key + '": require("' + conf[key] + '")';
	}).join(",\n")+ "};";
	return result;
};
