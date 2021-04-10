export interface PostType {
  title: string;
  content: string;
  creatorName: string;
  creatorId: string;
  creatorImage: string;
  _id: string;
  creationDate: string;
  edited: boolean;
  likesCount: number;
  likedBy: string[];
  commentsCount: number;
}
