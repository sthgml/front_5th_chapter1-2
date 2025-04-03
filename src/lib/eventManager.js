// 1. addEvent와 removeEvent를 통해 element에 대한 이벤트 함수를 어딘가에 저장하거나 삭제합니다.
// 2. setupEventListeners를 이용해서 이벤트 함수를 가져와서 한 번에 root에 이벤트를 등록합니다.
const savedListenrs = {};

export function setupEventListeners(root) {
  Object.entries(savedListenrs).forEach(([key, listenerObj]) => {
    root.addEventListenr(key, listenerObj.listenerObj);
  });
}

export function addEvent(element, eventType, handler) {
  if (savedListenrs[eventType] == null) {
    savedListenrs[eventType] = [
      {
        element,
        handler,
      },
    ];
  } else {
    savedListenrs[eventType].push({
      element,
      handler,
    });
  }
}

export function removeEvent(element, eventType, handler) {
  if (savedListenrs[eventType] == null) {
    return null;
  } else {
    savedListenrs[eventType].filter((listenrObj) => {
      return listenrObj.element !== element && listenrObj.handler !== handler;
    });
  }
}
