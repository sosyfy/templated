import cn from 'classnames';
const Container = ({children , className }) => {
    return (
        <div className={cn("px-4 py-6 max-w-screen-xl mx-auto", className )}>
            {children }
        </div>
    );
}



export default Container;