<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

if (isset($_POST["send"])) {
    echo "<pre>";
    print_r($_POST);
    echo "</pre>";

    $name = htmlspecialchars($_POST["name"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $phone = htmlspecialchars($_POST["phone"]);
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);
    $toEmail = "jeffersonadlawan@gmail.com";

    $mailHeaders = "From: " . $name . " <" . $email . ">\r\n";
    $mailHeaders .= "Phone: " . $phone . "\r\n";
    $mailHeaders .= "Message: " . $message . "\r\n";

    if (mail($toEmail, $subject, $message, $mailHeaders)) {
        echo "Your contact information is received successfully.";
    } else {
        echo "Error in sending email.";
        error_log("Mail function failed.");
    }
} else {
    echo "Form submission failed.";
}
?>
