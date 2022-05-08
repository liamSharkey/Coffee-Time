import smtplib

#establish mailserver socket using smtp library:
mailserver =  smtplib.SMTP('smtp.gmail.com:587')

### Variable declaration ###
user = "SaugeenEngSophs@gmail.com"
passw = "Saugeen69"
rcpt = "l.sharkey1105@hotmail.com"

msg = "\r\n I love computer networks!"
endmsg = "\r\n.\r\n"
message = "SUBJECT: this is some subject (task4) \r\n"+ msg + endmsg

#establish server connection
mailserver.ehlo()
#starts TLS server
mailserver.starttls()
#run auth
mailserver.login(user, passw)

#send mail with given user, recipient and message
mailserver.sendmail(user, rcpt, message)
#close socket connection
mailserver.quit()
print("Email was received successfully")