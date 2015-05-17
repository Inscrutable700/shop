<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="samael.design@gmail.com";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год 
$time=date("H:i"); // часы:минуты:секунды 
$backurl="index.html";  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
  
 
// Принимаем данные с формы 
 
$name=$_POST['name']; 
$email=$_POST['email']; 
$msg=$_POST['message']; 
$telephone=$_POST['telephone']; 
$density=$_POST['density'];
  
 
// Проверяем валидность e-mail 
 
if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is", strtolower($email))) 
 
{ 
 echo 
"<center><br><br>Возможно, вы допустили ошибку в электронной почте. <a href='javascript:history.back(1)'>Исправить адрес</a>"; 
 
} 
else 
{ 

$msg=" 

Имя: $name
Электронка: $email
Телефон: $telephone
Комментарий: $msg
Плотность: $density
 
"; 
 
  
 
// Отправляем письмо админу  
mail("$adminemail", "$date $time Новый заказ от $name", "$msg"); 
 
  
 
// Сохраняем в базу данных 
 
$f = fopen("message.txt", "a+"); 
 
fwrite($f," \n $date $time Новый заказ от $name"); 
fwrite($f,"\n $msg "); 
fwrite($f,"\n $telephone ");
fwrite($f,"\n $density");
fwrite($f,"\n ---------------"); 
fclose($f); 
 
  
 
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 9000); 
//--></script> 

<p>Ваш заказ принят. <br>В ближайшее время наш менеджер свяжется с вами.<br>Подождите, сейчас вы вернетесь на главную...</p>";  
exit; 
 
 } 
 
?>