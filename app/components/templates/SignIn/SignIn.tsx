import Button from '@lib/Button/Button';
import { TemplateProps } from '@template/types';
import { signIn } from 'next-auth/client';
import styles from './SignIn.module.scss';
import { getProviderIcon } from './util';

const SignIn: React.FC<TemplateProps> = ({ ssProps }) => {
  const { providers } = ssProps;

  return (
    <div className={styles.page_signin}>
      <div className={styles.email_form}></div>

      <div className={styles.divider}></div>

      <div className={styles.providers}>
        {Object.values(providers).map((provider) => (
          <Button
            key={provider.name}
            text={`${provider.name}`}
            width={180}
            onClick={() => signIn(provider.id)}
            Icon={getProviderIcon[provider.name]}
          />
        ))}
      </div>
    </div>
  );
};

export default SignIn;
