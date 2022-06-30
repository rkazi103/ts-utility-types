function createPost(caption: string, image?: string) {
  return { caption, image };
}

type CreatePostInput = Parameters<typeof createPost>;

const post: CreatePostInput = ["Nice", "https://bit.ly/3OOiIaC"];
createPost(...post);

type CreatePostReturn = ReturnType<typeof createPost>;
