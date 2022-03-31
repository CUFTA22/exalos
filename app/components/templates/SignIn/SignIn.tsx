import Button from '@lib/Button/Button';
import { TemplateProps } from '@template/types';
import { signIn } from 'next-auth/react';
import classes from './SignIn.module.scss';
import { getProviderIcon } from './util';

const SignIn: React.FC<TemplateProps> = ({ ssProps }) => {
  const { providers } = ssProps;

  return (
    <div className={classes.page_signin}>
      <div className={classes.email_form}></div>

      <div className={classes.providers}>
        {Object.values(providers)
          .slice(0, 2)
          .map((provider) => (
            <Button
              key={provider.name}
              text={`${provider.name}`}
              width={180}
              onClick={() => signIn(provider.id)}
              Icon={getProviderIcon[provider.name]}
            />
          ))}
      </div>

      <div className={classes.divider}></div>

      <div className={classes.providers}>
        {Object.values(providers)
          .slice(2, 4)
          .map((provider) => (
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
