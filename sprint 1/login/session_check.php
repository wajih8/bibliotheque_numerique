<?php
session_start();

// If the session variable is not set, the user is not logged in
if (!isset($_SESSION['user_id'])) {
    // Redirect to login page
    header("Location: index.html");
    exit();
}
?>