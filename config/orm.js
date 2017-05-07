var connection= require("./connection.js")



	
var orm = 
{
	selectWhere: function(tableInput, cb) 
	{
		var queryString = "SELECT * FROM ?? ";
		connection.query(queryString, [tableInput], function(err, result) 
    {
		if (err) 
			{
				throw err;
			}
			// Return results in callback
			cb(result);
      console.log("the result is " + result);
    });
  },

  insert: function(tableInput, col, colValues, cb )
  {   
    var colQuery=''; 
    for(var i=0;i<col.length-1;i++)
           {
            colQuery+=col[i]+",";
           }
        colQuery+= col[(col.length)-1];
        var colValuesQuery=''; 
    for(var i=0;i<col.length-1;i++)
           {
            colValuesQuery+="'"+colValues[i]+"',";
           }
        colValuesQuery+= "'"+colValues[(col.length)-1]+"'";
    var queryString = "INSERT INTO "
                      + tableInput 
                      +" ("
                      +colQuery
                      +") values ("
                      +colValuesQuery
                      +");" 
                      
    console.log("querystring is "+queryString );
    connection.query(queryString, function(err, result) {
    if (err) 
      {
        throw err;
      }

      // Return results in callback
      cb(result);
      console.log("the result is " + result);
      });
  },
  update: function(tableInput, col, colValues, condition, cb )
  {   
    var colQuery=''; 
    for(var i=0;i<col.length-1;i++)
           {
            colQuery+=col[i]+" = '"+colValues[i]+"'";
           }
    colQuery+= col[(col.length)-1]+" = '"+colValues[(col.length)-1]+"'";
    var queryString = "UPDATE "
                      + tableInput 
                      +" set "
                      +colQuery
                      +"where "
                      +condition;
                      
                      
    console.log("querystring is "+queryString );
    connection.query(queryString, function(err, result) {
    if (err) 
      {
        throw err;
      }

      // Return results in callback
      cb(result);
      console.log("the result is " + result);
      });
  }		

};

module.exports=orm;