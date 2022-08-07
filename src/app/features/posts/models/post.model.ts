export class Post {
  id!: number;
  title!: string;
  body!: string;
  like_count!:number;
  dislike_count!: number;
  createdAt!: Date;
  updatedAt!: Date;
  imageBase64!: string | ArrayBuffer | null;
}
