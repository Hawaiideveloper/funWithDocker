# Due to CORS:
 _The application can be seen as intended because of the modules being handled seperately, you will need to re-run docker after each edit_
 
 
### Or....

_Run google in an unsafe state using the following command_

`open -na "Google Chrome" --args --disable-web-security --user-data-dir="$HOME/chrome-dev"`

### Or ...

`python3 -m http.server`

# Docker Instuctions
 
 ## To run this Application you will need Docker
 _The folowing commands below will get you started, be sure to be in the PWD of the directory when running these commands_
 
 #### First remove any docker image to ensure you are targeting the right release
 `docker rm brightflow-app-container`

 #### Next you need to build it
  `docker build -t brightflow-app .`
 
 #### Finally you can run it
  `docker run -d -p 8080:8080 --name brightflow-app-container brightflow-app`
 
  #### If you need to stop it 
  `docker stop brightflow-app-container`
 
 
 #### If you need to see if it is still running
 `docker ps`
 