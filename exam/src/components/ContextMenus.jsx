import React from "react";

function ContextMenus(props) {
	
	const contact = props.contact; // Receive the contact object

	const menuClick = (e) => {
		console.log("You clicked on '" + e.target.textContent + "'");
		// Access the contact and contactId here and do whatever you need with them
		
		console.log("Contact Name:", contact);
	};
	return (
		<ul
			className="right-menus"
			style={{ top: props.postion.y, left: props.postion.x }}
		>
			<li onClick={menuClick}>
				Edit
			</li>
			<li onClick={menuClick}
				style={{ color: 'red', }}
			>
			Delete
			</li>
		</ul>
	);
}

export default ContextMenus;