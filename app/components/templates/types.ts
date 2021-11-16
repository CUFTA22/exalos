import { BaseItem } from '@element/SideBarItem/types';
import { Planner_Data } from '@ts/planner.types';
import { Tasks_Data } from '@ts/tasks.types';
import { OAuthProvider } from 'next-auth/providers';

interface PageProps {
  providers?: OAuthProvider;
  planner?: Planner_Data;
  tasks?: Tasks_Data;
}

export interface TemplateProps {
  ssProps?: PageProps;
}

export interface ExploreProps {
  title?: string;
  options?: BaseItem[];
}
