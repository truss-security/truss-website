import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"blog"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="80px 0 80px 0" quarkly-title="Content-5">
			<Override slot="SectionContent" padding="0px 150px 0px 0px" lg-padding="0px 0 0px 0px" />
			<Text margin="0px 0px 10px 0px" font="normal 400 18px/1.5 --fontFamily-sans" color="#5d20a9" max-width="640px">
				Whitepaper
			</Text>
			<Text margin="0px 0px 30px 0px" font="normal 600 42px/1.2 --fontFamily-sans" max-width="640px">
				Truss - An Inter-chain Decentralized Autonomous Security Ecosystem
			</Text>
			<Text margin="0px 0px 20px 0px" font="--headline3" max-width="640px">
				Abstract
			</Text>
			<Text margin="0px 0px 25px 0px" font="normal 300 25px/1.5 --fontFamily-sans" color="#505257" max-width="640px">
				It is rare when something fundamentally alters not only how we interact with the world around us but also with each other. The personal computer, the cellphone, and 5G wireless communication are examples of how technology can transform the physical mediums we use to communicate and connect with each other. Blockchain technology, on the other hand, stands apart from the physical mediums just mentioned and enters the world of transforming how we trust information. Blockchain has an answer to questions like, How well do we trust the information we digest? Is there a consensus on the legitimacy of a particular event? Can we mathematically prove that a particular event even took place?
			</Text>
			<Text margin="0px 0px 25px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" max-width="640px">
				Blockchain up to this point has been largely focused on answering the questions of trust from a financial perspective as well as leveraging the technology to enhance governance, privacy, and multi-signature authorization. In each use-case, cryptologic functions are used to assert, without question, that a particular set of events are indeed true. This leads us to a logical next step, the information security industry. Blockchain operations have many parallels with security operations. Redundancy, transparency, privacy, and authentication, each of these is rooted deeply within both fields. The three questions we want to address are: 1) can we use the strengths of blockchain to store and provide security event data? Furthermore, 2) can this include data developed and curated by a decentralized network of researchers to achieve validation or consensus? Finally, 3) can we enable this security data to be sent directly to consumers in real-time to protect them from novel and viral threats?
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" max-width="640px">
				We envision a world where person-to-person (P2P) communication of malware signatures, malicious Command and Control (C2) infrastructure, threat actor tactics, techniques, and procedures (TTPs), and security tools are streamed between the developer and the recipient. Where the transmission of security data is processed, purchased, and integrated in real time via smart contract automation. In such a world, when a threat actor launches a novel attack, within minutes every organization in the world has the security data required to prevent this attack from impacting their environment. To achieve this goal, we propose the development of a Global Cyber Immune System, called Decentralized Autonomous Security (DAS), designed to combat the viral infections of cyber attacks.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" max-width="640px">
				This whitepaper presents a decentralized approach to providing relevant, simple, and economical security data. The concepts listed here present a new way to deliver, purchase, and retrieve security data that directly supports the research of and prevention of cyber-attacks across the globe. Information security practitioners across the globe acknowledge the decentralized nature of attackers and how decentralized attack patterns present a technological and economic challenge to providing timely, actionable security data for organizations wanting to protect themselves. With this paper, we propose an alternative to centralized security vendors, one that takes a decentralized approach to combating cyber attacks.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" max-width="640px">
				Thanks,
				<br />
				<br />
				The Truss Security Team
			</Text>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"648b58158bd7e60018594e7b"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});