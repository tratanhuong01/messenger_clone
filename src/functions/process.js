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

const checkSingle = (item, idUser) => {
  let newData = null;
  item.forEach((element) => {
    if (idUser === element.idUser) {
    } else {
      if (element.typeMessage === "-1") {
        if (element.nikName !== null) newData = element.nickName;
      } else {
      }
    }
  });
  return newData;
};

export const dataUsersChat = (item, idUser) => {
  const user = item.length > 0 ? findUserChating(item, idUser) : null;
  const userChat = item.length > 0 ? checkMemberChat(item) : null;
  return {
    user: item[0].typeGroupMessage === "0" ? user : userChat,
    name:
      item[0].typeGroupMessage === "0"
        ? checkSingle(item, idUser) === null
          ? `${user.firstName} ${user.lastName}`
          : checkSingle(item, idUser)
        : item[0].nameGroupMessage === null
        ? generalNameGroup(item)
        : item[0].nameGroupMessage,
  };
};

export const gereral = (user, itemMain, userChange, item) => {
  if (user.id === itemMain.idUser) {
    if (user.id === userChange.user.idUser) {
      return `Bạn ${item.data[0].content} mình là ${userChange.nickName}`;
    } else {
      return `Bạn ${item.data[0].content} ${
        userChange.user.firstName + " " + userChange.user.lastName
      } là ${userChange.nickName}`;
    }
  } else if (
    userChange.user.idUser === itemMain.idUser &&
    user.id !== itemMain.idUser &&
    user.id !== userChange.user.idUser
  ) {
    return `${itemMain.lastName} ${item.data[0].content} ${" ... là "} ${
      userChange.nickName
    }`;
  } else {
    if (user.id === userChange.user.idUser) {
      return `${itemMain.lastName} ${item.data[0].content} bạn là ${userChange.nickName}`;
    } else {
      return `${itemMain.lastName} ${item.data[0].content} ${
        userChange.user.firstName + " " + userChange.user.lastName
      } là ${userChange.nickName}`;
    }
  }
};
