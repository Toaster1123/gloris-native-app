import { TGroupName } from '@/constants/collors/default-collors';

export const splitGroupName = (groupName: string) => {
  const splitedGropName = groupName.split(' ');
  const groupShortName = splitedGropName[0].toUpperCase() as TGroupName;
  const groupCode = splitedGropName[1].toUpperCase();

  return { groupShortName, groupCode };
};
