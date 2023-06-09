import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
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
			min-height="100vh"
			background="url(https://images.unsplash.com/photo-1610337673044-720471f83677?auto=format&fit=crop&w=1500&q=80) center center/cover no-repeat"
			md-background="url(https://images.unsplash.com/photo-1610337673044-720471f83677?auto=format&fit=crop&w=800&q=80) center center/cover no-repeat"
			padding="88px 0 88px 0"
			quarkly-title="404-7"
		>
			<Override slot="SectionContent" justify-content="center" max-width="1220px" align-items="center" />
			<Box
				border-radius="24px"
				display="flex"
				justify-content="center"
				padding="56px 106px 64px 106px"
				background="--color-dark"
				max-width="600px"
				sm-padding="26px 30px 34px 30px"
				align-items="center"
				flex-direction="column"
			>
				<Text font="--headline1" color="--light" margin="0px 0px 16px 0px" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
					404
				</Text>
				<Text
					md-width="100%"
					font="--lead"
					color="--lightD1"
					margin="0px 0px 40px 0px"
					text-align="center"
					width="100%"
					lg-width="80%"
				>
					The page you are looking for is not available or doesn’t belong to this website!
				</Text>
				<Link
					font="--lead"
					padding="12px 24px 12px 24px"
					border-radius="8px"
					background="--color-light"
					href="/index"
					text-decoration-line="initial"
					color="--dark"
				>
					Go Back to Home
				</Link>
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