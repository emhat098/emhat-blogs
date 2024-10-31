import { cn } from '@/lib/utils';
import { ElementType, FC, HTMLAttributes, PropsWithChildren } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  as: ElementType;
}

const Container: FC<ContainerProps & PropsWithChildren> = ({
  as = 'div',
  children,
  ...props
}) => {
  const WrappedComponent = as;
  return (
    <WrappedComponent className={cn(props.className, 'max-w-4xl mx-auto p-2')}>
      {children}
    </WrappedComponent>
  );
};

export default Container;
