export type TScheduleData = [TGroupInfo, TGroupSchedule];

export type TGroupInfo = {
  id: number;
  title: string;
  course: number;
  date_set: string;
  curator: string;
  quantity: number;
  state: number;
  pp: number;
  exam: number;
  dinner: number;
  speciality: string;
};
export type TGroupSchedule = string[];

export type TScheduleKeys = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
export type TFetchGroupSchedule = Record<TScheduleKeys, string>;
export type TFetchScheduleData = Record<string, [TGroupInfo, TFetchGroupSchedule]>;
