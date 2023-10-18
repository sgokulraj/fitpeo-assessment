import { BsSearch } from "react-icons/bs"
import "../Styles/Products.css"
import { products } from "../Components/data"
import Table from 'react-bootstrap/Table';

function Products() {
    return (
        <main id="products">
            <section className="productHeading">
                <h4 className="fs-5 fw-bold">Product Sell</h4>
                <div>
                    <div className='searchBox productFilter'>
                        <BsSearch className="searchIcon" />
                        <input type="search" id="" name="" placeholder='Search' />
                    </div>
                    <select className="form-select form-select-sm mb-3 productFilter" aria-label="Large select example">
                        <option defaultValue>Period</option>
                        <option value="30">Last 30 days</option>
                        <option value="187">Last 6 months</option>
                        <option value="365">Last 1 year</option>
                    </select>
                </div>
            </section>
            <section className="mt-3">
                <Table responsive>
                    <thead >
                        <tr>
                            <td scope="col" className="boxHeading">Product Name</td>
                            <td scope="col" className="boxHeading">Stock</td>
                            <td scope="col" className="boxHeading">Price</td>
                            <td scope="col" className="boxHeading">Total Sales</td>
                        </tr>
                    </thead>
                    <tbody >
                        {products.map((product) => {
                            return (
                                <tr>
                                    <td>
                                        <div className="singleProduct">
                                            <img src={product?.image} alt={product.productName} className="productImage" />
                                            <div>
                                                <h5 className="fs-6 fw-semibold text-start">{product.productName}</h5>
                                                <p className="boxHeading">{product.description}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.stock}</td>
                                    <td className="fw-semibold">${product.price}</td>
                                    <td>{product.stock}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>

            </section>
        </main>
    )
}

export default Products