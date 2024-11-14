function sendEmail(event) {
    event.preventDefault(); // 防止表单默认提交

    var name = document.getElementById("InputName").value;
    var email = document.getElementById("InputEmail").value;
    var title = document.getElementById("InputEmailTitle").value;
    var message = document.getElementById("floatingTextarea2").value;

    var mailtoLink = "mailto:your-email.com"
                   + "?subject=" + encodeURIComponent(title)
                   + "&body=" + encodeURIComponent(
                        "Name: " + name + "\n" +
                        "Email: " + email + "\n" +
                        "Message: " + message
                   );
    
    window.location.href = mailtoLink; // 触发邮件客户端
  }