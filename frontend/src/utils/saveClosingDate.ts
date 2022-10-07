export const saveClosingDate = (value: string) => {
  const today = new Date();
  const closingDate = new Date(value);

  const diff = closingDate.getTime() - today.getTime();

  const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  if (diffHour < 0) {
    return `종료`;
  }
  if (diffHour < 24) {
    if (today.getDate() === closingDate.getDate()) {
      return `오늘마감`;
    }
  }

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  return `마감 ${diffDay + 1}일전`;
};
