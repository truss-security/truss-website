import React from "react";
import theme from "theme";
import { Theme, Link, Box, Section, Image, Text, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, SocialMedia } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Truss Security
			</title>
			<meta name={"description"} content={"The Truss Website and Whitepaper layout the primary mission and focus of the Truss Protocol and Truss Marketplace through the establishment of a decentralized autonomous security platform."} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Truss%20Logo%20IconOnly_BWG.png?v=2023-06-15T22:19:54.100Z"} type={"image/x-icon"} />
		</Helmet>
		<Section quarkly-title="Header">
			<Override slot="SectionContent" justify-content="center" display="flex" align-items="center" />
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Menu
					display="flex"
					justify-content="center"
					font="--base"
					font-weight="700"
					md-flex-direction="column"
					md-align-items="center"
				>
					<Override slot="link" text-decoration="none" color="--dark" padding="6px 12px" />
					<Override slot="link-active" color="--primary" />
					<Override slot="item" padding="6px" />
					<Override slot="link-index">
						About
					</Override>
					<Override slot="link-contact">
						Contact
					</Override>
				</Menu>
			</Box>
		</Section>
		<Section
			padding="80px 0 80px 0"
			lg-padding="56px 0 56px 0"
			sm-padding="32px 0 32px 0"
			background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /auto repeat scroll border-box"
			quarkly-title="Title"
		>
			<Override slot="SectionContent" width="900px" />
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Truss%20Logo%20Horizontal_Black.png?v=2023-06-15T20:00:15.139Z" display="block" />
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-dark" quarkly-title="Capability">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="center"
				md-width="100%"
				padding="0px 80px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
			>
				<Text margin="0px 0px 0px 0px" color="--light" font="--headline2" md-margin="0px 0px 30px 0px">
					Enabling security researchers to sell cyber threat intelligence directly to organizations
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
			>
				<Text margin="0px 0px 40px 0px" color="--light" font="--base">
					We envision a world where peer-to-peer (P2P) communication of malware signatures, malicious Command and Control (C2) infrastructure, threat actor tactics, techniques, and procedures (TTPs), and security tools are streamed between the developer and the recipient. Where the transmission of security data is processed, purchased, and integrated in real time via smart contract automation.
				</Text>
				<Text margin="0px 0px 0px 0px" color="--light" font="--base">
					In such a world, when a threat actor launches a novel attack, within minutes every organization in the world has the security data required to prevent this attack from impacting their environment. To achieve this goal, we propose the development of a Global Cyber Immune System, called Decentralized Autonomous Security (DAS), designed to combat the viral infections of cyber attacks.
				</Text>
			</Box>
		</Section>
		<Section padding="120px 0 140px 0" sm-padding="80px 0 90px 0" quarkly-title="Mission">
			<Text margin="0px 0px 0px 0px" font="normal 700 42px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif">
				Our mission
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				margin="50px 0px 0px 0px"
				md-flex-direction="column"
				sm-margin="30px 0px 0px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					width="60%"
					margin="0px 10% 0px 0px"
					padding="4px 0px 0px 0px"
					md-width="100%"
					md-margin="0px 10% 50px 0px"
					sm-padding="0 0px 0px 0px"
					sm-margin="0px 10% 35px 0px"
				>
					<Text margin="0px 0px 25px 0px" font="normal 300 24px/1.5 --fontFamily-sansHelvetica" color="#35363a" text-align="center">
						Ease the burden of implementing actionable, timely and cost-effective security solutions by incentivizing the production and distribution of decentralized security resources.
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						font="normal 300 24px/1.5 --fontFamily-sansHelvetica"
						color="#35363a"
						text-align="center"
						position="relative"
						padding="0px 0px 20px 0px"
					>
						To do this Truss developed a custom-built utility token designed to facilitate the decentralized distribution and production of security data between global end users. Providing the ground floor for a true Peer-2-Peer Security Intelligence platform.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px" padding="0px 0px 0px 0px" text-align="center">
					<Text margin="0px 0px 0px 0px" font="normal 700 46px/1.2 --fontFamily-sans" sm-font="normal 700 42px/1.2 --fontFamily-sans" padding="20 0px 0px 0px">
						100 million
					</Text>
					<Text margin="8px 0px 20px 0px" font="normal 300 18px/1.5 --fontFamily-sansHelvetica" color="#35363a">
						Global customers
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 700 46px/1.2 --fontFamily-sans" sm-font="normal 700 42px/1.2 --fontFamily-sans">
						$10 million
					</Text>
					<Text margin="8px 0px 20px 0px" font="normal 300 18px/1.5 --fontFamily-sansHelvetica" color="#35363a">
						Of security dollars going to the{" "}
						<br />
						security researchers who developed them.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0px 60px 0px" quarkly-title="Avenue">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="24px 0px 16px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					lg-width="100%"
				>
					Creating a decentralized global digital immune system
				</Text>
				<Text
					margin="0px 0px 48px 0px"
					color="--greyD3"
					font="--lead"
					lg-text-align="center"
					lg-width="100%"
				>
					Where organizations can implement mitigation measures against viral threats as soon as they are posted to the marketplace{" "}
				</Text>
				<Box
					display="flex"
					align-items="flex-start"
					margin="0px 0px 32px 0px"
					lg-width="50%"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 16px 0px 0px"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
				>
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 0px 0px"
						font="--headline3"
						background="--color-orange"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
					>
						1
					</Text>
					<Box margin="0px 0px 0px 22px">
						<Text margin="0px 0px 8px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
							Decentralized Autonomous Security
						</Text>
						<Text margin="0px 0px 0px 0px" color="--greyD3" font="--base" lg-text-align="left">
							Decentralizing the development and distribution of security
							<br />
							resources by providing P2P partnerships
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					align-items="flex-start"
					margin="0px 0px 32px 0px"
					lg-width="50%"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 16px 0px 0px"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
				>
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 0px 0px"
						font="--headline3"
						background="--color-orange"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
					>
						2
					</Text>
					<Box margin="0px 0px 0px 22px">
						<Text margin="0px 0px 8px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
							Decentralized Web3 Marketplace
						</Text>
						<Text margin="0px 0px 0px 0px" color="--greyD3" font="--base" lg-text-align="left">
							Using Web3 technology to incentivize researchers and organizations
							<br />
							alike through the power of blockchain Tokenomics
						</Text>
					</Box>
				</Box>
				<Box
					display="flex"
					align-items="flex-start"
					margin="0px 0px 32px 0px"
					lg-width="50%"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 16px 0px 0px"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
				>
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 0px 0px"
						font="--headline3"
						background="--color-orange"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
					>
						3
					</Text>
					<Box margin="0px 0px 0px 22px">
						<Text margin="0px 0px 8px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
							Security mitigations become monetized
						</Text>
						<Text margin="0px 0px 0px 0px" color="--greyD3" font="--base" lg-text-align="left">
							Security researchers can sell their wares directly to organizations, becoming fully self-supported.
							<br />
							<br />
							Enterprise security teams are able to return a profit on their security products and mitigations
						</Text>
					</Box>
				</Box>
			</Box>
			<Box
				display="flex"
				width="50%"
				justify-content="flex-end"
				overflow-y="hidden"
				overflow-x="hidden"
				lg-width="100%"
				padding="0px 0px 0px 16px"
				align-items="center"
				lg-justify-content="center"
				lg-padding="0px 0px 0px 0px"
			>
				<Image
					src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Tri-benefit.svg?v=2023-06-15T21:21:39.039Z"
					display="block"
					max-height="900px"
					text-align="left"
					overflow-x="visible"
					position="sticky"
					padding="0px 100px 0px 0px"
				/>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" quarkly-title="Capability">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				justify-content="flex-start"
				lg-width="100%"
				align-items="flex-start"
				lg-margin="0px 0px 32px 0px"
				margin="0px 0px 0px 0px"
				padding="0px 32px 0px 0px"
				lg-padding="0px 0px 0px 0px"
				lg-justify-content="center"
			>
				<Image
					src="https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
					object-fit="cover"
					width="100%"
					height="100%"
					border-radius="24px"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					min-height="600px"
					max-width="480px"
					sm-min-height="100vw"
				/>
			</Box>
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 0px 16px 16px"
				justify-content="center"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Reducing the cost of implementing enterprise-level security
				</Text>
				<Text margin="0px 0px 40px 0px" color="--greyD3" font="--lead" lg-text-align="center">
					Allowing organizations of any size to implement actionable, timely, and cost-effective security solutions.
				</Text>
				<Text margin="0px 0px 40px 0px" color="--greyD3" font="--lead" lg-text-align="center">
					Read our whitepaper to learn more
				</Text>
				<Link
					href="/whitepaper"
					padding="12px 24px 12px 24px"
					color="--light"
					text-decoration-line="initial"
					font="--lead"
					border-radius="8px"
					margin="0px 16px 0px 0px"
					transition="background-color 0.2s ease-in-out 0s"
					sm-margin="0px 0px 16px 0px"
					sm-text-align="center"
					background="--color-green"
					hover-transition="background-color 0.2s ease-in-out 0s"
					hover-background="--color-primary"
				>
					Whitepaper
				</Link>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" background="--color-darkL1" color="--lightD2" quarkly-title="Contact">
			<Override
				slot="SectionContent"
				flex-direction="row"
				align-items="flex-start"
				lg-flex-direction="column"
				display="block"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				width="40%"
				lg-width="100%"
				display="block"
				flex-direction="column"
				justify-content="center"
				lg-margin="0px 0 30px 0px"
				align-items="flex-start"
				sm-margin="0px 0px 0 0px"
				lg-padding="0px 180px 0px 0px"
				sm-padding="0px 0 0px 0px"
				md-padding="0px 0px 0px 0px"
			>
				<Text margin="0px 0px 20px 0px" font="normal 600 38px/1.2 --fontFamily-sansHelvetica" color="--light">
					Contact us
				</Text>
			</Box>
			<Text
				margin="0px 0px 50px 0px"
				font="normal 300 24px/1.5 --fontFamily-sansHelvetica"
				color="--lightD2"
				lg-margin="0px 0px 20px 0px"
				md-width="100%"
				display="flex"
				align-items="center"
				justify-content="center"
				align-content="flex-end"
				flex-direction="column"
			>
				Truss is dedicated to knowledge sharing and supporting the global security industry.
			</Text>
			<Text
				margin="0px 0px 50px 0px"
				font="normal 300 24px/1.5 --fontFamily-sansHelvetica"
				color="--lightD2"
				lg-margin="0px 0px 20px 0px"
				md-width="100%"
				display="flex"
				align-items="center"
				justify-content="center"
				align-content="center"
				flex-direction="column"
			>
				The more we work together the better our global hygiene and the more secure we all become.
			</Text>
			<Text
				margin="0px 0px 50px 0px"
				font="normal 300 24px/1.5 --fontFamily-sansHelvetica"
				color="--lightD2"
				lg-margin="0px 0px 20px 0px"
				md-width="100%"
				flex-wrap="no-wrap"
				align-content="center"
				flex-direction="column"
				align-items="center"
				justify-content="center"
				justify-items="center"
				display="flex"
			>
				We want to hear from you! Join the Truss security community!
			</Text>
			<SocialMedia
				twitter="https://twitter.com/truss_security"
				margin="12px 0px 24px 0px"
				linked-in="https://www.linkedin.com/company/truss-security/"
				discord="https://discord.com/invite/zerVhHtfxJ"
				youtube="https://www.youtube.com/channel/UCjzO-8_mv3iKKf6baDWaYfw"
			>
				<Override
					slot="link"
					border-radius="50%"
					color="--grey"
					hover-color="--light"
					background="transparent"
					hover-background="transparent"
					margin="0 5px 0 5px"
					padding="0px 0px 0px 0px"
				/>
				<Override slot="icon-facebook" color="#000000" />
				<Override
					slot="icon"
					color="--darkL1"
					padding="10px 10px 10px 10px"
					border-color="--color-grey"
					border-style="solid"
					size="40px"
					border-radius="50px"
					background="--color-lightD2"
					border-width="0px"
				/>
			</SocialMedia>
		</Section>
		<Section background-color="--dark" text-align="center" padding="32px 0" quarkly-title="Footer">
			<List
				margin="0px 0px 0px 0px"
				padding="12px 0px 12px 0px"
				list-style-type="none"
				as="ul"
				display="flex"
				align-items="center"
				justify-content="center"
			>
				<Link
					href="/index"
					color="white"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					About
				</Link>
				<Link
					href="/whitepaper"
					color="white"
					padding="6px 12px 6px 12px"
					text-decoration-line="initial"
					display="flex"
					font="20px/30px sans-serif"
					hover-color="--lightD2"
					transition="background-color 0.1s ease 0s"
				>
					Whitepaper
				</Link>
			</List>
			<Link
				href="mailto:info@truss-security.com"
				text-decoration-line="none"
				variant="--base"
				color="--grey"
				hover-color="--primary"
			>
				info@truss-security.com
			</Link>
		</Section>
		<Link href="#" color="#000000">
			Some text
		</Link>
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
