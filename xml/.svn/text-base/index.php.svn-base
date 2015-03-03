<?php 

	$allowedExts = array("xml");
	$extension = end(explode(".", $_FILES["file"]["name"]));
//	var_dump($_POST);
	$display = false;
	if (($_FILES["file"]["type"] == "text/xml") && in_array($extension, $allowedExts))
	{
		if ($_FILES["file"]["error"] > 0)
		{
			//echo "Error: " . $_FILES["file"]["error"] . "<br>";
		}
		else
		{
			//echo "Upload: " . $_FILES["file"]["name"] . "<br>";
			//echo "Type: " . $_FILES["file"]["type"] . "<br>";
			//echo "Size: " . ($_FILES["file"]["size"] / 1024) . " kB<br>";
			//echo "Stored in: " . $_FILES["file"]["tmp_name"] . "<br>";
			
			if (file_exists("uploads/" . $_FILES["file"]["name"]))
			{
				//echo $_FILES["file"]["name"] . " already exists.<br>";
			}
			else
			{
				if(move_uploaded_file($_FILES["file"]["tmp_name"], "uploads/" . $_FILES["file"]["name"]))
				{
					//echo "success";
					//echo "Stored in: " . "uploads/" . $_FILES["file"]["name"] . "<br>";
					$display = true;
				}
				else
				{
					//echo "fail<br>";
				}
				
			}
		}
	}
	else
	{
		$display = false;
		//echo "Invalid file";
	}
?>
<html>
	<head>
		<meta charset='utf-8'> 
		<title>xml parser</title>
		<meta http-equiv="Content-Script-Type" content="text/javascript" />
	</head>
	<body>
		<header>
			<h1>xml parser</h1>
		</header>
		<section>
			
			<?php if($display) :?>
			<textarea id="output" rows="40" cols="150">INSERT INTO `wp_posts` (`ID`, `post_author`, `post_date`, `post_date_gmt`, `post_content`, `post_title`, `post_excerpt`, `post_status`, `comment_status`, `ping_status`, `post_password`, `post_name`, `to_ping`, `pinged`, `post_modified`, `post_modified_gmt`, `post_content_filtered`, `post_parent`, `guid`, `menu_order`, `post_type`, `post_mime_type`, `comment_count`) VALUES </textarea>
			<?php else:?>
			<form action="index.php" method="post" enctype="multipart/form-data">
				<label for="file">Select File</label>
				<input name="file" type="file" /> 
				<input name="submit" type="submit" value="Upload" />
			</form>
			<?php endif; ?>
		</section>
		<script type="text/javascript" src="../application/libs/jquery-1.9.1.min.js"></script>
		<!--<script type="text/javascript" src="rath3r.wordpress.2013-03-10.xml"></script>-->
		<script type="text/javascript" src="xml.js"></script>
		<?php if($display) :?>
		<script type="text/javascript">
			$(document).ready(function() {
				var filename = "<?php echo $_FILES["file"]["name"]; ?>";
   				xml.Parser.init(filename);
 			});
		</script>
		<?php endif; ?>
<?php include_once("../application/analyticstracking.php"); ?>
	</body>
</html>
