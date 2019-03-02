const initialState = {
  blogs: [
    {
      title: "blogs1",

      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus facilis laboriosam hic incidunt culpa. Culpa possimus impedit sint voluptates aliquid commodi saepe molestiae dicta molestias? A libero, excepturi quae ipsa expedita suscipit inventore ratione quaerat alias? Quas accusamus, possimus nemo nobis architecto accusantium necessitatibus alias quasi dolores doloremque ab dolore illo? Perspiciatis accusantium obcaecati illo aut animi totam eos reiciendis eum laudantium sint, quo, amet cumque inventore culpa odit, fugit quod sit neque fugiat optio corrupti voluptatum? Labore dignissimos consequuntur iusto in nisi dolorem ipsam suscipit, repellat eligendi esse explicabo facilis commodi, obcaecati dicta eaque totam reiciendis corrupti reprehenderit minima.",
      country: "Thailand"
    },
    {
      title: "Bangkok",

      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus facilis laboriosam hic incidunt culpa. Culpa possimus impedit sint voluptates aliquid commodi saepe molestiae dicta molestias? A libero, excepturi quae ipsa expedita suscipit inventore ratione quaerat alias? Quas accusamus, possimus nemo nobis architecto accusantium necessitatibus alias quasi dolores doloremque ab dolore illo? Perspiciatis accusantium obcaecati illo aut animi totam eos reiciendis eum laudantium sint, quo, amet cumque inventore culpa odit, fugit quod sit neque fugiat optio corrupti voluptatum? Labore dignissimos consequuntur iusto in nisi dolorem ipsam suscipit, repellat eligendi esse explicabo facilis commodi, obcaecati dicta eaque totam reiciendis corrupti reprehenderit minima.",
      country: "Thailand"
    },
    {
      title: "Vietnam",

      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus facilis laboriosam hic incidunt culpa. Culpa possimus impedit sint voluptates aliquid commodi saepe molestiae dicta molestias? A libero, excepturi quae ipsa expedita suscipit inventore ratione quaerat alias? Quas accusamus, possimus nemo nobis architecto accusantium necessitatibus alias quasi dolores doloremque ab dolore illo? Perspiciatis accusantium obcaecati illo aut animi totam eos reiciendis eum laudantium sint, quo, amet cumque inventore culpa odit, fugit quod sit neque fugiat optio corrupti voluptatum? Labore dignissimos consequuntur iusto in nisi dolorem ipsam suscipit, repellat eligendi esse explicabo facilis commodi, obcaecati dicta eaque totam reiciendis corrupti reprehenderit minima.",
      country: "Vietnam"
    },
    {
      title: "blogs2",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus facilis laboriosam hic incidunt culpa. Culpa possimus impedit sint voluptates aliquid commodi saepe molestiae dicta molestias? A libero, excepturi quae ipsa expedita suscipit inventore ratione quaerat alias? Quas accusamus, possimus nemo nobis architecto accusantium necessitatibus alias quasi dolores doloremque ab dolore illo? Perspiciatis accusantium obcaecati illo aut animi totam eos reiciendis eum laudantium sint, quo, amet cumque inventore culpa odit, fugit quod sit neque fugiat optio corrupti voluptatum? Labore dignissimos consequuntur iusto in nisi dolorem ipsam suscipit, repellat eligendi esse explicabo facilis commodi, obcaecati dicta eaque totam reiciendis corrupti reprehenderit minima.",
      country: "Philippines"
    },
    {
      title: "blog3",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus facilis laboriosam hic incidunt culpa. Culpa possimus impedit sint voluptates aliquid commodi saepe molestiae dicta molestias? A libero, excepturi quae ipsa expedita suscipit inventore ratione quaerat alias? Quas accusamus, possimus nemo nobis architecto accusantium necessitatibus alias quasi dolores doloremque ab dolore illo? Perspiciatis accusantium obcaecati illo aut animi totam eos reiciendis eum laudantium sint, quo, amet cumque inventore culpa odit, fugit quod sit neque fugiat optio corrupti voluptatum? Labore dignissimos consequuntur iusto in nisi dolorem ipsam suscipit, repellat eligendi esse explicabo facilis commodi, obcaecati dicta eaque totam reiciendis corrupti reprehenderit minima.",
      country: "Philippines"
    }
  ]
};

export default function(state = initialState, action) {
  // check for which action
  switch (action.type) {
    default:
      return state;
  }
}
