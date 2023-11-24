$(document).ready(function() {
	var path = '';
	
	if($('.wy-side-nav-search .icon.icon-home').attr('href') == '../index.html') path = '../';
	else if($('.wy-side-nav-search .icon.icon-home').attr('href') == '../../index.html') path = '../../';
		
	$('.wy-side-nav-search .icon.icon-home').html('<img src="' + path + '_static/logo_white.png" class="logo" alt="Logo" style="width:110px;">');
	$('.wy-breadcrumbs .icon.icon-home').html('biomovies');

	// releases
	if($( "h1" ).text().indexOf('Releases') != -1) {
		var count = 1;
		// get data from github releases
		fetch('https://api.github.com/repos/gbayarri/biomovies-app/releases')
			.then(res => res.json())
			.then(json => {

				json = json.reverse();

				$( ".toctree-l1.current" ).append(`<ul></ul>`);

				json.forEach(item => {

					// format date
					const d = new Date(item.published_at)
					const publish_date = `${(d.getDate() < 10 ? '0' : '') + d.getDate()}/${(d.getMonth() < 9 ? '0' : '') + (parseInt(d.getMonth()) + 1)}/${d.getFullYear()}`

					// format body
					const body = item.body.split('\r\n')

					let type = ''
					let list_body = []

					// get type and list body
					body.forEach((item, index) => {
						if(index == 0) {
							if(item.indexOf('Alpha') !== -1) type = 'Alpha'
							else if(item.indexOf('Beta') !== -1) type = 'Beta'
							else if(item.indexOf('Release') !== -1) type = 'Release'
							else type = 'Unknown'							
						} else {
							if(item.length && item.indexOf('Full Changelog') === -1) list_body.push(`<li><p>${item.replace(/\- /g, '')}</p></li>`)
						}
					})

					// get assets
					let assets = ''
					let label = ''
					let icon = ''
					item.assets.forEach(asset => {
						if(asset.name.indexOf('dmg') !== -1 && asset.name.indexOf('arm64') !== -1) {
							label = 'Apple Silicon'
							icon = '<i class="fa-brands fa-apple"></i>'
						}
						else if(asset.name.indexOf('dmg') !== -1 && asset.name.indexOf('arm64') === -1) {
							label = 'Apple Universal'
							icon = '<i class="fa-brands fa-apple"></i>'
						}
						else if(asset.name.indexOf('exe') !== -1) {
							label = 'Windows'
							icon = '<i class="fa-brands fa-windows"></i>'
						}
						else if(asset.name.indexOf('AppImage') !== -1) {
							label = 'Linux AppImage'
							icon = '<i class="fa-brands fa-linux"></i>'
						} else if(asset.name.indexOf('deb') !== -1) {
							label = 'Linux Deb'
							icon = '<i class="fa-brands fa-linux"></i>'
						}

						assets += `<a class="btn btn-primary" data-toggle="collapse" href="${asset.browser_download_url}">${icon} ${label}</a>`
					})

					// add release section
					$( "h1" ).after(`
						<section id="id${count}">
						<h2>${item.tag_name}<a class="headerlink" href="#id${count}" title="Link to this heading"></a></h2>
						<p>${publish_date} - <a class="reference external" href="${item.html_url}">${type} <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i></a></p>
						<ul class="simple">
							${list_body.join('')}
						</ul>
						</section>

						<div class="downloads-container">${assets}</div>
					`);

					// add link to sidebar
					$( ".toctree-l1.current ul" ).prepend(`
						<li class="toctree-l2"><a class="reference internal" href="#id${count}">${item.tag_name}</a></li>
					`);

					count++;
				})

			}).catch(function() {
				console.log("???")
				// if no data available from github releases show error message
				$( "h1" ).after(`
					<p>Unable to connect to GitHub Source code</p>
				`);
			});
	}


});