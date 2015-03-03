<?php 
	error_reporting(E_ALL ^ E_NOTICE);
	include 'application/bootstrap.php'; 
	$app = new application();
	$nav = $app->createNav();
?>
<!DOCTYPE html>
<html>
<head>
	<title>test.rath3r.com</title>
	<link rel="stylesheet" href="styles/site.css" />
</head>
<body>
	<header>
		<h1>Tests Rath3r.com</h1>
		<nav>
			<ul>
			<?php
			foreach($nav as $item): ?>
				<li><a href="<?php echo $item; ?>"><?php echo $item; ?></a></li>
			<?php endforeach; ?>
			<ul>		
		</nav>
	</header>
	<?php include_once("application/analyticstracking.php"); ?>
</body>
</html>
