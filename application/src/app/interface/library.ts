interface Author {
  name: string;
  email: string;
}

interface Repository {
  type: string,
  url: string,
}

interface TutorialBy {
  name: string;
  email: string;
  description: string;
  homepage: string;
  twitter: string;
}

interface Tutorial {
  id: string;
  modified: string;
  created: string;
  author: TutorialBy;
  description: string;
  homepage: string;
  name: string;
}

export interface Library {
  name: string;
  latest: string;
  authors: Array<Author>;
  description: string;
  homepage: string;
  license: string;
  repository: Repository;
  version: string;
  tutorials: Array<Tutorial>;
}
