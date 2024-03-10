# Welcome to the-donovans-piano-room!

## How to install NodeJs
We will use **nextjs** and it require at least version >= v18.17.0.
you can download nodejs from [nodejs download](https://nodejs.org/en/download)
- note that if you have another version and need to use another version you can install nvm from  [nvm download for windows](https://github.com/coreybutler/nvm-windows/releases) then install ****nvm-setup.exe** file.
- Open the file that you have downloaded, and complete the installation wizard.
When done, you can confirm that nvm has been installed by running:
> nvm -v
- for **mac** you can use **bash* or **curl** depending on the command available on your device.
>```bash
>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
> #or
> wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash 
- These commands will clone the nvm repository to a **`~/.nvm`** directory on your device.
- add the nvm configuration to your profile. If you're using zsh, that would be **`~/.zshrc`**. If you're using bash, that would be **`~/.bash_profile`**.
- If it doesn't automatically add nvm configuration, you can add it yourself to your profile file:
```bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```
- the command above will load nvm for use.
- now you will reload the configuration for your terminal to use:
```bash
 source ~/.bashrc
 nvm -v
```
- Now you can install Node versions like this:
```bash
nvm install latest
nvm install vX.Y.Z
```
- to use the new version which we just installed
```bash
nvm use vX.Y.Z
```
## Git cloning the repo.
Open the repo and you will find button **code** click on it then copy the **https link**.
 
Open the path of folder where you want to clone the repo in and write in the path **cmd** it will open prompt or you can directly open git bash or your terminal and navigate to your folder.
 then inside your terminal you need to write:
 ```shell
git clone [the https link which we copied]
git clone https://github.com/The-Donovans-Venom-501c3/the-donovans-piano-room.git
```
 
## Installing the dependencies

To install dependencies you need to run in the terminal:
 ```bash
npm install
#or
yarn install
```

## Running the app locally

After cloning the repo and installing the dependencies, now you can run the app by run the command:
 ```bash
npm run dev
#or
next dev
```

# NextJS file naming convention:
In NextJS applications, there are 3 most common naming conventions:

-   Camel case for file names, and Pascal case for component names.
-   Kebab case for file names, and Pascal case for component names.
-   Pascal case for both file names and component names

A component in React should always use a Pascal case. E.g,  **`App`**,  **`ServiceSection`**  or  **`MyAppContainer`**.
## Using Camel Case for File Names
Using camel case, the file name will be **`serviceSection.jsx`**. And the component name will be **`ServiceSection`**.
```
    const  ServiceSection = () => {  return (  
    <div className="App">  
    <h1>I Have Camel Case Naming</h1>  
    <p>And I'm proud of it!</p>  
    </div>  
    );  
    };  
    export  default  ServiceSection;
   ```
## Using Kebab Case for File Names
Using the kebab case, the file name will be **`service-section.jsx`**.
```
	const  ServiceSection= () => {  
	return (  
	<div className="App">  
	<h1>I Have Kebab Case Naming</h1>  
	<p>And I'm also proud of it!</p>  
	</div>  
	);  
	};  
	export  default  ServiceSection;
```
## Using Pascal Case for Both File and Component Name
Pascal case is following the same format as the camel case. In addition, it requires the first letter to be uppercase as well, while the camel case does not.
Using the Pascal case, the file name will be **`ServiceSection.jsx`**.
```
	const  ServiceSection= () => {  
	return (  
	<div className="App">  
	<h1>I Have Kebab Case Naming</h1>  
	<p>And I'm also proud of it!</p>  
	</div>  
	);  
	};  
	export  default  ServiceSection;
```