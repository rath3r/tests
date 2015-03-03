<?php

class application {
	
	public $nav;
	
	function __construct(){
		//echo "bootsrap constructor";
		//$this->nav = createNav();
	}

	public function createNav(){
		$navArray = array();

		if ($handle = opendir('.')) {
			while (false !== ($entry = readdir($handle))) {
				if (
					$entry != "." && 
					$entry != ".." &&
					!preg_match("/~/", $entry) &&
					!preg_match("/.svn/", $entry) &&
					!preg_match("/.php/", $entry) &&
					!preg_match("/application/", $entry) &&
					!preg_match("/styles/", $entry) &&
					!preg_match("/favicon.*/", $entry)
				) {
				    $navArray[] = $entry;
				}
			}
			closedir($handle);
		}

		return $navArray;
	}
}
