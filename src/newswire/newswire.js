import React from 'react'

const webDotComLinks = [
	{
		href:"http://news.wjct.org/post/jacksonville-based-webcom-names-sharon-rowlands-new-ceo",
		text:"Jacksonville-based Web.com names Sharon Rowlands as new CEO"
	},
    {
        href:"https://www.bizjournals.com/jacksonville/news/2018/10/10/web-com-shareholders-decide-on-2-24-billion-sale.html",
        text:"Web.com shareholders decide on $2.24B sale"
    },
    {
		href:"https://www.marketwatch.com/story/webcom-to-be-acquired-by-siris-capital-in-all-cash-deal-valued-at-about-2-billion-2018-06-21",
		text:"Web.com to be acquired by Siris Capital in all cash deal valued at $2B"
	},
    {
		href:"https://globenewswire.com/news-release/2017/11/01/1172601/0/en/Web-com-Announces-Acquisition-of-Acquisio-A-Leader-in-Online-Marketing-Artificial-Intelligence.html",
		text:"Web.com announces acquisition of Acquisio"
	},
    {
		href:"https://therealdeal.com/2017/03/03/yodle-sublets-56k-sf-at-330-west-34th-street-to-outcome-health/",
		text:"Yodle sublets 56k SF at 330 W 34th St to Outcome Health"
	},
	{
		href:"https://www.forbes.com/sites/knowledgewharton/2016/04/07/yodle-how-a-startup-went-from-birth-to-buyout/#251b4a597961",
		text:"Yodle: how a startup went from birth to buyout"
	},
	{
		href:"https://www.bizjournals.com/newyork/news/2016/02/11/yodle-agrees-to-342takeover-offer-from-web-com.html",
		text:"Yodle agrees to $342M takeover from Web.com"
	},
	{
		href:"https://businessfacilities.com/2015/04/yodle-expands-in-new-york-city/",
		text:"Yodle expands in NYC"
	},
	{
		href:"https://therealdeal.com/2014/07/28/ad-platform-yodle-sets-up-hq-at-vornados-330-west-34th/",
		text:"Yodle sets up HQ at Vornado's 330 W 34th"
	},
	{
		href:"https://www.bizjournals.com/newyork/news/2013/03/04/yodle-acquires-lighthouse-practice.html",
		text:"Yodle acquires Lighthouse practice management group"
	}
];

const sapientLinks = [
    {
        href: "https://www.adweek.com/agencies/publicis-groupe-merges-global-digital-networks-sapient-and-razorfish-174699/",
        text: "Publicis merges Sapient and Razorfish"
    },
	{
		href:"https://adage.com/article/agency-news/publicis-acquire-digital-giant-sapient-3-7-billion/295689/",
		text:"Publicis acquires digital giant Sapient for $3.7 billion"
	},
	{
		href:"https://www.businesswire.com/news/home/20140210006454/en/Sapient-Expands-Government-Services-Footprint-Acquisition-OnPoint",
		text:"Sapient expands Government Services with acquisition of OnPoint"
	}
]

function NewsLink(props) {
	return <li>
		<a href={props.linkHref} target="_blank">
			{props.linkText}
		</a>
	</li>
}

export default class Newswire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
  	return <div>
		<h5>Newswire</h5>
		<h6>This is a space for me to log events that have occurred at the companies I've been part of.</h6>
		<h6>
			<a href="http://www.yodle.com" target="_blank">Yodle</a>
			/
			<a href="http://www.web.com" target="_blank">Web.com</a>
		</h6>
		<ul>
			{
                webDotComLinks.map(function(link, index) {
					return <NewsLink key={index} linkHref={link.href} linkText={link.text}/>
				})
			}
		</ul>
		<h6>
			<a href="https://www.sapientgovernmentservices.com/us/about-us.htm" target="_blank">
				Sapient Government Services
			</a>
		</h6>
		<ul>
			{
				sapientLinks.map(function(link, index) {
					return <NewsLink key={index} linkHref={link.href} linkText={link.text}/>
				})
            }
		</ul>
	</div>
	}
}