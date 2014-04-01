String.prototype.pad = function(side, ch, maxLength) {
	var padding = "";
	
	for(var i = this.length; i < maxLength; i++) {
		padding += ch;
	}
	
	return (side === "left") ? (padding + this) : (this + padding);
};
