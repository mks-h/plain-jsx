import type { JSX } from "./types.d.ts";

export function jsxFactory(
	tag:
		| string
		| ((props: object | null | undefined, ...children: JSX.Element[]) => any),
	props: object | null | undefined,
	...children: JSX.Element[]
) {
	if (typeof tag === "function") return tag(props, ...children);

	const elem = document.createElement(tag);
	if (props) {
		for (const key in props) {
			elem.setAttribute(key, props[key]);
		}
	}

	if (children) {
		for (const child of children) {
			if (child.nodeType) elem.appendChild(child);
			else if (typeof child === "string")
				elem.appendChild(document.createTextNode(child));
			else elem.appendChild(document.createTextNode(child.toString()));
		}
	}

	return elem;
}
