How to Setup Development Environment

Windows
    A.  Git
        I.  Download and install Git
            1.  Go to https://git-scm.com and download and install the latest
                version of Git.
                a.  Make sure to include Git Bash.
                b.  Checkout GitKraken at https://www.gitkraken.com/ for a Git
                    GUI.
        II. GitHub
            1.  Make a GitHub account at https://www.github.com/
    
    B.  Node
        I.  Download and install NodeJs
            1.  Go to https://www.nodejs.org and download and install a stable
                version of NodeJS (current or LTS).
        
        II. Correct Path Variables
            1.  Go to Control Panel -> System
                a.  Click "Advanced system settings"
                b.  Make sure you're on the Advanced Tab
                c.  Click Environment Variables
            2.  Verify PATH
                a.  Node should have already added npm to the PATH variable.
                b.  Find PATH, and make sure "%AppData%\npm" is included
                    ("%AppData%" might be expanded instead to:
                    "<drive>:/Users/<username>/AppData/Roaming")
            3.  Add NODE_PATH
                a.  Node probably forgot to add a NODE_PATH variable.
                b.  Add a new variable:
                    NODE_PATH = "%AppData%\npm\node_modules"
            4.  Reboot your PC
    
    C.  Fork the Repository
        I.  Fork the repo
            1.  Log into https://github.com/
            2.  Go to the project repository at: 
                https://github.com/realbiasedprogramming/tww-military-advisor/
            3.  Click fork
    
    D.  Clone the Repositories
        I.  Launch Git Bash
            1.  Clone the repository
                    cd <a nice directory for the project folder>
                    mkdir tww-military-advisor
                    git clone https://github.com/realbiasedprogramming/tww-military-advisor.git
                    git fetch
                    git checkout <development branch>
            2.  Add your fork:
                    git remote add my-fork https://github.com/<my_github>/tww-military-advisor.git
                    git remote update
    
    E.  Install Development Environment
        I.  Launch Node.js command prompt
            1.  Install dev environment
                    cd <path/to>/tww-military-advisor
                    npm install
    
    F.  Test Dev Environment
        I.  Launch Node.js command prompt
            1.  Run linting utility
                    cd <path/to>/tww-military-advisor
                    npm run lint
