import * as React from 'react';

export type PageProps = React.ComponentPropsWithoutRef<'main'>;

export const Page = React.forwardRef<HTMLDivElement, PageProps>(
    ({className, style, children, ...rest}, ref) => {
        return (
            <main ref={ref} className={className}
                  style={{backgroundColor: '#fafafa', ...style}} {...rest}>
                {children}
            </main>
        );
    }
);

Page.displayName = 'Page';
