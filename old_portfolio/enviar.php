<?php
$nome = $_POST['uname'];
$email = $_POST['eml'];
$mensagem = $_POST['msg'];
//No nosso caso é o e-mail do seu site ou que pertença a seu dominio
$para = 'roxsublime@gmail.com';
$assunto = 'Desenvolvimento Web';
$cabecalho = "MIME-Version: 1.0" . "\r\n".
             "Content-type: text/html; charset=iso-8859-1" . "\r\n".
             "From: roxsublime@gmail.com" . "\r\n" .
             "Reply-To: roxsublime@gmail.com";

// $corpoDoEmail = $nome . "<br />";
// $corpoDoEmail .= $email . "<br />";
// $corpoDoEmail .= $mensagem;

$corpoDoEmail = '<h1 color="green">FORMULARIO PREENCHIDO NO SITE www.marcellsantos.com.br</h1>
<p><b>Nome:</b> '.$nome.'
<p><b>E-Mail:</b> '.$email.'
<p><b>Mensagem:</b> '.$mensagem.'</p>
<hr>';

$status = mail($para, $assunto, $corpoDoEmail, $cabecalho);

if($status)
    echo "<script> alert('Formulário enviado com sucesso.'); </script>";
else
    echo "<script> alert('Falha ao enviar o Formulário.'); </script>";

echo "<script> window.location.href = 'http://www.marcelsantos.com.br'; </script>";


?>