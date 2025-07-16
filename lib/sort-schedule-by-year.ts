import { TListGroupName, TScheduleData } from '@/@types';

export const sortScheduleByYear = (scheduleData: TScheduleData[]) => {
  const groupedScheduleByYear: TListGroupName[] = [];

  scheduleData.forEach((group) => {
    const existingYear = groupedScheduleByYear.find((item) => item.year === group[0].course);
    if (existingYear) {
      existingYear.groups.push({
        groupId: group[0].id.toString(),
        groupName: group[0].title,
      });
    } else {
      groupedScheduleByYear.push({
        year: group[0].course,
        groups: [{ groupId: group[0].id.toString(), groupName: group[0].title }],
      });
    }
  });

  return groupedScheduleByYear;
};
