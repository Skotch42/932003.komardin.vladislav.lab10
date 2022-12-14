function sliden()
{
    document.getElementById('wall').id = 'slidenwall';
}

function on()
{
    if (document.getElementById('off'))
    {
		document.getElementById('off').id = 'light_on';
		document.getElementById('magician').style.display = 'block';
		document.getElementById('foc').style.display = 'block';
    }
	else
	{
		document.getElementById('light_on').id = 'off';
		document.getElementById('magician').style.display = 'none';
		document.getElementById('foc').style.display = 'none';
	}
}

function focusing()
{
    document.getElementById('rabbit').id = 'rabbit_new';
    document.getElementById('pigeon_new').id = 'pigeon';
}

function pigeon()
{
    document.getElementById('rabbit_new').id = 'rabbit';
    document.getElementById('pigeon').id = "pigeon_new";
}