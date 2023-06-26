import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image, Strong, Icon, Span, List, Em } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, SocialMedia } from "@quarkly/components";
import { FaComments, FaAudible, FaGalacticRepublic, FaHornbill, FaReact, FaGlobeAmericas } from "react-icons/fa";
import { BsFillAlarmFill } from "react-icons/bs";
import { IoLogoBitcoin, IoMdUnlock, IoIosAperture, IoMdAperture, IoMdPeople, IoMdGitCompare } from "react-icons/io";
import { GoBroadcast } from "react-icons/go";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Truss Security
			</title>
			<meta name={"description"} content={"The Truss Website and Whitepaper layout the primary mission and focus of the Truss Protocol and Truss Marketplace through the establishment of a decentralized autonomous security platform."} />
			<meta property={"og:title"} content={"Truss"} />
			<meta property={"og:description"} content={"Truss Security establishes a decentralized autonomous security platform."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/64972fbb588b2d0019591bb1/images/Truss%20Logo%20IconOnly_Black.png?v=2023-06-26T01:17:23.697Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/64972fbb588b2d0019591bb1/images/Truss%20Logo%20IconOnly_BWG.png?v=2023-06-26T01:17:44.962Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/64972fbb588b2d0019591bb1/images/Truss%20Logo%20IconOnly_BWG.png?v=2023-06-26T01:17:44.962Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/64972fbb588b2d0019591bb1/images/Truss%20Logo%20IconOnly_BWG.png?v=2023-06-26T01:17:44.962Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/64972fbb588b2d0019591bb1/images/Truss%20Logo%20IconOnly_BWG.png?v=2023-06-26T01:17:44.962Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/64972fbb588b2d0019591bb1/images/Truss%20Logo%20IconOnly_BWG.png?v=2023-06-26T01:17:44.962Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/64972fbb588b2d0019591bb1/images/Truss%20Logo%20IconOnly_BWG.png?v=2023-06-26T01:17:44.962Z"} />
			<meta name={"msapplication-TileColor"} content={"#ffffff"} />
		</Helmet>
		<Section quarkly-title="Header">
			<Box
				display="flex"
				padding="12px 0"
				justify-content="space-between"
				align-items="center"
				flex-direction="row"
				md-flex-direction="column"
			>
				<Text margin="0" md-margin="0px 0 20px 0" text-align="left" font="normal 300 28px/1.5 --fontFamily-sansHelvetica">
					TRUSS
				</Text>
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
					<Override slot="item-coming-soon" display="none" />
				</Menu>
			</Box>
		</Section>
		<Section
			padding="40px 0 40px 0"
			lg-padding="56px 0 56px 0"
			sm-padding="32px 0 32px 0"
			background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /auto repeat scroll border-box"
			quarkly-title="Title"
		>
			<Override slot="SectionContent" width="900px" />
			<Image src="https://uploads.quarkly.io/64972fbb588b2d0019591bb1/images/Truss%20Logo%20Horizontal_Black_Transparent.png?v=2023-06-26T00:58:21.370Z" display="block" />
		</Section>
		<Section
			padding="40px 0 0px 0"
			sm-padding="60px 0 80px 0"
			quarkly-title="The Problem"
			display="grid"
			align-items="start"
		>
			<Override
				slot="SectionContent"
				padding="0px 0 0px 0px"
				lg-padding="0px 0 0px 0px"
				display="block"
				grid-template-columns="repeat(2, 1fr)"
				align-items="start"
				lg-grid-template-columns="1fr"
				order="0"
				align-self="auto"
				justify-self="auto"
			/>
			<Text margin="0px 0px 10px 0px" font="normal 400 24px/1.5 --fontFamily-sans" color="#000000" text-align="center">
				The Problem
			</Text>
			<Text margin="0px 0px 30px 0px" font="normal 600 42px/1.2 --fontFamily-sans" text-align="center">
				Cyber attacks are increasing in frequency
			</Text>
			<Text margin="0px 0px 25px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				Billions of dollars in ransomware payments have led to advancements in the development and distribution of ransomware binaries resulting in a growth of young, malicious, yet entrepreneurial, mindsets. Furthermore, because of the potential for large payoffs, more competition is entering the field. The following percentages are based on 2022 compared to 2021 stats.
			</Text>
			<Box
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="16px 16px"
				padding="15px 0px 0px 0px"
				border-width="1px 0 0 0"
				border-style="solid"
				border-color="--color-lightD2"
				margin="0px 0px 30px 0px"
				sm-grid-template-columns="repeat(2, 1fr)"
				text-align="center"
				justify-content="center"
				align-content="center"
				justify-items="center"
				align-items="center"
				width="100% border-box"
				display="grid"
			>
				<Box min-width="100px" min-height="100px" flex="1 1 0%">
					<Text margin="0px 0px 15px 0px" font="normal 400 24px/1.5 --fontFamily-sans">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							Ransomware
						</Strong>
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 600 36px/1.2 --fontFamily-sans">
						Up 144%
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 400 24px/1.5 --fontFamily-sans">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							BEC
						</Strong>
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 600 36px/1.2 --fontFamily-sans">
						Up 84%
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 400 24px/1.5 --fontFamily-sans">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							Compromised Orgs
						</Strong>
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 600 36px/1.2 --fontFamily-sans">
						Up 83%
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 400 24px/1.5 --fontFamily-sans">
						<Strong
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							Not detected
						</Strong>
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 600 36px/1.2 --fontFamily-sans">
						53%
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			sm-padding="40px 0"
			min-height="400px"
			sm-min-height="auto"
			background="--color-darkL1"
			display="flex"
			lg-padding="45px 0 45px 0"
			quarkly-title="The Solution"
			padding="40px 0 40px 0"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				grid-gap="5%"
				max-width="1200px"
				sm-min-width="280px"
			/>
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				align-items="center"
				lg-width="100%"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				lg-justify-content="center"
			>
				<Text margin="0px 0px 10px 0px" font="normal 400 24px/1.5 --fontFamily-sans" color="#ffffff" text-align="left">
					The Solution
				</Text>
				<Text
					as="h1"
					margin="0px"
					font="normal 600 40px/1.5 --fontFamily-sans"
					color="--light"
					width="100%"
					md-width="100%"
					sm-font="normal 600 40px/1.2 --fontFamily-sans"
					text-align="center"
					sm-text-align="left"
				>
					Making enterprise cyber security easy and affordable
				</Text>
				<Text
					margin="8px 0px 0px 0px"
					font="normal 300 21px/1.5 --fontFamily-sans"
					text-align="center"
					color="--lightD2"
					lg-max-width="720px"
					sm-text-align="left"
				>
					A marketplace connecting organizations with respected researchers
				</Text>
				<Box
					display="grid"
					width="100%"
					grid-template-columns="repeat(2, 1fr)"
					grid-gap="24px"
					margin="36px 0px 0px 0px"
					max-width="1000px"
					md-grid-template-columns="1fr"
				>
					<Box
						padding="24px 24px 48px 24px"
						background="--color-darkL2"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="--color-red"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
					>
						<Box display="flex" align-items="center">
							<Icon category="fa" icon={FaComments} size="28px" color="--red" />
							<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
								Peer-to-Peer (P2P) Intelligence
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="--base" color="--lightD2">
							Malware signatures, malicious Command and Control (C2) infrastructure, threat actor tactics, techniques, and procedures (TTPs), and security tools are streamed between the developer and the recipient.
						</Text>
					</Box>
					<Box
						padding="24px 24px 48px 24px"
						background="--color-darkL2"
						border-radius="8px"
						border-width="0px 0px 0px 4px"
						border-style="solid"
						border-color="--color-red"
						box-shadow="--m"
						sm-padding="24px 24px 24px 24px"
					>
						<Box display="flex" align-items="center">
							<Icon category="fa" icon={FaAudible} size="28px" color="--red" />
							<Text margin="0px 0px 0px 12px" font="--lead" color="--light">
								Enabling Rapid Communication
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="--base" color="--lightD2">
							When a threat actor launches a novel attack, within minutes every organization in the world has access to the security data required to prevent this attack from impacting their environment.
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="40px 0 40px 0" background="#EDF2F6" sm-padding="60px 0 60px 0" quarkly-title="Blockchain">
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				md-width="100%"
				md-align-items="center"
				md-justify-content="center"
				md-text-align="center"
				lg-width="100%"
				margin="0px 0px 56px 0px"
				align-items="center"
			>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--dark"
					md-text-align="center"
					sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
				>
					Leveraging the power of blockchain
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="--greyD3"
					md-text-align="center"
					text-align="center"
					max-width="600px"
				>
					Blockchains have the potential to disrupt the monopoly held by large organizations over cyber threat intelligence. This democratization of the intelligence ecosystem can lead to more diverse and effective defenses against cyber threats.
				</Text>
			</Box>
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="32px 4%" md-grid-template-columns="1fr">
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="fa"
						icon={FaGalacticRepublic}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Decentralization
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Blockchain distributes the control of threat intelligence across a network of participants, empowering individuals to contribute their insights and analysis.
					</Text>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="fa"
						icon={FaHornbill}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Transparency
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Blockchains provide transparent and auditable records, ensuring the origin and integrity of threat intelligence and increasing trust among participants.
					</Text>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="fa"
						icon={FaReact}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Collaboration
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Smart contracts enable automated sharing and incentivization mechanisms, encouraging collective defense efforts among a community of organizations, researchers, and even machines.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			padding="40px 0 40px 0"
			sm-padding="60px 0 60px 0"
			min-height="600px"
			sm-min-height="auto"
			display="flex"
			background="--color-darkL2"
			quarkly-title="Immune System"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				grid-gap="5%"
				sm-min-width="280px"
			/>
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				sm-width="100%"
				md-margin="0px 0px 30px 0px"
				margin="0px 0px 48px 0px"
				lg-justify-content="center"
			>
				<Text as="p" font="--base" color="--red" margin="0px 0px 8px 0px">
					<Strong>
						Everything you need
					</Strong>
				</Text>
				<Text
					as="h1"
					margin="0px"
					font="--headline2"
					color="--light"
					width="100%"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="normal 600 40px/1.2 --fontFamily-sans"
					lg-text-align="center"
				>
					Strengthening the global immune system
				</Text>
				<Text
					as="p"
					margin="20px 0 0 0"
					font="--lead"
					font-size="20px"
					font-weight="300"
					color="--light"
					width="80%"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="--base"
					lg-text-align="center"
					lg-width="100%"
				>
					Imagine, emulating how the body’s immune system works together to deploy antigens to protect the whole body from a pathogen, the security industry can build a global immune system to ensure that security infections taking place in one enterprise are rapidly disseminated to protect the global ecosystem.
				</Text>
			</Box>
			<List
				margin="40px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				as="ul"
				sm-margin="24px 0 0 0"
				list-style-type="none"
				font="normal normal 18px/150% sans-serif"
				display="grid"
				flex-direction="column"
				grid-gap="24px 32px"
				lg-margin="32px 0px 0px 0px"
				grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
			>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="fa"
						icon={FaGlobeAmericas}
						size="20px"
						color="--red"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" color="--light">
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							Global reach.{" "}
						</Span>
						<Span
							opacity="0.9"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="--base"
						>
							The decentralized nature of Truss eliminates the need for intermediaries and allows for direct peer-to-peer transactions.
						</Span>
					</Text>
				</Box>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="bs"
						icon={BsFillAlarmFill}
						size="20px"
						color="--red"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" color="--light" font="18px/27px --fontFamily-sans">
						<Span
							font-weight="600"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							Relevant and timely intelligence.{" "}
						</Span>
						<Span
							opacity="0.9"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="--base"
						>
							Near-instantaneous transfer of CTI eliminates delays and limits on political cross-border transactions.
						</Span>
					</Text>
				</Box>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="io"
						icon={IoLogoBitcoin}
						size="20px"
						color="--red"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" font="18px/27px --fontFamily-sans" color="--light">
						<Span
							font-weight="600"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							Cost-effective.{" "}
						</Span>
						<Span
							opacity="0.9"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="--base"
						>
							Using blockchain eliminates the need for intermediaries, allowing for the direct transfer of CTI between buyers and sellers.
						</Span>
					</Text>
				</Box>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="io"
						icon={IoMdUnlock}
						size="20px"
						color="--red"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" color="--light" font="18px/27px --fontFamily-sans">
						<Span
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							Security and trust.{" "}
						</Span>
						<Span
							opacity="0.9"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="--base"
						>
							Blockchain data is encrypted and distributed across multiple nodes, making it highly resistant to tampering and fraud.
						</Span>
					</Text>
				</Box>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="io"
						icon={IoIosAperture}
						size="20px"
						color="--red"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" color="--light" font="18px/27px --fontFamily-sans">
						<Span
							font-weight="600"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							Transparency and trust.{" "}
						</Span>
						<Span
							opacity="0.9"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="--base"
						>
							Every participant in the blockchain network can access the same information, creating a transparent and shared ledger.
						</Span>
					</Text>
				</Box>
				<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
					<Icon
						display="block"
						category="go"
						icon={GoBroadcast}
						size="20px"
						color="--red"
						margin="5px 0 0 0"
					/>
					<Text padding="0" margin="0" font="18px/27px --fontFamily-sans" color="--light">
						<Span
							font-weight="600"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
							font="normal 600 16px/1.5 --fontFamily-sans"
						>
							Incentivization.{" "}
							<Span font-weight="300">
								{" "}A blockchain token foundation incentives developers, organizations, and researchers who contribute to the Truss ecosystem.
							</Span>
						</Span>
					</Text>
				</Box>
			</List>
		</Section>
		<Section padding="40px 0 40px 0" sm-padding="60px 0 60px 0" background="url() 0 0 no-repeat" quarkly-title="Marketplace">
			<Override
				slot="SectionContent"
				flex-direction="row"
				md-flex-wrap="wrap"
				max-width="1200px"
				sm-min-width="280px"
			/>
			<Box
				width="20%"
				display="flex"
				flex-direction="column"
				md-width="100%"
				padding="0px 0px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
				md-margin="0px 0px 30px 0px"
				lg-width="30%"
			>
				<Image
					src="https://images.unsplash.com/photo-1519581706005-e1b7e2de264c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
					md-margin="0px 0px 20px 0px"
					width="200px"
					height="200px"
					object-fit="cover"
					border-radius="50%"
					lg-width="200px"
				/>
			</Box>
			<Box
				width="80%"
				display="flex"
				flex-direction="column"
				md-width="100%"
				align-items="flex-start"
				padding="0px 128px 0px 128px"
				lg-padding="0px 64px 0px 64px"
				lg-width="70%"
				md-padding="0px 0px 0px 0px"
			>
				<Text margin="32px 0px 18px 0px" font="--headline2" md-margin="24px 0px 30px 0px" sm-font="--headline3">
					<Span
						color="--dark"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Web3 Security Marketplace
					</Span>
				</Text>
				<Text margin="0px 0px 38px 0px" color="--darkL2" font="--lead">
					<Em
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Connecting organizations and researchers
					</Em>
				</Text>
				<Link
					href="/coming-soon"
					color="--lightD1"
					text-decoration-line="initial"
					padding="7px 24px 8px 24px"
					background="--color-dark"
					font="--base"
					transition="--opacityOut"
					hover-opacity=".7"
					text-transform="uppercase"
					letter-spacing="1px"
					border-radius="4px"
				>
					The Truss Marketplace
				</Link>
			</Box>
		</Section>
		<Section padding="90px 0 90px 0" background="linear-gradient(0deg,rgba(0, 0, 0, 0.4) 0%,rgba(0,0,0,0.4) 100%),rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 50% 50% /cover repeat scroll padding-box" md-padding="100px 0 100px 0" quarkly-title="Documentation">
			<Override
				slot="SectionContent"
				flex-direction="row"
				align-items="center"
				justify-content="center"
				md-flex-direction="column"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				padding="0px 80px 0px 0px"
				width="50%"
				lg-width="70%"
				md-width="100%"
				md-padding="0px 0 0px 0px"
				md-margin="0px 0px 50px 0px"
			>
				<Text margin="0px 0px 10px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="white">
					Truss Protocol
				</Text>
				<Text margin="0px 0px 30px 0px" font="--headline2" color="white">
					Unleashing the Power of Token Economies
				</Text>
				<Text margin="0px 0px 40px 0px" color="--light" font="--base">
					The Truss token encourages active engagement by distributing the value generated through the development and purchase of security products among the community of contributors and buyers, incentivizing their participation.
				</Text>
				<Link
					href="/coming-soon"
					color="--dark"
					text-decoration-line="initial"
					padding="7px 24px 8px 24px"
					background="--color-light"
					font="--base"
					transition="--opacityOut"
					hover-opacity=".7"
					text-transform="uppercase"
					letter-spacing="1px"
					border-radius="4px"
				>
					Truss Documentation
				</Link>
			</Box>
			<Box
				min-width="250px"
				min-height="250px"
				width="250px"
				height="250px"
				background="--color-darkL1"
				border-radius="50%"
				display="flex"
				align-items="center"
				justify-content="center"
				flex-direction="column"
				md-align-self="flex-end"
			>
				<Text margin="0px 0px 15px 0px" color="#ff251d" font="normal 600 28px/1.2 --fontFamily-sans" text-align="center">
					Validation
				</Text>
				<Text margin="0px 0px 0px 0px" color="--light" font="normal 500 22px/1.5 --fontFamily-sans" text-align="center">
					Quality
				</Text>
			</Box>
		</Section>
		<Section
			padding="40px 0 40px 0"
			sm-padding="40px 0"
			sm-min-height="auto"
			display="flex"
			quarkly-title="Researchers"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				grid-gap="5%"
				sm-min-width="280px"
			/>
			<Box
				display="flex"
				width="100%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				lg-flex-direction="row"
				lg-flex-wrap="wrap"
				sm-width="100%"
				md-margin="0px 0px 30px 0px"
				margin="0px 0px 64px 0px"
				lg-justify-content="flex-start"
			>
				<Text
					as="h1"
					margin="0px"
					font="--headline2"
					color="--dark"
					width="100%"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="normal 600 40px/1.2 --fontFamily-sans"
					text-align="left"
				>
					Researchers harness collective intelligence
				</Text>
				<Text
					as="p"
					margin="20px 0 0 0"
					font="--lead"
					font-size="20px"
					font-weight="300"
					color="--dark"
					width="80%"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="--base"
					text-align="left"
					lg-width="100%"
					lg-max-width="720px"
				>
					Truss is the first cybersecurity platform that directly supports and incentivizes the producers of Cyber Threat Intelligence (CTI) by having consumers buy directly from the researchers. The Truss Marketplace connects buyers and sellers, creating a self-cycling economy where producers can communicate with their clientele.
				</Text>
			</Box>
			<Box
				width="100%"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="32px"
				lg-grid-template-columns="1fr"
				lg-grid-gap="48px"
			>
				<Box display="flex" flex-direction="column" align-items="flex-start" justify-content="space-between">
					<Icon
						category="io"
						icon={IoMdAperture}
						size="42px"
						color="--light"
						background="--color-red"
						padding="8px 8px 8px 8px"
						border-radius="8px"
						sm-margin="0px 0px 12px 0px"
						margin="0px 0px 20px 0px"
					/>
					<Box align-items="flex-start" display="flex" flex-direction="column" lg-max-width="720px">
						<Text font="--lead" color="--dark" margin="0px 0px 6px 0px">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								Unleashed Potential
							</Strong>
						</Text>
						<Text margin="0px 0px 24px 0px" font="--base" color="--darkL2">
							Truss untethers security data production from centralized organizations and unleashes the potential of the decentralized community of researchers.
						</Text>
					</Box>
				</Box>
				<Box display="flex" flex-direction="column" align-items="flex-start" justify-content="space-between">
					<Icon
						category="io"
						icon={IoMdPeople}
						size="42px"
						color="--light"
						background="--color-red"
						padding="8px 8px 8px 8px"
						border-radius="8px"
						sm-margin="0px 0px 12px 0px"
						margin="0px 0px 20px 0px"
					/>
					<Box align-items="flex-start" display="flex" flex-direction="column" lg-max-width="720px">
						<Text font="--lead" color="--dark" margin="0px 0px 6px 0px">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								Tracked ownership
							</Strong>
						</Text>
						<Text margin="0px 0px 24px 0px" font="--base" color="--darkL2">
							Researchers cryptographically sign their cyber threat intelligence (CTI) and publish it to the blockchain.
							<br />
							{"  "}
						</Text>
					</Box>
				</Box>
				<Box display="flex" flex-direction="column" align-items="flex-start" justify-content="space-between">
					<Icon
						category="io"
						icon={IoMdGitCompare}
						size="42px"
						color="--light"
						background="--color-red"
						padding="8px 8px 8px 8px"
						border-radius="8px"
						sm-margin="0px 0px 12px 0px"
						margin="0px 0px 20px 0px"
					/>
					<Box align-items="flex-start" display="flex" flex-direction="column" lg-max-width="720px">
						<Text font="--lead" color="--dark" margin="0px 0px 6px 0px">
							<Strong
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								Direct Payments
							</Strong>
						</Text>
						<Text margin="0px 0px 24px 0px" font="--base" color="--darkL2">
							Organizations pay a fee to access the CTI data. A majority of that purchase price goes to the researcher who published it as well as the data sources who supplied the data.
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="48px 0 48px 0" sm-padding="60px 0 60px 0" quarkly-title="Organizational Benefits" background="--color-lightD1">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" sm-min-width="280px" />
			<Box
				display="flex"
				width="40%"
				justify-content="flex-start"
				lg-width="100%"
				align-items="flex-start"
				lg-margin="0px 0px 0px 0px"
				margin="0px 0px 0px 0px"
				lg-padding="0px 0px 0px 0px"
				lg-justify-content="center"
			>
				<Image
					src="https://images.unsplash.com/photo-1687676407223-40b4faff5a58?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
					object-fit="cover"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-min-height="100vw"
					height="100%"
				/>
			</Box>
			<Box
				display="flex"
				width="60%"
				flex-direction="column"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 0px 0px"
				padding="48px 64px 48px 64px"
				justify-content="center"
				background="white"
				md-padding="36px 40px 48px 40px"
				sm-padding="36px 24px 48px 24px"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="--dark"
					font="--headline3"
					lg-text-align="center"
					sm-text-align="left"
				>
					Reducing Costs
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="--greyD2"
					font="--base"
					lg-text-align="left"
					sm-text-align="left"
				>
					Organizations and individuals alike will be free to integrate and sell purpose-built collections of security detections directly to end-users reducing the cost of security protections while simultaneously encouraging advanced research.
				</Text>
				<Text
					margin="0px 0px 16px 0px"
					color="--dark"
					font="--headline3"
					lg-text-align="center"
					sm-text-align="left"
				>
					Providing enterprise-grade security
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="--greyD2"
					font="--base"
					lg-text-align="left"
					lg-margin="0px 0px 36px 0px"
					sm-text-align="left"
				>
					The Truss ecosystem enhances the security and flexibility of all Truss entities through increased visibility and marketing awareness of global or viral security events. Resulting in organizations having access to enterprise-level security solutions, regardless of their size or industry.
				</Text>
				<Link
					href="/whitepaper"
					color="--primary"
					font="--lead"
					text-decoration-line="initial"
					hover-text-decoration-line="underline"
					target="_top"
				>
					Read the Whitepaper
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
			<style place={"endOfHead"} rawKey={"64972fbb588b2d0019591baf"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});