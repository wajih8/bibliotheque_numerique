<?php
require("connect");
if(isset($_POST["subm"])){
    echo $_POST["email"];
}