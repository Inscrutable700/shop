<? 
// ----------------------------Форма для поддержки через почту-------------------------- // 
 
$adminemail="samael.design@gmail.com";  // e-mail админа 
 
$date=date("d.m.y"); // число.месяц.год 
$time=date("H:i"); // часы:минуты:секунды 
$backurl="index.html";  // На какую страничку переходит после отправки письма 

//---------------------------------------------------------------------- // 
 
 
// Принимаем данные с формы 
 
$name=$_POST['name']; 
$email=$_POST['email']; 
$msg=$_POST['message']; 
  
 
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
Почта: $email
Вопрос: $msg 

"; 
 
  
 
// Отправляем письмо админу  
mail("$adminemail", "Вопрос от $name $date $time", "$msg"); 
 
  
 
// Сохраняем в базу данных  
$f = fopen("message.txt", "a+"); 
 
fwrite($f," \n $date $time Вопрос от $name"); 
fwrite($f,"\n $email "); 
fwrite($f,"\n $msg "); 
fwrite($f,"\n ---------------"); 
fclose($f); 
 
  
 
// Выводим сообщение пользователю  
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 9000); 
//--></script> 

<p><b>Мы получили ваше сообщение.</b><br>Представитель службы поддержки Шугарис сейчас же окажет вам помощь, а ответ придет на вашу электронную почту.<br><i>Время работы службы поддержки с 9:00 до 18:00, пн-пт.</i><br><br>Подождите несколько секунд, сейчас вы вернетесь на главную страницу.</p>";
exit; 
 
 } 
 
?>