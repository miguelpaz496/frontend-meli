import '../styles/Breadcrumb.scss'

export const Breadcrumb = ({data}) => {

    const isLast = (index) => {
        return index === data.length - 1;
    }

    return (
        <div className="row breadcrumb">
            {
                data && data.map((item, i) =>{
                    return (
                        <p
                        key={i}
                        >
                            {
                                isLast(i) ?
                                <span className="crumb disabled">
                                    {item.title}
                                </span> :
                                <span className="crumb">
                                    {item.title + " >"} 
                                </span>

                            }
                        </p>
                    )
                })
            }
        </div>
    )
}