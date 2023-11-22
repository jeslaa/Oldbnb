import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ProductForm.scss";

const ProductForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const navigate = useNavigate();

  const saveProduct = async (e: React.FormEvent) => {
    e.preventDefault();

    //Error handling
    if (name === "" || description === "" || price === "" || images.length === 0) {
      alert("Var vänlig och fyll i allt i formuläret");
    }

    //Post to the database
    try {
      await axios.post("http://localhost:3000/api/products/", {
        productName: name,
        description: description,
        price: price,
        imageUrl: images,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-form">
    <form className="form-containerr" onSubmit={saveProduct}>
      <h2 className="center">Skapa ett boende</h2>
      <div className="form-group">
        <label typeof="formGroupExampleInput">Namn</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput"
          placeholder="Produkt namn"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <label typeof="formGroupExampleInput2">Beskrivning</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Beskrivning av produkt"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>

      <div className="form-group">
        <label typeof="formGroupExampleInput2">Pris</label>
        <input
          type="number"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Pris"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
      </div>

      <div className="form-group">
        <label typeof="formGroupExampleInput2">Bild Url</label>
        <input
          type="text"
          className="form-control"
          id="formGroupExampleInput2"
          placeholder="Bild url"
          value={images.join(',')}
          onChange={(e) => {
            const urls = e.target.value.split(',').map((url) => url.trim());
            setImages(urls);
          }}
        ></input>
      </div>
      
     
      <div className="submit">
        <button className="submit-btn">Skicka</button>
      </div>
    </form>
   </div>
  );
};

export default ProductForm;
