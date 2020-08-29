import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProduct } from '../Actions/actions';

export const Product = ({ loading, products, getProduct }) => {
    useEffect(() => {
        getProduct();
    }, [getProduct]);

    return (
        <div>
            {loading ? (
                <h1>LOADING..........</h1>
            ) : (
                <section>
                    <h1>OUR PRODUCT</h1>
                    <ul>
                        {products.map((item) => {
                            return <li key={item}>{item.title}</li>;
                        })}
                    </ul>
                </section>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        loading: state.productState.loading,
        products: state.productState.products,
    };
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         getProduct: getProduct(),
//     };
// };

export default connect(mapStateToProps, { getProduct })(Product);
// export default connect(mapStateToProps, mapDispatchToProps)(Product);
