import { IBaseProps } from '../_base';

export interface IIndexListProps extends IBaseProps {
  alphabetList: string[],
  onTouch: (key: string) => {},
}

export declare const IndexListDefaultProps: Partial<IIndexListProps>;