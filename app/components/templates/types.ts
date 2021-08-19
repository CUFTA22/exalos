import { Planner_Data } from '@ts/planner.types';
import { OAuthProvider } from 'next-auth/providers';

interface PotentialProps {
  providers?: OAuthProvider;
  planner?: Planner_Data;
}

export interface TemplateProps {
  ssProps?: PotentialProps;
}
