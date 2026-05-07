import fs from "fs";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getProductsByCategory,
} from "@/lib/db";

jest.mock("fs");

const mockFs = fs as jest.Mocked<typeof fs>;

const mockCatalog = {
  catalog: [
    {
      id: 1,
      name: "Buquê 6 Rosas",
      price: "R$ 180,00",
      displayPrice: "$$",
      description: "Buquê com seis rosas selecionadas",
      image: "/catalog/buque/buque_seis_rosas_1.png",
      images: ["/catalog/buque/buque_seis_rosas_1.png"],
      careInstructions: ["Troque a água diariamente"],
      category: "buque",
      rating: 4,
      reviews: 0,
    },
    {
      id: 2,
      name: "Arranjo Buquê Rosa Colorido",
      price: "R$ 190,00",
      displayPrice: "$$",
      description: "Arranjo de flores com rosas e flores do campo",
      image: "/catalog/arranjos/arranjo_buque_rosa_colorido_1.png",
      images: ["/catalog/arranjos/arranjo_buque_rosa_colorido_1.png"],
      careInstructions: ["Mantenha em local fresco"],
      category: "arranjos",
      rating: 4,
      reviews: 0,
    },
    {
      id: 3,
      name: "Orquídea G",
      price: "R$ 230,00",
      displayPrice: "$$$",
      description: "Orquídea grande com floração exuberante",
      image: "/catalog/orquideas/orquidea_g_1.png",
      images: ["/catalog/orquideas/orquidea_g_1.png"],
      careInstructions: ["Regue 1 a 2 vezes por semana"],
      category: "orquideas",
      rating: 4,
      reviews: 0,
    },
  ],
};

const mockProducts = JSON.stringify([
  { id: 1, name: "Buquê 6 Rosas", price: "R$ 180,00", image: "/catalog/buque/buque_seis_rosas_1.png" },
]);

beforeEach(() => {
  mockFs.readFileSync.mockImplementation((filePath: any) => {
    if (String(filePath).includes("catalog")) return JSON.stringify(mockCatalog);
    if (String(filePath).includes("products")) return mockProducts;
    return "{}";
  });
  mockFs.writeFileSync.mockImplementation(() => undefined);
});

describe("getAllProducts", () => {
  it("returns all products from catalog", () => {
    const products = getAllProducts();
    expect(products).toHaveLength(3);
    expect(products[0].name).toBe("Buquê 6 Rosas");
  });

  it("returns empty array when catalog is unreadable", () => {
    const consoleSpy = jest.spyOn(console, "error").mockImplementation(() => {});
    mockFs.readFileSync.mockImplementation(() => { throw new Error("File not found"); });
    const products = getAllProducts();
    expect(products).toEqual([]);
    consoleSpy.mockRestore();
  });
});

describe("getProductById", () => {
  it("returns the correct product by id", () => {
    const product = getProductById(2);
    expect(product).not.toBeNull();
    expect(product!.name).toBe("Arranjo Buquê Rosa Colorido");
  });

  it("returns null for a non-existent id", () => {
    const product = getProductById(999);
    expect(product).toBeNull();
  });
});

describe("searchProducts", () => {
  it("finds products by name", () => {
    const results = searchProducts("rosas");
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((p) => p.name.toLowerCase().includes("rosas") || p.description.toLowerCase().includes("rosas") || p.category.toLowerCase().includes("rosas"))).toBe(true);
  });

  it("finds products by category", () => {
    const results = searchProducts("arranjos");
    expect(results).toHaveLength(1);
    expect(results[0].category).toBe("arranjos");
  });

  it("returns empty array when no match", () => {
    const results = searchProducts("xyznotfound");
    expect(results).toEqual([]);
  });

  it("is case insensitive", () => {
    const results = searchProducts("BUQUÊ");
    expect(results.length).toBeGreaterThan(0);
  });
});

describe("getProductsByCategory", () => {
  it("returns only products of the given category", () => {
    const results = getProductsByCategory("buque");
    expect(results).toHaveLength(1);
    expect(results[0].category).toBe("buque");
  });

  it("is case insensitive", () => {
    const upper = getProductsByCategory("BUQUE");
    const lower = getProductsByCategory("buque");
    expect(upper).toHaveLength(lower.length);
  });

  it("returns empty array for unknown category", () => {
    const results = getProductsByCategory("cestas");
    expect(results).toEqual([]);
  });
});

describe("createProduct", () => {
  it("creates a product with auto-incremented id", () => {
    const newProduct = createProduct({
      name: "Novo Buquê",
      price: "R$ 100,00",
      description: "Novo produto",
      image: "/catalog/buque/novo.png",
      category: "buque",
    });

    expect(newProduct.id).toBe(4);
    expect(newProduct.name).toBe("Novo Buquê");
    expect(mockFs.writeFileSync).toHaveBeenCalled();
  });
});

describe("updateProduct", () => {
  it("updates an existing product", () => {
    const updated = updateProduct(1, { price: "R$ 200,00" });
    expect(updated).not.toBeNull();
    expect(updated!.price).toBe("R$ 200,00");
    expect(updated!.id).toBe(1);
    expect(mockFs.writeFileSync).toHaveBeenCalled();
  });

  it("returns null for non-existent product", () => {
    const result = updateProduct(999, { price: "R$ 200,00" });
    expect(result).toBeNull();
  });
});

describe("deleteProduct", () => {
  it("deletes an existing product and returns true", () => {
    const result = deleteProduct(1);
    expect(result).toBe(true);
    expect(mockFs.writeFileSync).toHaveBeenCalled();
  });

  it("returns false for non-existent product", () => {
    const result = deleteProduct(999);
    expect(result).toBe(false);
  });
});
