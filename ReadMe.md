# AI Voice Chat
Project is currently ongoing.
This is an AI chatbot that user can interact and have a basic conversation with.

# Technologies
1. Installed socket.io to enable real time communication between server and browser
2. Installed express
2. Use natural language processing service tool, Wit.ai to build AI chatbot by installing node-wit

# To dos
1. Train wit.ai chatbot for better communication. (Create more intents)
2. Perhaps train bot for specific purpose? (mental health?)
3. Create json file to contain intents and responses that ai bot can extract from.
4. Style user interface (background, chat like features, icons, etc)
5. Learn about Restful APIs

# Resources 
Tutorial for AI chatbot speech = https://www.smashingmagazine.com/2017/08/ai-chatbot-web-speech-api-node-js/ 
AI API = https://dialogflow.cloud.google.com/#/getStarted 
WIT AI (chosen b/c its free) = https://wit.ai/ 

Build Speech to Text App = https://www.youtube.com/watch?v=iMwEYy-ETos 
Build Speech to Text App Source Code = https://github.com/opensource-coding/Javascript-Speeach-to-Text 


# Note to Myself
You can run in VSCode in terminal -> "node index.js"
If not working, check directory (make sure you have node app folder directory in AI Voice Chat folder)
Go to public folder -> right click -> properties -> get directory
In terminal "cd <directory>"

To stop running, Ctrl + C, should result in ^C

----------------------------------
There were 3 high severity vulnerabilities found when installed socket.io and express.

Enter "npm audit" to get report 
Seems to be a potential security issue which can be fixed later.
Can be safely pushed to Github and used as a small project.

HOWEVER, if deployment is the goal later, then this issue must be fixed.


