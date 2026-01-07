// import { RootState } from "../../app/store";

// // Select all items in the basket
// export const selectItems = (state: RootState) => state.basket.items;

// // Calculate subtotal
// export const selectSubtotal = (state: RootState) =>
//   state.basket.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

// // Milk Offer: Buy 3 Pay for 2
// // Bread Offer: Buy 2 Save £0.10
// export const selectOffers = (state: RootState) => {
//   const items = state.basket.items;
//   const offers: { title: string; saving: number }[] = [];

//   // Milk offer
//   const milk = items.find((i) => i.name === "Milk");
//   if (milk && milk.quantity >= 3) {
//     const freeMilk = Math.floor(milk.quantity / 3);
//     offers.push({
//       title: "Milk 3 for 2",
//       saving: freeMilk * milk.price,
//     });
//   }

//   // Bread offer
//   const bread = items.find((i) => i.name === "Bread");
//   if (bread && bread.quantity >= 2) {
//     const pairs = Math.floor(bread.quantity / 2);
//     offers.push({
//       title: "Bread Buy 2 Save £0.10",
//       saving: pairs * 0.1,
//     });
//   }

//   return offers;
// };

// // Calculate total savings from all offers
// export const selectTotalSavings = (state: RootState) =>
//   selectOffers(state).reduce((sum, offer) => sum + offer.saving, 0);

// // Calculate final total
// export const selectTotal = (state: RootState) =>
//   selectSubtotal(state) - selectTotalSavings(state);
// src/features/basket/selectors.ts
import { RootState } from "../../app/store";

export const selectItems = (state: RootState) => state.basket.items;

export const selectSubtotal = (state: RootState) =>
  state.basket.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

export const selectOffers = (state: RootState) => {
  const items = state.basket.items;
  const offers: { title: string; saving: number }[] = [];

  const milk = items.find(i => i.name === "Milk");
  if (milk && milk.quantity >= 3) {
    const freeMilk = Math.floor(milk.quantity / 3);
    offers.push({ title: "Milk 3 for 2", saving: freeMilk * milk.price });
  }

  const bread = items.find(i => i.name === "Bread");
  if (bread && bread.quantity >= 2) {
    const pairs = Math.floor(bread.quantity / 2);
    offers.push({ title: "Bread Buy 2 Save £0.10", saving: pairs * 0.1 });
  }

  return offers;
};

export const selectTotalSavings = (state: RootState) =>
  selectOffers(state).reduce((sum, offer) => sum + offer.saving, 0);

export const selectTotal = (state: RootState) =>
  selectSubtotal(state) - selectTotalSavings(state);
