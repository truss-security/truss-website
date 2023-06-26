import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, LinkBox, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { BsArrowLeftShort } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"coming-soon"} />
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
		<Section
			padding="150px 0 150px 0"
			min-height="100vh"
			background="linear-gradient(180deg,--color-light 0%,transparent 86.7%) 0 0 no-repeat,rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1530375323520-248ebdaa967f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /cover no-repeat scroll padding-box"
			lg-padding="90px 0 90px 0"
			quarkly-title="Coming Soon"
		>
			<Override slot="SectionContent" max-width="1220px" justify-content="flex-start" />
			<Box align-items="center" display="flex" justify-content="center" flex-direction="column">
				<Text
					color="--dark"
					margin="8px 0px 16px 0px"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					font="--headline1"
					letter-spacing="-0.025em"
					lg-margin="0px 0px 16px 0px"
				>
					Coming Soon
				</Text>
				<Text
					lg-width="80%"
					font="--lead"
					color="--dark"
					margin="0px 0px 36px 0px"
					text-align="center"
					lg-margin="0px 0px 24px 0px"
				>
					This page will be delivered soon
				</Text>
				<LinkBox
					flex-direction="row"
					padding="12px 8px 12px 8px"
					transition="--opacityOut"
					hover-opacity="0.7"
					lg-margin="0px 0px 20px 0px"
					href="/index"
				>
					<Icon category="bs" icon={BsArrowLeftShort} size="24px" margin="4px 4px 0px 0px" />
					<Text margin="0px 0px 0px 0px" font="--lead" color="--dark">
						Back to home
					</Text>
				</LinkBox>
				<LinkBox
					flex-direction="row"
					padding="12px 8px 12px 8px"
					transition="--opacityOut"
					hover-opacity="0.7"
					lg-margin="0px 0px 20px 0px"
					href="/whitepaper"
				>
					<Icon category="bs" icon={BsArrowLeftShort} size="24px" margin="4px 4px 0px 0px" />
					<Text margin="0px 0px 0px 0px" font="--lead" color="--dark">
						To the Whitepaper
					</Text>
				</LinkBox>
			</Box>
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