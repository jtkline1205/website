import React from "react"

export default class BottomLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
  	return <div>
		<h5>The Bottom Line</h5>
		<h6>This is a space for me to start studying company financials, so I can begin to learn a little more about the language of business.</h6>
		<div className="companyFinancials">
			<table>
				<tbody>
				<tr>
					<td>Name</td>
					<td>Net Sales</td>
					<td>Net Income</td>
					<td>Basic EPS</td>
					<td>Cash Dividends Declared Per Share</td>
					<td>Total Cash, Cash Eq, Marketable Sec</td>
					<td>Total Assets</td>
					<td>Non-Current Portion of Term Debt</td>
					<td>Other Non-Current Liabilities</td>
				</tr>
				<tr>
					<td>Apple Inc.</td>
					<td>265,595</td>
					<td>59,531</td>
					<td>12.01</td>
					<td>2.72</td>
					<td>237,100</td>
					<td>365,725</td>
					<td>93,735</td>
					<td>45,180</td>
				</tr>
				</tbody>
			</table>
		</div>
	</div>
	}
}