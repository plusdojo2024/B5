<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <link rel="stylesheet" href="/B5/css/login.css">
  <link rel="stylesheet" href="/B5/css/common.css">
<head>
<meta charset="UTF-8">
<title>らく雀 ログイン</title>
</head>
<body>
<h1>らく雀</h1>

<form id="login_form" method="post" action="/B5/LoginServlet">
<label>ID:</label>
    <input class="id" type="text" name="userid"><br>
  <label>パスワード:</label>
    <input class="id" type="password" name="password"><br>
  <br>
  <input class="new" type="submit" name="submit" value="ログイン"><br>
  <span id="error_message"></span><br>
  <a href="/B5/SignupServlet" class="entry">新規登録</a>
</form>



</body>
<script>
'use strict';

let formObj = document.getElementById('login_form');
let errorMessageObj = document.getElementById('error_message');

/* [ログイン]ボタンをクリックしたときの処理 */
formObj.onsubmit = function() {
  if (!formObj.userid.value || !formObj.password.value) {
    errorMessageObj.textContent = '※IDとパスワードを入力してください';
    return false;
  }
  errorMessageObj.textContent = null;
};

formObj.onreset = function() {
  errorMessageObj.textContent = null;
};

</script>
</html>