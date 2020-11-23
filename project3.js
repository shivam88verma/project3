<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Document</title>
<style>
   body {
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
   }
</style>
</head>
<body>
<h1>JavaScript Redirect a URL</h1>
<div class="sample"></div>
<button class="Btn">CLICK HERE</button>
<h3>
Click on the above button to redirect the url to www.google.com
</h3>
<script>
   document.querySelector('.Btn').addEventListener('click',()=>{
      window.location.href = 'https://www.google.com';
   })
</script>
</body>
</html>