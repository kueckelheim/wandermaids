const initialState = {
  blogs: [
    {
      title: "Welcome Bangkok",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet magnam veritatis itaque minima modi totam illo ex blanditiis cupiditate natus nihil fugit accusantium numquam pariatur, asperiores molestiae, dolore assumenda qui vero quidem! Provident ipsam quos, temporibus asperiores harum culpa quod quisquam, accusantium molestias tenetur quasi. Consequuntur delectus suscipit facilis. Ad autem debitis fugit, sint odit adipisci unde distinctio esse veritatis sed ipsum quisquam. Atque maiores, quasi error porro recusandae fugiat culpa debitis cumque autem perferendis sed, qui, placeat nesciunt voluptatibus quae ab. Voluptate nostrum aut delectus suscipit culpa? Deleniti iusto cum quasi blanditiis nulla provident maiores. Nihil eos nemo veniam dolores voluptas, alias blanditiis quod assumenda vel ipsum asperiores hic facilis, inventore nisi ab perferendis, consectetur pariatur qui ipsam. Illum nemo natus voluptatem consequuntur, quisquam esse doloribus incidunt nam facilis, voluptas fuga illo aliquid iste praesentium sunt laudantium rerum tenetur dignissimos asperiores exercitationem placeat sequi sapiente eum. Aliquid officia atque laudantium natus ipsa odit, accusamus ut suscipit reprehenderit rem animi, ducimus exercitationem voluptates, magni id similique aperiam? Sint, amet aliquam. Omnis quam aliquam esse similique voluptates quibusdam veritatis adipisci, exercitationem sed, quidem quos quaerat. Similique dolorem adipisci cupiditate, ipsam quod modi, quam, minus odit molestias quis tempora fugiat provident animi.",
      short_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas incidunt consequatur molestiae, eligendi corporis quae optio tempora? Odit ipsa laudantium sunt iste deserunt! Officia voluptatum nobis assumenda consectetur praesentium!",
      country: "Thailand",
      header_image: "picsum2.photos",
      date: "January 28th, 2019",
      coordinates: [100.523186, 13.736717],
      one_sentence_description: "Our first steps in Bangkok"
    },
    {
      title: "Bye bye Bangkok",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet magnam veritatis itaque minima modi totam illo ex blanditiis cupiditate natus nihil fugit accusantium numquam pariatur, asperiores molestiae, dolore assumenda qui vero quidem! Provident ipsam quos, temporibus asperiores harum culpa quod quisquam, accusantium molestias tenetur quasi. Consequuntur delectus suscipit facilis. Ad autem debitis fugit, sint odit adipisci unde distinctio esse veritatis sed ipsum quisquam. Atque maiores, quasi error porro recusandae fugiat culpa debitis cumque autem perferendis sed, qui, placeat nesciunt voluptatibus quae ab. Voluptate nostrum aut delectus suscipit culpa? Deleniti iusto cum quasi blanditiis nulla provident maiores. Nihil eos nemo veniam dolores voluptas, alias blanditiis quod assumenda vel ipsum asperiores hic facilis, inventore nisi ab perferendis, consectetur pariatur qui ipsam. Illum nemo natus voluptatem consequuntur, quisquam esse doloribus incidunt nam facilis, voluptas fuga illo aliquid iste praesentium sunt laudantium rerum tenetur dignissimos asperiores exercitationem placeat sequi sapiente eum. Aliquid officia atque laudantium natus ipsa odit, accusamus ut suscipit reprehenderit rem animi, ducimus exercitationem voluptates, magni id similique aperiam? Sint, amet aliquam. Omnis quam aliquam esse similique voluptates quibusdam veritatis adipisci, exercitationem sed, quidem quos quaerat. Similique dolorem adipisci cupiditate, ipsam quod modi, quam, minus odit molestias quis tempora fugiat provident animi.",
      short_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas incidunt consequatur molestiae, eligendi corporis quae optio tempora? Odit ipsa laudantium sunt iste deserunt! Officia voluptatum nobis assumenda consectetur praesentium!",
      country: "Thailand",
      header_image: "picsum1.photos",
      date: "January 18th, 2019",
      coordinates: [100.723186, 14.136717],
      one_sentence_description: "We already had to say goodbye to Bangkok"
    },
    {
      title: "Vietnam1",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet magnam veritatis itaque minima modi totam illo ex blanditiis cupiditate natus nihil fugit accusantium numquam pariatur, asperiores molestiae, dolore assumenda qui vero quidem! Provident ipsam quos, temporibus asperiores harum culpa quod quisquam, accusantium molestias tenetur quasi. Consequuntur delectus suscipit facilis. Ad autem debitis fugit, sint odit adipisci unde distinctio esse veritatis sed ipsum quisquam. Atque maiores, quasi error porro recusandae fugiat culpa debitis cumque autem perferendis sed, qui, placeat nesciunt voluptatibus quae ab. Voluptate nostrum aut delectus suscipit culpa? Deleniti iusto cum quasi blanditiis nulla provident maiores. Nihil eos nemo veniam dolores voluptas, alias blanditiis quod assumenda vel ipsum asperiores hic facilis, inventore nisi ab perferendis, consectetur pariatur qui ipsam. Illum nemo natus voluptatem consequuntur, quisquam esse doloribus incidunt nam facilis, voluptas fuga illo aliquid iste praesentium sunt laudantium rerum tenetur dignissimos asperiores exercitationem placeat sequi sapiente eum. Aliquid officia atque laudantium natus ipsa odit, accusamus ut suscipit reprehenderit rem animi, ducimus exercitationem voluptates, magni id similique aperiam? Sint, amet aliquam. Omnis quam aliquam esse similique voluptates quibusdam veritatis adipisci, exercitationem sed, quidem quos quaerat. Similique dolorem adipisci cupiditate, ipsam quod modi, quam, minus odit molestias quis tempora fugiat provident animi.",
      short_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas incidunt consequatur molestiae, eligendi corporis quae optio tempora? Odit ipsa laudantium sunt iste deserunt! Officia voluptatum nobis assumenda consectetur praesentium!",
      country: "Vietnam",
      header_image: "picsum3.photos",
      date: "January 18th, 2019",
      coordinates: [105.804817, 21.028511],
      one_sentence_description: "Our first steps in Vietnam"
    },
    {
      title: "Vietnam2",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet magnam veritatis itaque minima modi totam illo ex blanditiis cupiditate natus nihil fugit accusantium numquam pariatur, asperiores molestiae, dolore assumenda qui vero quidem! Provident ipsam quos, temporibus asperiores harum culpa quod quisquam, accusantium molestias tenetur quasi. Consequuntur delectus suscipit facilis. Ad autem debitis fugit, sint odit adipisci unde distinctio esse veritatis sed ipsum quisquam. Atque maiores, quasi error porro recusandae fugiat culpa debitis cumque autem perferendis sed, qui, placeat nesciunt voluptatibus quae ab. Voluptate nostrum aut delectus suscipit culpa? Deleniti iusto cum quasi blanditiis nulla provident maiores. Nihil eos nemo veniam dolores voluptas, alias blanditiis quod assumenda vel ipsum asperiores hic facilis, inventore nisi ab perferendis, consectetur pariatur qui ipsam. Illum nemo natus voluptatem consequuntur, quisquam esse doloribus incidunt nam facilis, voluptas fuga illo aliquid iste praesentium sunt laudantium rerum tenetur dignissimos asperiores exercitationem placeat sequi sapiente eum. Aliquid officia atque laudantium natus ipsa odit, accusamus ut suscipit reprehenderit rem animi, ducimus exercitationem voluptates, magni id similique aperiam? Sint, amet aliquam. Omnis quam aliquam esse similique voluptates quibusdam veritatis adipisci, exercitationem sed, quidem quos quaerat. Similique dolorem adipisci cupiditate, ipsam quod modi, quam, minus odit molestias quis tempora fugiat provident animi.",
      short_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas incidunt consequatur molestiae, eligendi corporis quae optio tempora? Odit ipsa laudantium sunt iste deserunt! Officia voluptatum nobis assumenda consectetur praesentium!",
      country: "Vietnam",
      header_image: "picsum4.photos",
      date: "January 18th, 2019",
      coordinates: [106.660172, 10.762622],
      one_sentence_description: "In the djungle"
    },
    {
      title: "Diving",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet magnam veritatis itaque minima modi totam illo ex blanditiis cupiditate natus nihil fugit accusantium numquam pariatur, asperiores molestiae, dolore assumenda qui vero quidem! Provident ipsam quos, temporibus asperiores harum culpa quod quisquam, accusantium molestias tenetur quasi. Consequuntur delectus suscipit facilis. Ad autem debitis fugit, sint odit adipisci unde distinctio esse veritatis sed ipsum quisquam. Atque maiores, quasi error porro recusandae fugiat culpa debitis cumque autem perferendis sed, qui, placeat nesciunt voluptatibus quae ab. Voluptate nostrum aut delectus suscipit culpa? Deleniti iusto cum quasi blanditiis nulla provident maiores. Nihil eos nemo veniam dolores voluptas, alias blanditiis quod assumenda vel ipsum asperiores hic facilis, inventore nisi ab perferendis, consectetur pariatur qui ipsam. Illum nemo natus voluptatem consequuntur, quisquam esse doloribus incidunt nam facilis, voluptas fuga illo aliquid iste praesentium sunt laudantium rerum tenetur dignissimos asperiores exercitationem placeat sequi sapiente eum. Aliquid officia atque laudantium natus ipsa odit, accusamus ut suscipit reprehenderit rem animi, ducimus exercitationem voluptates, magni id similique aperiam? Sint, amet aliquam. Omnis quam aliquam esse similique voluptates quibusdam veritatis adipisci, exercitationem sed, quidem quos quaerat. Similique dolorem adipisci cupiditate, ipsam quod modi, quam, minus odit molestias quis tempora fugiat provident animi.",
      short_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas incidunt consequatur molestiae, eligendi corporis quae optio tempora? Odit ipsa laudantium sunt iste deserunt! Officia voluptatum nobis assumenda consectetur praesentium!",
      country: "Philippines",
      header_image: "picsum1.photos",
      date: "January 18th, 2019",
      coordinates: [120.984222, 13.599512],
      one_sentence_description: "Going for Erik's first dive"
    },
    {
      title: "Manila",
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet magnam veritatis itaque minima modi totam illo ex blanditiis cupiditate natus nihil fugit accusantium numquam pariatur, asperiores molestiae, dolore assumenda qui vero quidem! Provident ipsam quos, temporibus asperiores harum culpa quod quisquam, accusantium molestias tenetur quasi. Consequuntur delectus suscipit facilis. Ad autem debitis fugit, sint odit adipisci unde distinctio esse veritatis sed ipsum quisquam. Atque maiores, quasi error porro recusandae fugiat culpa debitis cumque autem perferendis sed, qui, placeat nesciunt voluptatibus quae ab. Voluptate nostrum aut delectus suscipit culpa? Deleniti iusto cum quasi blanditiis nulla provident maiores. Nihil eos nemo veniam dolores voluptas, alias blanditiis quod assumenda vel ipsum asperiores hic facilis, inventore nisi ab perferendis, consectetur pariatur qui ipsam. Illum nemo natus voluptatem consequuntur, quisquam esse doloribus incidunt nam facilis, voluptas fuga illo aliquid iste praesentium sunt laudantium rerum tenetur dignissimos asperiores exercitationem placeat sequi sapiente eum. Aliquid officia atque laudantium natus ipsa odit, accusamus ut suscipit reprehenderit rem animi, ducimus exercitationem voluptates, magni id similique aperiam? Sint, amet aliquam. Omnis quam aliquam esse similique voluptates quibusdam veritatis adipisci, exercitationem sed, quidem quos quaerat. Similique dolorem adipisci cupiditate, ipsam quod modi, quam, minus odit molestias quis tempora fugiat provident animi.",
      short_description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quas incidunt consequatur molestiae, eligendi corporis quae optio tempora? Odit ipsa laudantium sunt iste deserunt! Officia voluptatum nobis assumenda consectetur praesentium!",
      country: "Philippines",
      header_image: "picsum2.photos",
      date: "January 18th, 2019",
      coordinates: [120.984222, 14.599512],
      one_sentence_description: "Crazy Town Manila"
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
