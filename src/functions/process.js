const findUserChating = (item, idUser) => {
  let newData = null;
  item.forEach((element) => {
    if (idUser === element.idUser) {
    } else newData = element;
  });
  return newData;
};

const checkMemberChat = (item) => {
  let newUserChat = [];
  for (let index = 0; index < item.length; index++) {
    const element = item[index];
    if (newUserChat.findIndex((item) => item.idUser === element.idUser) === -1)
      newUserChat.push(element);
  }
  return newUserChat;
};

const generalNameGroup = (item) => {
  let data = checkMemberChat(item);
  let name = "";
  data.forEach((element) => {
    name += element.lastName + " , ";
  });
  return name;
};

export const dataUsersChat = (item, idUser) => {
  const user = item.length > 0 ? findUserChating(item, idUser) : null;
  const userChat = item.length > 0 ? checkMemberChat(item) : null;
  return {
    user: item[0].typeGroupMessage === "0" ? user : userChat,
    name:
      item[0].typeGroupMessage === "0"
        ? `${user.firstName} ${user.lastName}`
        : generalNameGroup(item),
  };
};
