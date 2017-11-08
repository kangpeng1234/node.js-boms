'use strict';

var fs = require('fs');
var Projects = "Project_Base"

exports.rCreateDir = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * project (Meta)
  **/
  // no response value expected for this operation

  var pid = args.id.value;
  var pname = args.project.value.meta.name;
  var path = args.project.value.meta.path;
  var type = args.project.value.meta.nodetype;
  var create = args.project.value.meta.created;

  var time = new Date().getTime();
  var dirId = "did" + time;
  var fileName = dirId + ".meta.json";
  var dstDir = Projects + "/" + pid + "/" + fileName;
  var json ={"dirId": dirId,"pname": pname,"type":type,"path": path,"create":create};
      fs.writeFileSync(dstDir , JSON.stringify(json));

  res.end("create directory success");
}

exports.rDeleteDir = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pid (String)
  * did (String)
  **/
  // no response value expected for this operation

  var pid = args.pid.value;
  var did = args.did.value;
  var delDirName= Projects + "/" + pid + "/" + did + ".meta.json";
     fs.unlink(delDirName , function(error){
       if(error){
         console.log("error");
       }else{
         console.log("done");
       }
     });
  res.end("delete directory success");
}

exports.rupdataDir = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pid (String)
  * did (String)
  * projectContent (Meta)
  **/
  // no response value expected for this operation

  var pid = args.pid.value;
  var dirId = args.did.value;
  var pname = args["project-content"].value.meta.name;
  var path = args["project-content"].value.meta.path;
  var type = args["project-content"].value.meta.nodetype;
  var create = args["project-content"].value.meta.created;

  var fileName=dirId + ".meta.json";
  var dstDir = Projects + "/" + pid + "/" + fileName;
  var json ={"dirId": dirId,"pname": pname,"type":type,"path": path,"create":create};
     fs.writeFileSync(dstDir , JSON.stringify(json));

  res.end("update directory success");
}

