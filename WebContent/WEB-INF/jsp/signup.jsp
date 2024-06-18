<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
  <link rel="stylesheet" href="/B5/css/signup.css">
  <link rel="stylesheet" href="/B5/css/common.css">
<head>
<meta charset="UTF-8">
<title>らく雀 | 新規登録</title>
</head>
<body>
<h1>らく雀</h1>

<form id="signup_form" method="get" action="result.html">
  <label>ID：</label>
  <input type="id" name="id"><br>
  <label>パスワード：</label>
  <input type="password" name="password"><br>
  <input class="new" type="submit" name="submit" value="登録"><br>
  <span id="error_message"></span>
</form>

</body>

<script>
'use strict';

let formObj = document.getElementById('signup_form');
let errorMessageObj = document.getElementById('error_message');


formObj.onsubmit = function() {
  if (!formObj.id.value || !formObj.pw.value) {
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