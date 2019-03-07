function Book(props) {
	return React.createElement("td", null, 
		  			React.createElement("img", {src: props.imgUrl, width: "100px"}, null),
		  			React.createElement("br", null, null),
                	props.description
  				);
}

class Bookshelf extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
	    return React.createElement(
		  "div",
		  {className: "software-development-bookshelf"},
		  React.createElement("h5", null, "My Bookshelf"),
		  React.createElement("h6", null, "Here's what I'm reading:"),
		  React.createElement("table", {className: "bookshelf-table"}, 
	  		React.createElement("tbody", null, 
			  	React.createElement("tr", null, 
			  		Book({
			  			imgUrl:"images/tdd.jpeg", 
			  			description:"I've started this and I'm excited to learn more about how the 3 steps of TDD lead to great software."
			  		}),
			  		Book({
			  			imgUrl:"images/continuous_delivery.jpeg", 
			  			description:"Continuous Integration and Continuous Delivery have been done in different ways at the companies I've worked. I look forward to reading through this one to see if there are best practices that can be followed for CD, no matter which technologies or tools are being used."
			  		}),
	  				Book({
	  					imgUrl:"images/essential_scrum.jpeg", 
	  					description:"I started this one back when I was working as ScrumMaster for one of the teams I was on. It was helpful as a primer on the different Scrum ceremonies and the different roles there are on a Scrum team. I definitely want to finish this one so I can help identify issues with Scrum teams I'm a part of in the future and help correct them."
	  				}),
	  				Book({
	  					imgUrl:"images/clean_code.jpeg", 
	  					description:"I've really enjoyed working through this one; I haven't finished it but it has a lot of good reference points for how clean code should look in general. Developers have varying opinions about clean code, but I think it's cool how this book attempts to set a baseline."
	  				}),
	  				Book({
	  					imgUrl:"images/design_patterns.jpeg", 
	  					description:"This one has been fun to step through - I especially enjoy the quirky examples that accompany each pattern, and the different types of sections in the book (like Q&A's, interviews, diagrams) that help keep the content fresh and exciting. Maybe after I finish this I'll check out the Gang of Four book on Design Patterns."
	  				}),
				),
				React.createElement("tr", null, 
					Book({
						imgUrl:"images/coders_at_work.jpeg",
						description:"I haven't started this yet but it sounded like it would be a cool window into different types of software professions."
					}),
					Book({
						imgUrl:"images/pro_git.jpeg",
						description:"This book has been helpful as I've gotten started learning Git, having come from an SVN background. I've preferred to use Git on the command line rather than using a tool like SourceTree, so having a reference like this is helpful."
					}),
					Book({
						imgUrl:"images/five_dysfunctions.jpeg",
						description:"I thought this was an interesting take on the common issues affecting teams both large and small, executive and non-executive - even though the account was fictional, the constructs surrounding team dysfunctions were very real and I could apply them mentally to teams I have been on in the past."
					}),
					Book({
						imgUrl:"images/clean_code.jpeg",
						description:"I didn't have much of a formal financial education, so investing and money management has been a new concept for me. I've heard a lot about Benjamin Graham and his ideas about value investing, and how his ideas have stood the test of time. I intend to finish this one as soon as possible."
					})
				)
			)
		  )
		  );
	  		
	}
}




const bookshelf = document.querySelector('#bookshelf');
ReactDOM.render(e(Bookshelf), bookshelf);