import styled, { css } from "styled-components";
import openBookIcon from "../../assets/book-open.svg";

const iconsSprite =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTk4IiBoZWlnaHQ9Ijg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48cGF0aCBpZD0iYSIgZD0iTTAgMGgxNC4yMTZ2OEgweiIvPjxwYXRoIGlkPSJjIiBkPSJNMCAwaDE0LjIxNnY4SDB6Ii8+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZD0iTTQgN2w1IDUgNS01TTQgMjlsNS01IDUgNSIgc3Ryb2tlPSIjNzY3NTc5IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiIvPjxnIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCIgc3Ryb2tlPSIjM0IzOTNGIj48cGF0aCBkPSJNMjAuODY2IDEwLjg4M2wtLjUzIDQuNzczIDQuNzczLS41MyA4LjIzNy04LjIzN2ExIDEgMCAwIDAgMC0xLjQxNGwtMi44MjktMi44MjlhMSAxIDAgMCAwLTEuNDE0IDBsLTguMjM3IDguMjM3eiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTI1Ljk5MiA1LjA1bC43MDctLjcwNyA0Ljk1IDQuOTUtLjcwNy43MDZ6Ii8+PC9nPjxnIGZpbGw9Im5vbmUiIGZpbGwtb3BhY2l0eT0iMCIgc3Ryb2tlPSIjRkZGIj48cGF0aCBkPSJNMjAuODY2IDI4Ljg4M2wtLjUzIDQuNzczIDQuNzczLS41MyA4LjIzNy04LjIzN2ExIDEgMCAwIDAgMC0xLjQxNGwtMi44MjktMi44MjlhMSAxIDAgMCAwLTEuNDE0IDBsLTguMjM3IDguMjM3eiIgc3Ryb2tlLXdpZHRoPSIyIi8+PHBhdGggZD0iTTI1Ljk5MiAyMy4wNWwuNzA3LS43MDcgNC45NSA0Ljk1LS43MDcuNzA2eiIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNyAxKSIgZmlsbD0iI0RBMkQxOSI+PHJlY3QgdHJhbnNmb3JtPSJyb3RhdGUoNDUgOCA4KSIgeD0iNyIgd2lkdGg9IjIiIGhlaWdodD0iMTYiIHJ4PSIxIi8+PHJlY3QgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoNDUgMCAtMTEuMzE0KSIgeD0iNyIgd2lkdGg9IjIiIGhlaWdodD0iMTYiIHJ4PSIxIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDU1IDE5KSI+PHJlY3QgZmlsbD0iI0ZGRiIgeD0iMiIgeT0iMTQiIHdpZHRoPSIxMiIgaGVpZ2h0PSIyIiByeD0iMSIvPjxyZWN0IGZpbGw9IiNGRkYiIHg9IjciIHdpZHRoPSIyIiBoZWlnaHQ9IjExIiByeD0iMSIvPjxwYXRoIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik01IDhsMyAzIDMtMyIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNyAxOSkiIGZpbGw9IiNGRkYiPjxyZWN0IHRyYW5zZm9ybT0icm90YXRlKDQ1IDggOCkiIHg9IjciIHdpZHRoPSIyIiBoZWlnaHQ9IjE2IiByeD0iMSIvPjxyZWN0IHRyYW5zZm9ybT0ic2NhbGUoLTEgMSkgcm90YXRlKDQ1IDAgLTExLjMxNCkiIHg9IjciIHdpZHRoPSIyIiBoZWlnaHQ9IjE2IiByeD0iMSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NSAxKSI+PHJlY3QgZmlsbD0iIzNCMzkzRiIgeD0iMiIgeT0iMTQiIHdpZHRoPSIxMiIgaGVpZ2h0PSIyIiByeD0iMSIvPjxyZWN0IGZpbGw9IiMzQjM5M0YiIHg9IjciIHdpZHRoPSIyIiBoZWlnaHQ9IjExIiByeD0iMSIvPjxwYXRoIHN0cm9rZT0iIzNCMzkzRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik01IDhsMyAzIDMtMyIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MyAxKSI+PGNpcmNsZSBzdHJva2U9IiM3Njc1NzkiIGZpbGw9Im5vbmUiIGN4PSI4IiBjeT0iOCIgcj0iNy41Ii8+PHBhdGggZD0iTTguNDYgMTBINy4wM3YtLjQ4NWMwLS44NTguMzU2LTEuMzMgMS4yNTYtMi4wOWwuMDM4LS4wMzJjLjU4Ny0uNDk3Ljc0Ny0uNzEuNzQ3LTEuMDMgMC0uNTcxLS40ODItMS4wMy0xLjA3MS0xLjAzcy0xLjA3MS40NTktMS4wNzEgMS4wM0g1LjVDNS41IDUuMDYyIDYuNjE2IDQgOCA0czIuNSAxLjA2IDIuNSAyLjM2NGMwIC44MjItLjM0NiAxLjI4LTEuMjE3IDIuMDE3bC0uMDM4LjAzMmMtLjYxNy41Mi0uNzg2Ljc0NS0uNzg2IDEuMTAyVjEwem0tMS40MzEuNjY3aDEuNDI4VjEySDcuMDN2LTEuMzMzeiIgZmlsbD0iIzc2NzU3OSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkxIDEpIj48Y2lyY2xlIHN0cm9rZT0iI0ZGRiIgZmlsbD0ibm9uZSIgY3g9IjgiIGN5PSI4IiByPSI3LjUiLz48cGF0aCBkPSJNOC40NiAxMEg3LjAzdi0uNDg1YzAtLjg1OC4zNTYtMS4zMyAxLjI1Ni0yLjA5bC4wMzgtLjAzMmMuNTg3LS40OTcuNzQ3LS43MS43NDctMS4wMyAwLS41NzEtLjQ4Mi0xLjAzLTEuMDcxLTEuMDNzLTEuMDcxLjQ1OS0xLjA3MSAxLjAzSDUuNUM1LjUgNS4wNjIgNi42MTYgNCA4IDRzMi41IDEuMDYgMi41IDIuMzY0YzAgLjgyMi0uMzQ2IDEuMjgtMS4yMTcgMi4wMTdsLS4wMzguMDMyYy0uNjE3LjUyLS43ODYuNzQ1LS43ODYgMS4xMDJWMTB6bS0xLjQzMS42NjdoMS40MjhWMTJINy4wM3YtMS4zMzN6IiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzMgMTkpIj48Y2lyY2xlIGZpbGw9IiM3Njc1NzkiIGN4PSI4IiBjeT0iOCIgcj0iOCIvPjxwYXRoIGQ9Ik04LjQ2IDEwSDcuMDN2LS40ODVjMC0uODU4LjM1Ni0xLjMzIDEuMjU2LTIuMDlsLjAzOC0uMDMyYy41ODctLjQ5Ny43NDctLjcxLjc0Ny0xLjAzIDAtLjU3MS0uNDgyLTEuMDMtMS4wNzEtMS4wM3MtMS4wNzEuNDU5LTEuMDcxIDEuMDNINS41QzUuNSA1LjA2MiA2LjYxNiA0IDggNHMyLjUgMS4wNiAyLjUgMi4zNjRjMCAuODIyLS4zNDYgMS4yOC0xLjIxNyAyLjAxN2wtLjAzOC4wMzJjLS42MTcuNTItLjc4Ni43NDUtLjc4NiAxLjEwMlYxMHptLTEuNDMxLjY2N2gxLjQyOFYxMkg3LjAzdi0xLjMzM3oiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg5MSAxOSkiPjxjaXJjbGUgZmlsbD0iI0ZGRiIgY3g9IjgiIGN5PSI4IiByPSI4Ii8+PHBhdGggZD0iTTguNDYgMTBINy4wM3YtLjQ4NWMwLS44NTguMzU2LTEuMzMgMS4yNTYtMi4wOWwuMDM4LS4wMzJjLjU4Ny0uNDk3Ljc0Ny0uNzEuNzQ3LTEuMDMgMC0uNTcxLS40ODItMS4wMy0xLjA3MS0xLjAzcy0xLjA3MS40NTktMS4wNzEgMS4wM0g1LjVDNS41IDUuMDYyIDYuNjE2IDQgOCA0czIuNSAxLjA2IDIuNSAyLjM2NGMwIC44MjItLjM0NiAxLjI4LTEuMjE3IDIuMDE3bC0uMDM4LjAzMmMtLjYxNy41Mi0uNzg2Ljc0NS0uNzg2IDEuMTAyVjEwem0tMS40MzEuNjY3aDEuNDI4VjEySDcuMDN2LTEuMzMzeiIgZmlsbD0iIzc2NzU3OSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwOSAxOSkiPjxjaXJjbGUgc3Ryb2tlPSIjMEU5MjBFIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIGN4PSI4IiBjeT0iOCIgcj0iNyIvPjxjaXJjbGUgZmlsbD0iIzBFOTIwRSIgY3g9IjgiIGN5PSI4IiByPSI0Ii8+PC9nPjxwYXRoIGZpbGw9IiNGRjRDMDAiIGQ9Ik0xMzEgNGg4djEwbC00LTMtNCAzeiIvPjxnIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlPSIjRkY4MjVDIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xMyA0Ni4wMDNDMTMgNDIuNDk4IDE1Ljk5IDQyIDE4IDQyaDMuNTFjLjI3IDAgLjQ5LjIyNi40OS40OTR2MTIuMDEyYS40OTguNDk4IDAgMCAxLS41MDEuNDk0SDE4Yy0zLjk5OCAwLTUgMi01IDJWNDYuMDA0ek0xMyA0Ni4wMDNDMTMgNDIuNDk4IDEwLjAxIDQyIDggNDJINC40OWEuNDk1LjQ5NSAwIDAgMC0uNDkuNDk0djEyLjAxMmMwIC4yNzMuMjI2LjQ5NC41MDEuNDk0SDhjMy45OTggMCA1IDIgNSAyVjQ2LjAwNHoiLz48L2c+PHBhdGggZD0iTTMyIDU1VjQyLjVhMi41IDIuNSAwIDAgMSAyLjUtMi41SDQ1YTEgMSAwIDAgMSAxIDF2MTFhMSAxIDAgMCAxLTEgMWgtNiIgc3Ryb2tlPSIjNzY3NTc5IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik00NiA1OEgzNC41YTIuNSAyLjUgMCAxIDEgMC01SDQxIiBzdHJva2U9IiM3Njc1NzkiIHN0cm9rZS13aWR0aD0iMiIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZmlsbD0iIzc2NzU3OSIgZD0iTTQzIDUyaDJ2N2gtMnoiLz48cGF0aCBkPSJNNjUuMzY0IDQ3Ljk1bDUuNjU3LTUuNjU3YTEgMSAwIDEgMSAxLjQxNCAxLjQxNGwtNS42NTcgNS42NTcgNS42NTcgNS42NTdhMSAxIDAgMSAxLTEuNDE0IDEuNDE0bC01LjY1Ny01LjY1Ny01LjY1NyA1LjY1N2ExIDEgMCAwIDEtMS40MTQtMS40MTRsNS42NTctNS42NTctNS42NTctNS42NTdhMSAxIDAgMCAxIDEuNDE0LTEuNDE0bDUuNjU3IDUuNjU3eiIgZmlsbD0iIzlEOUM5RiIvPjxwYXRoIGQ9Ik02NS4zNjQgNzMuOTVsNS42NTctNS42NTdhMSAxIDAgMSAxIDEuNDE0IDEuNDE0bC01LjY1NyA1LjY1NyA1LjY1NyA1LjY1N2ExIDEgMCAxIDEtMS40MTQgMS40MTRsLTUuNjU3LTUuNjU3LTUuNjU3IDUuNjU3YTEgMSAwIDAgMS0xLjQxNC0xLjQxNGw1LjY1Ny01LjY1Ny01LjY1Ny01LjY1N2ExIDEgMCAxIDEgMS40MTQtMS40MTRsNS42NTcgNS42NTd6IiBmaWxsPSIjREEyRDE5Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTgwIDM4aDIydjIySDgweiIgZmlsbC1vcGFjaXR5PSIwIiBzdHJva2U9IiNDNEM0QzYiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGZpbGw9IiMwRTkyMEUiIGQ9Ik03OSA2M2gyNHYyNEg3OXoiLz48cGF0aCBzdHJva2U9IiNGRkYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNODUgNzVsNCA0IDgtOCIvPjxjaXJjbGUgY3g9IjgiIGN5PSI4IiByPSI3IiBmaWxsPSJub25lIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDkgMSkiIGZpbGwtb3BhY2l0eT0iMCIgc3Ryb2tlPSIjQzRDNEM2IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBmaWxsPSIjM0IzOTNGIiBkPSJNMTQ4IDdoMTBsLTUgNXpNMTQ4IDMwbDUtNSA1IDV6Ii8+PGc+PHBhdGggZmlsbD0ibm9uZSIgb3BhY2l0eT0iLjQ2NSIgZD0iTTE2MiAwaDE4djE4aC0xOHoiLz48cGF0aCBkPSJNMTc1Ljg5NiAzbC03LjEzIDcuNTUxLTIuNjY1LTIuODIxTDE2NCA5Ljk1NyAxNjguNzYzIDE1bC42MTYtLjY0OUwxNzggNS4yMjR6IiBmaWxsPSIjNDFBRDQ5IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L2c+PGcgZmlsbD0iI0U4NEMzRCIgZmlsbC1ydWxlPSJub256ZXJvIj48cGF0aCBkPSJNMTg5IDFhOCA4IDAgMSAwIDAgMTYgOCA4IDAgMCAwIDAtMTZ6bTEgMTNoLTJ2LTJoMnYyem0wLTNoLTJWNGgydjd6Ii8+PC9nPjxnPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNiA0NSkiPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjxwYXRoIGQ9Ik0xNC4wNTYgMi44MzdhNC4wODYgNC4wODYgMCAwIDAtLjkyNi0xLjY2MkMxMi40Ni40NSAxMS41MzUgMCAxMC41MTggMGgtNi44MkMxLjY2NCAwIDAgMS44IDAgNGMwIDEuMS40MTYgMi4xIDEuMDg2IDIuODI1QzEuNzU2IDcuNTUgMi42ODEgOCAzLjY5OCA4aDQuMTQ3YTUuMTQ1IDUuMTQ1IDAgMCAxLTEuMjcyLTEuNzAySDMuNjk3Yy0uNTYzIDAtMS4wOTYtLjI0LTEuNDk5LS42NzdBMi4zNzcgMi4zNzcgMCAwIDEgMS41NzQgNGMwLS42MS4yMjItMS4xODUuNjI1LTEuNjIxYTIuMDMyIDIuMDMyIDAgMCAxIDEuNS0uNjc3aDYuODE5Yy41NjMgMCAxLjA5Ni4yNCAxLjUuNjc3LjEyOC4xNC4yMzkuMjkzLjMzLjQ1OC4xOTIuMzUuMjk1Ljc0OS4yOTUgMS4xNjMgMCAuNDE0LS4xMDMuODEzLS4yOTYgMS4xNjNoMS43MDlhNC4yNjMgNC4yNjMgMCAwIDAgMC0yLjMyNiIgZmlsbD0iIzc2NzU3OSIgbWFzaz0idXJsKCNiKSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTMuMTE3IDQ1KSI+PG1hc2sgaWQ9ImQiIGZpbGw9IiNmZmYiPjx1c2UgeGxpbms6aHJlZj0iI2MiLz48L21hc2s+PHBhdGggZD0iTTEzLjEzIDEuMTc1QzEyLjQ2LjQ1IDExLjUzNSAwIDEwLjUxOCAwSDYuMzcyYTUuMTQ2IDUuMTQ2IDAgMCAxIDEuMjcyIDEuNzAyaDIuODc0Yy41NjMgMCAxLjA5Ni4yNCAxLjUuNjc3LjQwMy40MzYuNjI1IDEuMDEyLjYyNSAxLjYyMSAwIC42MS0uMjIyIDEuMTg1LS42MjYgMS42MjFhMi4wMzIgMi4wMzIgMCAwIDEtMS40OTkuNjc3aC02LjgyYy0uNTYzIDAtMS4wOTYtLjI0LTEuNDk5LS42NzdhMi4zMjUgMi4zMjUgMCAwIDEtLjMzLS40NThBMi40MDcgMi40MDcgMCAwIDEgMS41NzQgNGMwLS40MTQuMTAyLS44MTMuMjk1LTEuMTYzSC4xNjFhNC4yNjMgNC4yNjMgMCAwIDAgMCAyLjMyNmMuMTc5LjYzNS41MDEgMS4yMDMuOTI1IDEuNjYyQzEuNzU2IDcuNTUgMi42ODEgOCAzLjY5OCA4aDYuODJjMi4wMzQgMCAzLjY5OC0xLjggMy42OTgtNCAwLTEuMS0uNDE2LTIuMS0xLjA4Ni0yLjgyNSIgZmlsbD0iIzc2NzU3OSIgbWFzaz0idXJsKCNkKSIvPjwvZz48L2c+PC9nPjwvc3ZnPgo=";

