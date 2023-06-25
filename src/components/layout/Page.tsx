import { useEffect } from 'react';
import type { FC, PropsWithChildren } from 'react';

interface Props {
  title: string | undefined;
}

export const Page: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  useEffect(() => {
    document.title =
      title === undefined ? 'Riley Cotton' : `Riley Cotton | ${title}`;
  }, [title]);

  return <>{children}</>;
};
