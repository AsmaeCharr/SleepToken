const text = document.querySelector("p");

let letters = [...text.textContent];

let max = 10;
letters = letters
	.map((letter) => {
		const randNum = Math.floor(Math.random() * max);
		const sign = Math.random() < 0.5 ? 1 : -1;
		return `<span style="--i:${randNum * sign}">${letter == " " ? "&nbsp" : letter
			}</span>`;
	})
	.join("");

text.innerHTML = letters;
letters = document.querySelectorAll("span");

letters.forEach((letter) =>
	letter.addEventListener("mouseover", () => {
		letter.classList.add("active");
		letter.classList.remove("MouseOut");
	}));

letters.forEach((letter) =>
	letter.addEventListener('mouseout', () => {
		setTimeout(() => {
			// letter.removeAttribute("style");
			letter.classList.remove("active")
			letter.classList.add("MouseOut");
		}, 2000);
	}));


const text2 = document.querySelector("h1");

let letters2 = [...text2.textContent];

let max2 = 10;
letters2 = letters2
	.map((letter2) => {
		const randNum = Math.floor(Math.random() * max2);
		const sign = Math.random() < 0.5 ? 1 : -1;
		return `<span style="--j:${randNum * sign}">${letter2 == " " ? "&nbsp" : letter2
			}</span>`;
	})
	.join("");

text2.innerHTML = letters2;
letters2 = document.querySelectorAll("span");

letters2.forEach((letter2) =>
	letter2.addEventListener("mouseover", () => {
		letter2.classList.add("activeH");
		letter2.classList.remove("MouseOutH");
	}));

letters2.forEach((letter2) =>
	letter2.addEventListener('mouseout', () => {
		setTimeout(() => {
			// letter2.removeAttribute("style");
			letter2.classList.remove("activeH")
			letter2.classList.add("MouseOutH");
		}, 2000);
	}));




/*  CURSOR	 */
var cursor = {
	delay: 8,
	_x: 0,
	_y: 0,
	endX: (window.innerWidth / 2),
	endY: (window.innerHeight / 2),
	cursorVisible: true,
	cursorEnlarged: false,
	$dot: document.querySelector('.cursor-dot'),
	$outline: document.querySelector('.cursor-dot-outline'),

	init: function () {
		// Set up element sizes
		this.dotSize = this.$dot.offsetWidth;
		this.outlineSize = this.$outline.offsetWidth;

		this.setupEventListeners();
		this.animateDotOutline();
	},

	setupEventListeners: function () {
		var self = this;

		// Anchor hovering
		document.querySelectorAll('a').forEach(function (el) {
			el.addEventListener('mouseover', function () {
				self.cursorEnlarged = true;
				self.toggleCursorSize();
			});
			el.addEventListener('mouseout', function () {
				self.cursorEnlarged = false;
				self.toggleCursorSize();
			});
		});

		// Click events
		document.addEventListener('mousedown', function () {
			self.cursorEnlarged = true;
			self.toggleCursorSize();
		});
		document.addEventListener('mouseup', function () {
			self.cursorEnlarged = false;
			self.toggleCursorSize();
		});

		document.addEventListener('mousemove', function (e) {
			// Show the cursor
			self.cursorVisible = true;
			self.toggleCursorVisibility();

			// Position the dot
			self.endX = e.pageX;
			self.endY = e.pageY;
			self.$dot.style.top = self.endY + 'px';
			self.$dot.style.left = self.endX + 'px';
		});

		// Hide/show cursor
		document.addEventListener('mouseenter', function (e) {
			self.cursorVisible = true;
			self.toggleCursorVisibility();
			self.$dot.style.opacity = 1;
			self.$outline.style.opacity = 1;
		});

		document.addEventListener('mouseleave', function (e) {
			self.cursorVisible = true;
			self.toggleCursorVisibility();
			self.$dot.style.opacity = 0;
			self.$outline.style.opacity = 0;
		});
	},

	animateDotOutline: function () {
		var self = this;

		self._x += (self.endX - self._x) / self.delay;
		self._y += (self.endY - self._y) / self.delay;
		self.$outline.style.top = self._y + 'px';
		self.$outline.style.left = self._x + 'px';

		requestAnimationFrame(this.animateDotOutline.bind(self));
	},

	toggleCursorSize: function () {
		var self = this;

		if (self.cursorEnlarged) {
			self.$dot.style.transform = 'translate(-50%, -50%) scale(0.75)';
			self.$outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
		} else {
			self.$dot.style.transform = 'translate(-50%, -50%) scale(1)';
			self.$outline.style.transform = 'translate(-50%, -50%) scale(1)';
		}
	},

	toggleCursorVisibility: function () {
		var self = this;

		if (self.cursorVisible) {
			self.$dot.style.opacity = 1;
			self.$outline.style.opacity = 1;
		} else {
			self.$dot.style.opacity = 0;
			self.$outline.style.opacity = 0;
		}
	}
}

cursor.init();
/*  CURSOR	 */


