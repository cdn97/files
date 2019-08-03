
// LOCAL STORAGE ------------------------------------------------------------------------------------------
function setLocal(key, valueObj)
{
	localStorage.setItem(key, JSON.stringify(valueObj));
}

function getLocal(key)
{
	if (localStorage.getItem(key) && localStorage.getItem(key) !== 'undefined')
	{
		return JSON.parse(localStorage.getItem(key));
	}
	return null;
}

// CHECK RESPONSES TYPE ------------------------------------------------------------------------------------------
function isHtmlResponse(heradersString)
{
	return heradersString.indexOf('text/html') > 0;
}

function isJsonResponse(heradersString)
{
	let response = heradersString.includes('text/json') || heradersString.includes('application/json')
	return response;
}