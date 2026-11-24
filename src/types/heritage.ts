export type ArtSubject =
  | "hero-stage"
  | "tuong-huyen-duong"
  | "huyen-duong-court"
  | "exhibit-mask-set"
  | "exhibit-infographic"
  | "exhibit-micro-acting"
  | "exhibit-handbook";

export interface MuseumWing {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  themeAccent?: "crimson" | "bronze" | "emerald" | "amber";
  workReference: string;
  gradeReference: string;
  shortDescription: string;
  highlights: string[];
  buttonLabel: string;
  artSubject: ArtSubject;
  expectedAssetFile: string;
  assetNote: string;
  detailContent: {
    culturalContext: string;
    literaryExcerptInfo: string;
    artisticFeatures: string[];
    steamConnection: string;
    discussionPrompt: string;
  };
}

export interface CharacterProfile {
  id: string;
  name: string;
  roleTitle: string;
  faceColorMeaning: string;
  paletteHex: string[];
  strokeFeatures: string;
  personalityDecoding: string;
  propsAndGesture: string;
}

export interface LearningTopic {
  id: string;
  topicNumber: string;
  title: string;
  status: "Đang triển khai" | "Hoàn thiện sân khấu hóa";
  summary: string;
  subjectInfo: string;
  lessonInfo: string;
  coreContent: string;
  activities: string[];
  expectedProducts: string;
  buttonLabel: string;
  artSubject: ArtSubject;
  expectedAssetFile: string;
  characters?: CharacterProfile[];
  stagePlanSteps?: {
    stageName: string;
    description: string;
    materialSuggestion: string;
  }[];
  projectSteps: {
    phase: string;
    task: string;
    output: string;
  }[];
}

export interface SteamStep {
  stepNumber: number;
  title: string;
  summary: string;
  bullets: string[];
  artifactExample: string;
}

export interface SteamElement {
  letter: "S" | "T" | "E" | "A" | "M";
  englishName: string;
  vietnameseName: string;
  shortExplanation: string;
  huyenDuongExample: string;
  classroomApplication: string;
  toolsAndMaterials: string[];
}

export type ExhibitionCategory =
  | "Tất cả"
  | "Mặt nạ và tạo hình nhân vật"
  | "Video vi diễn"
  | "Thuyết minh mặt nạ"
  | "Infographic và học liệu số"
  | "Sản phẩm thủ công";

export interface ExhibitionItem {
  id: string;
  title: string;
  category: Exclude<ExhibitionCategory, "Tất cả">;
  topicTitle: string;
  topicId: string;
  authorNote: string;
  isIllustrativeSample: boolean;
  ideaDescription: string;
  makingProcess: string[];
  materialsUsed: string[];
  videoStatusNote: string;
  videoUrl?: string;
  videoPoster?: string;
  documentUrl?: string;
  artSubject: ArtSubject;
  expectedAssetFile: string;
}

export interface DiscussionTopicGroup {
  id: string;
  topicName: string;
  guidingQuestions: string[];
  exchangeIssues: string[];
  openResearchQuestions: string[];
}
