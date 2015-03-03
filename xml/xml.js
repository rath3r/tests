var xml = xml || {};

if (typeof jQuery === 'undefined') {
    throw new Error('jQuery is not loaded.');
}

xml.Parser = (function () {

    /* Settings */

    var title       = 'xmlParser',

    /* Object variables */

        $                 = jQuery;

    /* Object private methods */

    function _getFile(filename) {

        xmlDoc=loadXMLDoc("uploads/" + filename);
        return xmlDoc;
    }
    
    function loadXMLDoc(dname) {

		if (window.XMLHttpRequest) {
			xhttp=new XMLHttpRequest();
		}else{
			xhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		xhttp.open("GET",dname,false);
		xhttp.send();
		return xhttp.response;
	} 

	/**
	 *	Very hacky method of creating an SQL string which can insert 
	 *	the content of a Wordpress export xml file
	 *	
	 *	@todo	detect type or input type and convert each element into an SQL friendly version
	 */
    function init(filename) {
    	xmlDoc = $.parseXML(_getFile(filename));
		//console.log(xmlDoc);
		$xml = $( xmlDoc );
		
		content = $("#output").val();
	    $items = $xml.find('item');
	    
	    index = 1;
	    $items.each(function()
  		{
    		//console.log($(this));
    		post_title = $(this).find('title').text().replace(/\"/g,"\\\"").replace(/\'/g,"\\\'");
    		post_date = $(this).find("wp\\:post_date, row");
    		//post_date = "0000-00-00 00:00:00";
    		post_content = $(this).find("content\\:encoded, row").text().replace(/\"/g,"\\\"").replace(/\'/g,"\\\'");
    		post_excerpt = $(this).find("excerpt\\:encoded, row").text();
    		post_status = $(this).find("wp\\:status, row").text();
    		comment_status = $(this).find("wp\\:comment_status, row").text();
    		post_name = $(this).find("wp\\:post_name, row").text();
    		post_parent = $(this).find("wp\\:post_parent, row").text();
    		post_guid = $(this).find("link").text().replace("blog.rath3r.com","dev.blog.rath3r.com");
    		menu_order = $(this).find("wp\\:menu_order, row").text();
    		post_type = $(this).find("wp\\:post_type, row").text();
    		comma = ";";
			if(index < $items.length){
				comma = ",";
			}
    		console.log(menu_order);
    		
    		content += 
    			"(" + index + ", " + 
    			"1, " + 
    			"'" + post_date + "', " + 
    			"'" + post_date + "', " + 
    			"\"" + post_content + "\", " +
    			"'" + post_title + "', " +
    			"'" + post_excerpt + "', " +
    			"'" + post_status + "', " +
    			"'open', " +
    			"'open', " +
    			"'', " +
    			"'" + post_name + "', " +
    			"'', " +
    			"'', " +
    			"'" + post_date + "', " + 
    			"'" + post_date + "', " +
    			"'', " +
    			post_parent  + ", " +
    			"'" + post_guid + "', " +
    			menu_order  + ", "+
    			"'" + post_type + "', " +
    			"'', " +
    			"0)" +
    			comma;
    		
    		$("#output").val(content);

    		index++;

  		});
	    
		//console.log(content);
    }

    /* Object public methods */

    return {
        'init'          : init
    }

})(jQuery);

