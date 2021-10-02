function renderList(item) {
    let newList = item.map((i) => 
        <div className="row" key={i.name}>
            <div className="col list-name">
            {i.name}
            </div>
            <div className="col col-lg-2 ml-auto list-price">
            {i.price.toFixed(2)}
            </div>
            <div className="w-100"></div>
        </div>
    )
    return newList;
};

export { renderList };