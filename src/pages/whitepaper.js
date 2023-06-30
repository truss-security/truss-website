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
				Truss - An Inter-chain Decentralized Autonomous Security Ecosystem
			</Text>
			<Text margin="0px 0px 20px 0px" font="--headline3" align-self="flex-start">
				Abstract
			</Text>
			<Text margin="0px 0px 25px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				It is rare when something fundamentally alters not only how we interact with the world around us but also with each other. The personal computer, the cellphone, and 5G wireless communication are examples of how technology can transform the physical mediums we use to communicate and connect with each other. Blockchain technology, on the other hand, stands apart from the physical mediums just mentioned and enters the world of transforming how we trust information. Blockchain has an answer to questions like, How well do we trust the information we digest? Is there a consensus on the legitimacy of a particular event? Can we mathematically prove that a particular event even took place?
				<br />
				<br />
				Blockchain up to this point has been largely focused on answering the questions of trust from a financial perspective as well as leveraging the technology to enhance governance, privacy, and multi-signature authorization. In each use-case, cryptologic functions are used to assert, without question, that a particular set of events are indeed true. This leads us to a logical next step, the information security industry. Blockchain operations have many parallels with security operations. Redundancy, transparency, privacy, and authentication, each of these is rooted deeply within both fields. The three questions we want to address are: 1) can we use the strengths of blockchain to store and provide security event data? Furthermore, 2) can this include data developed and curated by a decentralized network of researchers to achieve validation or consensus? Finally, 3) can we enable this security data to be sent directly to consumers in real-time to protect them from novel and viral threats?
				<br />
				<br />
				We envision a world where peer-to-peer (P2P) communication of malware signatures, malicious Command and Control (C2) infrastructure, threat actor tactics, techniques, and procedures (TTPs), and security tools are streamed between the developer and the recipient. Where the transmission of security data is processed, purchased, and integrated in real time via smart contract automation. In such a world, when a threat actor launches a novel attack, within minutes every organization in the world has the security data required to prevent this attack from impacting their environment. To achieve this goal, we propose the development of a Global Cyber Immune System, called Decentralized Autonomous Security (DAS), designed to combat the viral infections of cyber attacks.
				<br />
				<br />
				This whitepaper presents a decentralized approach to providing relevant, simple, and economical security data. The concepts listed here present a new way to deliver, purchase, and retrieve security data that directly supports the research of and prevention of cyber-attacks across the globe. Information security practitioners across the globe acknowledge the decentralized nature of attackers and how decentralized attack patterns present a technological and economic challenge to providing timely, actionable security data for organizations wanting to protect themselves. With this paper, we propose an alternative to centralized security vendors, one that takes a decentralized approach to combating cyber attacks.
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
				]. Billions of dollars in ransomware payments have led to advancements in the development and distribution of ransomware binaries resulting in a growth of young, malicious, yet entrepreneurial, mindsets. Furthermore, because of the potential for large payoffs, more competition is entering the field. Business Email Compromise (BEC) is considered to be the next malicious cyber hotbed receiving illicit funds. Reports [
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
				Security vendors are endeavoring to prevent and disrupt criminal cyber operations. They are working to develop detection and prevention mechanisms to ensure that everyone is protected from the worst of these cyber-attacks. This has resulted in big business. The security industry is a $119 Billion dollar industry [
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
				], small and medium-sized businesses simply cannot be expected to survive even one data breach. Now more than ever medium-sized businesses need security solutions that allow them to use relevant, simple, and economical security products. There are three scenarios that accurately reflect this problem:
				<br />
				<br />
				Scenario #1 - Commercial security vendors can provide relevant, timely, and actionable threat information that is simple to understand and implement. However, this oftentimes only comes with the purchase of premier security offerings, pushing these services out of reach for most mid-level organizations.
				<br />
				<br />
				Scenario #2 - Open source products such as MISP, OpenCTI, and many security GitHub repository tools can provide timely and actionable threat information that will assist security operations. Since they are free, they are also very economical to implement. However, these tools can be difficult to use, time-consuming to maintain, and a dedicated team with advanced skills is required to implement them. Most mid-level organizations cannot provide this level of support.
				<br />
				<br />
				Scenario #3 - Free threat intelligence lists can be simple to integrate into most security tools reducing the burden on security personnel. But, many of the free threat intelligence lists contain old and irrelevant data, which may or may not have been verified by reputable sources. This security data thus delivers a false sense of security.{" "}
				<br />
				<br />
				The high and urgent demand for threat intelligence by global mid-sized organizations is not being met by today’s cybersecurity defense providers. As noted above there are traditionally two types of suppliers for security products: centralized commercial security providers and decentralized open source security researchers. The security products from centralized providers are high-quality and easy to integrate, but they are oftentimes expensive and inaccessible to most organizations. The security products from decentralized security researchers are basically free, but they come from unverified sources, suffer from variable quality, and can be complex to integrate [
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
				The main problem facing the majority of organizations, and the IT professionals providing security services to these organizations, is that threat intelligence is time-consuming to collect and difficult to analyze, and security products are oftentimes complex to develop and can be difficult to deploy. As a result, a large number of middlemen–the commercial security providers–have stepped in to create and deliver them. These security vendors maintain the resources to hire expert researchers and analysts to deliver leading-edge security analytics and best-in-class solutions. Consequently, in order to remain on the leading edge of a growing threat landscape, the vendor is required to collect larger quantities of security data, hire analysts to facilitate the analysis of the data and hire engineers to develop the security products required to protect their customer base. This directly leads to the vendors charging a premium for their integration services, which prices out the small and medium-sized businesses that would greatly benefit from the advanced security analysis.
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
					A Holistic Vision
					<br />
				</Strong>
				<br />
				Today’s modern and interconnected world is not all that dissimilar from a biological system. There are independent and diverse organizations and networks working in unison with the larger global society to maintain, support, and develop our modern lifestyle. However, there is a plague that is wreaking havoc across our interconnected world. A pandemic that, to date, we have not been able to successfully combat or even significantly hamper. This pandemic is the “cyber attack”.
				<br />
				<br />
				Cyber attackers are highly decentralized and their attacks originate from many different countries [
				<Link
					href="https://blog.cyberproof.com/blog/which-countries-are-most-dangerous"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					6
				</Link>
				]. At the same time, the victims of cyber attacks are also highly decentralized [
				<Link
					href="https://gatefy.com/blog/which-countries-are-most-targeted-hackers/"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					8
				</Link>
				]. Yet, cyber defense is primarily provided by centralized, commercial enterprises [
				<Link
					href="https://www.cyberdb.co/database/usa/page/2/"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					5
				</Link>
				]. The primary motivation of these commercial security providers is to increase revenue from potential cyber victims while decreasing the costs of supplying security. As a result, cyber security has become a profitable multi-billion dollar industry [
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
				].{" "}
				<br />
				<br />
				Organizations get their threat intelligence data from a variety of sources [
				<Link
					href="https://www.threatq.com/documentation/Survey_CTI-2021_ThreatQuotient.pdf"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					2
				</Link>
				] including media reports, community or industry groups, threat feeds from commercial vendors, and open-source threat intelligence feeds. At the same time, these organizations are inhibited from integrating CTI because of a lack of trained staff [
				<Link
					href="https://www.issa.org/wp-content/uploads/2021/07/ESG-ISSA-Research-Report-Life-of-Cybersecurity-Professionals-Jul-2021.pdf"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					13
				</Link>
				], limited funding, and a lack of automation tools.
				<br />
				<br />
				In summary, there is a cyber attack pandemic originating from a large number of decentralized individuals and groups. This pandemic is global and affects a large percentage of the world’s organizations. Yet, the security industry is trying to fight this pandemic with centralized, commercial organizations. Due to the cost associated with the collection and analysis required to curate actionable security data, commercial organizations are oftentimes unwilling to openly share large sums of their intellectual property and security data with the global audience even though the improvement of global security is the driving force of each commercial security provider. This is called “coopetition” within the security industry [
				<Link
					href="https://academic.oup.com/cybersecurity/article/4/1/tyy008/5245383"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					22
				</Link>
				]. This centralized response has created a situation where most organizations are unable to access the timely, trusted CTI they need to protect themselves because the data is often siloed away in a commercial security provider’s intellectual security vault.In order to combat this “coopetition” effect, every organization and commercial security provider requires an incentive mechanism to ensure the timely and accurate transferal of critical security data. The incentive mechanism for commercial security providers will come in the form of an economic transfer of resources, essentially the ability to get paid for performing a service. Only after the sharing of security data is properly incentivized can the security industry begin to dismantle the “coopetition” practices and barriers that currently prohibit effective and timely security defenses from taking place. Imagine, emulating how the body’s immune system works together to deploy antigens to protect the whole body from a pathogen, the security industry can build a global immune system to ensure that security infections taking place in one enterprise are rapidly disseminated to protect the global ecosystem.{" "}
			</Text>
			<Text margin="0px 0px 20px 0px" font="--headline3">
				II. Decentralized Autonomous Security
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				Humans have adapted to survive in nearly every inhospitable climate on this planet, including those which harbor some of the most deadly diseases and bacteria. In recent history, medical advancements like immunization and proper sanitation have increased human longevity. We owe our continued survival to one of the most intriguing and significant advancements in evolutionary biology: the immune system.
				<br />
				<br />
				The immune system is nature’s way of dealing with infections and diseases that enter the human body. It grows and adapts as we are exposed to foreign bodies like fungi, toxins, viruses, and bacteria, also called pathogens. The immune system maintains a network of sensors that sound the alarm when a pathogen is detected and in response create antigens that our bodies remember forever to ensure they can quickly fight the infection should it return. Remarkably, instead of combating the infection locally, the immune system provides the antigens to the entire body. This sharing of remediation information prevents a systemic infection from taking place within the body.
				<br />
				<br />
				Today’s modern and interconnected world is not all that dissimilar from a biological system. There are independent and diverse organizations and networks working in unison with the larger global society to maintain, support, and develop not only our modern lifestyle but the very ability to move forward and evolve. Arguably our society is still a nation-centric one, but we have begun to build global defense agencies such as Interpol and the World Health Organization which are capable of spreading information internationally regarding terrorism and pandemic-level events. However, today, there is a plague that is wreaking havoc across our interconnected world. A global pandemic that we have not been able to successfully combat or even significantly hamper. This pandemic is the Cyber Attack.
				<br />
				<br />
				In a world where we can live stream any event to billions of users around the world, why do we still find ourselves in a situation where a cyber campaign can use the same type of attack to compromise hundreds of organizations over the course of several months and not be stopped? Is it not possible to build a global antibody to an attack’s indicators of compromise (IOC) and deliver this to all organizations immediately? This type of global network immune system would undoubtedly protect potential victims, prevent criminal organizations from making large sums of money, and reduce the global threat of cyber attack pandemics.
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
				By pulling from nature, we are presented with a method to prevent wide-scale infections. Imagine, instead of a pathogen like a virus or bacteria, we are presented with a threat actor who has compromised a network. Imagine also, similar to how the immune system responds to a virus, the cyber immune system responds to the threat by deploying cyber antigens throughout the global network of interconnected organizations thus preventing infections in those networks. With the advancement of blockchain technology, it is now possible to achieve this imagined scenario: the creation of a global Decentralized Autonomous Security (DAS) cyber immune system.{" "}
				<br />
				<br />
				Figure 2 shows the three main components of the Truss ecosystem: 1) On the right are the organizations that are the front line of attack and are often the first to recognize new attacks; 2) on the left are the researchers who analyze organizational attack data and create the products that enable defenses against cyber attacks; and 3) in the middle is the marketplace which serves as the hub for sharing data, creating security responses, and incentivizing participation from the community of researchers and organizations.
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
				At the heart of the global cyber immune system is a distributed network of independent security blockchains. This network of DAS organizations or individuals (hereby referred to as Truss entities) provides a platform where each Truss entity can use the security information generated from the environments of other Truss entities to better secure their own environments and build security mitigations in response to global cyber pandemics automatically and in real-time.
				<br />
				<br />
				As illustrated in Figure 3, an organization records the security events taking place within its cloud environment. Should malware within a given container be identified, a list of the malware’s IOCs is shared across the Truss network.
			</Text>
			<Image
				src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%203%20-%20Interconnect%20Security%20Blockchain%20Flow.png?v=2023-06-21T04:34:40.818Z"
				display="block"
				text-align="center"
				align-self="center"
				max-width="700px"
			/>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 3. Interconnect Security Blockchain Flow
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				A Truss network provides the foundation for automating the detection and dissemination of a security event that occurs in a single environment. It does so by sharing this event with the global network in real time. By using a public and transparent blockchain to maintain the cryptologic proof that a security event took place within a given environment, each entity in the Truss network maintains a communication pathway with all other entities in the network to facilitate the sharing of security incident information. Each subsequent investigation of an incident can result in the creation, distribution, and implementation of tailored security products that can be used to detect any number of cyber attacks across any number of networks. Identified attack data can then be shared instantly. The result will be the faster transfer of security-related events and information creating a more secure global ecosystem.
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
					Truss and Sensitive Internal Information
					<br />
				</Strong>
				<br />
				A Truss ecosystem works to maintain the anonymity of users and organizations through the anonymization of sensitive internal data such as Personally Identifiable Information (PII). By presenting a fully transparent blockchain of security events, other organizations or individuals are able to identify the organization maintaining that security blockchain. For some organizations such as DAOs or other open-source organizations, this level of transparency is highly desired. For other organizations, such as Future 100 companies with considerable dollar investments in intellectual property (IP), exposing security information publicly would be unthinkable and could have a negative effect on the trust placed within that organization and ultimately harm the public opinion and value of that organization.
				<br />
				<br />
				The Truss system will provide a mechanism to anonymize sensitive internal information via a smart contract that sanitizes all sensitive security information before the data is written to the public blockchain. The sanitization process should replace the sensitive indicators with asymmetric hash values that still allow for analytic associations to be made without exposing the sensitive indicator values themselves.
				<br />
				<br />
				Examples of sensitive internal indicators that can be sanitized are:
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" padding="0px 0px 0px 30px">
				- IP addresses
				<br />
				- Netranges
				<br />
				- Subnet artifacts
				<br />
				- Geolocation information
				<br />
				- Domain names
				<br />
				- User names
				<br />
				- Data samples
				<br />
				- Hostnames
				<br />
				- Application types
				<br />
				- Application names
				<br />
				- Among others
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				Truss entities will also maintain the ability to replace some, all, or none of these indicators at their discretion. This gives each of the Truss entities a choice on the transparency of their blockchain data. When a Truss entity sends data to the public blockchain, it will be prompted to determine how much or how little information they want to share with the Truss ecosystem.{" "}
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
				Truss security researchers are the second pillar of the Truss ecosystem. Researchers create threat intelligence by collecting, analyzing, and interpreting data related to potential or existing cyber threats. Independent security researchers spend a considerable amount of time contributing CTI to shared systems. In addition, security researchers working for centralized organizations produce large amounts of high-quality CTI for their customers. But, it is evident that the cyber security data needs of millions of organizations are not being met. What is needed is a way to tap into the expertise and effort of a large number of independent security researchers who are not currently contributing to the broader cyber-defense ecosystem.
				<br />
				<br />
				The Truss ecosystem provides an avenue that enables independent security researchers to get compensated for sharing CTI. Using blockchain technology, researchers who uncover cyber threats and publish their findings are able to cryptographically sign their CTI and post it to the blockchain. Organizations subscribing to receive CTI each pay a fee to access the data and a portion of the fee goes back to the researcher. By enabling this point-to-point connection between independent researchers and organizations, the Truss ecosystem promotes a positive feedback loop that encourages more researchers to contribute which then encourages more organizations to participate. The ultimate goal is to untether security data production from centralized organizations and unleash the potential of the decentralized community of researchers.
				<br />
				<br />
				In addition to sharing security event information directly, the Truss ecosystem also provides an avenue for security practitioners to investigate and hunt for security events across the global Truss network, effectively removing enterprise-focused security vendors as the sole proprietors of large-scale security-related information. As Figure 4 illustrates, researchers will have the opportunity to request query capabilities into select organizations in order to review the security logs from that organization.{" "}
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%204%20-%20Researchers%20investigation%20into%20third-party%20events.png?v=2023-06-21T04:35:24.096Z" display="block" max-width="700px" align-self="center" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 4. Researchers' investigation into third-party events
				</Em>
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
					Incentivization for allowing access to researchers
					<br />
				</Strong>
				<br />
				Organizations will be incentivized to allow researchers to review their security logs through a tokenomic-based exchange model. The more data an organization allows a researcher to view, the more likely that the researcher will produce a security product from the organization’s data. When the researcher makes their work available for purchase on the Truss Marketplace a portion of the sale of each product sold will return to the organization the security researcher used to build their product.
				<br />
				<br />
				The tokenomics of the Truss ecosystem actively work to incentivize all participants within the ecosystem to work together to produce high-quality and high-fidelity products that benefit each participant within the ecosystem. The more trustworthy the researcher, the more likely organizations will be incentivized to allow them access to their data. The more an organization opens its data to researchers, the more opportunities the organization has to help protect the larger ecosystem as well as the more opportunities they have to benefit from their data returning an economic reward.
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
					Researcher and organization interaction
					<br />
				</Strong>
				<br />
				Using decentralized authorization and permission functionality, organizations can allow researchers different levels of access to any subset of security data the organization feels comfortable sharing. Organizations have the ability to grant or deny access to any and all data access requests presented to them. Organizations will also have the ability to openly allow any subset of their data to be open to the public. In the same token, researchers will have the ability to view a listing of all public data available to them and they will have the opportunity to request access to the data of specific organizations.
				<br />
				<br />
				The Truss ecosystem is one built upon trust and the validation of trust for both organizations and researchers alike, as well as the data they supply and produce. Each entity within the Truss ecosystem will have the ability to approve or deny any operation affecting its operation or reputation. They will also be able to view the trustworthiness of each other’s history and operations through the analysis of that entity’s operations as recorded within the public Truss blockchain ledger. This ensures a level of transparency for all entities within the Truss ecosystem.
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
				A Truss system provides the backbone of a secure data-sharing, research, and investigation platform, encouraging organizations and individuals to maintain and share a record of their security incidents. The use of a global blockchain protocol  allows every Truss entity to seamlessly integrate the protections developed by researchers across the Truss ecosystem. Truss entities of any size can subsequently download and implement the protections designed from anywhere in the Truss ecosystem directly into their security protections.{" "}
				<br />
				<br />
				In addition to providing the infrastructure for collecting and disseminating attack data, there must also be incentives for security practitioners and organizations to contribute their time and data. Subsequently, the Truss ecosystem should provide an avenue for researchers to sell their protection products to a global audience through the development of security marketplaces. Using a public blockchain to share security events, and allowing researchers to scan and build protections based on data from the blockchain fosters the creation of a self-sufficient ecosystem of security knowledge, skills, resources, and protections. Organizations and individuals alike will be free to integrate and sell purpose-built collections of security detections directly to end-users reducing the cost of security protections while simultaneously encouraging advanced research.
				<br />
				<br />
				Any Truss entity can be a consumer, seller, and creator within the Truss ecosystem. The Truss ecosystem will assist Truss entities to buy and sell their security products through a Truss Marketplace. The Truss Marketplace will be designed to facilitate access and searchability to enable users to quickly find, access, and implement the security products they need to protect their environment. The Truss Marketplace will provide sellers with virtual counter space to present their products in a user-friendly and easily navigable method.
				<br />
				<br />
				Truss entities can earn proceeds by providing research, detections, and remediations for the latest security risks facing global networks and computational endpoints to the Truss Marketplace. These security products can then be purchased by any other Truss entity.
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%205%20-%20Truss%20Marketplace%20life-cycle.png?v=2023-06-21T04:35:55.482Z" display="block" max-width="700px" align-self="center" />
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
				As the number and scope of cyber threats increases, so will the demand for security data and other security products. The Truss Marketplace will be presented with the ability to crowd-source the best security products based on the consumer's feedback. The consumer of a purchased query smart contract will be able to rate the effectiveness of that particular security product. The consumer base within the Truss ecosystem will influence the popularity and sophistication of query smart contracts and all other security products sold on the Truss Marketplace.
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
					Non-Fungable Tokens
					<br />
				</Strong>
				<br />
				The security products sold within the Truss Marketplace will be minted as Non-Fungable Tokens (NFT). This will allow for each security product to maintain cryptographic insurance that every security product transferred from the seller to the buyer is authentic.
				<br />
				<br />
				The minting of the NFT will ensure the ownership and integrity of the security product being purchased and sold. The use of NFTs can ease the burden of auditing and integrity checks for security products through hashing functionalities and chain of custody tracking, ie. the public ledger that records the transfer of each security rule NFT. In regards to the Truss Marketplace, by minting multiple NFTs for each security product, the marketplace can more readily determine traffic metrics and pricing guidelines to ensure that security products can reach as large of an audience as possible without raising the price of the security product being sold or making the security product a profitable commodity or asset.{" "}
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
					Other Marketplace Content
					<br />
				</Strong>
				<br />
				Through a Truss Marketplace, any Truss entity can buy security products directly from the creators of that product. This direct approach should reduce the cost and increase the availability of security solutions. The Truss ecosystem also provides an avenue toward profitability for a large enterprise-level Truss entity’s security team. By allowing these security teams to sell their security knowledge and expertise, the enterprise security team can transition into a profitable investment, instead of the ever-necessary and ever-rising cost of doing business.
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%207%20-%20Security%20information%20supply%20chain.png?v=2023-06-21T04:36:53.469Z" display="block" max-width="700px" align-self="center" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 7. Security information supply chain
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				Figure 7 shows the Truss information supply chain. Each Truss entity will store security events in its own centralized and unique blockchain, recording the security events gathered from their computational environments. These security events can then be shared, or sold, with the larger Truss ecosystem. Any Truss entity can send and receive fully authenticated and integrally sound security data to and from any other global Truss entities within an inter-blockchain network of Truss entities. The larger Truss ecosystem relies on inter-blockchain communications (IBC) between Truss entities to harness the ability to investigate, build, sell, and buy the security knowledge of other Truss entities through the sharing of data across individual blockchains. The Truss ecosystem enhances the security and flexibility of all Truss entities through increased visibility and marketing awareness of global or viral security events. Resulting in organizations having access to enterprise-level security solutions, regardless of their size or industry.
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
				The primary goal of the Truss chain is to support innovation around the creation and dissemination of CTI data and tools to support the creation of a global cyber immune system. This includes technical innovation wherein a diversity of security researchers are given complete freedom to define their security products. This may include offerings such as threat intelligence products containing information about emerging threats, IOCs, and known malicious entity reporting. It could also lead to the development and sale of script-based intelligence tools, Infrastructure as Code (IaC) templates, configuration and security design guides used for compliance guidelines, or even formalized security information and event management (SIEM) add-ons that facilitate the collection and analysis of security event logs from various sources within an organization's formalized security products.
				<br />
				<br />
				The Truss chain supports economic innovation wherein security researchers and organizations are able to explore different models for packaging and selling threat data and products that best suit their unique purpose and intent. For example, one researcher may want to charge a premium for their product because it addresses a complex attack. Another researcher may want to charge a minimal amount and try to sell on volume. Some researchers may want to include a fee that creates an automated "marketing bounty" to use on a specific product. Some researchers may want to allocate a minimal amount to pay for community sales reps while others may want to give away much more of their margin to really encourage the sales team.{" "}
				<br />
				<br />
				Truss supports evolutionary innovation through an open contract security platform that supports the creation and execution of smart contracts in an open and decentralized manner. In an open contract blockchain platform, the underlying infrastructure and protocol layer is designed to enable the execution of smart contracts and enforce their terms and conditions. The Truss platform will provide a set of tools, libraries, and APIs that security researchers can use to create and deploy specialized smart contracts on the Truss chain.
				<br />
				<br />
				One of the key characteristics of the Truss platform is its openness and accessibility. It allows anyone to participate, deploy their own smart contracts, and engage in transactions with other participants. This openness promotes transparency, inclusivity, and equal opportunity for all users, fostering a Truss ecosystem. In turn, this will empower security researchers and organizations to create and execute programmable agreements, automate processes, and build decentralized applications that can disrupt the traditional threat intelligence supply chain and enable new forms of digital interactions to combat cyber attacks.
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
				A Truss global cyber immune system has several requirements that dictate the use of a decentralized architecture. First, there is a global need for cybersecurity and threat intelligence as cyber attacks span national boundaries and affect all industries. To be effective for downstream consumers, threat intelligence surrounding these cyber attacks must be relevant and timely. In addition, due to the limited security budgets of mid-sized organizations, any security offerings must also be cost-effective. The security products developed by researchers also must be secure and trusted. Finally, there must be an incentive for each entity within the ecosystem to participate in the global cyber immune system.{" "}
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
					4. Security and trust:
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
				The production of threat intelligence is complex and requires access to large amounts of organizational data and time on the researcher's part to build analytic case files for unique operations, campaigns, and techniques used by multiple threat actors. It is not reasonable to expect voluntary contributions of time and expertise from researchers and organizational security professionals to produce high-quality threat intelligence material. Organizations, analysts, and security consultants need to be paid for their time, data, and skill. By facilitating an avenue for threat intelligence analysts to monetize their own operations, they can be allowed to provide higher-quality threat assessments to a wider audience. It is the belief of the authors that this will only enhance global security hygiene by providing high-quality security information to larger numbers of organizations while simultaneously lowering the price of this security information.
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
				A principal requirement of the Truss ecosystem is that it must support the distribution of CTI data. This information must be shareable and easily accessed by all organizations participating in the ecosystem. As such, there is a public component of the Truss ecosystem that provides the current state of security events and transparent and auditable security data products. The Truss ecosystem must also support a network of organizations each with its own set of security log data, where much of this data is considered private and must be kept secure. Thus, there is also a private component of the Truss ecosystem that provides for secure storage of organizational security data. This necessitates the creation of a hybrid blockchain, where private organizations will maintain a private blockchain of their own internal security events, but simultaneously allow the organization to share parts of their private data on a public blockchain that is available to all users of the Truss ecosystem.
				<br />
				<br />
				Hybrid blockchains combine elements from both public and private blockchains, aiming to leverage the benefits of both models. They provide a middle ground between the fully decentralized nature of public blockchains and the controlled access and permissions of private blockchains. The first layer consists of a permissionless or public blockchain that maintains the decentralization, transparency, and immutability features. The second layer is a permission-based, or private, blockchain that adds controlled access and additional functionalities.
				<br />
				<br />
				In the Truss ecosystem, participating organizations must manage large quantities of text-heavy logging data. This is in sharp contrast to the small and lightweight transactional data that is traditionally stored in public blockchains. In this situation, a hybrid blockchain can offer cost advantages compared to a fully public blockchain. By utilizing a private blockchain layer for internal or sensitive operations, organizations can reduce the computational and storage costs associated with public blockchain networks.The Truss hybrid chain ecosystem supports the coexistence of internal private permissioned chains and a public permissionless chain. An organization implementing a full Truss blockchain would maintain two or more private blockchain nodes for log collection and threat intelligence ingestion. It would also interact with the public blockchain for reporting and disseminating threat data. In total, the three types of blockchains include the public Truss blockchain, a private blockchain, and finally a master blockchain (Figure 8).
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%208%20-%20The%20Truss%20Blockchain%20Triad.png?v=2023-06-21T04:37:48.984Z" display="block" max-width="700px" align-self="center" />
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
				The public chain is external to the organization. Data from the private chain is shared with the public chain via a customizable smart contract that can redact some or all of the internal or sensitive information contained within the private blockchain. This can allow Truss entities to share as much or as little data about a particular event as they feel comfortable. For example, a DAO may wish all information within their network to be fully transparent as this is a cornerstone of their operational philosophy. Whereas a Fortune 100 enterprise may wish to share very little information as this could jeopardize their shareholder's confidence in protecting their intellectual property.
				<br />
				<br />
				<Strong>
					Private Blockchain
					<br />
				</Strong>
				<br />
				The private blockchain is used by the Truss entity as the production-ready security operations hub for monitoring and detecting all security events generated from the Truss entity’s computational environment. The Private Blockchain is hosted internally within the Truss entity's production environment and is not exposed to the internet. It is possible to maintain several unique nodes hosting a copy of the private chain to assist with large log volume and investigation requirements. The private blockchain node could also replace a Security Information and Event Management (SIEM) appliance as the two share similar functionality.
				<br />
				<br />
				<Strong>
					Master Blockchain
					<br />
				</Strong>
				<br />
				The master blockchain node is optional and is only used as an integrity check and a core source of truth for the Truss entity’s security events recorded within the private blockchain. The master blockchain would be hosted under an additional layer of security from the production environment and from the private blockchain. User access to the master blockchain would be strictly controlled and external network access would be prohibited. Only isolated and heavily regulated service accounts would be allowed to interact with the master blockchain to ensure that the data contained within is uncompromised (Figure 9).
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%209%20-%20The%20Internal%20Blockchain%20Triad%20copy.png?v=2023-06-21T04:38:44.467Z" display="block" max-width="700px" align-self="center" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 9. The Internal Blockchain Triad
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				A hybrid blockchain architecture can facilitate interoperability between Truss entities. By bridging public and private components, hybrid chains enable the exchange of assets, data, or transactions between different blockchain ecosystems or traditional databases. The Truss ecosystem will utilize an IBC mechanism where threat information and other data can pass between the public chain and the private chains, as well as other Truss entities or Truss Marketplaces. Each Truss entity will maintain its own unique security blockchain and can store or transfer data that would be pertinent to the security of other Truss entities. Each entity will be free to initiate connections with one or more Truss blockchains to share its data (Figure 10). This will allow for the safe and secure transfer of potential malicious incidents.
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%2010%20-%20Inter-Chain%20Communication.png?v=2023-06-21T04:39:10.150Z" display="block" max-width="700px" align-self="center" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 10. Inter-Chain Communication
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				Within the Truss Marketplace the power of the IBC technology truly takes root. A Truss entity and a Truss Marketplace would be centralized in nature. However, through IBC each of these entities participates in the larger Truss ecosystem.
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
				The public chain is key to the success of the Truss ecosystem as it provides transparency and visibility into global security events. The public chain must be reachable by security researchers and organizations around the world. In addition, it must be able to support a large number of low-cost transactions, so chain transaction fees must be relatively low.The Truss blockchain can be conceptualized as consisting of three primary layers: the infrastructure layer, the protocol layer, and the application layer (Figure 11).{" "}
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%2011%20-%20Truss%20Blockchain%20Architecture.png?v=2023-06-21T04:40:09.243Z" display="block" align-self="center" max-width="700px" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 11. Truss Blockchain Architecture
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				The application layer is where the actual use cases and applications are built on top of the blockchain infrastructure and protocol layers. This layer represents the user-facing side of the blockchain, where developers create decentralized applications (dApps) that interact with the blockchain network.
				<br />
				<br />
				In the Truss ecosystem, the application layer includes the Truss decentralized marketplace and other blockchain-based applications such as cryptocurrency wallets, and voting platforms. Developers leverage the underlying infrastructure and protocol layers to build applications that utilize the trust, transparency, and decentralized nature of the blockchain. These applications can interact with the blockchain through an application programming interface (API), accessing and modifying the blockchain's data and executing smart contracts.
				<br />
				<br />
				The protocol layer of a blockchain encompasses the rules, algorithms, and protocols that govern the operation and behavior of the blockchain network. It includes elements such as the consensus algorithm, block creation and validation rules, cryptographic algorithms, and transaction validation protocols. The protocol layer also holds the smart contracts that define the rules, terms, and conditions of interactions between Truss entities.{" "}
				<br />
				<br />
				Examples of the features that Truss smart contracts could support include:
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" padding="0px 0px 0px 30px">
				- A native utility token to enable token-based community incentives
				<br />
				- NFT-based security products
				<br />
				- Reputation system to ensure quality security products and services
				<br />
				- Key-based access to encrypted data
				<br />
				- Payment and authentication operations
				<br />
				- Facilitating security product integration operations
				<br />
				- Subscription-based pulling of specific security products
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
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
				For the Truss chain, having all of the security event data stored within an irrefutable chain of events, security researchers can determine with 100% accuracy that a given event took place within a specific environment and under which specific conditions. Through a chain request, a security researcher can query a blockchain for any series of indicators or patterns of events that may have occurred within an organization's computational environment.
				<br />
				<br />
				Truss entities are also free to query other entities and build security products based on their particular skill sets, talents, and missions. These created security products can be used to identify and prevent malicious or unwanted events that match their designed criteria. Individual security practitioners or research teams would be free to search any public chain to hunt for malicious or suspicious indicators or behavior. Their resulting security products will be eligible to be sold or transferred on the open market where the global network of Truss entities can buy and sell security products fitting their needs.
				<br />
				<br />
				A blockchain API is a set of protocols and tools that allow developers to interact with a blockchain network. The Truss blockchain API will support organizations and security analysts wanting to access security event information and security products. An API typically exposes a variety of endpoints or methods that developers can use to interact with the blockchain network. These endpoints can include functions such as submitting transactions, retrieving information about blocks, querying account balances, and executing smart contracts.
				<br />
				<br />
				In a blockchain network, while all nodes in the network can communicate with each other and share information, not all nodes are designed to handle API queries efficiently. A blockchain API query node refers to a specialized node in a blockchain network that is dedicated to handling API queries and serving data to external applications. These nodes are often configured with lightweight software that prioritizes quick data retrieval and processing, making them suitable for serving data to external applications via API requests.
				<br />
				<br />
				By using an API query node, developers can offload the computational and storage demands of serving API queries from the main network nodes, which are primarily responsible for maintaining the integrity and security of the blockchain network. This segregation allows the blockchain network to handle a large volume of API requests without compromising the performance or stability of the core blockchain operations.
				<br />
				<br />
				As the Truss ecosystem grows and queries become computationally expensive it may become necessary for API query node providers to charge a fee. The fee serves two purposes: 1) to dissuade malicious actors from performing a distributed denial of service (DDoS) of the public chain, and 2) to provide the financial and incentive basis to pay Truss entities for the use of their security information.
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
				The private blockchain is used by the Truss entity as the production-ready security operations hub for monitoring and detecting all security events generated from the Truss entity’s computational environment. It also allows for the collection and analysis of internal security log data. The use of a private blockchain within each organization allows for faster operation and ingestion of the data-heavy blockchain data they will be storing. In addition, the number of private nodes hosting the Truss entity’s blockchain can be nearly unlimited within the Truss entity’s internal network architecture. This architectural design allows the Truss entity to create an internal decentralized blockchain that allows for faster data processing and ensures the integrity of its internal security blockchain. An organization participating in the Truss ecosystem would optionally host a private blockchain and a master blockchain. This private blockchain could be hosted internally or outsourced to a service provider. Specific security data would be ingested from the public to the private chain. Similarly, select organizational log data or the results of log analysis could be shared with members of the ecosystem (Figure 12).
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%2012%20-%20The%20Internal%20Blockchain%20Triad.png?v=2023-06-21T04:40:33.748Z" display="block" align-self="center" max-width="700px" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 12. The Internal Blockchain Triad
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
					Logging Security Data in Private Blockchains
					<br />
				</Strong>
				<br />
				Truss will make use of IBC allowing for each individual or organization's private blockchain to share data with other Truss blockchains. This hybrid use of both private and public blockchains allows each Truss entity to maintain and curate their own private blockchain and maintains boundaries and protocols to ensure all blockchains can properly interact.
				<br />
				<br />
				The data stored within each block of the Truss entity’s private blockchain will consist of the information collected from each organization's computational endpoints and network sensors. The data collected from these sensors will be organized based on the time the data is received by the private blockchain node.
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
				A local event log can maintain a record of all network and system events occurring within a computational environment. Through the technological benefits of blockchain technology, this event log can provide irrefutable forensic evidence that an event or an incident occurred. Every event in a computational device or endpoint and its associated metadata can be recorded in the event log. When an incident occurs, the IOCs can be transcribed to security rule sets and written to the chain. These rule entries provide a forensically viable method to track the creation, distribution, and usage of the developed security rule, or product. Should an organization require a greater sense of anonymity, the rule development process can provide an opportunity to anonymize any sensitive internal data the organization does not wish to publish.Figure 13 illustrates how incident information can be transferred from one organization to another. First, the incident metadata values are collected and written into an incident detail table. This table is in turn written to the source organization’s rule repository. This repository is used by the source organization as a rule repository able to trigger upon events or incidents that match the rule’s pattern requirements. Subsequently, the NFT rule can be transferred to another organization through a marketplace, or via direct transfer. This rule can then be used to trigger upon events or incidents that match the rule’s pattern requirements.{" "}
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%2013%20-%20Truss%20Smart%20Contract%20Operations.png?v=2023-06-21T04:40:58.274Z" display="block" max-width="700px" align-self="center" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 13. Truss Smart Contract Operations
				</Em>
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				<Strong font="700 22px/27px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
					Sharing Cyber Threat Data
					<br />
				</Strong>
				<br />
				To participate in the Truss ecosystem, an organization would expose data from its private blockchain allowing researchers to investigate or hunt for malicious activity. An organization would technically still be allowed to participate in the Truss ecosystem without sharing security data, and this would effectively prevent researchers from investigating any security events occurring within that Truss entity. However, if an attack were to occur in that particular Truss entity’s environment, only that entity would be able to know and respond to the incident. Any intelligence collected from the incident would not be immediately shared with the wider ecosystem. This option is available to the Truss entity and it is their prerogative to operate as they deem necessary. Philosophically, all Truss entities become stronger the more they share and there are incentives to be had, both monetarily and philosophically, by participating fully within the Truss ecosystem.Figure 14 shows the technical flow of how an organization might share a security incident it discovers. On the left of the figure, the organization has discovered and collected the incident details. These details are then used to create a Security NFT in the marketplace. This NFT is publicized and other organizations are notified either manually or via their own scanning smart contract. Organizations that deem the security incident relevant then can ingest the threat response details into their systems.
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%2014%20-%20Technical%20Flow%20of%20sharing%20a%20security%20incident.png?v=2023-06-21T04:41:22.332Z" display="block" max-width="700px" align-self="center" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 14. Technical Flow of sharing a security incident
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
				Truss enables organizations to sell their security knowledge and data. This enables them to not only increases their return on investment (ROI) for security operations, which is traditionally a zero-sum investment (until a compromise occurs), but also enables them to share their security expertise with the larger ecosystem, raising the global security awareness and ultimately the security hygiene of all who participate in the ecosystem.
				<br />
				<br />
				Fueled by a growing number of security practitioners vying for the selling of the latest defensive measures, more knowledge will be shared within the ecosystem, resulting in a natural reduction in the number of sustainable malicious actors and the elimination of their sustained offensive capabilities. Furthermore, the more exposed and unsanitized a Truss entity chooses to make its public blockchain, the more visibility researchers can achieve, resulting in more sophisticated detection and defensive measures being made available to the public.
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
					Truss and the Traffic Light Protocol
					<br />
				</Strong>
				<br />
				The Traffic Light Protocol (TLP) [
				<Link
					href="https://www.cisa.gov/news-events/news/traffic-light-protocol-tlp-definitions-and-usage"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					19
				</Link>
				] was created to facilitate the greater sharing of information. TLP is a set of designations used to ensure that sensitive information is shared with the appropriate audience. It employs four colors to indicate the boundaries of different levels of sharing. TLP addresses the sensitivity and security requirements for each of the given levels and will be used to determine the security requirements for a given Truss entity. The TLP protocol security labels are as follows:
				<br />
				<br />
				{"   "}-{" "}
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
					TLP:RED
				</Strong>
				{" "}- Not for disclosure
				<br />
				{"   "}-{" "}
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
					TLP:AMBER
				</Strong>
				{" "}- Limited disclosure. Internal, need to know only limitations
				<br />
				{"   "}-{" "}
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
					TLP:GREEN
				</Strong>
				{" "}- Limited disclosure. Limited to the industry
				<br />
				{"   "}-{" "}
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
					TLP:CLEAR
				</Strong>
				{" "}- No restrictions
				<br />
				<br />
				Different types of nodes may need to employ unique network security requirements to ensure they operate as designed. The public node has the least amount of restrictions as it is designed to be accessible to the public. Any data contained with the public node will be considered TLP:GREEN. Some organizations could set this to TLP:CLEAR as full visibility is encouraged, however, some organizations require even a minor amount of sensitivity over public security information, in this case, the TLP defaults to GREEN.
				<br />
				<br />
				The private node is considered a production system and needs to be protected as any security tool should be protected. It will only be accessible to internal users and access to the data itself will be limited to those individuals or teams which are responsible for ensuring the security of the organization’s systems and applications. Any data contained within a private Truss node is considered TLP:AMBER.
				<br />
				<br />
				The master node is the most critical as any modification to the Master Node can result in a lack of trust in the internal security Truss Blockchain. The Master Node is considered the control node and the sole source of integrity validation for the Truss entity’s security events. All data on this node is considered TLP:RED.
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
					Inter-Blockchain Communication
					<br />
				</Strong>
				<br />
				IBC is a protocol that allows for independent blockchains to perform a connection-oriented, end-to-end, and stateful transfer of blockchain data from one chain to another. The transfer is reliable, orderly, and most important authenticated. IBC transfers can take place within two types of methods, either chain-to-chain transfers (Figure 15) or chain-to-hub transfers (Figure 16). This will allow organizations to directly transfer data between each other, or it can allow organizations or individuals to post their data to a centralized hub, allowing other organizations to integrate that data into their chain.
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%2015%20-%20IBC%20Transfer%20Chain%20to%20Chain.png?v=2023-06-21T04:41:59.008Z" display="block" max-width="700px" align-self="center" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 15. IBC Transfer Chain to Chain
				</Em>
			</Text>
			<Image src="https://uploads.quarkly.io/648b58158bd7e60018594e7d/images/Figure%2016%20-%20IBC%20Transfer%20Chain%20to%20Marketplace%20to%20Chain.png?v=2023-06-21T04:42:09.695Z" display="block" max-width="700px" align-self="center" />
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257" text-align="center">
				<Em>
					Figure 16. IBC Transfer Chain to Marketplace to Chain
				</Em>
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
				Smart contracts [
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
				{" "}The Truss Blockchain contains the data required to facilitate the detection operations of suspicious and malicious events. Researchers and organizations can develop and share or sell configurable smart contracts that enable the scanning of security events written to the private Truss blockchains. These scanning smart contracts will use researcher-developed query rules to identify cyber threats.
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
				{" "}Mitigation operations are designated as operations that prevent, stop, and eradicate security threats from occurring within a Truss entity’s environment or isolated system. Threat mitigation smart contracts will enable organizations to programmatically interact with inline security tools to inject mitigation operations that effectively prevent a known security risk.
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
					Data Sanitization Contracts
					<br />
				</Strong>
				<br />
				When data is moved from the internal private node to the public node, all sensitive information will need to be sanitized before its transfer. Security researchers and organizations will be able to create and share or sell data sanitation rules that can be adopted by organizations on an ad hoc basis.
				<br />
				<br />
				Researchers and organizations can also develop and share or sell sanitization contracts that use rules to sanitize data. These contracts will perform the sanitization operation and will also perform the authentication operations between the private and public internal nodes. All internal private node metadata will be stripped from the data to ensure internal security architecture can not lead to recon of the internal security operation or identification of the originating organization's identity.
				<br />
				<br />
				The transference of data between chains will require the cryptographic authentication of both parties. These smart contracts can be configured for single transfer operations or recurring data transfers. They will allow for the integration and transfer of Truss Marketplace data and tools for individual accounts.
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
					Scanning and Alerting Contracts
					<br />
				</Strong>
				<br />
				The Truss Blockchain contains the data required to facilitate the detection operations of suspicious and malicious events. Researchers and organizations can develop and share or sell configurable smart contracts that enable the scanning of security events written to the private Truss blockchains. These scanning smart contracts will use researcher-developed query rules to identify cyber threats.
				<br />
				<br />
				The Truss ecosystem allows for these query rules to be transferred or shared between all Truss entities. This facilitates a peer-to-peer relationship as well as a profitable relationship where the selling of specific queries could be posted within the Truss Marketplace. Allowing for the global sale of security products and allowing other Truss entities to engage in the public trading of query smart contracts enables the Truss ecosystem to raise global awareness of key security threats.
				<br />
				<br />
				When a purchased query smart contract is run within a buyer’s private blockchain, the rule will query the blockchain for a matching set of indicators based on the query smart contract’s original construction. Example: The query smart contract could only query the private blockchain data for a specific indicator, such as an external source IP address connection, from a single type of data sensor, such as a Windows Event log or an AWS CloudTrail log. All within a specified time frame, such as the last 2 hours, or between January 1, 2023, and June 30, 2023. Given this type of granularity, the rule can be designed to ensure the detection of highly specific security incidents on only those event types specified within the query smart contract.
				<br />
				<br />
				<Strong>
					<Em>
						Live Scans
						<br />
					</Em>
				</Strong>
				<br />
				Live scans will be performed as soon as a new block is written to the blockchain. This will provide near real-time scanning of security events providing an opportunity to detect events as they occur. Live Scans will likely comprise the majority of the query smart contract scanning operations within a given Truss entity’s environment. This may also cause a resource burden on the Private Truss blockchain due to the number and frequency of scanning operations occurring.{" "}
				<br />
				<br />
				<Strong>
					<Em>
						History Scans
						<br />
					</Em>
				</Strong>
				<br />
				History scans are time-based scanning operations that require a designated time frame to allow the scanning smart contract operation to isolate specific blocks within the Private blockchain to be scanned for the designated NFT rule set specifications. Unlike Live Scan operations, historic scanning operations may not experience a sustained demand for returning query results so a large processing overhead may not be required. However, Historic Scans will require a large data requirement as any number of blocks from the recorded history of the Truss entity organization may be requested..
				<br />
				<br />
				<Strong>
					<Em>
						Alerting
						<br />
					</Em>
				</Strong>
				<br />
				When a rule set identifies matching criteria within the Private Blockchain it will trigger another smart contract operation which will initiate an alerting operation. The alerting operation will allow for a variety of configurable platform options. These will include, email, slack, discord, telegram, JIRA tickets, and Aha! tickets, among many others.
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
					Threat Mitigation Contracts
					<br />
				</Strong>
				<br />
				Mitigation operations are designated as operations that prevent, stop, and eradicate security threats from occurring within a Truss entity’s environment or isolated system. Mitigation involves a complex and highly customizable set of operations that require advanced knowledge of security event generation platforms, applications, and systems.
				<br />
				<br />
				To perform mitigation operations, a smart contract will be required to programmatically interact with inline security tools to inject mitigation operations that effectively prevent a known security risk. The security tools that will be interacted with could include laptops, bare-metal servers, firewalls, virtual machines, containers, container hosts, cloud platforms, individual applications, and application platforms, among others.
				<br />
				<br />
				To provide security mitigation operations as quickly as possible, the Truss mitigation operation smart contract would benefit greatly from direct interaction between established security platform tools currently deployed to the majority of global organizations. Allowing the Truss mitigation operations to inject mitigation rules into established security tools allows organizations to maintain the same security tool infrastructure they currently trust, and still experience the benefits of using the Truss ecosystem's global immunity knowledge set.
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
				The token will operate on a public blockchain maintained through a decentralized proof of stake (PoS) consensus model. The purpose of the PoS consensus model is to provide an incentive to encourage the decentralization of all Truss blockchain transactions in line with the decentralized methodology the Truss ecosystem will encourage.
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
				{" "}The fees will be distributed among different participants according to predefined rules. These rules can vary depending on the product or service being offered. In this case, the fees are divided among security product publishers, researchers, data sources, the Truss marketplace, the Truss foundation, and other Truss entities.
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
				To further enhance the ecosystem, the native Truss token will have additional utility beyond fee sharing. For example, the token will enable access to cyber threat intelligence, security services offered by the community, organizational cyber event data that can be used for research, and to support governance of the Truss Foundation.
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
						Minting Security Product NFTs
					</Em>
				</Strong>
				<br />
				<br />
				Security products are added to the Truss Marketplace through the minting of a security product NFT facilitated through the use of the Truss Token.
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
						Publishing and Purchasing Security Products and Tools
						<br />
					</Em>
				</Strong>
				<br />
				Each security product transfer will take place through the exchange of Truss Tokens between the seller and purchaser. The seller will sell the security product NFT, which the purchaser will then use Truss Token to purchase.
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
						Access to Security Services
						<br />
					</Em>
				</Strong>
				<br />
				Utility tokens can grant holders access to specific services or features within a decentralized application or platform. For example, a token might be required to access premium content, use certain functionalities, or participate in voting or governance mechanisms. Sellers may also put up a contract for the use of their services, such as Pentesting operations, Incident Response operations, Security analytics, or even architectural or security consulting services. Each of the services made available will use the Truss Token to facilitate the service agreement.
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
						Access to Organizational Security Data
						<br />
					</Em>
				</Strong>
				<br />
				When organizations open their security events to the public, they open the door to receiving Truss token rewards for the use of their data. This public data is available to a subset of users of the Truss ecosystem and can be used to create security products that can be sold on the Truss Marketplace.
				<br />
				<br />
				Organizations also maintain the right to allow their private blockchain data to be scanned by researchers. Organizations will configure the desired permissions for their data to be accessible by researchers. Researchers can also request access to particular types of data and the requested organization can grant or deny the access in exchange for payment in Truss tokens. If granted access, researchers will be able to scan that data using scanning smart contracts which query the data for specific patterns or values.{" "}
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
						Truss Marketplace
						<br />
					</Em>
				</Strong>
				<br />
				The majority of purchased security products will be performed within the Truss Marketplace. While the Truss chain is public and the direct sale of security products between Truss entities can take place, the Truss marketplace will provide ease of access and product support allowing users to quickly discover trending security products and interact with peers to build stronger relationships. The Truss Marketplace will provide a centralized location for all security products to aid in the ease of discovery of critical security products. The Truss Marketplace will also provide the service of marketing and providing real estate for researchers and security vendors to generate revenue for their security developments.
				<br />
				<br />
				The Truss Marketplace will take a percentage of every transaction that occurs as a result of its hosting and providing connections with its users. This fee is essentially a merchant's fee for providing the location for such a transaction to occur. The Truss Marketplace will also provide paid-for product placement for researchers and security vendors to have center stage within the marketplace UI to sell their critical or time-sensitive products. This placement will require an additional cost, which will be agreed upon prior to the placement of the seller's products.{" "}
				<br />
				<br />
				The Truss Marketplace will provide a number of beneficial services for the industry at large, including hosting a Top 10 Trending Security Product listing which will be continually updated to show the most pressing or time-sensitive security products requested and purchased by the Marketplace clientele. The Truss Marketplace will also maintain a Top Security incident board, highlighting the latest industry news and breach alert notifications to ensure that users are up to date on the latest security incidents as they occur. Additionally, the Truss Marketplace will maintain analytic functionalities to pair organizations with new security products. When new products are developed, organizations will receive customizable notifications of potential new security mitigations being made available through the marketplace.
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
						Token Purchase
						<br />
					</Em>
				</Strong>
				<br />
				Truss tokens can be purchased directly from the Truss marketplace in exchange for Truss products or services or from token holders on secondary exchanges.
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
						The Sale of Security Products and Tools
						<br />
					</Em>
				</Strong>
				<br />
				For every purchase of a security product, either from within the Truss Marketplace or from a peer-to-peer transaction, security products will be sold from one entity to another. Within the Truss Marketplace, every sale will use the Truss token as the legal tender. Each transaction will be broken down into the following receivers of funds.
				<br />
				<br />
				{"   "}- The seller of the product will receive the bulk of the transaction.
				<br />
				{"   "}- The suppliers of data used by the developer to produce the security product will receive a % of the rewards from any sale of the security product.
				<br />
				{"   "}- The Truss Marketplace will receive a small % amount of the transaction as the marketplace provider. The Truss development team will determine the amount of the % fee on a recurring basis to ensure a healthy balance. The funds paid to the marketplace will be used to continue hosting Truss Marketplace and support its growth.
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
						Receiving Tokens From Peer-to-peer Selling
						<br />
					</Em>
				</Strong>
				<br />
				Security Products are not required to be sold within the Truss Marketplace. Should this occur, the marketplace has no authority or claim to the transfer of funds. As such, it will be the duty of the seller and buyer of the security product to come to their terms when negotiating the transfer of funds and products. However, a fee will still be required for the usage of the Truss Protocol.{" "}
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
						Providing Services{" "}
						<br />
					</Em>
				</Strong>
				<br />
				Tokens can also be received by sellers of security services as well as from products. Security services such as consulting, advising, operational analytics, incident response operations, and many others are common within the security industry. The Truss Token can be used as payment to procure the service capabilities from others, and these transaction payments will fall under the same rules and regulations as the sale of security products and tools.
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
						Sharing Security Data
						<br />
					</Em>
				</Strong>
				<br />
				To encourage entities to maintain a public blockchain of their security events, i.e. for use by independent researchers, they will be paid, in Truss token, a percentage of the total paid value by the requesting entity for each query request upon their public blockchain. This reward will be provided on a sliding scale based on how much information is available within the public chain. For example:
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
						Entity A
					</Span>
				</Strong>
				{" "}- is a fully transparent Decentralized Autonomous Organization (DAO) and they maintain a 1:1 public chain of their private chain or rather a fully transparent public security chain. This entitles them to 100%* (minus Truss Marketplace, Truss Foundation, and Researcher product development fees) of the paid Truss token paid by the requesting entity.
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
						Entity B
					</Span>
				</Strong>
				{" "}- is an enterprise organization and they have certain stakeholder requirements or sensitive information contained within their security event logs which cannot be shared publicly. However, they do have their public chain smart contract sanitize several items from each security event which allows them to share a portion of their security events with a public chain. When a requesting entity pays for a query to this chain, Entity B will receive a % portion of the paid requesting value. I.e. 50-90% of the paid requesting cost. This sliding scale is determined based on the amount of raw data that is present within the chain. The more sanitized data contained within the public chain, the smaller percentage of the paid request fee will be given to Entity B.{" "}
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
					Entity C
				</Strong>
				{" "}- participates in the purchasing of Truss Marketplace security products, however, they do not maintain a public chain. In return, they will not receive any Truss token for the scanning of their public chain as they do not maintain a public chain.
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
				A principal goal of Truss is to create a Decentralized Autonomous Security protocol that is not dependent on a centralized intermediary. In addition, it is understood that the Truss protocol will only be as powerful as the community of researchers contributing data and tools and the community of IT users and organizations purchasing the data. To this end, the use of a custom Truss token creates an economic model that does not rely on a trusted intermediary but instead relies on decentralized trust among a diverse group of community members.
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
					1. Decentralization:
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
					2. Protocol Evolution:
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
					3. Community Engagement:{" "}
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
					4. Conflict Resolution:
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
					5. Long-Term Sustainability:
				</Strong>
				{" "}Tokens are often tied to the economic aspects of a blockchain ecosystem. A governance model helps ensure the long-term sustainability of the token and the network by addressing economic factors such as inflation, token supply, token distribution, and economic incentives. It enables stakeholders to make informed decisions about these economic parameters and maintain the stability and viability of the token and its ecosystem.
			</Text>
			<Text margin="0px 0px 45px 0px" font="normal 300 18px/1.5 --fontFamily-sans" color="#505257">
				By implementing a governance model, Truss aims to foster decentralization, transparency, and community participation. The model should allow for the efficient management and evolution of the token and the associated Truss ecosystem.
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