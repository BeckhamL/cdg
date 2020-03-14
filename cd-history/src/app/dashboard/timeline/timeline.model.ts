export class TimelineModel {
  steps: TimelineStep[];
}

export class TimelineStep {
  title: string;
  image: string;
  description: string;
  caption?: string;
}
