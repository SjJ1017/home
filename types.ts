
export interface Project {
  title: string;
  url: string;
  description: string;
  thumbnail: string;
  date: string;
}

export interface Publication {
  title: string;
  url: string;
  authors: string;
  venue: string;
  year: string;
}

export interface Photo {
  url: string;
  caption: string;
  country: string;
}

export interface Education {
  degree: string;
  institution: string;
  major: string;
  period: string;
  details?: string;
}
