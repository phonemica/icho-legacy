<?php
/*
	Automated updates. This script serves the new versions of
	outdated files. This was done in PHP to skip dealing with
	htaccess CORS changes. It's file agnostic and serves what
	has been requested by the app's update script.'
*/
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header('Content-Type: text/plain');
$version = trim($_GET["version"]);
$file = trim($_GET["file"]);
echo file_get_contents('./'.$version.'/'.$file.'.txt');
?>
