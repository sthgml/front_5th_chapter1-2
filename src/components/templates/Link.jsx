/** @jsx createVNode */
import { createVNode } from "../../lib";
import { createPath } from "../../utils/createPath";
import { router } from "../../router";

export function Link({ onClick, children, href, ...props }) {
  const handleClick = (e) => {
    e.preventDefault();
    onClick?.();
    router.get().push(e.target.href.replace(window.location.origin, ""));
  };
  return (
    <a href={createPath(href)} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