const spriteCell = 18;
const spriteBigCell = 26;

const icons = {
  ["arrow-bottom"]: { small: { x: 0, y: 0 }, big: { x: 0, y: 0 } },
  ["pencil"]: {
    small: { x: -18, y: 0 },
    big: { x: -25, y: 0 },
  },
  ["delete"]: {
    small: { x: -(spriteCell * 2), y: 0 },
    big: { x: -(spriteBigCell * 2), y: 0 },
  },
  ["download"]: {
    small: { x: -(spriteCell * 3), y: 0 },
    big: { x: -(spriteBigCell * 3), y: 0 },
  },
  ["question"]: {
    small: { x: -(spriteCell * 4), y: 0 },
    big: { x: -(spriteBigCell * 4), y: 0 },
  },
  ["question-invert"]: {
    small: { x: -(spriteCell * 4), y: -spriteCell },
    big: { x: -(spriteBigCell * 4), y: -spriteBigCell },
  },
  ["radio"]: {
    small: { x: -(spriteCell * 6), y: 0 },
    big: { x: -(spriteBigCell * 6), y: 0 },
  },
  ["radio-checked"]: {
    small: { x: -(spriteCell * 6), y: 0 },
    big: { x: -(spriteBigCell * 6), y: -spriteBigCell },
  },
  ["bookmark"]: {
    small: { x: -(spriteCell * 7), y: 0 },
    big: { x: -(spriteBigCell * 7), y: 0 },
  },
  ["triangle-bottom"]: {
    small: { x: -(spriteCell * 8), y: 0 },
    big: { x: -(spriteBigCell * 8), y: 0 },
  },
  ["success"]: {
    small: { x: -(spriteCell * 9), y: 0 },
    big: { x: -(spriteBigCell * 9), y: 0 },
  },
  ["error"]: {
    small: { x: -(spriteCell * 10), y: 0 },
    big: { x: -(spriteBigCell * 10), y: 0 },
  },
  ["triangle-top"]: {
    small: { x: -(spriteCell * 8), y: -spriteCell },
    big: { x: -(spriteBigCell * 8), y: -spriteBigCell },
  },
  ["arrow-up"]: {
    small: { x: 0, y: -spriteCell },
    big: { x: 0, y: -spriteBigCell },
  },
  ["digital-book"]: {
    small: { x: 0, y: -(spriteCell * 2) },
    big: { x: 0, y: -(spriteBigCell * 2) },
  },
  ["analog-book"]: { small: { x: -26, y: -36 }, big: { x: -26, y: -36 } },
  ["cross"]: { small: { x: -57, y: -40 }, big: { x: -82, y: -60 } },
  ["cross-red"]: { small: { x: -57, y: -67 }, big: { x: -82, y: -98 } },
  ["checkbox"]: {
    small: { x: -68, y: -40, backgroundSize: "215px 95px" },
    big: { x: -82, y: -40, backgroundSize: "205px 95px" },
  },
  ["checkbox-checked"]: {
    small: { x: -68, y: -40, backgroundSize: "215px 95px" },
    big: { x: -82, y: -68, backgroundSize: "205px 95px" },
  },
  ["link"]: { small: { x: -(26 * 4), y: -36 }, big: { x: -(26 * 4), y: -36 } },
  ["download"]: { small: { x: -54, y: 0 }, big: { x: -54, y: 0 } },
};

const iconSizes = {
  small: css`
    background-size: 198px 88px;
    margin: 0 2px;
    width: 18px;
    height: 18px;
  `,
  big: css`
    background-size: 288px 128px;
    width: 26px;
    height: 26px;
  `,
};

export const getStyledIcon = (glyph, size, hovered) => {
  const currentStep = size === "small" ? spriteCell : spriteBigCell;
  if (glyph === "readings") {
    return styled.span`
      background: url(${openBookIcon}) no-repeat 0 2px;
      background-size: contain;
    `;
  }

  return styled.span`
    display: inline-flex;
    background-image: url("${iconsSprite}");
    background-position-x: ${icons[glyph][size].x}px;
    background-position-y: ${
      !hovered ? icons[glyph][size].y : icons[glyph][size].y - currentStep
    }px;
    
    ${iconSizes[size]}
    
    ${icons[glyph][size].backgroundSize &&
      css`
        background-size: ${icons[glyph][size].backgroundSize};
      `};
  `;
};
