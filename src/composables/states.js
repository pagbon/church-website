import { shoplist } from "@/data/shop";
import { ref } from "vue";

export const cartProducts = ref([]);

export const setCartProducts = (val) => {
  cartProducts.value = val;
};

export const addProductToCart = (id) => {
  if (!cartProducts.value.filter((elm) => elm.id == id)[0]) {
    const item = {
      ...shoplist.filter((elm) => elm.id == id)[0],
      quantity: 1,
    };
    setCartProducts([...cartProducts.value, item]);
  }
};

export const isAddedToCartProducts = (id) => {
  if (cartProducts.value.filter((elm) => elm.id == id)[0]) {
    return true;
  }
  return false;
};
