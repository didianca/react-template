interface ChildProps {
    color: string;
    onClick: () => void;
    children?: React.ReactNode;
}

export const Child: React.FunctionComponent<ChildProps> = ({ color, onClick }) => {
    return <div>
        {color}
        <button onClick={onClick}>Click me</button>
    </div>;
};