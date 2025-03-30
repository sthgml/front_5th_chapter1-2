/** @jsx createVNode */
import { createRouter, createVNode } from "./lib";
import { HomePage, LoginPage, ProfilePage } from "./pages";
import { globalStore } from "./stores";
import { ForbiddenError, UnauthorizedError } from "./errors";
import { router } from "./router";
import { render } from "./render";

router.set(
  createRouter({
    "/": HomePage,
    "/login": () => {
      const { loggedIn } = globalStore.getState();
      if (loggedIn) {
        throw new ForbiddenError();
      }
      return <LoginPage />;
    },
    "/profile": () => {
      const { loggedIn } = globalStore.getState();
      if (!loggedIn) {
        throw new UnauthorizedError();
      }
      return <ProfilePage />;
    },
  }),
);

const BASE_URL = import.meta.env.VITE_BASE_URL ?? "";

function main() {
  console.log(BASE_URL);
  document.querySelector("#root").innerHTML =
    `<a href="${BASE_URL}login">로그인</a>`;

  const params = new URLSearchParams(window.location.search);
  const redirectPath = params.get("p");
  if (redirectPath?.startsWith("/")) {
    return window.history.pushState(
      null,
      null,
      BASE_URL + redirectPath.slice(1),
    );
  }

  if (window.location.pathname.replace(BASE_URL, "/") === "/login") {
    document.querySelector("#root").innerHTML = `<a href="${BASE_URL}">홈</a>`;
  }

  // router.get().subscribe(render);
  // globalStore.subscribe(render);
  // render();
}

main();
