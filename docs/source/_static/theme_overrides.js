$(document).ready(function() {
	var path = '';
	
	if($('.wy-side-nav-search .icon.icon-home').attr('href') == '../index.html') path = '../';
	else if($('.wy-side-nav-search .icon.icon-home').attr('href') == '../../index.html') path = '../../';
		
	$('.wy-side-nav-search .icon.icon-home').html('<img src="' + path + '_static/logo_white.png" class="logo" alt="Logo" style="width:110px;">');
	$('.wy-breadcrumbs .icon.icon-home').html('biomovies');

	// changelog
	if($( "h1" ).text().indexOf('Releases') != -1) {
		var count = 1;
		fetch('https://api.github.com/repos/gbayarri/biomovies-src/releases')
			.then(res => res.json())
			.then(json => {

				json = json.reverse();

				json.forEach(item => {

					const d = new Date(item.published_at)
					const publish_date = `${(d.getDate() < 10 ? '0' : '') + d.getDate()}/${(d.getMonth() < 9 ? '0' : '') + (parseInt(d.getMonth()) + 1)}/${d.getFullYear()}`

					const body = item.body.split('\r\n')

					let type = ''
					let list_body = []

					const full_changelog = body.filter(item => item.indexOf('Full Changelog') !== -1)[0].split(': ')

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

					$( "h1" ).after(`
						<section id="id${count}">
						<h2>${item.tag_name}<a class="headerlink" href="#id${count}" title="Link to this heading"></a></h2>
						<p>${publish_date} - <a class="reference external" href="${item.html_url}">${type}  <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i></a></p>
						<ul class="simple">
							${list_body.join('')}
						</ul>
						<p><a href="${full_changelog[1]}"><strong>Full Changelog</strong>  <i class="fa-solid fa-up-right-from-square" style="font-size: 12px;"></i></a></p>
						</section>
					`);

					$( ".toctree-l1.current ul" ).prepend(`
						<li class="toctree-l2"><a class="reference internal" href="#id${count}">${item.tag_name}</a></li>
					`);

					count++;
				})

			}).catch(function() {
				$( "h1" ).after(`
					<p>Unable to connect to GitHub Source code</p>
				`);
			});
	}


});