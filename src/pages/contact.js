import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import { MdLocalPhone, MdExtension, MdImportantDevices } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contact"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="80px 0 90px 0" background="--color-light" quarkly-title="Contacts-2">
			<Override slot="SectionContent" lg-align-items="center" />
			<Text
				lg-padding="0px 0px 0px 0px"
				sm-font="normal 700 36px/1.2 --fontFamily-sans"
				margin="0px 0px 18px 0px"
				font="normal 600 42px/1.2 --fontFamily-sans"
				color="--darkL1"
				text-align="center"
				padding="0px 0px 0px 0px"
				lg-width="100%"
				lg-margin="0px 0px 25px 0px"
				lg-max-width="720px"
				md-padding="0px 20px 0px 20px"
				sm-text-align="left"
				sm-padding="0px 10px 0px 10px"
			>
				Contact
			</Text>
			<Text
				margin="0px 20% 50px 20%"
				font="normal 300 18px/1.5 --fontFamily-sansHelvetica"
				lg-margin="0px 0 50px 0px"
				text-align="center"
				sm-margin="0px 0 35px 0px"
				lg-max-width="720px"
				md-padding="0px 20px 0px 20px"
				sm-text-align="left"
				sm-padding="0px 10px 0px 10px"
			>
				Our highly trained support staff are available 24/7 to answer any questions or concerns you may have, and we work tirelessly to resolve any issues as quickly as possible.
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="flex"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="25px 25px"
				md-grid-template-columns="1fr"
				flex-direction="column"
				align-items="center"
				lg-align-items="flex-start"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					padding="25px 20px 25px 20px"
					border-color="rgba(74, 74, 108, 0.4)"
					border-radius="25px"
					lg-flex-direction="column"
					width="600px"
					sm-padding="15px 10px 15px 10px"
					md-width="100%"
				>
					<Icon
						category="md"
						icon={MdLocalPhone}
						size="44px"
						color="--light"
						margin="0px 25px 0px 0px"
						lg-margin="0px 0 28px 0px"
						background="#561dc6"
						padding="10px 10px 10px 10px"
						border-radius="4px"
						sm-margin="0px 0 18px 0px"
					/>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 12px 0px" color="--darkL1" font="normal 500 22px/1.2 --fontFamily-sans">
							Sales
						</Text>
						<Text margin="0px 0px 20px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="#3e4148">
							Whether you need assistance with product information, technical support, or billing inquiries, our team is here to help.
						</Text>
						<Link href="#" color="#561dc6" font="normal 500 16px/1.5 --fontFamily-sans" text-decoration-line="initial">
							Contact Us
						</Link>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					padding="25px 20px 25px 20px"
					border-color="rgba(74, 74, 108, 0.4)"
					border-radius="25px"
					lg-flex-direction="column"
					width="600px"
					sm-padding="15px 10px 15px 10px"
					md-width="100%"
				>
					<Icon
						category="md"
						icon={MdExtension}
						size="44px"
						color="--light"
						margin="0px 25px 0px 0px"
						lg-margin="0px 0 28px 0px"
						background="#561dc6"
						padding="10px 10px 10px 10px"
						border-radius="4px"
						sm-margin="0px 0 18px 0px"
					/>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 12px 0px" color="--darkL1" font="normal 500 22px/1.2 --fontFamily-sans">
							Technical Support
						</Text>
						<Text margin="0px 0px 20px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="#3e4148">
							Our highly trained support staff are available 24/7 to answer any questions or concerns you may have, and we work tirelessly to resolve any issues as quickly as possible.
						</Text>
						<Link href="#" color="#561dc6" font="normal 500 16px/1.5 --fontFamily-sans" text-decoration-line="initial">
							Contact Us
						</Link>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					padding="25px 20px 25px 20px"
					border-color="rgba(74, 74, 108, 0.4)"
					border-radius="25px"
					lg-flex-direction="column"
					width="600px"
					sm-padding="15px 10px 15px 10px"
					md-width="100%"
				>
					<Icon
						category="md"
						icon={MdImportantDevices}
						size="44px"
						color="--light"
						margin="0px 25px 0px 0px"
						lg-margin="0px 0 28px 0px"
						background="#561dc6"
						padding="10px 10px 10px 10px"
						border-radius="4px"
						sm-margin="0px 0 18px 0px"
					/>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 12px 0px" color="--darkL1" font="normal 500 22px/1.2 --fontFamily-sans">
							Media
						</Text>
						<Text margin="0px 0px 20px 0px" font="normal 300 17px/1.5 --fontFamily-sansHelvetica" color="#3e4148">
							We understand the importance of timely and effective communication, and we strive to ensure that each interaction with our team is a positive experience.{" "}
						</Text>
						<Link href="#" color="#561dc6" font="normal 500 16px/1.5 --fontFamily-sans" text-decoration-line="initial">
							Contact Us
						</Link>
					</Box>
				</Box>
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
			<style place={"endOfHead"} rawKey={"648b58158bd7e60018594e7b"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});