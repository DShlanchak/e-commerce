import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//fetch categories
export const fetchCategories = createAsyncThunk(
  "shop/fetchCategories", 
  async () => {
    const response = await fetch("http://localhost:3333/categories/all");
    return response.json();
  }
);

// fetch products by category
export const fetchProducts = createAsyncThunk(
  "shop/fetchProducts", 
  async (categoryId) => {
    const response = await fetch(`http://localhost:3333/categories/${categoryId}`);
    return { categoryId, products: await response.json() };
  }
);

export const fetchAllProducts = createAsyncThunk(
  "shop/fetchAllProducts", 
  async () => {
    const response = await fetch("http://localhost:3333/products/all");
    return response.json();
  }
);

export const fetchSingleProduct = createAsyncThunk(
  "shop/fetchSingleProduct", 
  async (id) => {
    const response = await fetch(`http://localhost:3333/products/${id}`);
    return response.json();
  }
);

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    categories: { list: [], status: "idle", error: null },
    products: { items: {}, status: "idle", error: null },
    allProducts: { list: [], status: "idle", error: null },
    singleProduct: { details: null, status: "idle", error: null },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.categories.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories.status = "succeeded";
        state.categories.list = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.categories.status = "failed";
        state.categories.error = action.error.message;
      })

      .addCase(fetchProducts.pending, (state) => {
        state.products.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        const { categoryId, products } = action.payload;
        state.products.items[categoryId] = products;
        state.products.status = "succeeded";
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.products.status = "failed";
        state.products.error = action.error.message;
      })

      .addCase(fetchAllProducts.pending, (state) => {
        state.allProducts.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.allProducts.status = "succeeded";
        state.allProducts.list = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.allProducts.status = "failed";
        state.allProducts.error = action.error.message;
      })

      .addCase(fetchSingleProduct.pending, (state) => {
        state.singleProduct.status = "loading";
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.singleProduct.status = "succeeded";
        state.singleProduct.details = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.singleProduct.status = "failed";
        state.singleProduct.error = action.error.message;
      });
  },
});

export default shopSlice.reducer;
