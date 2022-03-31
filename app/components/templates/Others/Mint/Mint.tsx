import Card from '@lib/Card/Card';
import classes from './Mint.module.scss';

import { gitCommands, lwCommands, lwConfig, nodeCommands, vscCommands } from './commands';
import Button from '@lib/Button/Button';

const Mint: React.FC = () => {
  return (
    <div className={classes.page_mint}>
      <Card className={classes.center}>
        <div className={classes.title}># Downloads</div>

        <div className={classes.row}>
          <a href="https://linuxmint.com/download.php" target="_blank" rel="noopener noreferrer">
            <Button className={classes.btn} text="ISO" />
          </a>

          <a href="https://rufus.ie/en/" target="_blank" rel="noopener noreferrer">
            <Button className={classes.btn} text="Rufus" />
          </a>
        </div>

        <div className={classes.title}># Git</div>

        <pre>
          <code>{gitCommands}</code>
        </pre>

        <div className={classes.title}># Node.js</div>

        <pre>
          <code>{nodeCommands}</code>
        </pre>

        <div className={classes.title}># Yarn</div>

        <pre>
          <code>npm install --global yarn</code>
        </pre>

        <div className={classes.title}># Librewolf</div>

        <div className={classes.row}>
          <a
            href="https://librewolf.net/installation/debian/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className={classes.btn} text="Website" />
          </a>
        </div>

        <pre>
          <code>{lwCommands}</code>
        </pre>

        <div className={classes.title}># Chromium</div>

        <pre>
          <code>sudo apt-get install chromium-browser</code>
        </pre>

        <div className={classes.title}># build-essential</div>

        <pre>
          <code>sudo apt install -y build-essential</code>
        </pre>

        <div className={classes.title}># Slack</div>

        <div className={classes.txt}>Software Manager</div>

        <div className={classes.title}># Skype</div>

        <div className={classes.txt}>Software Manager</div>

        <div className={classes.title}># VS Code</div>

        <div className={classes.txt}>Software Manager</div>

        <div className={classes.row}>
          <a
            href="https://www.tecmint.com/install-visual-studio-code-on-linux/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className={classes.btn} text="Instructions" />
          </a>
        </div>

        <pre>
          <code>{vscCommands}</code>
        </pre>

        <div className={classes.title}># Generate SSH key</div>

        <pre>
          <code>ssh-keygen -t ed25519 -C "your_email@example.com"</code>
        </pre>

        <div className={classes.title}># Librewolf config</div>

        <pre>
          <code>{lwConfig}</code>
        </pre>
      </Card>
    </div>
  );
};

export default Mint;
