How to Setup Development Environment

Windows
    Git
        Download and install Git
            Go to https://git-scm.com and download and install the latest
            version of Git.
            
            Make sure to include Git Bash.
    
    Node
        Download and install NodeJs
            Go to https://www.nodejs.org and download and install the latest
            version of NodeJS.
        
        Correct Path Variables
            Go to Control Panel -> System
                Click "Advanced system settings"
                Make sure you're on the Advanced Tab
                Click Environment Variables
            
            Look at the User Variables:
                We want to see two variables with the following values:
                    PATH = %AppData%\npm
                    NODE_PATH = %AppData%\npm\node_modules
                Add any missing variables.
                Update any incorrect values.
    
    Clone the Repository
        Launch Git Bash:
            cd <a nice directory for the project folder>
            mkdir tww-military-advisor
            git clone https://www.github.com/realbiasedprogramming/tww-military-advisor
            git status
            git checkout <development branch>
            git status
        
    Install Dev Tool Dependencies
        Launch Node.js command prompt:
            cd path/to/tww-military-advisor
            cd dev
            ./setup.sh
