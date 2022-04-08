import { Bookmark24Regular, Document24Regular } from '@fluentui/react-icons';
import Button from '@lib/Button/Button';
import Card from '@lib/Card/Card';
import classes from './Files.module.scss';

const Files: React.FC = () => {
  return (
    <div className={classes.page_files}>
      <Card className={classes.center}>
        <div className={classes.title}>Browse files</div>

        <div className={classes.grid}>
          <Button
            className={classes.btn}
            Icon={Bookmark24Regular}
            size="large"
            text="Bookmarks"
            onClick={() => {
              window.open(process.env.NEXT_PUBLIC_STATIC_URL + '/files/bookmarks.html', '_blank');
            }}
          />

          <Button
            className={classes.btn}
            Icon={Document24Regular}
            size="large"
            text="CV"
            onClick={() => {
              window.open(process.env.NEXT_PUBLIC_STATIC_URL + '/files/cv.pdf', '_blank');
            }}
          />
        </div>
      </Card>
    </div>
  );
};

export default Files;
