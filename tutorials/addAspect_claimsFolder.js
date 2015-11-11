function main()
{
	//add aspect that defines a folder as a claim as well as adds virtual folders (by aspect name)
	//document represents the object, this script/rule is executed on, also if it is a folder 
	var aspectClaimFolderProps = new Array(1);	
	aspectClaimFolderProps["clex:claimAdmin"] = document.properties["cm:modifier"];
	document.addAspect("clex:claimFolder", aspectClaimFolderProps);	
		
	document.save();
}	
	
main();
