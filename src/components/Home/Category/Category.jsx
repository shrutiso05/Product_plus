import cat1 from "../../../assets/category/cat-1.jpg";


import "./Category.scss";
const Category = ({categories}) => {
    return (
        <div className="shop-by-category">
            <div className="categories">
                {categories?.data.map((items) =>
                <div className="category">
                    <img src={process.env.REACT_APP_DEV_URL + items?.attributes?.image?.data?.attribiutes?.url} alt="new"  />
                </div>
            )}
            </div>
        </div>
    );
};

export default Category;
