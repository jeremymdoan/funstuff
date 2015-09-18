// ==UserScript==
// @name           Glock Replace
// @namespace      http://www.esvbible.org
// @include        http://www.esvbible.org/*
// ==/UserScript==

textNodes = document.evaluate(
"//span", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
var searchRE = new RegExp('LORD','gi');
var newWord = 'Glock';
for (var i=0;i<textNodes.snapshotLength;i++) {
var node = textNodes.snapshotItem(i);
node.innerText = node.innerText.replace(searchRE, newWord);
}
