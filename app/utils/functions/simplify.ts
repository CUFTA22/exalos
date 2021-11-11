import { Children } from 'react';

// Simplifies React children, used in Animate.tsx

const flatten = (children: any, flat: any = []): any => {
  flat = [...flat, ...Children.toArray(children)];

  if (children.props && children.props.children) {
    return flatten(children.props.children, flat);
  }

  return flat;
};

export const simplify = (children: any) => {
  if (!children) return;
  const flat = flatten(children);

  return flat.map(({ key, ref, type, props: { children, ...props } }: any) => ({
    key,
    ref,
    type,
    props,
  }));
};
