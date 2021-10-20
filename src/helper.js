function renderList(item) {
    let newList = item.map((i) => 
        <div className="row item" key={i.name}>
            <div className="col-9 list-name">
            {i.name}
            </div>
            <div className="col-3 list-price">
            {i.price.toFixed(2)}
            </div>
            <div className="w-100"></div>
            <hr />
        </div>
    )
    return newList;
};



export { renderList };