export interface BlogPost {
    id: number;
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    content: string;
    category: string;

  }
  export const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Who am i?",
      slug: "who-am-i",
      date: "2024-03-15",
      category: "abtMe",
      excerpt: "Lorem ipsum dolor sit amet.",
      content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `
    },
    {
      id: 2,
      title: "Skibidi",
      slug: "skibidi",
      date: "2024-03-20",
      category: "random",
      excerpt: "Lorem ipsum dolor sit amet.",
      content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `
    },
    {
      id: 3,
      title: "Ligma",
      slug: "ligma",
      date: "2024-03-20",
      category: "random",
      excerpt: "Lorem ipsum dolor sit amet.",
      content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `
    },
    {
      id: 4,
      title: "Balls",
      slug: "balls",
      date: "2024-03-20",
      category: "random",
      excerpt: "Lorem ipsum dolor sit amet.",
      content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      `
    },
  ];
 
