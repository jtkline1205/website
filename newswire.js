function NewsLink(linkHref, linkText) {
	return React.createElement("li", null, 
		  		React.createElement("a", 
		  			{href:linkHref, target:"_blank"}, 
		  			linkText
	  			) 
  			);
}

class Newswire extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
	    return React.createElement(
		  "div",
		  null,
		  React.createElement("h5", null, "Newswire"),
		  React.createElement("h6", null, "This is a space for me to log events that have occurred at the companies I've been part of."),
  		  React.createElement("h6", null,
	  		  	React.createElement("a", {href: "http://www.yodle.com", target:"_blank"}, "Yodle"),
	  		  	" / ",
	  		  	React.createElement("a", {href: "http://www.web.com", target:"_blank"}, "Web.com"),
  			),
		  React.createElement("ul", null, 
  			NewsLink("http://news.wjct.org/post/jacksonville-based-webcom-names-sharon-rowlands-new-ceo", "Jacksonville-based Web.com names Sharon Rowlands as new CEO"),
  			NewsLink("https://www.bizjournals.com/jacksonville/news/2018/10/10/web-com-shareholders-decide-on-2-24-billion-sale.html", "Web.com shareholders decide on $2.24B sale"),
  			NewsLink("https://www.marketwatch.com/story/webcom-to-be-acquired-by-siris-capital-in-all-cash-deal-valued-at-about-2-billion-2018-06-21", "Web.com to be acquired by Siris Capital in all cash deal valued at $2B"),
  			NewsLink("https://globenewswire.com/news-release/2017/11/01/1172601/0/en/Web-com-Announces-Acquisition-of-Acquisio-A-Leader-in-Online-Marketing-Artificial-Intelligence.html", "Web.com announces acquisition of Acquisio"),
  			NewsLink("https://therealdeal.com/2017/03/03/yodle-sublets-56k-sf-at-330-west-34th-street-to-outcome-health/", "Yodle sublets 56k SF at 330 W 34th St to Outcome Health"),
  			NewsLink("https://www.forbes.com/sites/knowledgewharton/2016/04/07/yodle-how-a-startup-went-from-birth-to-buyout/#251b4a597961", "Yodle: how a startup went from birth to buyout"),
  			NewsLink("https://www.bizjournals.com/newyork/news/2016/02/11/yodle-agrees-to-342takeover-offer-from-web-com.html", "Yodle agrees to $342M takeover from Web.com"),
  			NewsLink("https://businessfacilities.com/2015/04/yodle-expands-in-new-york-city/", "Yodle expands in NYC"),
  			NewsLink("https://therealdeal.com/2014/07/28/ad-platform-yodle-sets-up-hq-at-vornados-330-west-34th/", "Yodle sets up HQ at Vornado's 330 W 34th"),
  			NewsLink("https://www.bizjournals.com/newyork/news/2013/03/04/yodle-acquires-lighthouse-practice.html", "Yodle acquires Lighthouse practice management group"),
			),
		  React.createElement("hr", null, null),
		  React.createElement("h6", null, 
		  	React.createElement("a", {href:"https://www.sapientgovernmentservices.com/us/about-us.html", target:"_blank"}, "Sapient Government Services")
		  ),
		  React.createElement("ul", null, 
		  	NewsLink("https://www.adweek.com/agencies/publicis-groupe-merges-global-digital-networks-sapient-and-razorfish-174699/", "Publicis merges Sapient and Razorfish"),
		  	NewsLink("https://adage.com/article/agency-news/publicis-acquire-digital-giant-sapient-3-7-billion/295689/", "Publicis acquires digital giant Sapient for $3.7 billion"),
		  	NewsLink("https://www.businesswire.com/news/home/20140210006454/en/Sapient-Expands-Government-Services-Footprint-Acquisition-OnPoint", "Sapient expands Government Services with acquisition of OnPoint")
		  	)
		  );
	}
}

const newswire = document.querySelector('#newswire');
ReactDOM.render(e(Newswire), newswire);