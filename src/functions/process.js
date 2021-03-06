import api from "../api/api";

export const findUserChating = (item, idUser) => {
  let newData = null;
  item.forEach((element) => {
    if (idUser === element.idUser) {
    } else newData = element;
  });
  return newData;
};

export const checkMemberChat = (item) => {
  let newUserChat = [];
  for (let index = 0; index < item.length; index++) {
    const element = item[index];
    if (element.typeMessage === "-1")
      if (
        newUserChat.findIndex((item) => item.idUser === element.idUser) === -1
      )
        newUserChat.push(element);
  }
  return newUserChat;
};

export const generalNameGroup = (item) => {
  let data = checkMemberChat(item);
  let name = "";
  data.forEach((element) => {
    name += element.lastName + " , ";
  });
  return name;
};

export const checkSingle = (item, idUser) => {
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
  const image = () => {
    if (item[0].imageGroup === null)
      if (item[0].typeGroupMessage === "0") return user.avatar;
      else return null;
    else return item[0].imageGroup;
  };
  return {
    user:
      item[0].typeGroupMessage === "0" || item[0].typeGroupMessage === "-1"
        ? user
        : userChat,
    name:
      item[0].typeGroupMessage === "0" || item[0].typeGroupMessage === "-1"
        ? checkSingle(item, idUser) === null
          ? `${user.firstName} ${user.lastName}`
          : checkSingle(item, idUser)
        : item[0].nameGroupMessage === null
        ? generalNameGroup(item)
        : item[0].nameGroupMessage,
    image: image(),
  };
};

export const gereral = (user, itemMain, userChange, item) => {
  if (user.id === itemMain.idUser) {
    if (user.id === userChange.user.idUser) {
      return `B???n ${item.data[0].content} m??nh l?? ${userChange.nickName}`;
    } else {
      return `B???n ${item.data[0].content} ${
        userChange.user.firstName + " " + userChange.user.lastName
      } l?? ${userChange.nickName}`;
    }
  } else if (
    userChange.user.idUser === itemMain.idUser &&
    user.id !== itemMain.idUser &&
    user.id !== userChange.user.idUser
  ) {
    return `${itemMain.lastName} ${item.data[0].content} ${" ... l?? "} ${
      userChange.nickName
    }`;
  } else {
    if (user.id === userChange.user.idUser) {
      return `${itemMain.lastName} ${item.data[0].content} b???n l?? ${userChange.nickName}`;
    } else {
      return `${itemMain.lastName} ${item.data[0].content} ${
        userChange.user.firstName + " " + userChange.user.lastName
      } l?? ${userChange.nickName}`;
    }
  }
};

export const timeGeneral = (time) => {
  let startDate = new Date(time);
  let endDate = new Date();
  let __sec__ = (endDate.getTime() - startDate.getTime()) / 1000;
  let __hour__ = __sec__ / 3600;
  let result = time.replace(".0", "");
  let array = result.split(" ");
  let year = array[0].split("-")[0];
  let month = array[0].split("-")[1];
  let day = array[0].split("-")[2];

  let second = array[1].split(":")[2];
  let minute = array[1].split(":")[1];
  let hour = array[1].split(":")[0];

  if (__hour__ < 24) {
    result = `${hour} : ${minute} : ${second}`;
  } else {
    result = `${year} , ${day} th??ng ${month} , ${hour} : ${minute} : ${second}`;
  }
  return result;
};

export const timeGeneralLeft = (time) => {
  let startDate = new Date(time);
  let endDate = new Date();
  let sec = (endDate.getTime() - startDate.getTime()) / 1000;
  let result = "";
  let min = Math.round(sec / 60);
  let hour = Math.round(sec / 3600);
  let day = Math.round(sec / 86400);
  let week = Math.round(sec / 604800);
  let month = Math.round(sec / 2629440);
  let year = Math.round(sec / 31553280);
  if (sec <= 60) {
    result = "V???a xong";
  } else if (min < 60) {
    if (min === 1) {
      result = `1 ph??t`;
    } else {
      result = `${min} ph??t`;
    }
  } else if (hour < 24) {
    if (hour === 1) {
      result = `1 gi???`;
    } else {
      result = `${hour} gi???`;
    }
  } else if (day < 7) {
    result = `${day} ng??y `;
  } else if (week < 4.3) {
    result = `${week} tu???n`;
  } else if (month < 12) {
    result = `${month} th??ng`;
  } else {
    return `${year} n??m`;
  }
  return result;
};

export const searchUser = (data, list) => {
  let listUserNew = [];

  list.forEach((element) => {
    let fullName = `${element.userRelationshipUser.firstName} ${element.userRelationshipUser.lastName}`;
    let email =
      element.userRelationshipUser.email === null
        ? ""
        : element.userRelationshipUser.email;
    let phone =
      element.userRelationshipUser.phone === null
        ? ""
        : element.userRelationshipUser.phone;

    if (
      email.toLowerCase().indexOf(data.toLowerCase()) !== -1 ||
      phone.toLowerCase().indexOf(data.toLowerCase()) !== -1 ||
      fullName.toLowerCase().toLowerCase().indexOf(data.toLowerCase()) !== -1
    ) {
      listUserNew.push(element);
    }
  });

  return listUserNew;
};

export const searchUserNotRelationship = (data, list) => {
  let listUserNew = [];

  list.forEach((element) => {
    let fullName = `${element.firstName} ${element.lastName}`;
    let email = element.email === null ? "" : element.email;
    let phone = element.phone === null ? "" : element.phone;

    if (
      email.toLowerCase().indexOf(data.toLowerCase()) !== -1 ||
      phone.toLowerCase().indexOf(data.toLowerCase()) !== -1 ||
      fullName.toLowerCase().toLowerCase().indexOf(data.toLowerCase()) !== -1
    ) {
      listUserNew.push(element);
    }
  });

  return listUserNew;
};

export const generalState = (listUser, userMain) => {
  let data = {
    view: [],
    state: [],
  };

  listUser.forEach((element) => {
    data.view.push({
      id: element.id,
      type: element.id === userMain.id ? 2 : 0,
    });
    data.state.push({
      id: element.id,
      type: 0,
    });
  });

  return data;
};

export const generalStateAndViewMessage = (members, message, user, group) => {
  let data = {
    state: [],
    view: [],
  };
  //-0 b??nh th?????ng -1 thu h???i -2 x??a [state]
  //-0 ch??a nh???n -1 ???? nh???n 2- ???? xem [view]
  members.forEach(async (element) => {
    data.state.push(
      await api(
        "stateMessage",
        "POST",
        {
          userStateMessage: element,
          state: 0,
          stateMessage: message,
          groupMessageStateMessage: group,
        },
        null
      )
    );
    data.view.push(
      await api(
        "viewMessage",
        "POST",
        {
          userViewMessage: element,
          view: element.id === user.id ? 2 : 0,
          viewMessage: message,
          groupMessageViewMessage: group,
        },
        null
      )
    );
  });

  return data;
};
