import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Section, Text, Strong, Em, Span, List } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Menu } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"whitepaper"} />
		<Helmet>
			<title>
				Truss Security
			</title>
			<meta name={"description"} content={"The Truss Website and Whitepaper layout the primary mission and focus of the Truss Protocol and Truss Marketplace through the establishment of a decentralized security platform."} />
			<meta property={"og:title"} content={"Truss"} />
			<meta property={"og:description"} content={"Truss Security establishes a decentralized security platform."} />
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
				<Image src="https://uploads.quarkly.io/64972fbb588b2d0019591bb1/images/Truss%20Logo%20Horizontal_Black.png?v=2023-06-30T18:54:59.248Z" display="block" max-width="20%" />
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
		<Section padding="80px 0 80px 0" quarkly-title="Whitepaper">
			<Override
				slot="SectionContent"
				padding="0px 150px 0px 0px"
				lg-padding="0px 0 0px 0px"
				flex="0 1 auto"
				order="0"
				display="flex"
			/>
			<Text margin="0px 0px 10px 0px" font="normal 400 18px/1.5 --fontFamily-sans" color="#5d20a9" max-width="640px">
				Whitepaper
			</Text>
			<Text margin="0px 0px 30px 0px" font="normal 600 42px/1.2 --fontFamily-sans">
				Truss - A Decentralized Security Ecosystem
			</Text>
			<Text margin="0px 0px 20px 0px" font="--headline3" align-self="flex-start">
				Abstract
			</Text>
			<Text margin="0px 0px 25px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				It is rare when something fundamentally alters not only how we interact with the world around us but also with each other. The personal computer, the cellphone, and 5G wireless communication are examples of how technology transformed the physical mediums we use to communicate and send information to each other. Blockchain technology, on the other hand, sets itself apart from these physical information mediums by transforming how we establish trust in information. It tackles profound questions surrounding our trust in the information we consume. It addresses concerns about consensus on the authenticity of specific events. It enables us to provide irrefutable proof of the occurrence of a particular event. In this remarkable way, blockchain paves the way for a paradigm shift in how we perceive and validate information, ushering in a new era of trust and transparency.
				<br />
				<br />
				Blockchain up to this point has been largely focused on answering questions of trust from a financial perspective, as well as leveraging the technology to enhance governance, privacy, and multi-signature authorization. In each use case, cryptologic functions are used to assert, without question, that a particular set of events are indeed true. This financial use case leads to the logical next step of applying blockchain technology in the information security industry. Blockchain operations share many parallels with security operations, including redundancy, transparency, privacy, and authentication. These fundamental aspects are deeply ingrained in both fields. This convergence prompts us to explore three critical questions:
				<ol>
					<li>
					Can we use the strengths of blockchain to store and provide security event data?
					</li>
					<li>
					Can this include data developed and curated by a decentralized network of researchers to achieve validation or consensus?
					</li>
					<li>
					Can we enable this security data to be sent directly to consumers in real-time to protect them from novel and viral threats?
					</li>
				</ol>
				We envision a world where peer-to-peer (P2P) communication of malware signatures, malicious Command and Control (C2) infrastructure, threat actor tactics, techniques, and procedures (TTPs), and security tools are streamed between the developer and the recipient. Where the transmission of security data is processed, purchased, and integrated in real time via smart contract automation. In such a world, when a threat actor launches a novel attack, within minutes every organization in the world has the security data required to prevent this attack from impacting their environment. To achieve this goal, we propose the development of a Decentralized Security (DeSec) global cyber immune system designed to combat the viral infections of cyber attacks.
				<br />
				<br />
				This whitepaper presents a decentralized approach to providing relevant, simple, and economical security data. The concepts listed here present a new way to deliver, purchase, and retrieve security data that directly supports the research of and prevention of cyber attacks across the globe. Information security practitioners acknowledge the decentralized nature of attackers and how decentralized attack patterns present a technological and economic challenge to providing timely, actionable security data for organizations wanting to protect themselves. With this paper, we propose an alternative to centralized security vendors, one that takes a decentralized approach to combating cyber attacks.
				<br />
				<br />
				Thanks,
				<br />
				The Truss Security Team
			</Text>
			<Text margin="0px 0px 20px 0px" font="--headline3">
				I. Cybersecurity Ecosystem
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					Cybersecurity Market{" "}
					<br />
				</Strong>
				<br />
				Cybercrime has been called a pandemic [
				<Link
					href="https://www.cyberark.com/resources/blog/pandemic-cyber-crime-by-the-numbers"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					14
				</Link>
				] and criminal cyber operations have evolved into global industries. The leading example is the ransomware underground which collected more than $20 Billion USD globally in 2020 alone [
				<Link
					href="https://purplesec.us/resources/cyber-security-statistics/#Ransomware"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					15
				</Link>
				] and ransomware demands increased by 144% in 2021 [
				<Link
					href="https://unit42.paloaltonetworks.com/2022-ransomware-threat-report-highlights/"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					20
				</Link>
				]. Billions of dollars in ransomware payments have led to advancements in the development and distribution of ransomware binaries resulting in a growth of young, malicious, yet entrepreneurial, mindsets. Furthermore, because of the potential for large payoffs, more competition is entering the field. Business Email Compromise (BEC) is considered to be the next malicious cyber attack vector. Reports [
				<Link
					href="https://abnormalsecurity.com/blog/bec-attacks-increasing-new-research-shows"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					1
				</Link>
				] show an uptick of nearly 84% in BEC attacks with the costs for a compromise totaling more than $7 Billion USD in potential losses [
				<Link
					href="https://www.darkreading.com/threat-intelligence/cybercriminals-see-allure-bec-attacks-ransomware"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					10
				</Link>
				]. The criminal underground is a big business supported by a robust client base and large underground marketplaces. It is clear that cyber attacks have become serious pandemic threats to our modern society.
				<br />
				<br />
				Security vendors are endeavoring to prevent and disrupt criminal cyber operations. They are working to develop detection and prevention mechanisms to ensure that organizations protected from the worst of these cyber attacks. This has resulted in big business. The security industry is a $119 Billion dollar industry [
				<Link
					href="https://www.grandviewresearch.com/industry-analysis/security-market"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					17
				</Link>
				], has an expected growth rate of 8%, and employs more than 3.5 million people [
				<Link
					href="https://cybersecurityventures.com/jobs/"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					4
				</Link>
				]. Every year cutting-edge technologies are showcased at trade shows and conferences, highlighting technologies designed to detect and prevent the latest attack techniques. The battle between attackers and defenders has never looked quite as intense as it does today.
				<br />
				<br />
				While the use of Artificial Intelligence (AI) holds promise for combating cyber attacks, it is only one of many responses that will be required to fight the pandemic. Reports show that a fully deployed AI learning model is only able to reduce the total dwell time of an attacker, post-breach, by 28 days [
				<Link
					href="https://www.ibm.com/reports/data-breach"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					3
				</Link>
				]. AI thus reduces detection and remediation timing but at a much higher cost of operation.{" "}
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				/>
				<Strong font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
					Market Failure
					<br />
				</Strong>
				<br />
				Cyber threat intelligence (CTI) is the lifeblood of the cybersecurity defense ecosystem. Threat intelligence is any information related to a threat that might help an organization proactively protect itself against a perceived threat or to detect the activities of a threat actor. Major types of threat intelligence include indicators, tactics, techniques, and procedures (TTPs), security alerts, threat intelligence reports, and tool configurations. Security operations rely on accurate and timely threat information to facilitate the monitoring of threats and to improve their defenses.
				<br />
				<br />
				There are three requirements that must be met by security platforms to allow security operations to effectively respond to incidents. First, security platforms must deliver relevant threat intelligence. Relevant threat information is information that is both timely, trusted, and actionable. Failure to implement security measures in a timely manner can result in missed or negative alerting. In addition, organizations must rely on trusted threat data to avoid wasting resources tracking false indicators. There are many threat intelligence services that claim to be legitimate. Organizations should only use threat intelligence that has been reviewed and verified by trusted security professionals prior to their integration into security platforms. Second, security data must be simple. Organizations must be able to easily identify viral indicators and implement straightforward security measures in response to active cyber attacks. Third, security products must be economical. Budget constraints affect every organization and only through the reduction of production costs can organizations afford to bring in the latest security technology to protect their environments.
				<br />
				<br />
				A balance among all three of these areas is required to ensure a well-rounded security infrastructure. We call this the Trilemma.
			</Text>
			<Image
				src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%201%20-%20The%20Trilemma.png?v=2023-06-21T04:26:39.355Z"
				display="block"
				max-width="700px"
				text-align="center"
				align-self="center"
			/>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 1. The Trilemma: Security data must be relevant, simple, and economical.
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				Unfortunately, 83% of global organizations experienced more than one data breach in 2022 [
				<Link
					href="https://hbr.org/2023/05/the-devastating-business-impacts-of-a-cyber-breach"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					9
				</Link>
				], with the average cost of a data breach reaching $4.35M USD [
				<Link
					href="https://www.ibm.com/reports/data-breach"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					3
				</Link>
				]. Small and medium-sized businesses simply cannot be expected to survive even one data breach. Now more than ever medium-sized businesses need security solutions that allow them to access relevant, simple, and economical security products. There are three scenarios that accurately demonstrate this dilemma:
				<br />
				<ul>
					<li>
					<b>Scenario #1 -</b> Commercial security vendors can provide relevant, timely, and actionable threat information that is simple to understand and implement. However, this oftentimes only comes with the purchase of premier security offerings, pushing these services out of reach for most mid-level organizations.
					</li>
					<li>
					<b>Scenario #2 -</b> Open source products such as MISP, OpenCTI, and many security GitHub repository tools can provide timely and actionable threat information that will assist security operations. Since they are free, they are also very economical to implement. However, these tools can be difficult to use, time-consuming to maintain, and a dedicated team with advanced skills is required to implement them. Most mid-level organizations cannot provide this level of support.
					<br />
					</li>
					<li>
					<b>Scenario #3 -</b> Free threat intelligence lists can be simple to integrate into most security tools reducing the burden on security personnel. But, many of the free threat intelligence lists contain old and irrelevant data, which may or may not have been verified by reputable sources. This security data thus delivers a false sense of security.
					</li>
				</ul>
				<br />
				The high and urgent demand for threat intelligence by global mid-sized organizations is not being met by today's cybersecurity defense providers. As noted above there are traditionally two types of suppliers for security products: centralized commercial security providers and decentralized open source security researchers. The security products from centralized providers are high quality and easy to integrate, but they are oftentimes expensive and inaccessible to most organizations. The security products from decentralized security researchers are basically free, but they come from unverified sources, suffer from variable quality, and can be complex to integrate [
				<Link
					href="https://www.usenix.org/legacy/publications/library/proceedings/lisa99/full_papers/roesch/roesch.pdf"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					16
				</Link>
				].
				<br />
				<br />
				The main problem facing the majority of organizations, and the IT professionals providing security services to these organizations, is that threat intelligence is time-consuming to collect and difficult to analyze, and security products are oftentimes complex to develop and can be difficult to deploy. As a result, a large number of middlemen–the commercial security providers–have stepped in to create and deliver them. These security vendors maintain the resources to hire expert researchers and analysts to deliver leading-edge security analytics and best-in-class solutions. Consequently, in order to remain on the leading edge of a growing threat landscape, the vendor is required to collect larger quantities of security data, hire more and more analysts to facilitate the analysis of the data and hire engineers to develop the security products required to protect their customer base. This directly leads to the vendors charging a premium for their integration services, which prices out the small and medium-sized businesses that would greatly benefit from the advanced security analysis.
			</Text>
			<Text margin="0px 0px 20px 0px" font="--headline3">
				II. Decentralized Security
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				Humans have adapted to survive in nearly every inhospitable climate on this planet, including those which harbor some of the most deadly diseases and bacteria. In recent history, medical advancements like immunization and proper sanitation have increased human longevity. We owe our continued survival to one of the most intriguing and significant advancements in evolutionary biology: the immune system.
				<br />
				<br />
				The immune system is nature's way of dealing with infections and diseases that enter the human body. It grows and adapts as we are exposed to foreign bodies like fungi, toxins, viruses, and bacteria, also called pathogens. The immune system maintains a network of sensors that sound the alarm when a pathogen is detected and in response creates antigens that our bodies remember forever to ensure they can quickly fight the infection should it return. Remarkably, instead of combatting the infection locally, the immune system provides the antigens to the entire body. This sharing of remediation information prevents a systemic infection from taking place within the body.
				<br />
				<br />
				Today's modern and interconnected world is not all that dissimilar from a biological system. There are independent and diverse organizations and networks working in unison with the larger global society to maintain, support, and develop not only our modern lifestyle but the very ability to move forward and evolve. Arguably our society is still a nation-centric one, but we have begun to build global defense agencies such as Interpol and the World Health Organization which are capable of spreading information internationally regarding terrorism and pandemic-level events. However, today, there is a plague that is wreaking havoc across our interconnected world. A global pandemic that we have not been able to successfully combat or even significantly hamper. This pandemic is the Cyber Attack.
				<br />
				<br />
				In a world where we can live stream any event to billions of users around the world, why do we still find ourselves in a situation where a cyber campaign can use the same type of attack to compromise hundreds of organizations over the course of several months and not be stopped? Is it not possible to build a global antibody armored against an attack's indicators of compromise (IOC) and deliver this to all organizations immediately? This type of global network immune system would undoubtedly protect potential victims, prevent criminal organizations from making large sums of money, and reduce the global threat of cyber attack pandemics.
				<br />
				<br />
				Similar to how the immune system is able to globally deploy antigens to protect the whole body from a pathogen, the security industry needs to build a global network immune system to ensure that security infections taking place in one enterprise are rapidly disseminated to protect the global ecosystem. We should not live in a world where a single ransomware variant, or pandemic, is only fought locally and allowed to persist successfully for several months around the globe. Nor should we live in a world where 53% of all security breaches are not detected [
				<Link href="https://www.mandiant.com/resources/security-effectiveness-2020-deep-dive-into-cyber-security-reality">
					11
				</Link>
				], or where the average dwell time of an attacker (the time from the initial breach until detection) is 207 days [
				<Link href="https://tales-from-a-security-professional.com/what-are-the-real-costs-of-a-security-incident-dec0d090281f">
					7
				</Link>
				] plus another 70 days to contain the breach.
				<br />
				<br />
				What is needed is a new, faster system for detecting, transporting, and deploying security-focused antigens to all global defenses to ensure they have correct and timely information to fight the infection. This system must not only respond to a singular infection but must also build the immunity response antigens to combat cyber infections on a global scale.
				<br />
				<br />
				By pulling from nature, we are presented with a method to prevent wide-scale infections. Imagine, instead of a pathogen like a virus or bacteria, we are presented with a threat actor who has compromised a network. Imagine also, similar to how the immune system responds to a virus, the cyber immune system responds to the threat by deploying cyber antigens throughout the global network of interconnected organizations thus preventing infections in those networks. With the advancement of blockchain technology, it is now possible to achieve this imagined scenario: the creation of a global Decentralized  Security (DeSec) cyber immune system.{" "}
				</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					Truss Ecosystem
					<br />
				</Strong>
				<br />
				Truss is a platform that facilitates the development of a global Decentralized Security (DeSec) cyber immune system. Figure 2 shows the three main components of the Truss ecosystem: 1) On the right are the organizations that are the front line of attack and are often the first to recognize new attacks; 2) on the left are the researchers who analyze organizational attack data and create the products that enable defenses against cyber attacks; and 3) in the middle is the marketplace which serves as the hub for sharing data, creating security responses, and incentivizing participation from the community of researchers and organizations.
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%202%20-%20Truss%20ecosystem.png?v=2023-06-21T04:33:40.619Z" display="block" max-width="700px" align-self="center" />
			<Text
				margin="0px 0px 45px 0px"
				font="normal 300 18px/1.5 --fontFamily-sans"
				color="#505257"
				align-self="auto"
				text-align="center"
			>
				<Em>
					Figure 2. Truss ecosystem
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				The image illustrates how independent organizations can connect with security researchers through a marketplace to transfer security-related information. The marketplace provides an avenue for researchers to post their research in a method that enables a wider reach to a larger audience. In addition, interested organizations are able to connect to the marketplace to find security research information allowing them to better protect their own organizations. They are connected with researchers providing this information and are able to directly purchase this information from the researcher.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					Truss Organizations
					<br />
				</Strong>
				<br />
				At the heart of the global cyber immune system is a distributed network of independent security organizations or individuals (hereby referred to as Truss entities). Within this network, each Truss entity can use the security information generated from the environments of other Truss entities to better secure their own environments and build security mitigations in response to global cyber pandemics automatically and in real-time.
				<br />
				<br />
				As illustrated in Figure 3, an organization records the security events taking place within its cloud environment. Should malware within a given container be identified, a list of the malware's IOCs is shared across the Truss network.
			</Text>
			<Image
				src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%203%20-%20Interconnect%20Security%20Blockchain%20Flow.png?v=2023-06-21T04:34:40.818Z"
				display="block"
				text-align="center"
				align-self="center"
				max-width="500px"
			/>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 3. Interconnected Security Blockchain Flow
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				A Truss network provides the foundation for automating the detection and dissemination of a security event that occurs in a single environment. It does so by sharing this event with the global network in real time. By using a public and transparent blockchain to maintain the cryptologic proof that a security event took place within a given environment, each entity in the Truss network maintains a communication pathway with all other entities in the network to facilitate the sharing of security incident information. Each subsequent investigation of an incident can result in the creation, distribution, and implementation of tailored security products that can be used to detect any number of cyber attacks across any number of networks. Identified attack data can then be shared instantly. This results in the faster transfer of security-related events and information which creates a more secure global ecosystem.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					Truss Researchers
					<br />
				</Strong>
				<br />
				Truss security researchers are the second pillar of the Truss ecosystem. Researchers create threat intelligence by collecting, analyzing, and interpreting data related to potential or existing cyber threats. Independent security researchers spend a considerable amount of time contributing cyber threat intelligence (CTI) to shared systems. In addition, security researchers working for centralized organizations produce large amounts of high-quality CTI for their customers. But, it is evident that the cyber security data needs of millions of organizations are not being met. What is needed is a way to tap into the expertise and effort of a large number of independent security researchers who are not currently contributing to the broader cyber-defense ecosystem.
				<br />
				<br />
				The Truss platform provides an avenue that enables independent security researchers to get compensated for sharing CTI. Researchers who uncover cyber threats and publish their findings are able to cryptographically sign their CTI and post it to the blockchain. Organizations subscribing to receive CTI each pay a fee to access the data and a portion of the fee goes back to the researcher. By enabling this point-to-point connection between independent researchers and organizations, the Truss ecosystem promotes a positive feedback loop that encourages more researchers to contribute, which then encourages more organizations to participate. The ultimate goal is to untether security data production from centralized organizations and unleash the potential of the decentralized community of researchers.
				<br />
				<br />
				In addition to sharing security event information directly, the Truss platform also provides an avenue for security practitioners to investigate and hunt for security events across the global Truss network, effectively removing enterprise-focused security vendors as the sole proprietors of large-scale security-related information. As Figure 4 illustrates, researchers will have the opportunity to request query capabilities into select organizations in order to review the security logs from that organization.{" "}
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%204%20-%20Researchers%20investigation%20into%20third-party%20events.png?v=2023-06-21T04:35:24.096Z" display="block" max-width="700px" align-self="center" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 4. Researchers' investigation into third-party events
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				Organizations will be incentivized to allow researchers to review their security logs through a tokenomic-based exchange model. The more data an organization allows a researcher to view, the more likely that the researcher will produce a security product from the organization's data. When the researcher makes their work available for purchase on the Truss Marketplace a portion of the sale of each product sold will return to the organization the security researcher used to build their product.
				<br />
				<br />
				The tokenomics of the Truss ecosystem actively work to incentivize all participants within the ecosystem to work together to produce high-quality and high-fidelity products that benefit each participant within the ecosystem. The more trustworthy the researcher, the more likely organizations will be incentivized to allow them access to their data. The more an organization opens its data to researchers, the more opportunities the organization has to help protect the larger ecosystem as well as the more opportunities they have to economically benefit from their data.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					Truss Marketplace
					<br />
				</Strong>
				<br />
				Truss provides a platform for secure data-sharing, research, and investigation, encouraging organizations and individuals to maintain and share a record of their security incidents. The use of a public blockchain allows every Truss entity to seamlessly integrate the protections developed by researchers across the Truss ecosystem. Truss entities of any size can subsequently download and implement the protections designed from anywhere in the Truss ecosystem directly into their security infrastructure.
				<br />
				<br />
				In addition to providing the infrastructure for collecting and disseminating attack data, there must also be incentives for security practitioners and organizations to contribute their time and data. Subsequently, the Truss ecosystem provides an avenue for researchers to sell their protection products to a global audience through the development of security marketplaces. Using a public blockchain to share security events, and allowing researchers to scan and build protections based on data from the blockchain fosters the creation of a self-sufficient ecosystem of security knowledge, skills, resources, and protections. Organizations and individuals alike will be free to integrate and sell purpose-built collections of security detections directly to end-users reducing the cost of security protections while simultaneously encouraging advanced research.
				<br />
				<br />
				Any Truss entity can be a consumer, seller, and creator within the Truss ecosystem. The Truss ecosystem will assist Truss entities to buy and sell their security products through a Truss Marketplace. The Truss Marketplace will be designed to facilitate access and searchability to enable users to quickly find, access, and implement the security products they need to protect their environment. The Truss Marketplace will provide sellers with virtual counter space to present their products in a user-friendly and easily navigable method.
				<br />
				<br />
				Truss entities can earn proceeds by providing research, detections, and remediations for the latest security risks facing global networks and computational endpoints to the Truss Marketplace. These security products can then be purchased by any other Truss entity.
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%205%20-%20Truss%20Marketplace%20life-cycle.png?v=2023-06-21T04:35:55.482Z" display="block" max-width="600px" align-self="center" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 5. Truss Marketplace life-cycle
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				Truss entities of any size and industry can purchase and implement the security products from any individual or organization providing those protections. This model removes third parties from the buying and selling of security products allowing all Truss entities to implement the latest and most accurate security measures to protect their environments. For example, a small one-person operation can implement the same security protections as a multi-billion security enterprise by buying directly from the security researcher who discovered the threat. Similarly, this allows freelance security researchers to sell their critical security wares to a global audience instead of to a single organization that can afford their unique skill set.{" "}
				<br />
				<br />
				A Truss Marketplace should be designed with ease of use in mind. Each security product will be tagged with common security industry identifiers allowing consumers to quickly identify the specific type of product they are interested in buying. See Figure 6, for an example of how sellers and buyers will use the marketplace's organization.
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%206%20-%20Truss%20Marketplace.png?v=2023-06-21T04:36:27.269Z" display="block" max-width="700px" align-self="center" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 6. Truss Marketplace
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				As the number and scope of cyber threats increases, so will the demand for security data and other security products. The Truss Marketplace will be presented with the ability to crowdsource the best security products based on the consumer's feedback. The consumer of a purchased query smart contract will be able to rate the effectiveness of that particular security product. The consumer base within the Truss ecosystem will influence the popularity and sophistication of query smart contracts and all other security products sold on the Truss Marketplace.
				<br />
				<br />
				Through the marketplace, any Truss entity can buy security products directly from the creators of that product. This direct approach should reduce the cost and increase the availability of security solutions. The Truss ecosystem also provides an avenue toward profitability for a large enterprise-level Truss entity's security team. By allowing these security teams to sell their security knowledge and expertise, the enterprise security team can transition into a profitable investment, instead of the ever-necessary and ever-rising cost of doing business.
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%207%20-%20Security%20information%20supply%20chain.png?v=2023-06-21T04:36:53.469Z" display="block" max-width="700px" align-self="center" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 7. Security information supply chain
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				Figure 7 shows the Truss information supply chain. Each Truss entity will store security events in its own centralized and unique blockchain, recording the security events gathered from their computational environments. These security events can then be shared, or sold, with the larger Truss ecosystem. Any Truss entity can send and receive fully authenticated and integrally sound security data to and from any other global Truss entity within the network. The larger Truss ecosystem relies on communication between Truss entities to harness the ability to investigate, build, sell, and buy the security knowledge of other Truss entities through the sharing of data across individual blockchains. The Truss ecosystem enhances the security and flexibility of all Truss entities through increased visibility and marketing awareness of global or viral security events. Resulting in organizations having access to enterprise-level security solutions, regardless of their size or industry.
			</Text>
			<Text margin="0px 0px 20px 0px" font="--headline3">
				III. Decentralized Architecture
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					On-Chain Innovation
					<br />
				</Strong>
				<br />
				The primary goal of Truss is to provide a platform that promotes innovation around the creation and dissemination of security products to support the creation of a global cyber immune system. This includes technical innovation wherein a diversity of security researchers are given complete freedom to define their security products. This may include offerings such as threat intelligence products containing information about emerging threats, IOCs, and known malicious entity reporting. It could also lead to the development and sale of script-based intelligence tools, Infrastructure as Code (IaC) templates, configuration and security design guides used for compliance guidelines, or even formalized security information and event management (SIEM) add-ons that facilitate the collection and analysis of security event logs from various sources within an organization's formalized security products.
				<br />
				<br />
				The Truss platform also promotes economic innovation wherein security researchers and organizations are able to explore different models for packaging and selling threat data and products. For example, one researcher may want to charge a premium for their product because it addresses a complex attack. Another researcher may want to charge a minimal amount and try to sell on volume. Some researchers may want to include a fee that creates an automated "marketing bounty" to use on a specific product. Some researchers may want to allocate a minimal amount to pay for community sales reps while others may want to give away much more of their margin to encourage the sales team.
				<br />
				<br />
				Truss promotes evolutionary innovation through an open contract security platform that supports the creation and execution of smart contracts. In an open contract blockchain platform, the underlying infrastructure and protocol layer is designed to enable the execution of smart contracts and enforce their terms and conditions. The Truss platform provides a set of tools, libraries, and APIs that security researchers can use to create and deploy specialized smart contracts on the Truss chain.
				<br />
				<br />
				One of the key characteristics of the Truss platform is its openness and accessibility. It allows anyone to participate, deploy their own smart contracts, and engage in transactions with other participants. This openness promotes transparency, inclusivity, and equal opportunity for all users, fostering a dynamic Truss ecosystem. In turn, this empowers security researchers and organizations to create and execute programmable agreements, automate processes, and build decentralized applications that can disrupt the traditional threat intelligence supply chain and enable new forms of digital interactions to combat cyber attacks.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					Truss Blockchain
					<br />
				</Strong>
				<br />
				A Truss global cyber immune system has several requirements that dictate the use of a decentralized architecture. First, there is a global need for cybersecurity and threat intelligence as cyber attacks span national boundaries and affect all industries. To be effective for downstream consumers, threat intelligence surrounding these cyber attacks must be relevant and timely. In addition, due to the limited security budgets of mid-sized organizations, any security offerings must also be cost-effective. The security products developed by researchers also must be secure and trusted. Finally, there must be an incentive for each entity within the ecosystem to participate in the global cyber immune system.
				<br />
				<br />
				A decentralized blockchain architecture has several benefits that make it an effective solution for meeting the requirements of a global cyber immune system:
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" padding="0px 0px 0px 30px">
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
					1. Global reach:
				</Strong>
				{" "}Blockchains operate on a decentralized network, which means there is no central authority controlling or managing the data. This decentralized nature eliminates the need for intermediaries and allows for direct peer-to-peer transactions. This feature is particularly advantageous for organizations and researchers who may not have access to commercial security SaaS platforms.
				<br />
				<br />
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
					2. Relevant and timely intelligence:
				</Strong>
				{" "}While centralized security organizations have shown that they can create relevant and timely threat intelligence data, their ability to scale is dependent upon the number of security analysts that have been hired by the organization. An open blockchain platform is able to scale to any number of security researchers around the world based upon the number of nodes carrying the blockchain data. In addition, as soon as a threat is discovered and threat intelligence is posted and validated on the blockchain, mitigation data for that threat is immediately available to every organization and security consultant. This enables the near-instantaneous transfer of threat intelligence and eliminates delays associated with corporate bureaucracies or limits on political cross-border transactions.
				<br />
				<br />
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
					3. Cost-effective:
				</Strong>
				{" "}Centralized security providers expend resources to collect, store, and analyze security data. These providers are incentivized to collect as much security data from their customers as possible in order to build protections. However, with an ever-expanding set of resources, they are forced to acquire new customers to help keep costs low for their customer base and the resource cost versus return cycle continues to spiral. [
				<Link
					href="https://books.google.com/books?hl=en&lr=&id=mafZyckH_bAC&oi=fnd&pg=PA1&dq=shirky+2008+here+comes+everybody+&ots=HLpadLTBE3&sig=FxuGnd_ZJp5rUB8TweMQFVOO3Cg#v=onepage&q=shirky%202008%20here%20comes%20everybody&f=false"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					18
				</Link>
				]. By using a blockchain and eliminating the need for intermediaries, the suppliers and consumers of threat intelligence can directly transact with one another, reducing time and costs.{" "}
				<br />
				<br />
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
					4. Security:
				</Strong>
				{" "}Blockchain technology provides a high level of security and trust in transactions. The data stored on the blockchain is encrypted and distributed across multiple nodes in the network, making it highly resistant to tampering and fraud. This feature is crucial when dealing with global customers as it helps establish trust in the transactions and ensures the integrity of the information being shared.
				<br />
				<br />
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
					5. Transparency and trust:
				</Strong>
				{" "}Blockchain offers transparency by maintaining an immutable and auditable record of all transactions. Every participant in the blockchain network can access the same information, creating a transparent and shared ledger. In the context of the creation and transfer of threat intelligence, this transparency is beneficial for global customers as it allows them to verify the provenance of the data used to develop the CTI making it easier to establish trust in the CTI.
				<br />
				<br />
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
					6. Incentivization:
				</Strong>
				{" "}A blockchain token presents a straightforward way to offer incentives to developers, organizations, and researchers who contribute to the Truss ecosystem. These incentives can come from fees paid into the ecosystem by other participants, or they can be more direct in the form of token grants, bounties, funding for building applications or providing other valuable services.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				The production of threat intelligence is complex and requires access to large amounts of organizational data and time on the researcher's part to build analytic case files for unique operations, campaigns, and techniques used by multiple threat actors. It is not reasonable to expect voluntary contributions of time and expertise from researchers and organizational security professionals to produce high-quality threat intelligence material. Organizations, analysts, and security consultants need to be paid for their time, data, and skill. The authors believe that enabling threat intelligence analysts to monetize their own operations will encourage the production of higher-quality threat assessments to a wider audience. This will result in enhanced global security hygiene by providing high-quality security information to larger numbers of organizations while simultaneously lowering the price of this security information.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					Hybrid Blockchain
					<br />
				</Strong>
				<br />
				A principal requirement of the Truss platform is that it must support the distribution of CTI data. This information must be shareable and easily accessed by all organizations participating in the ecosystem. As such, there is a public component of the Truss ecosystem that provides the current state of security events and transparent and auditable security data products. The Truss ecosystem must also support a network of organizations each with its own set of security log data, where much of this data is considered private and must be kept secure. Thus, there is also a private component of the Truss ecosystem that provides for secure storage of organizational security data. This necessitates the creation of a hybrid blockchain, where private organizations will maintain a private blockchain of their own internal security events, but simultaneously allow the organization to share parts of their private data on a public blockchain that is available to all users of the Truss ecosystem.
				<br />
				<br />
				Hybrid blockchains combine elements from both public and private blockchains, aiming to leverage the benefits of both models. They provide a middle ground between the fully decentralized nature of public blockchains and the controlled access and permissions of private blockchains. The first layer consists of a permissionless or public blockchain that maintains the decentralization, transparency, and immutability features. The second layer is a permission-based, or private, blockchain that adds controlled access and additional functionalities.
				<br />
				<br />
				Organizations generally must manage large quantities of text-heavy security log data. This is in sharp contrast to the small and lightweight transactional data that is traditionally stored in public blockchains. In this situation, a hybrid blockchain can offer cost advantages compared to a fully public blockchain. By utilizing a private blockchain layer for internal or sensitive operations, organizations can reduce the computational and storage costs associated with public blockchain networks. A hybrid chain ecosystem supports the coexistence of internal private permissioned chains alongside a public permissionless chain. An organization implementing full Truss infrastructure might maintain two or more internal private blockchain nodes for log collection and threat intelligence ingestion. It would also interact with the public blockchain for reporting and disseminating threat data. In total, the three types of blockchains include the public Truss blockchain, a private blockchain, and finally a master blockchain (Figure 8).
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%208%20-%20The%20Truss%20Blockchain%20Triad.png?v=2023-06-21T04:37:48.984Z" display="block" max-width="400px" align-self="center" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 8. The Truss Blockchain Triad
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong>
					Public Blockchain
					<br />
				</Strong>
				<br />
				The public chain is external to the organization. Data from the private chain is shared with the public chain via a customizable smart contract that can redact some or all of the internal or sensitive information contained within the private blockchain. This can allow Truss entities to share as much or as little data about a particular event as they feel comfortable. For example, a DAO may wish all information within their network to be fully transparent as this is a cornerstone of their operational philosophy, whereas a Fortune 100 enterprise may wish to share very little information as this could jeopardize their shareholder's confidence in protecting their intellectual property.
				<br />
				<br />
				<Strong>
					Private Blockchain
					<br />
				</Strong>
				<br />
				The private blockchain is used by the Truss entity as the production-ready security operations hub for monitoring and detecting all security events generated from the Truss entity's computational environment. The private nodes are hosted internally within the Truss entity's production environment and is not exposed to the internet. It is possible to maintain several unique nodes to assist with large log volume and investigation requirements. The private blockchain could also replace a Security Information and Event Management (SIEM) appliance as the two share similar functionality.
				<br />
				<br />
				<Strong>
					Master Blockchain Nodes
					<br />
				</Strong>
				<br />
				The master blockchain is optional and is only used as an integrity check and a core source of truth for the Truss entity's security events recorded within the private blockchain nodes. The master node would be hosted under an additional layer of security from the production environment and from the private node. User access to the master node would be strictly controlled and external network access would be prohibited. Only isolated and heavily regulated service accounts would be allowed to interact with the master blockchain to ensure that the data contained within is uncompromised (Figure 9).
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%209%20-%20The%20Internal%20Blockchain%20Triad%20copy.png?v=2023-06-21T04:38:44.467Z" display="block" max-width="700px" align-self="center" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 9. The Internal Blockchain Triad
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				A hybrid blockchain architecture can facilitate interoperability between Truss entities. By bridging public and private components, hybrid chains enable the exchange of assets, data, or transactions between different blockchain ecosystems or traditional databases. The Truss ecosystem will utilize an inter-chain communication mechanism where threat information and other data can pass between the public chain and the private chains, as well as other Truss entities or the Truss marketplaces. Each Truss entity will maintain its own unique security information and can store or transfer data that would be pertinent to the security of other Truss entities. Each entity will be free to initiate connections with one or more Truss entities to share its data. This will allow for the safe and secure transfer of potential malicious incidents.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					Public Chain
					<br />
				</Strong>
				<br />
				The public chain is key to the success of the Truss ecosystem as it provides transparency and visibility into global security events. The public chain must be reachable by security researchers and organizations around the world. In addition, it must be able to support a large number of low-cost transactions, so chain transaction fees must be relatively low. The Truss blockchain can be conceptualized as consisting of three primary layers: the infrastructure layer, the protocol layer, and the application layer (Figure 10).{" "}
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%2011%20-%20Truss%20Blockchain%20Architecture.png?v=2023-06-21T04:40:09.243Z" display="block" align-self="center" max-width="700px" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 10. Truss Blockchain Architecture
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				The application layer is where the business logic and applications reside. This layer represents the user-facing side of the blockchain, where developers create decentralized applications (dApps) that interact with the blockchain network. In the Truss ecosystem, the application layer includes the Truss decentralized marketplace and other blockchain-based applications such as cryptocurrency wallets and voting platforms. Developers leverage the underlying infrastructure and protocol layers to build applications that utilize the trust, transparency, and decentralized nature of the blockchain. These applications interact with the blockchain through an application programming interface (API) to access and modify data and execute smart contracts.
				<br />
				<br />
				The protocol layer of a blockchain encompasses the rules, algorithms, and protocols that govern the operation and behavior of the blockchain network. It includes elements such as the consensus algorithm, block creation and validation rules, cryptographic algorithms, and transaction validation protocols. The protocol layer also holds the smart contracts that define the rules, terms, and conditions of interactions between Truss entities.{" "}
				<br />
				<br />
				The infrastructure layer forms the foundation of the blockchain network. It includes the underlying hardware and network components that enable the functioning of the blockchain. This layer encompasses the physical infrastructure, such as servers, nodes, and data centers, as well as the networking infrastructure that facilitates communication and data transmission between the nodes in the network.
				<br />
				<br />
				At the infrastructure layer, blockchain nodes are deployed, which are responsible for maintaining a copy of the blockchain's distributed ledger, participating in the consensus mechanism, and validating transactions. The infrastructure layer ensures the availability, reliability, and scalability of the blockchain network.
				<br />
				<br />
				While it is possible to imagine Truss use cases, such as highly specific requirements or unique consensus mechanisms, that would require building a domain-optimized layer 1 infrastructure, deploying contracts to an existing layer 1 blockchain offers significant advantages in terms of security, reliability, network effects, interoperability, developer support, cost efficiency, and user trust.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					The Truss API
					<br />
				</Strong>
				<br />
				For the Truss chain, having all of the security event data stored within an irrefutable chain of events enables security researchers to determine with 100% accuracy that a given event took place within a specific environment under specific conditions. Through a chain request, a security researcher can query the blockchain for any series of indicators or patterns of events that may have occurred within an organization's computational environment.
				<br />
				<br />
				Truss entities are also free to query other entities and build security products based on their particular skill sets, talents, and missions. These created security products can be used to identify and prevent malicious or unwanted events that match their designed criteria. Individual security practitioners or research teams would be free to search the public chain to hunt for malicious or suspicious indicators or behavior. Their resulting security products will be eligible to be sold or transferred on the open market where the global network of Truss entities can buy and sell security products fitting their needs.
				<br />
				<br />
				A blockchain API is a set of protocols and tools that allow developers to interact with a blockchain network. The Truss blockchain API will support organizations and security analysts wanting to access security event information and security products. An API typically exposes a variety of endpoints or methods that developers can use to interact with the blockchain network. These endpoints can include functions such as submitting transactions, retrieving information about blocks, querying account balances, and executing smart contracts.
				<br />
				<br />
				In a blockchain network, while all nodes in the network can communicate with each other and share information, not all nodes are designed to handle API queries efficiently. A blockchain API query node refers to a specialized node in a blockchain network that is dedicated to handling API queries and serving data to external applications. These nodes are often configured with lightweight software that prioritizes quick data retrieval and processing, making them suitable for serving data to external applications via API requests.
				<br />
				<br />
				By using an API query node, developers can offload the computational and storage demands of serving API queries from the main network nodes, which are primarily responsible for maintaining the integrity and security of the blockchain network. This segregation allows the blockchain network to handle a large volume of API requests without compromising the performance or stability of the core blockchain operations.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					Private Chains
					<br />
				</Strong>
				<br />
				A private blockchain is an application environment that enables the decentralized storage of security events and the execution of smart contracts and smart functions. A private node is used by the Truss entity as the production-ready security operations hub for monitoring and detecting all security events generated from the Truss entity's computational environment. It also allows for the collection and analysis of internal security log data. The use of a private node within each organization allows for faster operation and ingestion of the security data they will be storing. In addition, the number of private nodes can be nearly unlimited within the Truss entity's internal network architecture. This architectural design allows the Truss entity to create an internal network of nodes that allows for faster data processing and ensures the integrity of its internal security data. An organization participating in the Truss ecosystem would optionally host a private node and a master node. This private node could be hosted internally or outsourced to a service provider. Specific security data would be ingested from the public chain to the private node. Similarly, select organizational log data or the results of log analysis could be shared with members of the ecosystem (Figure 11).
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%2012%20-%20The%20Internal%20Blockchain%20Triad.png?v=2023-06-21T04:40:33.748Z" display="block" align-self="center" max-width="700px" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 11. The Internal Blockchain Triad
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				This architecture also allows Truss entities to scale rapidly and securely while ensuring their security data is available to security researchers and security operations regardless of the processing demands of their security tools at any given moment.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					Generating Threat Intelligence from Event Logs
					<br />
				</Strong>
				<br />
				A local event log can maintain a record of all network and system events occurring within a computational environment. Through the technological benefits of blockchain technology, this event log can provide irrefutable forensic evidence that an event or an incident occurred. Every event in a computational device or endpoint and its associated metadata can be recorded in the event log. When an incident occurs, the IOCs can be transcribed to security rule sets and written to the chain. These rule entries provide a forensically viable method to track the creation, distribution, and usage of the developed security rule, or product. Should an organization require a greater sense of anonymity, the rule development process can provide an opportunity to anonymize any sensitive internal data the organization does not wish to publish.Figure 12 illustrates how incident information can be transferred from one organization to another. First, the incident metadata values are collected and written into an incident detail table. This table is in turn written to the source organization's rule repository. This repository is used by the source organization as a rule repository able to trigger upon events or incidents that match the rule's pattern requirements. Subsequently, the NFT rule can be transferred to another organization through a marketplace, or via direct transfer. This rule can then be used to trigger upon events or incidents that match the rule's pattern requirements.{" "}
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%2013%20-%20Truss%20Smart%20Contract%20Operations.png?v=2023-06-21T04:40:58.274Z" display="block" max-width="700px" align-self="center" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 12. Truss Smart Contract Operations
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
					Sharing Cyber Threat Data
					<br />
				</Strong>
				<br />
				To participate in the Truss ecosystem, an organization would expose data from its private blockchain allowing researchers to investigate or hunt for malicious activity. An organization would technically still be allowed to participate in the Truss ecosystem without sharing security data, and this would effectively prevent researchers from investigating any security events occurring within that Truss entity. However, if an attack were to occur in that particular Truss entity's environment, only that entity would be able to know and respond to the incident. Any intelligence collected from the incident would not be immediately shared with the wider ecosystem. Philosophically, all Truss entities become stronger the more they share and there are incentives to be had, both monetarily and philosophically, by participating fully within the Truss ecosystem. Figure 13 shows the technical flow of how an organization might share a security incident it discovers. On the left of the figure, the organization has discovered and collected the incident details. These details are then used to create an NFT security product in the marketplace. This product is publicized and other organizations are notified either manually or via their own scanning applications. Organizations that deem the security incident relevant then can ingest the threat response details into their systems.
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%2014%20-%20Technical%20Flow%20of%20sharing%20a%20security%20incident.png?v=2023-06-21T04:41:22.332Z" display="block" max-width="700px" align-self="center" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 13. Technical Flow of sharing a security incident
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				Truss organizations that do wish to share some or all of their security blockchain data will register their chain with a distribution list to be shared across all blockchains within the Truss ecosystem. Each participating Truss entity can supply as little or as much information about themselves or their business as they deem necessary. The more accurate the shared information, the more accurate defenses can be made for the Truss ecosystem in general and for each entity. The shared distribution list will be available to registered security researchers who can freely query any public blockchain during their hunting and investigative work.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					Selling Cyber Threat Data
					<br />
				</Strong>
				<br />
				Truss enables organizations to sell their security knowledge and data. This enables them to not only increase their return on investment (ROI) for security operations, which is traditionally a zero-sum investment (until a compromise occurs), but also enables them to share their security expertise with the larger ecosystem, raising the global security awareness and ultimately the security hygiene of all who participate in the ecosystem.
				<br />
				<br />
				Fueled by a growing number of security practitioners vying for the selling of the latest defensive measures, more knowledge will be shared within the ecosystem, resulting in a natural reduction in the number of sustainable malicious actors and the elimination of their offensive capabilities. Furthermore, the more exposed and unsanitized a Truss entity chooses to make its public blockchain, the more visibility researchers can achieve, resulting in more sophisticated detection and defensive measures being made available to the public.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					Smart Contracts
					<br />
				</Strong>
				<br />
				Smart contracts (or smart functions) [
				<Link
					href="https://www.ibm.com/topics/smart-contracts"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					21
				</Link>
				] are the key to authentication, scanning, and transaction operations between chains. Smart Contracts must be configured so that each chain can transfer information and ensure that the chain itself remains secure. Smart contracts allow for the reading of blockchain information and when a trigger is identified, performing a specific function.{" "}
				<br />
				<br />
				There will be multiple types of Smart Contracts within the Truss ecosystem, including:
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" padding="0px 0px 0px 30px">
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
					Scanning and Alerting:
				</Strong>
				{" "}The Truss chain contains the data required to facilitate the detection operations of suspicious and malicious events. Researchers and organizations can develop and share or sell configurable smart contracts that enable the scanning of security events written to the private Truss blockchains. These scanning smart contracts will use researcher-developed query rules to identify cyber threats.
				<br />
				<br />
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
					Data Sanitation:
				</Strong>
				{" "}When data is moved from the internal private node to the public node, all sensitive information will need to be sanitized before its transfer. Using data sanitation smart contracts, security researchers and organizations will be able to create and share or sell data sanitation rules that can be adopted by organizations on an ad hoc basis.
				<br />
				<br />
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
					Threat Mitigation:
				</Strong>
				{" "}Mitigation operations are designated as operations that prevent, stop, and eradicate security threats from occurring within a Truss entity's environment or isolated system. Threat mitigation smart contracts will enable organizations to programmatically interact with inline security tools to inject mitigation operations that effectively prevent a known security risk.
			</Text>
			<Text margin="0px 0px 20px 0px" font="--headline3">
				IV. Incentivization Model
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				To function properly, a decentralized security ecosystem requires participation from a large number of individuals from different countries, including security analysts, security practitioners, developers, and community managers. In addition, because cybercriminals are constantly adapting their methods and tools, a well-functioning security ecosystem needs to be similarly adaptable.
				<br />
				<br />
				The Truss platform supports the participation of the global security community and encourages adaptability and innovation through its token-based incentivization model. It incentivizes participation by distributing the value accrued by developing and purchasing security products and tools to those contributing to the protocol.
				<br />
				<br />
				A token-based incentivization model creates an environment where users can experiment with the design and distribution of security products in such a way that encourages risk-taking and creativity. In addition, because the Truss protocol is available to anyone with access to a node, it becomes possible to tap into the wisdom and expertise of a broad and diverse group of security experts.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					The Truss token
					<br />
				</Strong>
				<br />
				The Truss token will be used as the principal unit of exchange within the Truss ecosystem and will be considered a Utility Token [
				<Link
					href="https://www.sofi.com/learn/content/what-is-a-utility-token/"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					12
				</Link>
				]. In the context of blockchain, a token providing a utility refers to its ability to have functional value or usefulness within a specific ecosystem or network. The Truss token will be used to facilitate the economic requirements of scanning a public blockchain, purchasing security products from the Truss Marketplace, purchasing a seller's space within the marketplace, and paying gas fees for writing to the layer 1 blockchain. In addition to the economic functions of the Truss token, it will also incentivize participants of the Truss ecosystem to share information about security events taking place within their computational environments.
				<br />
				<br />
				The Truss public chain will implement a fee-sharing token economic model that collects fees for payment and distributes them to researchers, developers, and other Truss entities. This model is useful in blockchain-based ecosystems to incentivize participation and contributions from various stakeholders.
				<br />
				<br />
				The following is a simplified explanation of how the Truss token economic model will work:
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" padding="0px 0px 0px 30px">
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
					1. Token Creation:
				</Strong>
				{" "}A native Truss token will be created for the platform. This token serves as the medium of exchange and represents value within the system. For example, within the Truss Security ecosystem, the Truss Token will be created to fulfill the token objectives.
				<br />
				<br />
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
					2. Fee Collection:
				</Strong>
				{" "}Whenever on-chain transactions or payments occur, a fee is charged. These fees can be a percentage, or fixed amount, of the transaction value.
				<br />
				<br />
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
					3. Fee Distribution:
				</Strong>
				{" "}The fees will be distributed among different participants according to predefined rules. These rules can vary depending on the product or service being offered. For example, the fees might be divided among security product publishers, researchers, data sources, the Truss marketplace, the Truss foundation, and other Truss entities.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				By implementing a fee-sharing token economic model, the Truss platform will create a self-sustaining ecosystem where contributors are motivated to actively participate and contribute to its growth, ultimately benefiting the entire security community.  Increases to the token's value will naturally occur as the Truss ecosystem gains popularity and functionality and will provide additional incentives for participants to hold and use it. However, the token will not be considered an investment contract or a security asset.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					Token Utility
					<br />
				</Strong>
				<br />
				To further enhance the ecosystem, the native Truss token will have additional utility beyond fee sharing. This includes:
				</Text>
				<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" padding="0px 0px 0px 30px">
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
					Minting Security Products:
				</Strong>
				{" "}Security products are added to the Truss Marketplace through the minting of a security product facilitated through the use of the Truss Token.
				<br />
				<br />
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
					Publishing and Purchasing Security Products and Tools:
				</Strong>
				{" "}Each security product transfer will take place through the exchange of Truss Tokens between the seller and purchaser. The seller will sell the security product, which the purchaser will then use Truss Token to purchase.
				<br />
				<br />
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
					Access to Security Services:
				</Strong>
				{" "}Utility tokens can grant holders access to specific services or features within a decentralized application or platform. For example, a token might be required to access premium content, use certain functionalities, or participate in voting or governance mechanisms. Sellers may also put up a contract for the use of their services, such as Pentesting operations, Incident Response operations, Security analytics, or even architectural or security consulting services. Each of the services made available will use the Truss Token to facilitate the service agreement.
				<br />
				<br />
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
					Access to Organizational Security Data:
				</Strong>
				{" "}When organizations open their security events to the public, they open the door to receiving Truss token rewards for the use of their data. This public data is available to a subset of users of the Truss ecosystem and can be used to create security products that can be sold on the Truss Marketplace.
				<br />
				<br />
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
					Truss Marketplace Transactions:
				</Strong>
				{" "}The majority of purchased security products will be performed within the Truss Marketplace. While the Truss chain is public and the direct sale of security products between Truss entities can take place, the Truss marketplace will provide ease of access and product support allowing users to quickly discover trending security products and interact with peers to build stronger relationships. The Truss Marketplace will provide a centralized location for all security products to aid in the ease of discovery of critical security events. The Truss Marketplace will also provide the service of marketing and providing real estate for researchers and security vendors to generate revenue for their security products.
				<br />
				<br />
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
					Industry Information:
				</Strong>
				{" "}The Truss Marketplace will provide a number of beneficial services for the industry at large, including hosting a Top 10 Trending Security Product listing which will be continually updated to show the most pressing or time-sensitive security products requested and purchased by the Marketplace clientele. The Truss Marketplace will also maintain a Top Security incident board, highlighting the latest industry news and breach alert notifications to ensure that users are up to date on the latest security incidents as they occur. Additionally, the Truss Marketplace will maintain analytic functionalities to pair organizations with new security products. When new products are developed, organizations will receive customizable notifications of potential new security mitigations being made available through the marketplace.
				<br />
				<br />

			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					Token Distribution
					<br />
				</Strong>
				<br />
				Blockchain networks thrive on network effects, which occur when the value of a network increases as more users join. When tokens are owned by a large number of users, it creates a positive feedback loop. As the user base grows, the demand for tokens may increase, leading to potential appreciation in value. This, in turn, attracts more users, further strengthening the network effect and utility of the tokens.
				<br />
				<br />
				There are several methods that will be used to facilitate the distribution of Truss tokens.
				<br />
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
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
						Genesis Token Allocation
						<br />
					</Em>
				</Strong>
				<br />
				The genesis launch of the Truss protocol will include the distribution of an initial allocation of Truss tokens. Recipients of the tokens may include:
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" padding="0px 0px 0px 30px">
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
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Project Team/Founders:
					</Span>
				</Strong>
				{" "}This allocation compensates the project team for their efforts in developing the project and driving adoption of the protocol. The team's share will be subject to vesting schedules or lock-up periods to ensure long-term commitment and alignment with the project's success.
				<br />
				<br />
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
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Advisors and Partners:
					</Span>
				</Strong>
				{" "}As a community-driving protocol, Truss will seek guidance from industry experts, advisors, and strategic partners who contribute their knowledge, experience, and networks. These individuals or entities may receive a portion of the token allocation as compensation for their support and contributions to the project.
				<br />
				<br />
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
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Early Investors/Seed Funding:
					</Span>
				</Strong>
				{" "}Investors provide capital at an early stage and bear the risk associated with the project's success and help kickstart its development. In exchange for this risk, early investors may receive a portion of the Genesis token pool.
				<br />
				<br />
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
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Community and Airdrops:{" "}
					</Span>
				</Strong>
				To foster community engagement and wider adoption, Truss will reserve a portion of the initial token supply for distribution to the community.
				<br />
				<br />
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
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Marketing and Development:
					</Span>
				</Strong>
				{" "}A portion of the token supply may be allocated to marketing initiatives, including promotional activities, partnerships, and exchange listings. This allocation helps create awareness, drive adoption, and support the ongoing development of the protocol.
			</Text>
			<Text margin="0px 0px 25px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
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
						Token Purchase
						<br />
					</Em>
				</Strong>
				<br />
				Truss tokens can be purchased directly from the Truss marketplace in exchange for Truss products or services or from token holders on secondary exchanges.
			</Text>
			<Text margin="0px 0px 25px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
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
						Token Exchange
						<br />
					</Em>
				</Strong>
				<br />
				The Truss token will also be distributed via peer-to-peer transactions involving security products and tools. This includes:
			</Text>
			<Text margin="0px 0px 25px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" padding="0px 0px 0px 30px">
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
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						The Sale of Security Products and Tools:
					</Span>
				</Strong>
				{" "}For every purchase of a security product, either from within the Truss Marketplace or from a peer-to-peer transaction, security products will be sold from one entity to another. Within the Truss Marketplace, every sale will use the Truss token as the legal tender.
				<br />
				<br />
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
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Providing Services:
					</Span>
				</Strong>
				{" "}Tokens can also be received by sellers of security services as well as from products. Security services such as consulting, advising, operational analytics, incident response operations, and many others are common within the security industry. The Truss Token can be used as payment to procure the service capabilities from others, and these transaction payments will fall under the same rules and regulations as the sale of security products and tools.
				<br />
				<br />
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
					<Span
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Sharing Security Data:
					</Span>
				</Strong>
				{" "}To encourage entities to maintain a public record of their security events for use by independent researchers they will be paid, in Truss token, directly by researchers or can receive a percentage of the revenues generated by security products based on their data.
				<br />
				<br />
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif"
				>
					Governance and Voting
					<br />
				</Strong>
				<br />
				A principal goal of Truss is to create a decentralized security protocol that is not dependent on a centralized intermediary. In addition, it is understood that the Truss protocol will only be as powerful as the community of researchers contributing data and tools and the community of IT users and organizations purchasing the data. To this end, the use of a custom Truss token creates an economic model that does not rely on a trusted intermediary but instead relies on decentralized trust among a diverse group of community members.
				<br />
				<br />
				A key requirement of a token-based blockchain is the establishment of a governance model for the token and the protocol. There are several goals that need to be addressed by the governance model:
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" padding="0px 0px 0px 30px">
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
					Decentralization:
				</Strong>
				{" "}Blockchain networks aim to be decentralized, distributing power and decision-making authority among participants. A governance model ensures that the token's management is not concentrated in the hands of a few entities or individuals. Instead, it allows token holders and stakeholders to have a say in the direction and development of the blockchain ecosystem.
				<br />
				<br />
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
					Protocol Evolution:
				</Strong>
				{" "}Blockchain protocols are not static and may need to evolve over time to address security vulnerabilities, scale the network, introduce new features, or adapt to changing user needs. A governance model provides a mechanism for proposing, discussing, and implementing protocol upgrades or changes. It allows stakeholders to contribute to the decision-making process and reach consensus on these modifications.
				<br />
				<br />
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
					Community Engagement:{" "}
				</Strong>
				Tokens are often associated with vibrant communities of developers, users, and enthusiasts. A governance model fosters community engagement by involving token holders in important decisions. It gives them a sense of ownership and empowers them to actively participate in shaping the future of the blockchain ecosystem. This engagement can lead to a better alignment of interests and increased commitment to the network's success.
				<br />
				<br />
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
					Conflict Resolution:
				</Strong>
				{" "}Disagreements and conflicts can arise within blockchain communities, such as debates over proposed upgrades or the allocation of resources. A governance model provides a structured framework to address and resolve these conflicts in a transparent and democratic manner. It establishes rules and processes for decision-making, ensuring that conflicts are resolved fairly and efficiently.
				<br />
				<br />
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
					Long-Term Sustainability:
				</Strong>
				{" "}Tokens are often tied to the economic aspects of a blockchain ecosystem. A governance model helps ensure the long-term sustainability of the token and the network by addressing economic factors such as inflation, token supply, token distribution, and economic incentives. It enables stakeholders to make informed decisions about these economic parameters and maintain the stability and viability of the token and its ecosystem.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				By implementing a governance model, Truss aims to foster decentralization, transparency, and community participation. The model should allow for the efficient management and evolution of the token and the associated Truss ecosystem.
			</Text>
			<Text margin="0px 0px 20px 0px" font="--headline3">
				Conclusion
				<br />
			</Text>
			<Text margin="0px 0px 25px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				Today's cyber attacks are highly decentralized, with multiple threat actors operating independent campaigns against multiple target sets. These attacks occur continuously and from nearly every country around the world. Yet, today's commercial cyber defense solutions are centralized data siloes that require each security vendor to continually expand their data collection requirements. For instance, continually building larger data siloes, along with increasing their research and analytics capabilities, to identify each and every new attack required protect for their customers. This expanding siloed data approach is simply unsustainable in keeping costs low and delivering timely security protections.
				<br />
				The successful defense against of a global decentralized attack plane requires decentralized security (DeSec) that is capable of providing immediate authenticated transferal of security products to address key threats. Through the designing, building, and maintaining of a public security blockchain that facilitates the integrity and trust of global security data, organizations will have access to the protection data they need to secure their environments though smart contract authentication. The key impact a DeSec ecosystem provides is through the economic incentivization to perform and produce quality security services, data, and intelligence. Using the Truss Utility Token data producers can cryptographically sign and sell their products. Conversely, due to the public ledger, organizations have trust that the data they are purchasing is verified and legitimate. Through the configurable selling of their security data, the organizations themselves can begin to have their security teams become a profit center for the organization. With their data used to strengthen the defenses and protect the global security community from the latest novel malware or threat actor campaigns.
				<br />
				All members of the DeSec community add to the collective intelligence and identification of cyber threats. Each individual member plays an active role in the global immune system by producing timely and relevant security data, providing a service, writing security reports, or even reporting single compromising indicators of compromise of an attack they witnessed. The global immune system incentives the early detection, response, and mitigation by pushing the economic structure to the data producers and analytic creators, allowing individual producers to be compensated for the data they share. This reduces the need for large scale in-house security operations and facilitates a lower global security cost by allowing purchasers to buy individual security items instead of a large security platform or suite of tools. Finally, the DeSec ecosystem facilitates the real-time distribution of attack data allowing of organizations to sell and purchase security products that detect and mitigate the active threat actor campaigns occurring in the moment. 
			</Text>
			<Text margin="0px 0px 20px 0px" font="--headline3">
				References
				<br />
			</Text>
			<Text margin="0px 0px 25px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				The following references were used during the creation of this whitepaper. All attempts were made to ensure the citing of these sources were authentic and valid.
				<br />
				<ol>
					<li>
						BEC Attacks Increase by Astounding 84%. (2022, August 8). Abnormal. https://abnormalsecurity.com/blog/bec-attacks-increasing-new-research-shows
					</li>
					<li>
						Brown, R., & M Lee, R. (2021, January). 2021 SANS Cyber Threat Intelligence (CTI) Survey. ThreatQ. Retrieved June 11, 2023, from https://www.threatq.com/documentation/Survey_CTI-2021_ThreatQuotient.pdf
					</li>
					<li>
						Cost of a data breach 2022. (n.d.). IBM. https://www.ibm.com/reports/data-breach
					</li>
					<li>
						Cybercrimemag. (2023, April 15). Cybersecurity Jobs Report: 3.5 Million Unfilled Positions In 2025. Cybercrime Magazine. https://cybersecurityventures.com/jobs/
					</li>
					<li>
						CyberDB. (2018, May 7). USA Cyber Security Companies | CyberDB. https://www.cyberdb.co/database/usa/page/2/
					</li>
					<li>
						DavidPur, N. (n.d.). Which Countries are Most Dangerous? Cyber Attack Origin – by Country. https://blog.cyberproof.com/blog/which-countries-are-most-dangerous
					</li>
					<li>
						De Vries, R. (2022, August 3). What are the real costs of a security incident? | Tales from a Security Professional. Medium. https://tales-from-a-security-professional.com/what-are-the-real-costs-of-a-security-incident-dec0d090281f
					</li>
					<li>
						Gatefy. (2021). Which countries are most targeted by hackers? Gatefy. https://gatefy.com/blog/which-countries-are-most-targeted-hackers/
					</li>
					<li>
						Huang, K. (2023, May 4). The Devastating Business Impacts of a Cyber Breach. Harvard Business Review. https://hbr.org/2023/05/the-devastating-business-impacts-of-a-cyber-breach
					</li>
					<li>
						Lemos, R. (2022, September 30). Cybercriminals See Allure in BEC Attacks Over Ransomware. Dark Reading. https://www.darkreading.com/threat-intelligence/cybercriminals-see-allure-bec-attacks-ransomware
					</li>
					<li>
						Mandiant. (n.d.). Mandiant Security Effectiveness Report: DEEP DIVE INTO CYBER REALITY. Mandiant. https://www.mandiant.com/resources/security-effectiveness-2020-deep-dive-into-cyber-security-reality
					</li>
					<li>
						Nibley, B. (2021, December 22). What Is a Utility Token? SoFi Learn. Retrieved June 11, 2023, from https://www.sofi.com/learn/content/what-is-a-utility-token/
					</li>
					<li>
						Oltsik, J., & Lundell, B. (2021, July). The Life and Times of Cybersecurity Professionals 2021 Vol 5. issa.org. Retrieved June 11, 2023, from https://www.issa.org/wp-content/uploads/2021/07/ESG-ISSA-Research-Report-Life-of-Cybersecurity-Professionals-Jul-2021.pdf
					</li>
					<li>
						Pandemic Cyber Crime, By the Numbers. (n.d.). Pandemic Cyber Crime, by the Numbers. https://www.cyberark.com/resources/blog/pandemic-cyber-crime-by-the-numbers
					</li>
					<li>
						PurpleSec. (2023, February 22). 2023 Cyber Security Statistics: The Ultimate List Of Stats, Data & Trends | PurpleSec. https://purplesec.us/resources/cyber-security-statistics/#Ransomware
					</li>
					<li>
						Roesch, M. (1999). SNORT - lightweight intrusion detection for networks. https://www.usenix.org/. Retrieved June 11, 2023, from https://www.usenix.org/legacy/publications/library/proceedings/lisa99/full_papers/roesch/roesch.pdf
					</li>
					<li>
						Security Market Size, Share & Trends Analysis Report By System (Video Surveillance, Access Control Systems), By End-use (Commercial, Industrial), By Service, By Region, And Segment Forecasts, 2023 - 2030. (n.d.). https://www.grandviewresearch.com/industry-analysis/security-market
					</li>
					<li>
						Shirky, C. (2008). Here Comes Everybody - The Power of Organizing without Organizations. Google Books. Retrieved June 11, 2023, from https://books.google.com/books?hl=en&lr=&id=mafZyckH_bAC&oi=fnd&pg=PA1&dq=shirky+2008+here+comes+everybody+&ots=HLpadLTBE3&sig=FxuGnd_ZJp5rUB8TweMQFVOO3Cg#v=onepage&q=shirky%202008%20here%20comes%20everybody&f=false
					</li>
					<li>
						Traffic Light Protocol (TLP) Definitions and Usage | CISA. (2022, August 16). Cybersecurity and Infrastructure Security Agency CISA. https://www.cisa.gov/news-events/news/traffic-light-protocol-tlp-definitions-and-usage
					</li>
					<li>
						Unit 42. (2022, March 24). 2022 Unit 42 Ransomware Threat Report Highlights: Ransomware Remains a Headliner. Unit 42. https://unit42.paloaltonetworks.com/2022-ransomware-threat-report-highlights/
					</li>
					<li>
						What are smart contracts on blockchain? | IBM. (n.d.). https://www.ibm.com/topics/smart-contracts
					</li>
					<li>
						Zrahia, A. (2018, December 18). Threat intelligence sharing between cybersecurity vendors: Network, dyadic, and agent views. Journal of Cybersecurity, 4(1). https://doi.org/10.1093/cybsec/tyy008
					</li>
				</ol>
			</Text>
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
		<RawHtml>
			<style place={"endOfHead"} rawKey={"64972fbb588b2d0019591baf"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});