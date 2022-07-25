import * as React from 'react';
export type PageContentProps = React.ComponentPropsWithoutRef<'main'>;

export const PageContent = React.forwardRef<HTMLDivElement, PageContentProps>(
    ({ className, style, children, ...rest }, ref) => {
        return (
            <section
                ref={ref}
                className={className}
                style={style}
                {...rest}
            >
                {children}
            </section>
        );
    }
);

PageContent.displayName = 'PageContent';
