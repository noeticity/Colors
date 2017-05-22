'use strict';

exports.searchInventory = function(args, res, next) {
  /**
   * parameters expected in the args:
  * name (String)
  * rgb (String)
  * hueName (String)
  * relationship (String)
  * limit (Integer)
  **/
    var examples = {};
  examples['application/json'] = [ {
  "red-value" : "255",
  "green-value" : "235",
  "name" : "Seashell",
  "hex" : "#ffebee",
  "id" : "5",
  "blue-value" : "238"
} ];
  if(Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  }
  else {
    res.end();
  }
  
}

