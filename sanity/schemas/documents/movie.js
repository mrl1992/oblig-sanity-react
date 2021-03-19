const movie = {
  title: "Movie",
  name: "movie",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Movie",
      type: "string",
      description: "Movie title",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "actor",
      title: "Actor",
      type: "reference",
      description: "Movie actor",
      to: [{ type: "actor" }],
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      actor: "actor.name",
    },
    prepare(selection) {
      const { title, actor } = selection;
      return {
        title,
        subtitle: `Actor: ${actor}`,
      };
    },
  },
};

export default movie;
