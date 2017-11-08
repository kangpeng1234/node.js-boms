'use strict';

var fs = require('fs');
var Projects = "Project_Base"

exports.rCreateProj = function(args, res, next) {
  /**
   * parameters expected in the args:
  * project (Meta)
  **/
  // no response value expected for this operation

   var pid = args.project.value.id;
   var meta = args.project.value.meta;
   var folderName = "pid" + pid;
       if(fs.existsSync(Projects)){
           fs.mkdirSync(Projects + "/" + folderName);
       }else{
           fs.mkdirSync(Projects)
           fs.mkdirSync(Projects + "/" + folderName);
       }
   var dstDir = Projects + "/" + folderName + "/meta.json";
       fs.writeFileSync(dstDir , JSON.stringify(meta));
  res.end();
}

exports.rDelProj = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
  // no response value expected for this operation

  var id = args.id.value;
       fs.rename(Projects + "/" + id , Projects + "/" + "del_" +  id , (error) => {
           if(error){
               console.log(error);
           }else{

           }
       })
  res.end("RES_SUCCESS");
}

exports.rListProj = function(args, res, next) {
  /**
   * parameters expected in the args:
  **/

    var projs = new Array();
    var files = fs.readdirSync(Projects);
    var projs = new Array();
    for(var i = 0; i < files.length; i++) {
        if (!files[i].startsWith("pid")) {
            continue;
        }
        var metaPath = Projects + "/" + files[i] + "/meta.json";
        var pid = files[i].split("pid")[1];
        var meta=JSON.parse(fs.readFileSync(metaPath).toString());
        var proj = {"id": pid, "meta": meta};
        projs.push(proj);
    }
    res.setHeader("content-type", "application/json");
    res.end(JSON.stringify(projs));
}

exports.rLoadProject = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  **/
   var pid = args.id.value;
   var metaPath = Projects +  "/pid" + pid + "/meta.json";
   var meta = fs.readFileSync(metaPath).toString();

     res.setHeader("content-type", "application/json");
     res.end(meta);
}

exports.rUpdateProj = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * project (String)
  **/
  // no response value expected for this operation
      console.log(args);
  var pid = args.project.value.id;
  var meta = args.project.value.meta;
  var metaPath = Projects +  "/pid" + pid + "/meta.json";
      fs.writeFileSync(metaPath , JSON.stringify(meta));

  res.end(RES_SUCCESS);
}

