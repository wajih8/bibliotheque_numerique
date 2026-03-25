<?php
session_start();

// If the session variable is not set, the user is not logged in
if (!isset($_SESSION['user_id'])) {
    // Redirect to login page
    if (isset($_COOKIE['user_id']) && isset($_COOKIE['user_role'])) {
        // Restore session from cookies
        $_SESSION['user_id'] = $_COOKIE['user_id'];
        $_SESSION['role'] = $_COOKIE['user_role'];
        header("Location: m.php");
    } else {
        // No session and no cookie? Redirect to login.
        header("Location: index.php");
        exit();
    }
}

?>