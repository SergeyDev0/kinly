import { makeAutoObservable } from "mobx";

class PostcardStore {
  uploadedImage: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUploadedImage(value: string | null) {
    this.uploadedImage = value;
  }
}

export const postcardStore = new PostcardStore();
