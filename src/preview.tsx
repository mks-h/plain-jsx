import { jsxFactory } from "./index";

const SayHello = (props) => (
	<div>
		<h3 class="hi">Hello {props ? props.name : "world"}</h3>
		<p>I hope you're having a good day</p>
		<button onclick={'alert("Hi!!!")'}>Hi!!!</button>
	</div>
);

/* <Component /> === Component() */
document.getElementById("root")!.appendChild(<SayHello name="foo" />);
