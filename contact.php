<?php
// NightShield Security enquiry handler for IONOS hosting.
// IONOS requires the From address to belong to the domain on the hosting contract.

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html#contact', true, 303);
    exit;
}

function clean($value) {
    return trim(strip_tags((string)$value));
}

$name = clean($_POST['name'] ?? '');
$email = trim((string)($_POST['email'] ?? ''));
$service = clean($_POST['service'] ?? '');
$message = trim(strip_tags((string)($_POST['message'] ?? '')));
$honeypot = trim((string)($_POST['website'] ?? ''));

if ($honeypot !== '' || $name === '' || $service === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: index.html?sent=0#contact', true, 303);
    exit;
}

// Keep the sender on the NightShield domain for IONOS mail delivery.
$to = 't.newman@nightshieldsecurity.uk,s.page@nightshieldsecurity.uk';
$from = 't.newman@nightshieldsecurity.uk';
$subject = 'NightShield Security website enquiry - ' . $service;

$body = "New enquiry from the NightShield Security website\n\n" .
        "Name: {$name}\n" .
        "Email: {$email}\n" .
        "Service: {$service}\n\n" .
        "Message:\n{$message}\n";

$headers = "From: NightShield Security <{$from}>\r\n" .
           "Reply-To: {$email}\r\n" .
           "Content-Type: text/plain; charset=UTF-8\r\n" .
           "X-Mailer: PHP/" . phpversion();

$sent = mail($to, $subject, $body, $headers);

header('Location: index.html?sent=' . ($sent ? '1' : '0') . '#contact', true, 303);
exit;
?>
