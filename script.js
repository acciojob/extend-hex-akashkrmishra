const extendHex = (shortHex) => {
  // write your code here
	if(shortHex.length==4){
		let ans=`#${shortHex[1]}${shortHex[1]}${shortHex[2]}${shortHex[2]}${shortHex[3]}${shortHex[3]}`;
		return ans;
	}else{
		let ans=`#${shortHex[0]}${shortHex[0]}${shortHex[1]}${shortHex[1]}${shortHex[2]}${shortHex[2]}`;
		return ans;
	}
};


// Do not change the code below.
let shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
