---
layout: post
title: picture frame
category: think
---
One inch picture frame, from Anne Lamott (bird by bird)

write what you can see through a one-inch picture frame + literal interpretation of how tiny it really is (one paragraph and we're done)

(maybe here add an interaction for encouragement - a tiny progress bar?)

TODO: make timestamp more useful, redo this in angular

<style>
.picture-frame {
	border: 1px solid black;
	width: 10em;
	height: 10em;
	padding: 0.25em;
	font: @font;
}
.picture-frame:focus {
	outline: none;
	border: 1px solid green;
}
.pf--done {
	position: relative;
	border-bottom: 1px solid #eee;
	padding: 0.25em;
	width: 50%;
	margin-bottom: 1em;
	display: block;
}
.pf--done p {
	font-family: 'IM Fell DW Pica', serif;
}
.pf__control {
	position: absolute;
	right: 0;
	display: none;
}
.pf__control button {
	border: 1px solid #ccc;
	padding: 0.5em;
	margin-right: 0.5em;
	font-family: "Asap";
	text-transform: uppercase;
	background: transparent;
	letter-spacing: 0.05em;
}
.pf__control button:focus {
	outline: none;
}
.pf__edit:hover {
	border: 1px solid green;
}
.pf__delete:hover {
	border: 1px solid red;
}
</style>

<textarea class="picture-frame">
</textarea>


<div class="pf__finished"></div>