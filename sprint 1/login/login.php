<?php
session_start();
require_once("../connect.php");
if(isset($_POST["subm"])){
    $emiil=$_POST["email"];
    $passoword=$_POST["email"];
    $stmt = $conn->prepare("SELECT `id`, `Username`, `Password`, `id_role` FROM `users` WHERE Email = ?");
    $stmt->bind_param("s", $email); // "s" means the parameter is a string
    $stmt->execute();
    $result = $stmt->get_result();
    if ($user = $result->fetch_assoc()) {
        // 2. Verify password against the hash in the DB [cite: 104]
        if ($password== $user['Password']) {
            
            // 3. Set Session variables [cite: 102]
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['role'] = $user['id_role'];
            
            header("Location: m.php");
            exit();
        } else {
            echo "Invalid password.";
        }
    } else {
        echo "No user found with that email.";
    }

    
    $stmt->close();



}else{
    echo"problem out";
}