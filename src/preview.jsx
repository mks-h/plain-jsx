const Greet = ({ whom }) => (
	<>
		<h3 class="greeting">Hello, {whom ?? "World"}!</h3>
		<p>I hope you're having a good day.</p>
		<button onclick={'alert("You\'re welcome!")'}>Thank you!</button>
	</>
);

document.getElementById("root").appendChild(<Greet whom="User" />);
