<?php

$from = $_POST['email'];
$name = $_POST['full-name'];
$phone = $_POST['phone'];
$to = "mail@grossklos.com";
$text = "$phone<br>$name<br>$__POST['message']";

mail ($to, $from, $text, "From: $from");

header("Location: http://www.grossklos.com/#kontakt");
