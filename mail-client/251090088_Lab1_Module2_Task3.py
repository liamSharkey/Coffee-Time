import base64
import ssl
from socket import *

def runCommand(command, statusCode = 0):
    """takes two arguemnts, first the command to be sent and written to smtp, then the expected status code
    First sends command, then waits for response and prints. Will print message if expected status code not returned"""
    clientSocket.send(command.encode())
    recv = clientSocket.recv(1024).decode()
    statusCode = str(statusCode)
    print(recv)
    if recv[:3] != statusCode and statusCode != "0":
        print(statusCode + 'reply not received from server.')

def runAuthCommand(credential, statusCode):
    """takes two arguemnts, first the credential which is formatted, encoded and concat'd, then the expected status code
    First sends command, then waits for response and prints. Will print message if expected status code not returned"""
    clientSocket.send(credential + "\r\n".encode())
    recvAuth = clientSocket.recv(1024).decode()
    statusCode = str(statusCode)
    print("Authentication PASSWORD: " + recvAuth)
    if recvAuth[:3] != statusCode:
        print(statusCode + 'reply not received from server.')

### VARIABLE DECLARATION ###
subjectData = "SUBJECT: this is some subject (task3) \r\n"
msg = "\r\n I love computer networks!"
endmsg = "\r\n.\r\n"

username = 'saugeenengsophs@gmail.com'
password = 'Saugeen69'
user = base64.b64encode((username).encode())
passw = base64.b64encode((password).encode())

sendAddress = "<SaugeenEngSophs@gmail.com>"
rcptAddress = "<l.sharkey1105@hotmail.com>"
mailserver = ("smtp.gmail.com", 587)
clientSocket = socket(AF_INET, SOCK_STREAM)
#INET and stream refer to IPV4 and TCP respectfully
clientSocket.connect(mailserver)

recv = clientSocket.recv(1024).decode()
#returns status code of the received message from the socket
print(recv)
if recv[:3] != '220':
    print('220 reply not received from server.')

# Send HELO command and print server response.
heloCommand = 'HELO Alice\r\n'
runCommand(heloCommand, 250)

#run TLS command, initializes tls
ttls = "STARTTLS\r\n"
runCommand(ttls, 220)

#SSL (security) wrapping the existing socket and rerun HELO command
clientSocket = ssl.wrap_socket(clientSocket)
runCommand(heloCommand, 250)

#run auth to login in to sender email
authCommand = "AUTH LOGIN\r\n"
runCommand(authCommand, 334)

#send credentials while awaiting auth
runAuthCommand(user, 334)
runAuthCommand(passw, 235)

# Send MAIL FROM command and print server response for smtp to understand sender email
mailFromCommand = "MAIL FROM: " + sendAddress + "\r\n"
runCommand(mailFromCommand, 250)

# Send RCPT TO command and print server response for smtp to understand recipient email
rcptCommand = "RCPT TO: " + rcptAddress + "\r\n"
runCommand(rcptCommand, 250)

# Send DATA command and print server response to notify following data is email content
dataCommand = "Data\r\n"
runCommand(dataCommand, 354)

# Send email content data including subject
#added +endmsg to finish mail with a period
emailContent = subjectData + msg + endmsg
runCommand(emailContent, 250)

# Send QUIT command to close connection to socket and get server response.
quitCommand = 'QUIT\r\n'
runCommand(quitCommand)