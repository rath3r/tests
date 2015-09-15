<?php 
	error_reporting(E_ALL ^ E_NOTICE);
	include 'application/bootstrap.php'; 
	$app = new application();
	$nav = $app->createNav();
	$hide = array(
		".git",
		".htaccess",
		".idea",
		"assets",
		"Gruntfile.js",
		"package.json",
		"node_modules",
		".tmp",
		"css",
		"fonts",
		"bower.json",
		"bower_components");
?>
<!DOCTYPE html>
<html>
<head>
	<title>test.rath3r.com</title>
	<link rel="stylesheet" href="css/main.css" />
</head>
<body>
	<div class="container">
		<header class="header clearfix">
			<nav>
				<ul class="nav nav-pills pull-right">
					<li role="presentation" class="active"><a href="#">Home</a></li>
					<li role="presentation"><a href="#">About</a></li>
					<li role="presentation"><a href="#">Contact</a></li>
				</ul>
			</nav>
			<h1>Tests Rath3r.com</h1>
		</header>
	</div>
	<div class="jumbotron">
		<h1>Jumbotron heading</h1>
		<p class="lead">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
		<p><a class="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
	</div>

	<div class="row marketing">
		<div class="col-lg-6">
			<ul>
				<?php
				foreach($nav as $item): ?>
					<?php if(!in_array($item, $hide)): ?>
						<li><a href="<?php echo $item; ?>"><?php echo $item; ?></a></li>
					<?php endif; ?>
				<?php endforeach; ?>
			<ul>
		</div>
	</div>

	<footer class="footer">
		<p>&copy; Rath3r <?php echo date("Y"); ?></p>
	</footer>

	<?php include_once("application/analyticstracking.php"); ?>
</body>
</html>
