'use strict';
//模型部分暂时没写，api参数有些问题（在项目更新处的api没有定义四个模型文件raw{}，prop{},conn{},mdl{}）



var fs = require('fs');
var Projects = "Project_Base";

exports.rGetModelFiles = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pid (String)
  * mid (String)
  **/

  console.log("111");
    var examples = {};
  examples['application/json'] = {
  "meta" : {
    "id" : "model123",
    "name" : "模型名称",
    "path" : "d3/d4",
    "nodetype" : "model",
    "created" : "2017-10-12"
  },
  "files" : [ {
    "name" : "mid498.raw.json",
    "content" : ""
  }, {
    "name" : "mid498.mdl.json",
    "content" : ""
  }, {
    "name" : "mid498.conn.json",
    "content" : ""
  }, {
    "name" : "mid498.prop.json",
    "content" : ""
  } ]
};
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

exports.rUpdateModel = function(args, res, next) {
  /**
   * parameters expected in the args:
  * pid (String)
  * mid (String)
  * modelContent (ModelCont)
  **/
  // no response value expected for this operation

  console.log("222");
  res.end();
}

exports.rUpdateProj = function(args, res, next) {
  /**
   * parameters expected in the args:
  * id (String)
  * project (String)
  **/
  // no response value expected for this operation
      console.log(args);
    var pid = args.id.value;
    console.log(pid);
    var meta = args.project.value;
    console.log(meta);
    var metaPath = Projects +  "/pid" + pid + "/meta.json";
    fs.writeFileSync(metaPath , meta.toString());
    console.log("111");
  res.end("RES_SUCCESS");
}

