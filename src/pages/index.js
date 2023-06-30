import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text, Icon, Strong, Span, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu, SocialMedia } from "@quarkly/components";
import { BsCheck, BsFillAlarmFill, BsBullseye, BsFillPeopleFill } from "react-icons/bs";
import { GoPackage, GoOrganization, GoBroadcast, GoMortarBoard } from "react-icons/go";
import { FaComments, FaAudible, FaRegMoneyBillAlt, FaReact, FaGalacticRepublic, FaHornbill, FaGlobeAmericas } from "react-icons/fa";
import { IoLogoBitcoin, IoMdUnlock, IoIosAperture, IoMdAperture, IoIosBug, IoMdGitCompare } from "react-icons/io";
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
				<Image src="https://uploads.quarkly.io/64972fbb588b2d0019591bb1/images/Truss%20Logo%20Horizontal_Black.png?v=2023-06-30T18:54:59.248Z" display="block" width="20% content-box" max-width="20%" />
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
					Making cyber security easy and affordable
				</Text>
				<Text
					margin="8px 0px 0px 0px"
					font="normal 300 21px/1.5 --fontFamily-sans"
					text-align="center"
					color="--lightD2"
					lg-max-width="720px"
					sm-text-align="left"
				>
					A decentralized security marketplace that connects organizations with respected researchers
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
						<Box display="flex" align-items="center" font="20px sans-serif">
							<Icon
								category="bs"
								icon={BsCheck}
								size="28px"
								color="--red"
								height="35px"
								width="35px"
							/>
							<Text margin="0px 0px 0px 12px" font="normal 300 24px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" color="--light">
								Right-sizing your security protections
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="normal 300 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" color="--lightD2">
							Select the exact security product to fit exactly the right use-case.
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
							<Icon
								category="go"
								icon={GoPackage}
								size="28px"
								color="--red"
								width="35px"
								height="35px"
							/>
							<Text margin="0px 0px 0px 12px" font="normal 300 24px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" color="--light">
								Augmenting security knowledge
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="normal 300 20px/1.5 --fontFamily-sans" color="--lightD2">
							Bolt-on intelligence and remediation products, delivered directly to your current security tools.
						</Text>
					</Box>
				</Box>
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
						<Box display="flex" align-items="center" font="20px sans-serif">
							<Icon
								category="fa"
								icon={FaComments}
								size="28px"
								color="--red"
								width="35px"
								height="35px"
							/>
							<Text margin="0px 0px 0px 12px" font="normal 300 24px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" color="--light">
								Crowdsourced Intelligence
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="normal 300 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" color="--lightD2">
							Detection, remediation, and mitigation knowledge and techniques direct from skilled researchers.
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
							<Icon
								category="fa"
								icon={FaAudible}
								size="28px"
								color="--red"
								width="35px"
								height="35px"
							/>
							<Text margin="0px 0px 0px 12px" font="normal 300 24px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" color="--light">
								Rapid Threat Communication
							</Text>
						</Box>
						<Text margin="16px 0px 0px 0px" font="normal 300 20px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif" color="--lightD2">
							Protect your environment from novel attacks as soon as they are detected.
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="40px 0 10px 0" lg-padding="90px 0 90px 0" sm-padding="45px 0 60px 0" quarkly-title="About-15">
			<Override
				slot="SectionContent"
				flex-direction="row"
				lg-flex-wrap="wrap"
				sm-min-width="280px"
				padding="40px 0px 0px 0px"
			/>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				align-items="flex-start"
				justify-content="space-between"
				lg-width="100%"
				lg-align-items="stretch"
				lg-flex-direction="row"
				lg-justify-content="flex-start"
				md-flex-direction="column"
			>
				<Box
					lg-width="80%"
					lg-display="flex"
					lg-flex-direction="column"
					lg-align-items="flex-start"
					lg-justify-content="flex-end"
					md-width="100%"
					height="100%"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					justify-content="space-around"
				>
					<Text
						margin="0px 0px 12px 0px"
						font="--base"
						text-transform="uppercase"
						color="--red"
						letter-spacing="1px"
					>
						Cyber attacks are increasing
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						font="--headline2"
						color="--dark"
						lg-text-align="left"
						md-padding="0px 0px 0px 0px"
					>
						Medium-sized business are being left behind
					</Text>
					<Text
						margin="0px 0px 24px 0px"
						font="--base"
						color="--greyD2"
						md-text-align="left"
						lg-flex="1 1 0%"
						lg-padding="0px 0px 0px 0px"
						lg-margin="0px 0px 32px 0px"
						sm-margin="0px 0px 28px 0px"
					>
						Medium-sized businesses are the most prominent target for commodity cyber-attacks. Truss can dramatically reduce the cost of quality security products available to these organizations by providing a marketplace where these organizations can quickly and easily implement security solutions developed directly by industry security researchers.
					</Text>
				</Box>
			</Box>
			<Box
				width="80%"
				display="flex"
				justify-content="flex-end"
				lg-width="100%"
				lg-margin="48px 0px 0px 0px"
				lg-flex-direction="column"
				align-items="center"
			>
				<Box position="relative">
					<Image
						src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1200"
						display="block"
						object-fit="cover"
						height="380px"
						width="550px"
						lg-width="100%"
						lg-height="auto"
						lg-margin="8px 0px 0px 0px"
					/>
				</Box>
			</Box>
		</Section>
		<Section padding="0px 0 40px 0" sm-padding="60px 0 60px 0">
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="32px 4%" md-grid-template-columns="1fr">
				<Box align-items="center" justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="go"
						icon={GoOrganization}
						margin="0px 0px 0px 0px"
						color="--dark"
						size="36px"
						width="50px"
						height="50px"
					/>
					<Text margin="0px 0px 11px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Understaffed
					</Text>
					<Text
						margin="0px 0px 12px 0px"
						color="--greyD3"
						font="--base"
						text-align="center"
						flex="1 0 auto"
					>
						Security teams are routinely staffed in response to the threats they face. Truss looks to provide crowdsourced staffing to fill those gaps
					</Text>
				</Box>
				<Box align-items="center" justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaRegMoneyBillAlt}
						margin="0px 0px 0px 0px"
						color="--dark"
						size="36px"
						width="50px"
						height="50px"
					/>
					<Text margin="0px 0px 11px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Underfunded
					</Text>
					<Text
						margin="0px 0px 12px 0px"
						color="--greyD3"
						font="--base"
						text-align="center"
						flex="1 0 auto"
					>
						Security is often seen as a blackhole to throw money at, hoping that security protections are in place to prevent compromise
					</Text>
				</Box>
				<Box align-items="center" justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaReact}
						margin="0px 0px 0 0px"
						color="--dark"
						size="36px"
						height="50px"
						width="50px"
					/>
					<Text margin="0px 0px 11px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Underskilled
					</Text>
					<Text
						margin="0px 0px 12px 0px"
						color="--greyD3"
						font="--base"
						text-align="center"
						flex="1 0 auto"
					>
						Threat intelligence analysts, threat hunters, and red team operators are expensive. Truss crowdsources these skills.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="40px 0 40px 0" background="#EDF2F6" sm-padding="60px 0 60px 0" quarkly-title="DeSec">
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
					Leveraging Decentralized Security
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="--greyD3"
					md-text-align="center"
					text-align="center"
					max-width="700px"
					width="700px"
				>
					Decentralized Security (DeSec) has the potential to disrupt the monopoly held by large organizations over cyber threat intelligence. This democratization of the intelligence ecosystem can lead to more diverse and effective defenses against cyber threats.
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
						Resilience
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						DeSec reduces the reliance on a single point of failure by distributing data across multiple nodes, making it harder for attackers to compromise the entire system.
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
						DeSec provides transparent and auditable records, ensuring the origin and integrity of threat intelligence and increasing trust among participants.
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
						Reduced Cost
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						DeSec leverages a community-driven approach, where participants contribute resources and expertise, reducing the need for extensive in-house security solutions.
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
							Using DeSec eliminates the need for intermediaries, allowing for the direct transfer of CTI between buyers and sellers.
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
							DeSec data is encrypted and distributed across multiple nodes, making it highly resistant to tampering and fraud.
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
							Every participant in the DeSec network can access the same information, creating a transparent and shared ledger.
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
							<Span
								font-weight="300"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								{" "}A DeSec token foundation incentives developers, organizations, and researchers who contribute to the Truss ecosystem.
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
					Where individuals and organizations connect and transact related security products and services like threat intelligence feeds, reporting, security services, and tools that augment in-house security applications, protocols, and infrastructure.
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
					Crowdsourcing Threat Intelligence
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
					Truss is the first cybersecurity platform that directly supports and incentivizes the crowdsourcing of Cyber Threat Intelligence (CTI). By involving and engaging a diverse community of security researchers, ethical hackers, and interested individuals, Truss helps to strengthen global hygiene against novel threats by increasing an organization's access to security "Just-in-Time" security data.
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
								Broader skillset and expertise
							</Strong>
						</Text>
						<Text margin="0px 0px 24px 0px" font="--base" color="--darkL2">
							Engaging a crowd of security experts brings together a wide range of perspectives, experiences, and knowledge, which help identify vulnerabilities and threats.
						</Text>
					</Box>
				</Box>
				<Box display="flex" flex-direction="column" align-items="flex-start" justify-content="space-between">
					<Icon
						category="io"
						icon={IoIosBug}
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
								Rapid Vulnerability Discovery
							</Strong>
						</Text>
						<Text margin="0px 0px 24px 0px" font="--base" color="--darkL2">
							Incentivizing crowds to find vulnerabilities increases the number of eyes, which helps identify vulnerabilities earlier and reduces the window of opportunity for attackers.{" "}
						</Text>
					</Box>
				</Box>
				<Box display="flex" flex-direction="column" align-items="flex-start" justify-content="space-between">
					<Icon
						category="bs"
						icon={BsBullseye}
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
								Cost-Effective Security
							</Strong>
						</Text>
						<Text margin="0px 0px 24px 0px" font="--base" color="--darkL2">
							This distributed model allows organizations to pay only for valid vulnerabilities identified, making crowdsourcing a scalable and cost-efficient way to improve organizational security.
						</Text>
					</Box>
				</Box>
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
						category="bs"
						icon={BsFillPeopleFill}
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
								Builds Trust
							</Strong>
						</Text>
						<Text margin="0px 0px 24px 0px" font="--base" color="--darkL2">
							Engaging with the security community builds trust and enhances the organization's reputation among both security researchers and the broader public.
						</Text>
					</Box>
				</Box>
				<Box display="flex" flex-direction="column" align-items="flex-start" justify-content="space-between">
					<Icon
						category="go"
						icon={GoMortarBoard}
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
								Knowledge Transfer
							</Strong>
						</Text>
						<Text margin="0px 0px 24px 0px" font="--base" color="--darkL2">
							By fostering knowledge-sharing and education within the community, organizations can gain insights into emerging trends, techniques, and best practices in cybersecurity.
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
								Continuous Monitoring
							</Strong>
						</Text>
						<Text margin="0px 0px 24px 0px" font="--base" color="--darkL2">
							Crowdsourcing helps identify new vulnerabilities as they emerge. Providing real-time feedback on potential threats, Helps organizations stay ahead of evolving security risks and emerging threats.
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