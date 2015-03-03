<?php

class xml {
	
	public $nav;
	
	function __construct(){
		//echo "bootsrap constructor";
		//$this->nav = createNav();
	}

	public function readXML(){
		echo "readxml";
		$xml = simplexml_load_file("rath3r.wordpress.2013-03-10.xml");

		echo $xml->getName() . "<br>";
		
		//var_dump($xml->children('content'));
		foreach($xml->children() as $child)
		{
			//echo $child->getName() . ": " . $child->name . "<br>";
			//var_dump($child->children('content', true));
			foreach($child->children('content', true) as $item){
				var_dump($item);
				foreach($item as $description){
					//var_dump($description);
				}
			}
		}

		return $navArray;
	}
}
