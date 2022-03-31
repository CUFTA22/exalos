export const gitCommands = `apt-get install git
add-apt-repository ppa:git-core/ppa
apt update
apt install git`;

export const nodeCommands = `curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs`;

export const lwCommands = `echo "deb [arch=amd64] http://deb.librewolf.net $(lsb_release -sc) main" | sudo tee /etc/apt/sources.list.d/librewolf.list
sudo wget https://deb.librewolf.net/keyring.gpg -O /etc/apt/trusted.gpg.d/librewolf.gpg
sudo apt update
sudo apt install librewolf -y`;

export const vscCommands = `sudo apt update
sudo apt install software-properties-common apt-transport-https
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64 signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'
sudo apt update
sudo apt install code`;

export const lwConfig = `-- Add ons
    - React Dev Tools
    - Bitwarden
    - Decentraleyes
    - Dark Reader
    - ColorZilla
    - SVG Export

-- about:config
    - webgl.disabled      -  false
    - general.autoScroll  -  true

-- others
    - Edit toolbar -> Bookmarks toolbar -> Always show
    - Import bookmarks`;
