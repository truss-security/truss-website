import React from "react";
import theme from "theme";
import { Theme, Link, Text, Image, Box, LinkBox, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"blog1"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Truss%20Logo%20IconOnly_BWG.png?v=2023-06-15T22:19:54.100Z"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="90px 0 100px 0" quarkly-title="News/Streams/Blog-3">
			<Text margin="0px 0px 15px 0px" font="normal 600 42px/1.2 --fontFamily-sans">
				From the blog
			</Text>
			<Text margin="0px 0px 60px 0px" font="--lead" color="#626970">
				There are recent articles in this blog
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="block"
				grid-template-columns="repeat(2, 1fr)"
				grid-gap="0 80px"
				lg-grid-gap="0 50px"
				md-grid-template-columns="1fr"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					margin="0px 0px 60px 0px"
					md-flex-direction="column"
				>
					<Image
						src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
						display="block"
						width="35%"
						object-fit="cover"
						border-radius="25px"
						margin="0px 50px 0px 0px"
						height="350px"
						md-width="100%"
						md-margin="0px 50px 35px 0px"
					/>
					<Box
						min-width="100px"
						min-height="100px"
						md-margin="0px 0px 30px 0px"
						margin="0px 0px 0 0px"
						width="65%"
						display="flex"
						flex-direction="column"
						justify-content="space-between"
						md-width="100%"
						md-justify-content="flex-start"
					>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0px 0px 10px 0px"
						>
							<Text margin="0px 30px 10px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#626970">
								May 20, 2022
							</Text>
							<Text
								margin="0px 0px 10px 0px"
								font="normal 400 16px/1.5 --fontFamily-sansHelvetica"
								color="#626970"
								padding="3px 10px 3px 10px"
								background="--color-lightD1"
								border-radius="15px"
							>
								Marketing
							</Text>
						</Box>
						<LinkBox align-items="flex-start" margin="0px 0px 15px 0px" href="/">
							<Text margin="0px 0px 0 0px" font="normal 600 24px/1.2 --fontFamily-sans">
								The future of it: trends to watch in 2021 and beyond
							</Text>
						</LinkBox>
						<Text
							margin="0px 0px 0 0px"
							font="normal 300 18px/1.5 --fontFamily-sansHelvetica"
							lg-margin="0px 0px 40px 0px"
							color="#626970"
							md-margin="0px 0px 25px 0px"
						>
							As technology continues to evolve at a rapid pace, the future of IT is an exciting and constantly evolving landscape. In this article, we explore some of the key trends that are shaping the future of IT, including artificial intelligence, cybersecurity, cloud computing, and more.{"\n "}
						</Text>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							margin="30px 0px 0px 0px"
							align-items="center"
							border-color="--color-lightD2"
							padding="30px 0px 0px 0px"
							border-width="1px 0 0 0"
							border-style="solid"
						>
							<Image
								src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/medium-shot-man-with-freckles.jpg?v=2023-04-20T19:59:54.577Z"
								display="block"
								width="50px"
								height="50px"
								object-fit="cover"
								border-radius="50%"
							/>
							<Box min-width="10px" min-height="10px">
								<Text margin="0px 0 0px 20px" font="normal 500 16px/1.5 --fontFamily-sansHelvetica" sm-font="normal 500 18px/1.5 --fontFamily-sans">
									Alex Foster
								</Text>
								<Text margin="0px 0 0px 20px" font="normal 500 16px/1.5 --fontFamily-sansHelvetica" sm-font="normal 500 18px/1.5 --fontFamily-sans" color="#626970">
									Co-Founder
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					margin="0px 0px 60px 0px"
					md-flex-direction="column"
				>
					<Image
						src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
						display="block"
						width="35%"
						object-fit="cover"
						border-radius="25px"
						margin="0px 50px 0px 0px"
						height="350px"
						md-width="100%"
						md-margin="0px 50px 35px 0px"
					/>
					<Box
						min-width="100px"
						min-height="100px"
						md-margin="0px 0px 30px 0px"
						margin="0px 0px 0 0px"
						width="65%"
						display="flex"
						flex-direction="column"
						justify-content="space-between"
						md-width="100%"
					>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0px 0px 10px 0px"
						>
							<Text margin="0px 30px 10px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#626970">
								Jule 3, 2022
							</Text>
							<Text
								margin="0px 0px 10px 0px"
								font="normal 400 16px/1.5 --fontFamily-sansHelvetica"
								color="#626970"
								padding="3px 10px 3px 10px"
								background="--color-lightD1"
								border-radius="15px"
							>
								Sales
							</Text>
						</Box>
						<LinkBox align-items="flex-start" margin="0px 0px 15px 0px" href="/">
							<Text margin="0px 0px 0 0px" font="normal 600 24px/1.2 --fontFamily-sans">
								Cybersecurity threats and solutions for businesses
							</Text>
						</LinkBox>
						<Text
							margin="0px 0px 0 0px"
							font="normal 300 18px/1.5 --fontFamily-sansHelvetica"
							lg-margin="0px 0px 40px 0px"
							color="#626970"
							md-margin="0px 0px 25px 0px"
						>
							As technology continues to advance, cybersecurity threats are becoming increasingly sophisticated and frequent. Businesses must take steps to protect their data and systems from cyber attacks. Here are some of the most common cybersecurity threats facing businesses today, as well as strategies for preventing and responding to these threats...
							<br />
							{" \n "}
						</Text>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							margin="30px 0px 0px 0px"
							align-items="center"
							border-color="--color-lightD2"
							padding="30px 0px 0px 0px"
							border-width="1px 0 0 0"
							border-style="solid"
						>
							<Image
								src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/beautiful-woman-with-curly-blonde-hair-smiling.jpg?v=2023-04-20T19:59:19.648Z"
								display="block"
								width="50px"
								height="50px"
								object-fit="cover"
								border-radius="50%"
							/>
							<Box min-width="10px" min-height="10px">
								<Text margin="0px 0 0px 20px" font="normal 500 16px/1.5 --fontFamily-sansHelvetica" sm-font="normal 500 18px/1.5 --fontFamily-sans">
									Lindsay White
								</Text>
								<Text margin="0px 0 0px 20px" font="normal 500 16px/1.5 --fontFamily-sansHelvetica" sm-font="normal 500 18px/1.5 --fontFamily-sans" color="#626970">
									Director of product
								</Text>
							</Box>
						</Box>
					</Box>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					margin="0px 0px 0 0px"
					md-flex-direction="column"
				>
					<Image
						src="https://images.unsplash.com/photo-1573495612890-430e48b164df?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
						display="block"
						width="35%"
						object-fit="cover"
						border-radius="25px"
						margin="0px 50px 0px 0px"
						height="350px"
						md-width="100%"
						md-margin="0px 50px 35px 0px"
					/>
					<Box
						min-width="100px"
						min-height="100px"
						md-margin="0px 0px 50px 0px"
						margin="0px 0px 0 0px"
						width="65%"
						display="flex"
						flex-direction="column"
						justify-content="space-between"
						md-width="100%"
					>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							align-items="center"
							margin="0px 0px 10px 0px"
						>
							<Text margin="0px 30px 10px 0px" font="normal 400 16px/1.5 --fontFamily-sansHelvetica" color="#626970">
								Jule 7, 2022
							</Text>
							<Text
								margin="0px 0px 10px 0px"
								font="normal 400 16px/1.5 --fontFamily-sansHelvetica"
								color="#626970"
								padding="3px 10px 3px 10px"
								background="--color-lightD1"
								border-radius="15px"
							>
								Marketing
							</Text>
						</Box>
						<LinkBox align-items="flex-start" margin="0px 0px 15px 0px" href="/">
							<Text margin="0px 0px 0 0px" font="normal 600 24px/1.2 --fontFamily-sans">
								Artificial intelligence and machine learning: applications in it
							</Text>
						</LinkBox>
						<Text
							margin="0px 0px 0 0px"
							font="normal 300 18px/1.5 --fontFamily-sansHelvetica"
							lg-margin="0px 0px 40px 0px"
							color="#626970"
							md-margin="0px 0px 25px 0px"
						>
							Artificial Intelligence (AI) and Machine Learning (ML) are two technologies that are revolutionizing the way businesses approach IT security. Here are some of the ways AI and ML are being used to enhance cybersecurity...
							<br />
							{" \n "}
						</Text>
						<Box
							min-width="10px"
							min-height="10px"
							display="flex"
							margin="30px 0px 0px 0px"
							align-items="center"
							border-color="--color-lightD2"
							padding="30px 0px 0px 0px"
							border-width="1px 0 0 0"
							border-style="solid"
						>
							<Image
								src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/close-up-beautiful-woman-portrait.jpg?v=2023-04-20T19:52:22.143Z"
								display="block"
								width="50px"
								height="50px"
								object-fit="cover"
								border-radius="50%"
							/>
							<Box min-width="10px" min-height="10px">
								<Text margin="0px 0 0px 20px" font="normal 500 16px/1.5 --fontFamily-sansHelvetica" sm-font="normal 500 18px/1.5 --fontFamily-sans">
									Maria Williams
								</Text>
								<Text margin="0px 0 0px 20px" font="normal 500 16px/1.5 --fontFamily-sansHelvetica" sm-font="normal 500 18px/1.5 --fontFamily-sans" color="#626970">
									Co-Founder
								</Text>
							</Box>
						</Box>
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