import { OAuthProvider } from 'next-auth/providers';

interface PotentialProps {
  providers?: OAuthProvider;
}

export interface TemplateProps {
  ssProps?: PotentialProps;
}
