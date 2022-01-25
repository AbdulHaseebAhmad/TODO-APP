<?php

        session_start();

        include("connection.php");
        if(array_key_exists('recognation',$_COOKIE) && $_COOKIE['recognation']){
            $_SESSION['id'] = $_COOKIE['recognation'];}

        if(array_key_exists('id',$_SESSION)){

            if(isset($_POST['input']) && $_POST['input'] != ""){

                if($_SESSION['number'] == 0 ){
                $query = "UPDATE  TODO1 set enterya = '".mysqli_real_escape_string($link,$_POST['input']).
                "'WHERE id = ".mysqli_real_escape_string($link,$_SESSION['id'])."";
                mysqli_query($link,$query);}

                if($_SESSION['number'] == 10 ){
                $query = "UPDATE  TODO1 set enteryb = '".mysqli_real_escape_string($link,$_POST['input']).
                "'WHERE id = ".mysqli_real_escape_string($link,$_SESSION['id'])."";
                mysqli_query($link,$query);}

                if($_SESSION['number'] == 20 ){
                $query = "UPDATE  TODO1 set enteryc = '".mysqli_real_escape_string($link,$_POST['input']).
                "'WHERE id = ".mysqli_real_escape_string($link,$_SESSION['id'])."";
                mysqli_query($link,$query);}

                if($_SESSION['number'] == 30 ){
                $query = "UPDATE  TODO1 set enteryd = '".mysqli_real_escape_string($link,$_POST['input']).
                "'WHERE id = ".mysqli_real_escape_string($link,$_SESSION['id'])."";
                mysqli_query($link,$query);}

                if($_SESSION['number'] == 40 ){
                $query = "UPDATE  TODO1 set enterye = '".mysqli_real_escape_string($link,$_POST['input']).
                "'WHERE id = ".mysqli_real_escape_string($link,$_SESSION['id'])."";
                mysqli_query($link,$query);}

                if($_SESSION['number'] == 50 ){
                $query = "UPDATE  TODO1 set enteryf = '".mysqli_real_escape_string($link,$_POST['input']).
                "'WHERE id = ".mysqli_real_escape_string($link,$_SESSION['id'])."";
                mysqli_query($link,$query);}

                $_SESSION['number'] += 10;}}

            else{
                if(isset($_POST['input']) && $_POST['input'] != ""){
                $query = "INSERT INTO TODO1  (enterya) VALUES ('".mysqli_real_escape_string($link,$_POST['input']).
                "')";
                mysqli_query($link,$query);
                setcookie('recognation',mysqli_insert_id($link),time()+(3600*24*2));}}

                if(isset($_POST['cancel']) && $_POST['cancel']['value'] == "a"){
                    $query ="UPDATE TODO1 set enterya = ' '";
                    mysqli_query($link,$query);}

                if(isset($_POST['cancel']) && $_POST['cancel']['value'] == "b"){
                    $query ="UPDATE TODO1 set enteryb = ' '";
                    mysqli_query($link,$query);}

                if(isset($_POST['cancel']) && $_POST['cancel']['value'] == "c"){
                    $query ="UPDATE TODO1 set enteryc = ' '";
                    mysqli_query($link,$query);}

                if(isset($_POST['cancel']) && $_POST['cancel']['value'] == "d"){
                    $query ="UPDATE TODO1 set enteryd = ' '";
                    mysqli_query($link,$query);}

                if(isset($_POST['cancel']) && $_POST['cancel']['value'] == "e"){
                    $query ="UPDATE TODO1 set enterye = ' '";
                    mysqli_query($link,$query);}

                if(isset($_POST['cancel']) && $_POST['cancel']['value'] == "f"){
                    $query ="UPDATE TODO1 set enteryf = ' '";
                    mysqli_query($link,$query);}


                if($_SESSION['number'] == 60){
                    session_destroy();
                    echo "You have reached maximum number of TODO's";}



include("index.html");
?>







