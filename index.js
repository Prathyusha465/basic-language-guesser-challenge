const franc=require("franc");
const colors=require("colors");
const langs=require("langs");
const input=process.argv[2];
const decodes=franc(input);
const ans=langs.where("3",decodes);
if(decodes=="und")
 console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!".red);
else{
    const ans=langs.where("3",decodes);
    if(ans){
        console.log(`Our best guess is: ${ans.name}`.green);
    }
    else{
        console.log(`Sorry,couldn't find a language`.red);
    }
}
