interface IHeaderLink {
  label: string;
  to: string;
}

interface IHeaderProps {
  primaryLinks: IHeaderLink[];
}

export type { IHeaderProps };
