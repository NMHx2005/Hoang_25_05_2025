import { useState, useEffect } from 'react';
import ProductService from '../../services/product.service';
import './productList.scss';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        fetchProducts();
    }, [currentPage, searchTerm]);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await ProductService.getAllProducts({
                page: currentPage,
                search: searchTerm
            });
            setProducts(response.data);
            setTotalPages(response.totalPages);
            setError(null);
        } catch (err) {
            setError('Không thể tải danh sách sản phẩm');
            console.error('Error fetching products:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset về trang 1 khi tìm kiếm
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này?')) {
            try {
                await ProductService.deleteProduct(id);
                fetchProducts(); // Refresh danh sách sau khi xóa
            } catch (err) {
                console.error('Error deleting product:', err);
                setError('Không thể xóa sản phẩm');
            }
        }
    };

    if (loading) return <div className="loading">Đang tải...</div>;
    if (error) return <div className="error">{error}</div>;

    return (
        <div className="product-list-container">
            <div className="product-list-header">
                <h1>Danh sách sản phẩm</h1>
                <div className="search-box">
                    <input
                        type="text"
                        placeholder="Tìm kiếm sản phẩm..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
                <button className="add-product-btn" onClick={() => window.location.href = '/admin/add-product'}>
                    Thêm sản phẩm mới
                </button>
            </div>

            <div className="product-table">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên sản phẩm</th>
                            <th>Giá</th>
                            <th>Danh mục</th>
                            <th>Trạng thái</th>
                            <th>Thao tác</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price.toLocaleString('vi-VN')}đ</td>
                                <td>{product.category}</td>
                                <td>
                                    <span className={`status ${product.status.toLowerCase()}`}>
                                        {product.status}
                                    </span>
                                </td>
                                <td>
                                    <div className="actions">
                                        <button
                                            className="edit-btn"
                                            onClick={() => window.location.href = `/admin/edit-product/${product.id}`}
                                        >
                                            Sửa
                                        </button>
                                        <button
                                            className="delete-btn"
                                            onClick={() => handleDelete(product.id)}
                                        >
                                            Xóa
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="pagination">
                <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                >
                    Trước
                </button>
                <span>Trang {currentPage} / {totalPages}</span>
                <button
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                >
                    Sau
                </button>
            </div>
        </div>
    );
};

export default ProductList; 