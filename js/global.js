<script language="JavaScript">
var frmvalidator  = new Validator("contactform");
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email");
frmvalidator.addValidation("message","req","Please include a message");
frmvalidator.addValidation("email","email",
  "Please enter a valid email address");
</script>