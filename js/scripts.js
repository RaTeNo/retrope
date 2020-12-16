$(() => {
	AOS.init();
	// Новости
	$('.news .list .item').hover(function () {
		let parent = $(this).closest('.news'),
			index = $(this).data('index')

		parent.find('.list .item').removeClass('hover')
		$(this).addClass('hover')

		parent.find('.news_details .item').hide()
		parent.find('.news_details .item[data-index="' + index + '"]').fadeIn(200)
	}, function () {
		let parent = $(this).closest('.news'),
			index = $(this).data('index')

		parent.find('.news_details .item:not([data-index="' + index + '"])').hide()
	})


	// INVEST IN OUR TEEM
	$('.invest .slider').owlCarousel({
		nav: true,
		dots: false,
		loop: false,
		smartSpeed: 500,
		startPosition:2,
		responsive: {
			0: {
				items: 1,
				margin: 20,
				startPosition:7
			},
			480: {
				items: 2,
				margin: 20,
				startPosition:6
			},
			768: {
				items: 3,
				margin: 20,
				startPosition:6
			},
			1024: {
				items: 5,
				margin: 20,
				startPosition:4
			},
			1280: {
				items: 6,
				margin: 20,
				startPosition:3
			}
		},
		onInitialized: event => {
			setTimeout(() => {
				setHeight($(event.target).find('.milestones, .finance'))
			}, 100)
		},
		onResized: event => {
			$(event.target).find('.milestones, .finance').height('auto')

			setTimeout(() => {
				setHeight($(event.target).find('.milestones, .finance'))
			}, 100)
		}
	})


	// Анимация заголовка в первом блоке
	typeEffect(document.querySelector('.typeEffect1'), 75)
})



$(window).on('load', () => {
	// Фикс. шапка
	headerInit = true

	headerInit && $(window).scrollTop() > 0
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')


	// Parallax
	if (!is_touch_device()) {
		if ($('#parallax1').length) {
			let scene = document.getElementById('parallax1'),
				parallax = new Parallax(scene)
		}

		if ($('#parallax2').length) {
			let scene = document.getElementById('parallax2'),
				parallax = new Parallax(scene)
		}

		if ($('#parallax3').length) {
			let scene = document.getElementById('parallax3'),
				parallax = new Parallax(scene)
		}
	}
})



$(window).resize(() => {
	// Фикс. шапка
	headerInit = false

	setTimeout(() => {
		headerInit = true

		headerInit && $(window).scrollTop() > 0
			? $('header').addClass('fixed')
			: $('header').removeClass('fixed')
	}, 100)
})



$(window).scroll(() => {
	// Фикс. шапка
	typeof headerInit !== 'undefined' && headerInit && $(window).scrollTop() > 0
		? $('header').addClass('fixed')
		: $('header').removeClass('fixed')
})



function typeEffect(element, speed) {
	let text = element.innerHTML
	element.innerHTML = ""

	let i = 0
	let timer = setInterval(function () {
		if (i < text.length) {
			element.append(text.charAt(i))
			i++
		} else {
			clearInterval(timer)
		}
	}, speed)
}