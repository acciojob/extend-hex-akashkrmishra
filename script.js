const extendHex = (shortHex) => {
  // write your code here
	if(shortHex==4){
		let ans=`#${shortHex[1]}${shortHex[1]}${shortHex[2]}${shortHex[2]}${shortHex[3]}${shortHex[3]}`;
		console.log(ans);
	}else{
		let ans=`#${shortHex[0]}${shortHex[0]}${shortHex[1]}${shortHex[1]}${shortHex[2]}${shortHex[2]}`;
		console.log(ans);
	}
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
