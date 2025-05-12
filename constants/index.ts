

export const MAX_VIDEO_SIZE = 500 * 1024 * 1024;
export const MAX_THUMBNAIL_SIZE = 10 * 1024 * 1024;

export const BUNNY = {
  STREAM_BASE_URL: "https://video.bunnycdn.com/library",
  STORAGE_BASE_URL: "https://storage.bunnycdn.com/jsm-loom",
  CDN_URL: "https://jsm-loom.b-cdn.net",
  EMBED_URL: "https://iframe.mediadelivery.net/embed",
  TRANSCRIPT_URL: "https://vz-6ae19a76-ff7.b-cdn.net",
};

export const emojis = ["😂", "😍", "👍"];

export const filterOptions = [
  "Most Viewed",
  "Most Recent",
  "Oldest First",
  "Least Viewed",
];

export const visibilities: Visibility[] = ["public", "private"];

export type Visibility = "public" | "private";

export interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  createdAt: Date;
  userImg: string;
  username: string;
  views: number;
  visibility: Visibility;
  duration: number;
}






export const ICONS = {
  record: "/assets/icons/record.svg",
  close: "/assets/icons/close.svg",
  upload: "/assets/icons/upload.svg",
};

export const initialVideoState = {
  isLoaded: false,
  hasIncrementedView: false,
  isProcessing: true,
  processingProgress: 0,
};

export const infos = ["transcript", "metadata"];

export const DEFAULT_VIDEO_CONFIG = {
  width: { ideal: 1920 },
  height: { ideal: 1080 },
  frameRate: { ideal: 30 },
};

export const DEFAULT_RECORDING_CONFIG = {
  mimeType: "video/webm;codecs=vp9,opus",
  audioBitsPerSecond: 128000,
  videoBitsPerSecond: 2500000,
};

export const dummyCards: VideoCardProps[] = [
  {
    id: "1",
    title: "SnapChat Message",
    thumbnail: "/assets/samples/thumbnail (1).png",
    createdAt: new Date("2025-05-01"),
    userImg: "/assets/images/jason.png",
    username: "Jason",
    views: 10,
    visibility: "public",
    duration: 156,
  },
  {
    id: "2",
    title: "Product Demo Walkthrough",
    thumbnail: "/assets/samples/thumbnail (2).png",
    createdAt: new Date("2025-04-15"),
    userImg: "/assets/images/sarah.png",
    username: "Sarah",
    views: 245,
    visibility: "public",
    duration: 320,
  },
  {
    id: "3",
    title: "Weekly Team Update",
    thumbnail: "/assets/samples/thumbnail (3).png",
    createdAt: new Date("2025-04-22"),
    userImg: "/assets/images/michael.png",
    username: "Michael",
    views: 78,
    visibility: "private",
    duration: 412,
  },
  {
    id: "4",
    title: "Bug Fix Explanation",
    thumbnail: "/assets/samples/thumbnail (4).png",
    createdAt: new Date("2025-04-28"),
    userImg: "/assets/images/emily.png",
    username: "Emily",
    views: 32,
    visibility: "public",
    duration: 183,
  },
  {
    id: "5",
    title: "New Feature Overview",
    thumbnail: "/assets/samples/thumbnail (5).png",
    createdAt: new Date("2025-05-02"),
    userImg: "/assets/images/david.png",
    username: "David",
    views: 150,
    visibility: "public",
    duration: 270,
  },
  {
    id: "6",
    title: "How to Use Snapcast",
    thumbnail: "/assets/samples/thumbnail (6).png",
    createdAt: new Date("2025-03-18"),
    userImg: "/assets/images/nick.png",
    username: "Nick",
    views: 89,
    visibility: "public",
    duration: 190,
  },
  {
    id: "7",
    title: "Q&A with CEO",
    thumbnail: "/assets/samples/thumbnail (7).png",
    createdAt: new Date("2025-06-10"),
    userImg: "/assets/images/lisa.png",
    username: "Lisa",
    views: 125,
    visibility: "private",
    duration: 360,
  },
  {
    id: "8",
    title: "Sneak Peek: Upcoming Release",
    thumbnail: "/assets/samples/thumbnail (8).png",
    createdAt: new Date("2025-02-28"),
    userImg: "/assets/images/john.png",
    username: "John",
    views: 140,
    visibility: "public",
    duration: 210,
  },
];
