class BottomLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
	    return React.createElement("div", null, 
	    	React.createElement("h5", null, "The Bottom Line"),
	    	React.createElement("h6", null, "This is a space for me to start studying company financials, so I can begin to learn a little more about the language of business."),
	    	React.createElement("div", {className:"company-financials"}, 
	    		React.createElement("table", null, 
	    			React.createElement("tbody", null, 
		    			React.createElement("tr", null, 
		    				React.createElement("td", null, "Name"),
		    				React.createElement("td", null, "Net Sales"),
		    				React.createElement("td", null, "Net Income"),
		    				React.createElement("td", null, "Basic EPS"),
		    				React.createElement("td", null, "Cash Dividends Declared Per Share"),
		    				React.createElement("td", null, "Total Cash, Cash Eq, Marketable Sec"),
		    				React.createElement("td", null, "Total Assets"),
		    				React.createElement("td", null, "Non-Current Portion of Term Debt"),
		    				React.createElement("td", null, "Other Non-Current Liabilities"),
	    				),
	    				React.createElement("tr", null, 
		    				React.createElement("td", null, "Apple Inc."),
		    				React.createElement("td", null, "265,595"),
		    				React.createElement("td", null, "59,531"),
		    				React.createElement("td", null, "12.01"),
		    				React.createElement("td", null, "2.72"),
		    				React.createElement("td", null, "237,100"),
		    				React.createElement("td", null, "365,725"),
		    				React.createElement("td", null, "93,735"),
		    				React.createElement("td", null, "45,180"),
	    				)
    				)	
    			)
    		)
    	);
	}
}

const bottomLine = document.querySelector('#bottom-line');
ReactDOM.render(e(BottomLine), bottomLine);