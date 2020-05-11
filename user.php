<?php 
if(isset($_POST['benutzername'])){
	$string = "user admin dbuser Aigbogun Janine";
	$un = htmlspecialchars($_POST['benutzername']);
	if(stripos($string,$un)==true) echo trim("false");
		else echo trim("true");
}
else die
?>
