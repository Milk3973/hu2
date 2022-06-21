import '../styles/Home.scss';

import { Obfuscated } from '../obfuscate.js';
import { ThemeButton } from '../ThemeElements.js';

export default function Home(props) {
	return (
		<main className="home">
			<h1>
				<Obfuscated>We Made it Mom</Obfuscated>
			</h1>
			<h2>
				<Obfuscated>In the big Leagues Now.</Obfuscated>
			</h2>
			<ThemeButton onClick={() => props.main_layout.current.set_expanded(true)}>
				<Obfuscated>Get Started</Obfuscated>
			</ThemeButton>
		</main>
	);
}
