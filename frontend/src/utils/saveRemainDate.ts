export const saveRemainDate = (value: string): (string | number)[] => {
  const today = new Date();
  const closingDate = new Date(value);

  const diff = closingDate.getTime() - 9 - today.getTime();

  const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24);
  if (diffHour < 0) {
    return ["end", "종료"];
  }

  if (diffHour < 24) {
    if (today.getDate() === closingDate.getDate()) {
      return ["time", diffHour];
    }
  }

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24));
  return ["day", diffDay + 1];
};
