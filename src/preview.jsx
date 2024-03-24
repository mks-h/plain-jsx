const Greet = ({ whom }) => (
	<div>
		<h3 class="greeting">Hello, {whom ?? "World"}!</h3>
		<p>I hope you're having a good day.</p>
		<button onclick={'alert("You\'re welcome!")'}>Thank you!</button>
	</div>
);

document.getElementById("root").appendChild(<Greet whom="User" />);
