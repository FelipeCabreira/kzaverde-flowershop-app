import React, { FC, useState } from "react";
import { useProducts, createProduct } from "../../lib/hooks";

/**
 * API Testing Component
 *
 * This component allows you to test the BFF API endpoints.
 * Add this to your page during development:
 *
 * import ApiTester from "@/components/api/ApiTester";
 *
 * <ApiTester />
 */

const ApiTester: FC = () => {
  const [showTester, setShowTester] = useState(false);
  const [formData, setFormData] = useState({
    name: "Test Flower",
    price: "$99.99",
    displayPrice: "$$",
    description: "A test flower arrangement",
    image: "https://images.pexels.com/photos/1677009/pexels-photo-1677009.jpeg",
    category: "test",
  });
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const { products, refetch } = useProducts();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateProduct = async () => {
    setLoading(true);
    try {
      const result = await createProduct(formData);
      setResponse(result);
      if (result.success) {
        await refetch();
      }
    } catch (error) {
      setResponse({ success: false, error: String(error) });
    } finally {
      setLoading(false);
    }
  };

  if (!showTester) {
    return (
      <button
        onClick={() => setShowTester(true)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
          padding: "10px 15px",
          backgroundColor: "#d946ef",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "12px",
        }}
      >
        API Tester
      </button>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        zIndex: 9999,
        backgroundColor: "#222",
        border: "1px solid #d946ef",
        borderRadius: "8px",
        padding: "20px",
        width: "400px",
        maxHeight: "600px",
        overflowY: "auto",
        color: "#fff",
        fontFamily: "monospace",
        fontSize: "12px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <h3 style={{ margin: 0 }}>API Tester</h3>
        <button
          onClick={() => setShowTester(false)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            color: "#d946ef",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          ✕
        </button>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <h4>Products Loaded: {products.length}</h4>
      </div>

      <div
        style={{
          marginBottom: "15px",
          borderTop: "1px solid #444",
          paddingTop: "10px",
        }}
      >
        <h4>Create Product</h4>
        <input
          type="text"
          name="name"
          placeholder="Product name"
          value={formData.name}
          onChange={handleInputChange}
          style={{
            width: "100%",
            padding: "5px",
            marginBottom: "8px",
            backgroundColor: "#333",
            border: "1px solid #555",
            color: "#fff",
            borderRadius: "4px",
          }}
        />
        <input
          type="text"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleInputChange}
          style={{
            width: "100%",
            padding: "5px",
            marginBottom: "8px",
            backgroundColor: "#333",
            border: "1px solid #555",
            color: "#fff",
            borderRadius: "4px",
          }}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          style={{
            width: "100%",
            padding: "5px",
            marginBottom: "8px",
            backgroundColor: "#333",
            border: "1px solid #555",
            color: "#fff",
            borderRadius: "4px",
            minHeight: "60px",
          }}
        />
        <button
          onClick={handleCreateProduct}
          disabled={loading}
          style={{
            width: "100%",
            padding: "8px",
            backgroundColor: "#d946ef",
            border: "none",
            borderRadius: "4px",
            color: "white",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.5 : 1,
          }}
        >
          {loading ? "Creating..." : "Create Product"}
        </button>
      </div>

      {response && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            backgroundColor: response.success ? "#1a3a1a" : "#3a1a1a",
            border: `1px solid ${response.success ? "#4a4" : "#a44"}`,
            borderRadius: "4px",
          }}
        >
          <strong>{response.success ? "✓ Success" : "✗ Error"}</strong>
          <pre
            style={{
              fontSize: "10px",
              margin: "8px 0 0 0",
              whiteSpace: "pre-wrap",
              wordBreak: "break-word",
            }}
          >
            {JSON.stringify(response, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ApiTester;
