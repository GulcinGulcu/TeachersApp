interface RecentActivities {
  id: string;
  title: string;
  date: string;
  to?: string;
}

export interface RecentActivitiesSliceState {
    recentActivities: RecentActivities[];
}