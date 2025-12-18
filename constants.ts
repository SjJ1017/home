
import { Project, Publication, Photo, Education } from './types';

export const PERSONAL_INFO = {
  name: "Jiajun Shen",
  title: "jiajun(dot)shen@epfl.ch",
  email: "jiajun.shen@epfl.ch",
  bio: "Currently pursuing a Master's degree in Digital Humanities at EPFL. Previously graduated from University of Chinese Academy of Sciences (UCAS) with a major in Artificial Intelligence. Passionate about LLMs and Linguistics.",
  avatar: "portrait/avatar.jpg", // 去掉开头的斜杠
  resumeUrl: "https://github.com/SjJ1017/home/tree/main/public/pdfs/CV.pdf"
};

export const SOCIAL_LINKS = [
  { name: "小红书", url: "https://xhslink.com/m/4XfpZrIx4Gz", icon: "" },
  { name: "GitHub", url: "https://github.com/SjJ1017", icon: "" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jiajun-shen-b32149321/", icon: "" }
];

export const FAVORITE_ALBUMS = [
  { artist: "Billie Eilish", title: "HIT ME HARD AND SOFT", status: "HOT" },
  { artist: "Rosalia", title: "LUX", status: "NEW" },
  { artist: "祁紫檀", title: "世界与孤独女王", status: "REC" }
];

export const EDUCATION_HISTORY: Education[] = [
  {
    degree: "Master of Science",
    institution: "EPFL (École Polytechnique Fédérale de Lausanne)",
    major: "Digital Humanities",
    period: "2025 - Present",
    details: "Focusing on computational linguistics and Large Language Models"
  },
  {
    degree: "Bachelor of Engineering",
    institution: "University of Chinese Academy of Sciences (UCAS)",
    major: "Artificial Intelligence",
    period: "2021 - 2025",
    details: "Core courses: Machine Learning, Computer Vision, Natural Language Processing, Robotics."
  },
  {
    degree: "Visiting Student",
    institution: "University of California, Berkeley",
    major: "Data Science",
    period: "2024",
    details: "Core courses: Algorithms, Python Programming, Mathematical economics."
  }
];

export const PROJECTS: Project[] = [
  {
    title: "The Market's Vote.",
    url: "https://sjj1017.github.io/ada_penta_data_story/",
    description: "An interactive exploration of artistic styles and data visualization techniques.",
    thumbnail: "project/markets-vote.jpg",
    date: "2025-12-21"
  },
  {
    title: "Universal Aesthetics: A Multimodal Perspective",
    url: "https://fdh.epfl.ch/index.php/Universal_Aesthetics_(Multimodal_Focus)",
    description: "Research on computational methods to quantify aesthetic values across different media.",
    thumbnail: "project/universal-aesthetics.jpg",
    date: "2025-12-18"
  },
  {
    title: "Fast PDF Layout Segmentation with Transformer-Based Models",
    url: "https://github.com/SjJ1017/EPFL_ML_PROJECT",
    description: "PDF segmentation using transformer architectures, for EPFL ML course project.",
    thumbnail: "project/pdf-segmentation.jpg",
    date: "2025-12-18"
  },
  {
    title: "Mindmap: Named Entity Recognition and Linking in Historical Texts In the Era of Large Language Models",
    url: "https://github.com/SjJ1017/home/tree/main/public/pdfs/Mindmap_Final_titled.pdf",
    description: "Mind Map for DH-400 at EPFL.",
    thumbnail: "public/project/dh400_mindmap.jpg",
    date: "2025-12-18"
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    title: "CiteLab: Developing and Diagnosing LLM Citation Generation Workflows via Human-LLM Interaction",
    url: "https://aclanthology.org/2025.acl-demo.47.pdf",
    authors: "Jiajun Shen, Tong Zhou, Yubo Chen, Kang Liu, Jun Zhao",
    venue: "ACL 2025 Demo",
    year: "2025"
  },
  {
    title: "Transparentize the Internal and External Knowledge Utilization in LLMs with Trustworthy Citation",
    url: "https://arxiv.org/pdf/2504.14856",
    authors: "Jiajun Shen, Tong Zhou, Yubo Chen, Delai Qiu, Shengping Liu, Kang Liu, Jun Zhao",
    venue: "ACL 2025 Findings",
    year: "2025"
  }
];

export const PHOTOGRAPHY: Photo[] = [
  { url: "photo/switzerland/oeschinensee.jpg", caption: "Oeschinensee", country: "Switzerland" },
  { url: "photo/switzerland/lausanne.jpg", caption: "Lausanne", country: "Switzerland" },
  { url: "photo/switzerland/geneve.jpg", caption: "Genève", country: "Switzerland" },
  { url: "photo/china/thegreatewall.jpg", caption: "The Great Wall", country: "China" },
  { url: "photo/japan/Shinto.jpg", caption: "八坂神社", country: "Japan" },
  { url: "photo/japan/Tenshu.jpg", caption: "天守", country: "Japan" },
  { url: "photo/japan/Kyoto.jpg", caption: "京都", country: "Japan" },
  { url: "photo/japan/Kiyomizu.jpg", caption: "清水寺", country: "Japan" },  
  { url: "photo/denmark/Impressionism.jpg", caption: "Impressionism Park in Copenhagen", country: "Denmark" },
  { url: "photo/denmark/Nyhavn.jpg", caption: "Nyhavn", country: "Denmark" },
  { url: "photo/denmark/Kastellet.jpg", caption: "Kastellet", country: "Denmark" },
  { url: "photo/germany/Koelnerdom.jpg", caption: "Kölner Dom", country: "Germany" },
  { url: "photo/france/Latoureiffel.jpg", caption: "La Tour Eiffel", country: "France" },
  { url: "photo/usa/Alcatraz.jpg", caption: "Alcatraz Island", country: "USA" },
  { url: "photo/usa/universalCA.jpg", caption: "Universal Studios Hollywood", country: "USA" },
  { url: "photo/hungary/budapest-parliament.jpg", caption: "Hungarian Parliament and Champagne", country: "Hungary" },
  { url: "photo/hungary/danube-bridge.jpg", caption: "Bridge over Danube", country: "Hungary" }
];
