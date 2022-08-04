import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = {
  recipes: [
    {
      id: "123cf",
      date: sub(new Date(), { minutes: 2 }).toISOString(),
      name: "breadWithEggs",
      imageName: "breadWithEggs",
      source: "https://www.google.com",
      inputfields: [
        { name: "Potatoes", measure: "3" },
        { name: "Oil", measure: "1" },
        { name: "Bacon", measure: "2" },
        { name: "Garlic ", measure: "1" },
        { name: "Parsley ", measure: "1" },
        { name: "Salt ", measure: "1" },
        { name: "Pepper ", measure: "1" },
      ],
      prepTime: "21",
      content:
        "Before you do anything, freeze your bacon slices that way when you're ready to prep, it'll be so much easier to chop! Wash the potatoes and cut medium dice into square pieces. To prevent any browning, place the already cut potatoes in a bowl filled with water. In the meantime, heat 1-2 tablespoons of oil in a large skillet over medium-high heat. Tilt the skillet so the oil spreads evenly. Once the oil is hot, drain the potatoes and add to the skillet. Season with salt, pepper, and Old Bay as needed. Cook for 10 minutes, stirring the potatoes often, until brown. If needed, add a tablespoon more of oil. Chop up the bacon and add to the potatoes. The bacon will start to render and the fat will begin to further cook the potatoes. Toss it up a bit! The bacon will take 5-6 minutes to crisp. Once the bacon is cooked, reduce the heat to medium-low, add the minced garlic and toss. Season once more. Add dried or fresh parsley. Control heat as needed. Let the garlic cook until fragrant, about one minute. Just before serving, drizzle over the maple syrup and toss. Let that cook another minute, giving the potatoes a caramelized effect. Serve in a warm bowl with a sunny side up egg!",
    },
    {
      id: "21312vf",
      date: sub(new Date(), { minutes: 3 }).toISOString(),
      name: "cheese",
      imageName: "cheese",
      source: "https://www.google.com",
      inputfields: [
        { name: "eggs", measure: "3" },
        { name: "tomatoes", measure: "1" },
        { name: "peppers", measure: "1" },
      ],
      prepTime: "1130",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus laboriosam veniam quaerat nam accusamus debitis dolore maxime harum, qui possimus sapiente, iure amet assumenda labore, tempora consectetur quam iusto. Eius eum laborum aspernatur magni, voluptatum debitis quaerat expedita exercitationem magnam odio atque non tempore inventore voluptatibus dolor maiores? Molestias accusantium ea corrupti quasi dicta ipsum illo, qui quo pariatur temporibus omnis at corporis similique fugiat, cum harum cupiditate quisquam? Voluptatem voluptas asperiores vel nihil ab sit dolore doloremque fuga laudantium neque? Eum magnam nostrum officia unde. Magni nostrum aspernatur ad? Aut magnam id voluptates, nam molestiae molestias ut! Magnam minima iure minus recusandae dolores explicabo enim autem placeat, nam nesciunt nulla obcaecati praesentium, quibusdam id eligendi! Sapiente odit illum ducimus praesentium sunt laboriosam animi quisquam, sit adipisci qui soluta quibusdam, ipsum eveniet harum omnis. Laboriosam impedit fuga enim nam dolore esse amet maxime nihil odio quo hic quia distinctio excepturi necessitatibus placeat libero sapiente reprehenderit blanditiis maiores, voluptatem adipisci aliquid! Deserunt neque voluptatibus quia, ut asperiores necessitatibus. Quisquam, neque accusamus consequuntur ullam corporis iste dicta reiciendis ratione id nihil velit aspernatur, tempore totam esse? Amet sequi voluptatum nobis tenetur architecto repudiandae eaque asperiores maxime non ullam doloremque, illum dolores.",
    },
    {
      id: "213",
      date: sub(new Date(), { minutes: 4 }).toISOString(),
      name: "friedEggs",
      imageName: "friedEggs",
      source: "https://www.google.com",
      inputfields: [
        { name: "eggs", measure: "3" },
        { name: "tomatoes", measure: "1" },
        { name: "peppers", measure: "1" },
      ],
      prepTime: "18",
      content:
        "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum possimus accusamus expedita dignissimos inventore reprehenderit corporis, commodi eveniet iusto nemo doloremque dolore. Quos error magnam esse eius amet, deleniti debitis et consequatur quia. Maxime debitis corrupti iure possimus nostrum earum repellat impedit, eligendi, nemo nam cumque vitae dolor quam molestias quas numquam dolorum, quod laborum ipsam! Fugit numquam ipsam nemo qui blanditiis molestias consequuntur quod officia, iusto delectus quam a cum similique ducimus voluptates quisquam? Voluptate quo quaerat, quam, vel aperiam facere beatae cupiditate, sit quis alias corporis. Rerum eligendi ipsam accusantium autem quod modi quasi dolorem iusto odio? Consectetur vel autem voluptate doloremque sit exercitationem obcaecati vitae quaerat. Id corrupti aut incidunt commodi eaque, alias nostrum eius veniam, odio laboriosam placeat autem sit mollitia culpa, ea ipsum ducimus laborum minus consequuntur corporis accusamus. Temporibus eveniet maiores velit. Soluta accusantium laborum quaerat quia, delectus numquam sint in autem saepe! Nihil, atque.",
    },
    {
      id: "43241",
      date: sub(new Date(), { minutes: 9 }).toISOString(),
      name: "friedRice",
      imageName: "friedRice",
      source: "https://www.google.com",
      inputfields: [
        { name: "eggs", measure: "3" },
        { name: "tomatoes", measure: "1" },
        { name: "peppers", measure: "1" },
      ],
      prepTime: "0110",
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis cupiditate officiis neque porro voluptate beatae animi accusantium illo eaque. Rerum illum tenetur voluptatum blanditiis quis expedita, cupiditate amet nostrum aliquam.",
    },
    {
      id: "4654745",
      date: sub(new Date(), { minutes: 9 }).toISOString(),
      name: "subSandwiches",
      imageName: "subSandwiches",
      source: "https://www.google.com",
      inputfields: [
        { name: "eggs", measure: "3" },
        { name: "tomatoes", measure: "1" },
        { name: "peppers", measure: "1" },
      ],
      prepTime: "0110",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa eligendi sit minima qui illum esse accusantium nam ad debitis aliquam velit, itaque eveniet perferendis voluptas fuga praesentium rerum eos totam.",
    },
    {
      id: "432425432",
      date: sub(new Date(), { minutes: 9 }).toISOString(),
      name: "vietnamesePho-ga",
      imageName: "vietnamesePho-ga",
      source: "https://www.google.com",
      inputfields: [
        { name: "eggs", measure: "3" },
        { name: "tomatoes", measure: "1" },
        { name: "peppers", measure: "1" },
      ],
      prepTime: "0110",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit exercitationem provident quidem. Quibusdam quos natus at voluptas et facilis autem. Praesentium, architecto magni reiciendis necessitatibus cupiditate provident rem nobis ad.",
    },
    {
      id: "31243214",
      date: sub(new Date(), { minutes: 9 }).toISOString(),
      name: "Pork steak with vegetable",
      imageName: "Pork-steak-with-vegetable",
      source: "https://www.google.com",
      inputfields: [
        { name: "eggs", measure: "3" },
        { name: "tomatoes", measure: "1" },
        { name: "peppers", measure: "1" },
      ],
      prepTime: "0110",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ullam, voluptas possimus incidunt officiis ex quis expedita. Officia saepe repellendus quos repudiandae nihil cum eligendi quidem. Atque autem est adipisci.",
    },
    {
      id: "213123445",
      date: sub(new Date(), { minutes: 9 }).toISOString(),
      name: "eggs with veges",
      source: "https://www.google.com",
      inputfields: [
        { name: "eggs", measure: "3" },
        { name: "tomatoes", measure: "1" },
        { name: "peppers", measure: "1" },
      ],
      prepTime: "0110",
      content:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae sit hic reiciendis officia eaque. Reiciendis ad magnam molestias iusto consequuntur accusantium libero! Vitae ratione eos magnam tempore odit aspernatur atque.",
    },
    {
      id: "213124412",
      date: sub(new Date(), { minutes: 9 }).toISOString(),
      name: "Dim-sum",
      imageName: "Dim-sum",
      source: "https://www.google.com",
      inputfields: [
        { name: "eggs", measure: "3" },
        { name: "tomatoes", measure: "1" },
        { name: "peppers", measure: "1" },
      ],
      prepTime: "0110",
      content:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi eius laudantium esse suscipit voluptas architecto, ipsa excepturi delectus, assumenda repellat neque rerum nisi ullam cupiditate provident molestias expedita ipsum doloremque?",
    },
  ],
  isLoading: false,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    recipeAdded: {
      reducer(state, action) {
        state.recipes.push(action.payload);
      },
      prepare(name, source, prepTime, content, inputfields, img) {
        return {
          payload: {
            id: nanoid(),
            date: new Date().toISOString(),
            name,
            source,
            inputfields,
            prepTime,
            content,
            img,
          },
        };
      },
    },
    deleteSingleReicpe: {
      reducer(state, action) {
        const itemId = action.payload;
        return {
          ...state,
          recipes: [...state.recipes].filter((recipe) => recipe.id !== itemId),
        };
      },
    },
  },
});

export const selectAllRecipes = (state) => state.recipes.recipes;

export const selectRecipeById = (state, id) =>
  state.recipes.recipes.find((recipe) => recipe.id === id);

export const { recipeAdded, deleteSingleReicpe } = recipeSlice.actions;

export default recipeSlice.reducer;
