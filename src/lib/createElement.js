import { addEvent } from "./eventManager";

export function createElement(vNode) {
  // 1. vNode가 null, undefined, boolean 일 경우, 빈 텍스트 노드를 반환합니다.
  if (vNode == null || typeof vNode === "boolean") {
    return "";
  }

  // // 2. vNode가 문자열이나 숫자면 텍스트 노드를 생성하여 반환합니다.
  if (typeof vNode === "number") {
    return String(vNode);
  }

  if (typeof vNode === "string") {
    return vNode;
  }

  // 3. vNode가 배열이면 DocumentFragment를 생성하고 각 자식에 대해 createElement를 재귀 호출하여 추가합니다.
  if (Array.isArray(vNode)) {
    const fragment = document.createDocumentFragment();
    vNode.forEach((child) => {
      const createdChildElement = createElement(child);
      fragment.append(createdChildElement);
    });
    return fragment;
  }

  // 4. 위 경우가 아니면 실제 DOM 요소를 생성합니다:
  //   - vNode.type에 해당하는 요소를 생성
  //   - vNode.props의 속성들을 적용 (이벤트 리스너, className, 일반 속성 등 처리)
  //   - vNode.children의 각 자식에 대해 createElement를 재귀 호출하여 추가
  const element = document.createElement(vNode.type);
  if (vNode.props) {
    Object.entries(vNode.props).forEach(([key, value]) => {
      if (key === "className") {
        key = "class";
      }
      if (key.startsWith("on")) {
        addEvent(element, key.replace("on", ""), value);
      }
      element.setAttribute(key, value);
    });
  }
  if (vNode.children && vNode.children.length >= 1) {
    vNode.children.forEach((child) => {
      const createdChildElement = createElement(child);
      element.append(createdChildElement);
    });
  }
  return element;
}

// function updateAttributes($el, props) {}
