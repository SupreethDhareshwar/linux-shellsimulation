var commandDir={
  "/":{}
};
var pwd="/";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

process.stdin.on("data", function (input) {
    handleCommands(input);
});

function handleCommands(command){
    command=command.trim();
    let cmd=command.split(' ');
    if(cmd[0]=="ls"){
      let op="DIRS: ";
      for(key in commandDir["/"]){
        op+=key+ " ";
      }
      console.log(op);
    }
    else if(cmd[0]=="session" && cmd[1]=="clear"){
      console.log("Heard Session Clear Command");
    }
    else if(cmd[0]=="pwd"){
      console.log("PATH: "+pwd);
    }
    else if(cmd[0]=="cd"){
      for(let i=1;i<cmd.length ;i++){
        commandDir["/"][cmd[i]]="";
      }
    }
    else if(cmd[0] == "rm"){
      console.log("Heard RM Command");
    }
    else if(cmd[0] == "mkdir"){
      let currentDir
      for(let i=1;i<cmd.length ;i++){
        commandDir["/"][cmd[i]]="";
      }
      console.log('SUCC: CREATED');
    }
    else{
      console.log("ERR: CANNOT RECOGNIZE INPUT.");
    }
    
}

console.log("Custom BASH application started.");

