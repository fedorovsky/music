<?php
// This is the API, 2 possibilities: show the app list or show a specific app by id.
// This would normally be pulled from a database but for demo purposes, I will be hardcoding the return values.

define('CONST_SERVER_TIMEZONE', 'UTC');
error_reporting(E_ALL);

$connection=mysqli_connect('sql604.your-server.de','theatoq_1','Dq2NnBBt9pSqZDzA','theatoq_db1');

function subscribe()
{
  //normally this info would be pulled from a database.
  //build JSON array

  try
  {
    $json_str = @file_get_contents('php://input');    
    $json_obj = json_decode($json_str);

    $email=$json_obj->{'email'};

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
      $response=array(
        'status' => 0,
        'status_message' =>'Invalid email format.'
      );
      return $response; 
    }
    
    $date = new DateTime('now', new DateTimeZone("UTC"));

    global $connection;
    $query="INSERT INTO Subscribe (Email, DateTime) VALUE ('".mysqli_real_escape_string($connection, $email)."','".$date->format('Y-m-d H:i:s')."')";

    if(mysqli_query($connection, $query))
    {
      $response=array(
        'status' => 1,
        'status_message' =>'Product Added Successfully.'
      );
    }
    else
    {
      $response=array(
        'status' => 0,
        'status_message' =>'You are already subscribed.'
      );
    }

    return $response;
  }
  catch(Exception $e)
  {
    return $e->getMessage();
  }
}

$possible_url = array("subscribe");

$value = "An error has occurred";
$request_method=$_SERVER["REQUEST_METHOD"];


if (isset($_GET["action"]) && in_array($_GET["action"], $possible_url) && $request_method == 'POST')
{
  switch ($_GET["action"])
    {
      case "subscribe":
        $value = subscribe();
        break;
    }
}

//return JSON array
echo json_encode($value);
?>