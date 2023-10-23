import React, { useState } from 'react';
// import productsService from '../../Utils/productService';

interface Product {
  creationDate: string | number | Date;
  productName: string;
  description: string;
  price: number;
  imageUrls: string[];
}

const CreateProductPage: React.FC = () => {
  const [product, setProduct] = useState<Product>({
    creationDate: new Date(),
    productName: '',
    description: '',
    price: 0,
    imageUrls: [],
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleCreateProduct = async (product: Product) => {
    try {
      await productsService.createProduct(product);
      console.log('Product created successfully');
      // You might want to redirect the user to another page or display a success message.
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const [newImageUrl, setNewImageUrl] = useState<string>('');

  const handleAddImageUrl = () => {
    if (newImageUrl) {
      setProduct({
        ...product,
        imageUrls: [...product.imageUrls, newImageUrl],
      });
      setNewImageUrl('');
    }
  };

  const handleRemoveImageUrl = (index: number) => {
    const updatedImageUrls = [...product.imageUrls];
    updatedImageUrls.splice(index, 1);
    setProduct({
      ...product,
      imageUrls: updatedImageUrls,
    });
  };

  const handleSubmit = () => {
    handleCreateProduct(product);
    // You can choose how to handle the submission on this page, e.g., showing a success message.
  };

  return (
    <div>
      <h1>Create Product Page</h1>
      <form>
        {/* ... (Rest of the form code) ... */}
      </form>
      <button onClick={handleSubmit}>List home</button>
    </div>
  );
};

export default CreateProductPage;