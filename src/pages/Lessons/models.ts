import { Dispatch } from '@reduxjs/toolkit';
import { SetStateAction } from 'react';

export interface VideoData {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
}

export interface ContextTypes {
  videos: VideoData[];
  savedVideoId: string[];
  setSavedVideoId: (
    arg: string[] | ((prevState: string[]) => string[]),
  ) => void;
  setNextPage: (arg: number | ((prevState: number) => number)) => void;
}
