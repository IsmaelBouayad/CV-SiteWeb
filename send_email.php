<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    header('Content-Type: application/json');

    $name = htmlspecialchars(trim($_POST['name']));
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    $message = htmlspecialchars(trim($_POST['message']));

    if (!$email) {
        echo json_encode(["success" => false, "message" => "Email invalide."]);
        exit;
    }

    if (empty($name) || empty($message)) {
        echo json_encode(["success" => false, "message" => "Tous les champs sont requis."]);
        exit;
    }

    $to = "ismaelbouayad10.ib@gmail.com";
    $subject = "Nouveau message de contact";
    $headers = "From: " . $email . "\r\nReply-To: " . $email;
    $body = "Nom: $name\nEmail: $email\nMessage:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["success" => true, "message" => "Votre message a été envoyé avec succès !"]);
    } else {
        echo json_encode(["success" => false, "message" => "Erreur lors de l'envoi du message."]);
    }
}
?>
