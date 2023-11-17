
const Button = ({ href, children, className }) => {
    return (
        <a href={href} className={className}>{children}</a>
    );
};

export default Button;