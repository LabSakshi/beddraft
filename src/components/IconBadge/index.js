const IconBadge = (props) => {
    const {count} = props;
    return (
        <div className="flex-justify-center red-circle">
            <span >{count}</span>
        </div>
    )
}

export default IconBadge;