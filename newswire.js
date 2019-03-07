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
		  	React.createElement("li", null, 
		  		React.createElement("a", 
		  			{href:"http://news.wjct.org/post/jacksonville-based-webcom-names-sharon-rowlands-new-ceo", target:"_blank"}, 
		  			"Jacksonville-based Web.com names Sharon Rowlands as new CEO"
	  			) 
  			),
  			React.createElement("li", null, 
		  		React.createElement("a", 
		  			{href:"https://www.bizjournals.com/jacksonville/news/2018/10/10/web-com-shareholders-decide-on-2-24-billion-sale.html", target:"_blank"}, 
		  			"Web.com shareholders decide on $2.24B sale"
	  			) 
  			),
  			React.createElement("li", null, 
		  		React.createElement("a", 
		  			{href:"https://www.marketwatch.com/story/webcom-to-be-acquired-by-siris-capital-in-all-cash-deal-valued-at-about-2-billion-2018-06-21", target:"_blank"}, 
		  			"Web.com to be acquired by Siris Capital in all cash deal valued at $2B"
	  			) 
  			),
  			React.createElement("li", null, 
		  		React.createElement("a", 
		  			{href:"https://globenewswire.com/news-release/2017/11/01/1172601/0/en/Web-com-Announces-Acquisition-of-Acquisio-A-Leader-in-Online-Marketing-Artificial-Intelligence.html", target:"_blank"}, 
		  			"Web.com announces acquisition of Acquisio"
	  			) 
  			),
  			React.createElement("li", null, 
		  		React.createElement("a", 
		  			{href:"https://therealdeal.com/2017/03/03/yodle-sublets-56k-sf-at-330-west-34th-street-to-outcome-health/", target:"_blank"}, 
		  			"Yodle sublets 56k SF at 330 W 34th St to Outcome Health"
	  			) 
  			),
  			React.createElement("li", null, 
		  		React.createElement("a", 
		  			{href:"https://www.forbes.com/sites/knowledgewharton/2016/04/07/yodle-how-a-startup-went-from-birth-to-buyout/#251b4a597961", target:"_blank"}, 
		  			"Yodle: how a startup went from birth to buyout"
	  			) 
  			),
  			React.createElement("li", null, 
		  		React.createElement("a", 
		  			{href:"https://www.bizjournals.com/newyork/news/2016/02/11/yodle-agrees-to-342takeover-offer-from-web-com.html", target:"_blank"}, 
		  			"Yodle agrees to $342M takeover from Web.com"
	  			) 
  			),
  			React.createElement("li", null, 
		  		React.createElement("a", 
		  			{href:"https://businessfacilities.com/2015/04/yodle-expands-in-new-york-city/", target:"_blank"}, 
		  			"Yodle expands in NYC"
	  			) 
  			),
  			React.createElement("li", null, 
		  		React.createElement("a", 
		  			{href:"https://therealdeal.com/2014/07/28/ad-platform-yodle-sets-up-hq-at-vornados-330-west-34th/", target:"_blank"}, 
		  			"Yodle sets up HQ at Vornado's 330 W 34th"
	  			) 
  			),
  			React.createElement("li", null, 
		  		React.createElement("a", 
		  			{href:"https://www.bizjournals.com/newyork/news/2013/03/04/yodle-acquires-lighthouse-practice.html", target:"_blank"}, 
		  			"Yodle acquires Lighthouse practice management group"
	  			) 
  			)


			),
		  React.createElement("hr", null, null),
		  React.createElement("h6", null, 
		  	React.createElement("a", {href:"https://www.sapientgovernmentservices.com/us/about-us.html", target:"_blank"}, "Sapient Government Services")
		  ),
		  React.createElement("ul", null, 
		  		React.createElement("li", null, 
			  		React.createElement("a", 
			  			{href:"https://www.adweek.com/agencies/publicis-groupe-merges-global-digital-networks-sapient-and-razorfish-174699/", target:"_blank"}, 
			  			"Publicis merges Sapient and Razorfish"
		  			) 
	  			),
	  			React.createElement("li", null, 
			  		React.createElement("a", 
			  			{href:"https://adage.com/article/agency-news/publicis-acquire-digital-giant-sapient-3-7-billion/295689/", target:"_blank"}, 
			  			"Publicis acquires digital giant Sapient for $3.7 billion"
		  			) 
	  			),
	  			React.createElement("li", null, 
			  		React.createElement("a", 
			  			{href:"https://www.businesswire.com/news/home/20140210006454/en/Sapient-Expands-Government-Services-Footprint-Acquisition-OnPoint", target:"_blank"}, 
			  			"Sapient expands Government Services with acquisition of OnPoint"
		  			) 
	  			)
		  	)
			
		  
		  );
	}
}

const newswire = document.querySelector('#newswire');
ReactDOM.render(e(Newswire), newswire);