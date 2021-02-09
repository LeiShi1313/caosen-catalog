import React from 'react'

const Page = React.forwardRef((props, ref) => {
    return (
        <div className="page" ref={ref}>
            <div className="page-content">
                {props.children}
            </div>
        </div>
    );
});

export default Page;