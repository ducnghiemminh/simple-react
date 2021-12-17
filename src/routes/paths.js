const ROOT = '/';

const path = (root, sublink) => {
  return `${root}${sublink}`;
}

export const PATHS = {
  home: ROOT,
  about: path(ROOT, 'about'),
  posts: path(ROOT, 'posts'),
};
