interface RecentActivities {
  id: number;
  title: string;
  date: string;
}

export interface RecentActivitiesSliceState {
    recentActivities: RecentActivities[];
}