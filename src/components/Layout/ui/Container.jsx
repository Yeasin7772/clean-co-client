

const Container = ({ children, className }) => {
    return (
        <div>
            <div className={`w-full max-w-[1250px] px-[25px] mx-auto ${className} `}>
                {children}
            </div>
        </div>
    );
};

export default Container;