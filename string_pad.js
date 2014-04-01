String.prototype.pad = function(side, char, maxLength) {
	var padding = "";
	
	for(var i = this.length; i < maxLength; i++) {
		padding += char;
	}
	
	return (side === "left") ? (padding + this) : (this + padding);
};
