import React, { useState } from "react";

function AdminPanel({ products, setProducts }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (!form.name || !form.price || !form.image) {
      alert("Please fill in all fields!");
      return;
    }
    const newProduct = {
      ...form,
      id: Date.now(),
      price: parseFloat(form.price),
    };
    setProducts([...products, newProduct]);
    setForm({ name: "", description: "", price: "", image: "" });
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleEdit = (id) => {
    const prod = products.find((p) => p.id === id);
    setForm(prod);
    setEditId(id);
  };

  const handleUpdate = () => {
    if (!form.name || !form.price || !form.image) {
      alert("Please fill in all fields!");
      return;
    }
    setProducts(
      products.map((p) =>
        p.id === editId
          ? { ...form, id: editId, price: parseFloat(form.price) }
          : p
      )
    );
    setEditId(null);
    setForm({ name: "", description: "", price: "", image: "" });
  };

  return (
    <div>
      <div className="col-12">
        {products.map((p) => (
          <div key={p.id}>
            <a href={`/admin/products/${p.id}`}>
              <div className="row">
                <h3>{p.name}</h3>
                <p>${p.price}</p>
              </div>
              <button className="float-right" onClick={() => handleEdit(p.id)}>
                Edit
              </button>
              <button
                className="float-right"
                onClick={() => handleDelete(p.id)}
              >
                Delete
              </button>
            </a>
          </div>
        ))}
      </div>

       <div>
        <input
          className="form-control"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Image URL"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        <input
          className="form-control"
          placeholder="Price"
          type="number"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        {editId ? (
          <button className="float-right" onClick={handleUpdate}>
            Update
          </button>
        ) : (
          <button onClick={handleAdd}>Add</button>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;
