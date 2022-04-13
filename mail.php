<?php

	$recepient = "leeloo3m@yandex.ru";
	$sitename = "bartovich.londort.ru";

	$name = $_POST['name'];
	$phone = $_POST['tel'];

	$name = htmlspecialchars($name);
	$phone = htmlspecialchars($phone);

	$name = urldecode($name);
	$phone = urldecode($phone);

	$name = trim($name);
	$phone = trim($phone);

	$message = "Имя: $name \nТелефон: $phone";

	$pagetitle = "НОВАЯ ЗАЯВКА с сайта $sitename";

	mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"")

?>