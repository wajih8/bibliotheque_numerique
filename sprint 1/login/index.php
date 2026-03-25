<?php
try{
session_start();
}catch(Exception $e){}
require_once("../connect.php");

if(isset($_POST["subm"])){
    $email=$_POST["email"];
    $password=$_POST["password"];
    $stmt = $conn->prepare("SELECT `id`, `Username`, `Password`, `id_role` FROM `users` WHERE Email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($user = $result->fetch_assoc()) {
        
        if ($password== $user['Password']) {
            
            // 3. Set Session variables [cite: 102]
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['role'] = $user['id_role'];
            if(isset($_POST['remember'])){
              
              setcookie('user_id', $user['id'], time() + (86400 * 30), "/");
              // In a real app, use a secure random token instead of the raw ID for the second cookie
              setcookie('user_role', $user['id_role'], time() + (86400 * 30), "/");
            }
            
            header("Location: m.php");
            exit();
        } else {
            $err='<div class="error-box"><span class="error-icon">⚠️</span>Email not found or password wrong. Please try again.</div>';
        }
    } else {
      $err='<div class="error-box"><span class="error-icon">⚠️</span>Email not found or password wrong. Please try again.</div>';
    }
    
    $stmt->close();



}else{
  $err='';
}
?>



<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="style.css">
<title>bibliotheque-connexion</title>
<style>
  body, html {
    margin: 0;
    height: 100%;
    font-family: 'Times New Roman', serif;
  }
  .error-box {
    /* Layout */
    display: flex;
    align-items: center;
    padding: 15px 20px;
    margin: 20px 0;
    max-width: 100%;
    
    /* Colors & Border */
    background-color:rgb(44, 36, 36); /* Very light red */
    border: 1px solid #eb5757;  /* Professional Red */
    border-left: 5px solid #eb5757; /* Thicker left accent */
    border-radius: 4px;
    
    /* Text Styling */
    color:rgb(238, 200, 204);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 14px;
    font-weight: 500;
    
    /* Shadow for depth */
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }

  /* Optional: Error Icon using a simple Unicode character */
  .error-icon {
    margin-right: 12px;
    font-size: 18px;
    font-weight: bold;
  }
  /* Full-page background image */
  body {
    background: url("lib.jpeg") no-repeat center center/cover;
    background-size: cover;
    display: flex;
    justify-content: flex-end; 
    align-items: center;
  }

  /* Right form container */
  .right {
    width: 30%; 
    min-width: 300px; /* Ensures it doesn't get too squashed on small screens */
    height: 100%;
    padding: 60px 40px;
    background: rgba(30, 20, 2, 0.7); 
    backdrop-filter: blur(10px); 
    color: white;
    box-sizing: border-box; /* Prevents padding from adding to width */
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h2 { margin-bottom: 10px; }
  p { margin-bottom: 30px; font-style: italic; opacity: 0.9; }

  /* Form styling */
  input[type="email"], 
  input[type="password"] {
    width: 100%;
    padding: 12px;
    margin-top: 10px;
    background: rgba(28, 28, 28, 0.8);
    border: 1px solid rgba(255,255,255,0.1);
    color: white;
    border-radius: 6px;
    box-sizing: border-box;
  }

  /* Flex container for Checkbox and Forgot Password */
  .form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin: 10px 0 20px 0;
  }

  .checkbox-group {
    display: flex;
    align-items: center;
  }

  .checkbox-group input {
    width: auto;
    margin-right: 8px;
  }

  .forgot-link {
    color: #1a73e8;
    text-decoration: none;
  }

  .forgot-link:hover {
    text-decoration: underline;
  }

  button {
    width: 100%;
    padding: 14px;
    background: #1a73e8;
    border: none;
    color: white;
    cursor: pointer;
    border-radius: 6px;
    font-weight: bold;
    font-size: 16px;
    transition: background 0.3s;
  }

  button:hover {
    background: #155ec4;
  }

  .signup-text {
    text-align: center;
    margin-top: 25px;
    font-size: 14px;
  }

  .signup-text a {
    color: #1a73e8;
    text-underline-offset: 3px;
    font-weight: bold;
    text-decoration: none;
  }
</style>
</head>
<body>

<div class="right">
  <form action="" method="post" id="loginForm">
  <h2>Connecter</h2>
  <p>Votre voyage dans le monde des livres commence ici !</p>

  <div class="input-column">
    <div class="input-group">
      <input type="email" id="email" placeholder="E-mail" name="email">
    </div>
    <!-- ERROR MESSAGE SEPARATE -->
    <span class="error" id="emailError"></span>
  </div>
  <div class="input-column">
    <div class="input-group">
      <input type="password" id="password" placeholder="Mot de passe" name="password">
    </div>
    <!-- ERROR BELOW THE LINE -->
    <span class="error" id="passwordError"></span>
  </div>

  <div class="form-options">
    <div class="checkbox-group">
      <input type="checkbox" id="remember"name="remember">
      <label for="remember">Se souvenir de moi</label>
    </div>
    <a href="#" class="forgot-link">Mot de passe oublié ?</a>
  </div>
  <input name="subm"type="hidden" value="1">

  <button type="button" onclick="verifyAndSubmit()">Se connecter</button>

  <div class="signup-text">
    Pas encore de compte ? <a href="#">Inscrivez-vous</a>
  </div>
  <?php
  echo $err;
  ?>
</form>
</div>

<script>
  function verifyAndSubmit() {
  const form = document.getElementById('loginForm');

    form.submit(); 
  
}
</script>
<script src="script.js"></script>
</body>
</html>