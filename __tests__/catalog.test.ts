import catalogData from "@/data/catalog_updated_07_05_2026.json";

const { catalog } = catalogData;

const VALID_CATEGORIES = ["buque", "arranjos", "cestas", "orquideas", "plantas", "bestsellers", "seasonal", "occasions", "weddings"];

describe("catalog_updated_07_05_2026.json integrity", () => {
  it("has at least one product", () => {
    expect(catalog.length).toBeGreaterThan(0);
  });

  it("every product has required fields", () => {
    catalog.forEach((product) => {
      expect(product.id).toBeDefined();
      expect(product.name).toBeTruthy();
      expect(product.price).toBeTruthy();
      expect(product.description).toBeTruthy();
      expect(product.image).toBeTruthy();
      expect(product.category).toBeTruthy();
    });
  });

  it("all ids are unique", () => {
    const ids = catalog.map((p) => p.id);
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("ids are sequential starting from 1", () => {
    const ids = catalog.map((p) => p.id).sort((a, b) => a - b);
    ids.forEach((id, index) => {
      expect(id).toBe(index + 1);
    });
  });

  it("all prices follow the R$ format", () => {
    catalog.forEach((product) => {
      expect(product.price).toMatch(/^R\$\s\d+,\d{2}$/);
    });
  });

  it("all displayPrice values are valid", () => {
    const valid = ["$", "$$", "$$$"];
    catalog.forEach((product) => {
      expect(valid).toContain(product.displayPrice);
    });
  });

  it("all categories are from the known list", () => {
    catalog.forEach((product) => {
      expect(VALID_CATEGORIES).toContain(product.category);
    });
  });

  it("all image paths start with /catalog/", () => {
    catalog.forEach((product) => {
      expect(product.image).toMatch(/^\/catalog\//);
    });
  });

  it("images array is non-empty and primary image is included", () => {
    catalog.forEach((product) => {
      expect(product.images.length).toBeGreaterThan(0);
      expect(product.images).toContain(product.image);
    });
  });

  it("all products have at least one care instruction", () => {
    catalog.forEach((product) => {
      expect(product.careInstructions.length).toBeGreaterThan(0);
    });
  });

  it("rating is between 1 and 5", () => {
    catalog.forEach((product) => {
      expect(product.rating).toBeGreaterThanOrEqual(1);
      expect(product.rating).toBeLessThanOrEqual(5);
    });
  });

  it("no product has an empty name", () => {
    catalog.forEach((product) => {
      expect(product.name.trim()).not.toBe("");
    });
  });

  it("each category has at least one similar product or is plantas/orquideas", () => {
    const categoryCounts: Record<string, number> = {};
    catalog.forEach((p) => {
      categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
    });
    const singleProductCategories = Object.entries(categoryCounts)
      .filter(([, count]) => count === 1)
      .map(([cat]) => cat);

    singleProductCategories.forEach((cat) => {
      console.warn(`Category "${cat}" has only 1 product — similar products section will be empty`);
    });

    expect(singleProductCategories).toEqual([]);
  });
});
