import { storageService } from '../../../services/async-storage-service.js'
import { utilService } from '../../../services/util-service.js'

const MAIL_KEY = 'mailDB'
const USER = 'puki@ca.com'

_createMails()

export const mailService = {
	query,
	remove,
	save,
	get,
	update,
}

function query(status, txt = '') {
	return storageService.query(MAIL_KEY).then((mails) => {
		if (status === 'all') {
			return mails
		} else if (status === 'inbox') {
			mails = mails.filter((mail) => mail.to === USER)
		}

		mails = mails.filter((mail) => {
			return (
				mail.subject.includes(txt) ||
				mail.body.includes(txt) ||
				mail.from.includes(txt) ||
				mail.to.includes(txt)
			)
		})

		return mails
	})
}

function remove(mailId) {
	return storageService.remove(MAIL_KEY, mailId)
}

function get(mailId) {
	return storageService.get(MAIL_KEY, mailId)
}

function update(mail) {
	return storageService.put(MAIL_KEY, mail)
}

function save(mail) {
	if (mail.id) return storageService.put(MAIL_KEY, mail)
	else return storageService.post(MAIL_KEY, mail)
}

function _createMails() {
	let mails = utilService.loadFromStorage(MAIL_KEY)
	if (!mails || !mails.length) {
		mails = []
		mails.push(
			_createMail(
				'Hi!',
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptatum numquam fuga sint exercitationem laboriosam doloremque eum debitis nam saepe? Repudiandae porro quo dolor eum aspernatur enim dolorem numquam nemo?',
				USER,
				'anton@gmail.com'
			)
		)
		mails.push(_createMail('Hi!!!!', 'Hello lorem ipsum', 'anton@gmail.com', USER))
		mails.push(
			_createMail(
				'Muki invited you to GitHub',
				'You can accept or decline this invitation. You can also head over to to check out the repository or visit @AlmogTzalach to learn a bit more about them.		Thisinvitation will expire in 7 days.',
				'muki@yahoo.com',
				USER
			)
		)
		mails.push(
			_createMail(
				'Youre winner',
				'You win much mony, pls click to colect it',
				'real@mail.com',
				USER
			)
		)
		mails.push(
			_createMail(
				'Order Tracking Update!',
				'This e-mail has been sent to you for security reasons. We were unable to determine whether the previous login attempt into the system was performed from this device or via this application. Perhaps you were using a new computer, phone or web browser. If these actions werent performed by you, then there is a high possibility that your account has been hacked. We suggest you read the article Your account was logged in from an unfamiliar place or device',
				USER,
				'moshe@walla.co.il'
			)
		)
		mails.push(
			_createMail(
				'SporcleCon: The Biggest Trivia Weekend Ever',
				'Are you ready for SporcleCon? Amazing communities of trivia fans and influencers will come together in one place to compete for cash and other prizes while raising money for charity. There is something for everyone at SporcleCon, regardless of your skill level!',
				USER,
				'david@gmail.com'
			)
		)
		mails.push(
			_createMail(
				'Bestselling HIFIMAN Headphones Right Here',
				'Sharpen your Great Sword and get ready to hunt in Monster Hunter: World. Fight legions of fiendish foes in style in Devil May Cry 5. Plus, pick up Dragons Dogma: Dark Arisen, Street Fighter V, and more.',
				'alon@gmk.com',
				USER
			)
		)
		mails.push(_createMail('Camillo is Making a Comeback', 'Hello', 'ester@ynet.co.il', USER))
		mails.push(
			_createMail(
				'Disco Elysium - The Final Cut from your Steam wishlist is now on sale!',
				'Navigate the stars in a universe where gods, magic, and technology intersect! Get role-playing ebooks like the Starfinder Operations Manual and Starfinder One-Shot: Band on the Run—plus a physical copy of Starfinder Armory!!',
				USER,
				'scam@yandex.ru'
			)
		)
		mails.push(
			_createMail(
				'you can now get a new discount code to use on your next program',
				'Hello',
				'moshe@yahoo.com',
				'anton@gmail.com'
			)
		)
		mails.push(
			_createMail(
				'Hi!',
				'Its Avinash from Udacitys Academic Advisor team, writing to let you know that although your initial Personalized Discount code has expired, you can now re-apply to get a new code to use on your next program enrollment.I also wanted to make sure that you are getting the best value, and remind you that you can get an additional 15% off over your discount when you pay upfront for a bundle Nanodegree program subscription.If you have any questions about our Nanodegree programs, feel free to reply directly to this email or schedule a call with me. You can pick a time on the calendar that works best for you. I am in the office .Best Regards,Avinash Terms and Conditions:To redeem this offer, complete the application through your Udacity account. If you do not have a Udacity student account, you will need to create one to complete the application. Once the application has been submitted, you will receive a promo code that you can apply at checkout. The discount applies to each  of your -to- Udacity subscription OR your purchase of an upfront bundle. Sales taxes do not qualify for discount. This offer is not redeemable or refunded for cash. The discount cannot be used on previous purchases or combined with other offers, it is not transferable and is limited to one per customer. Void where prohibited. Offer expires  from receipt of the promotional code. Additional terms and conditions may apply. Offer subject to change without notice.',
				'moshe@mail.ru',
				USER
			)
		)
		mails.push(
			_createMail(
				'Time to Upgrade and Quicksave!',
				'You have been fighting valiantly in World of Tanks for yet another year. Lets celebrate this great occasion. Weve crunched the numbers and determined your unique playstyle.',
				'michael@bezeq.int',
				USER
			)
		)
		mails.push(
			_createMail(
				'Every HOUR - 8 FREE games to claim. Make your choice',
				'Hello',
				USER,
				'slayer_xxx@cool.net'
			)
		)
		mails.push(
			_createMail(
				'Your Guide to Kinesiology Tapes',
				'Ever wondered about the brightly colored adhesive strips that athletes seem to have randomly placed on their body? They arent random at all — theyre kinesio tapes! These bright bands are used to ease muscle pain and relieve tension in your joints. How do they work? How do you use them? Weve got answers for you!',
				USER,
				'puki1548@gmail.com'
			)
		)
		mails.push(
			_createMail('Play this weeks Brawl: Randomnauts!!', 'Hello', 'bolow@hotmail.com', USER)
		)
		mails.push(
			_createMail(
				'Hi!',
				'This weeks brawl is called Randomnauts!In this mode you have no influence over what Naut youre going to be, so just roll with it! From Voltar to Rocco, Penny or Clunk, try to make the best of the random character youre given.And if you dont like the selection, dont worry. Because when you die youll get a new one!Picked at random, of course.',
				'xnormal@live.com',
				USER
			)
		)
		mails.push(
			_createMail(
				'Accelerate your career with job-ready digital skills',
				'Udacity students are a community of global learners united in a shared goal of uplift and transformation. Our unique learning model enables an unprecedented degree of engagement with our students, and we are with them through every step of their learning journey.',
				'jlbaumga@yahoo.com',
				USER
			)
		)
		mails.push(
			_createMail(
				'Your exclusive discount',
				'A true indie gem tailored to fans of the Viking setting, this detailed-rich RTS focuses on settlements building. Strategies differ for every clan and can be explored alone or in co-op. The Viking Age Edition includes the base game and 7 DLCs.',
				'nullchar@outlook.com',
				USER
			)
		)
		mails.push(
			_createMail(
				'ProMods 2.51 is now available!!',
				'You must own the Going East! DLC, the Scandinavian DLC, the Vive La France! DLC , Italia DLC, Beyond the Baltic Sea DLC as well as the Road to the Black Sea DLC in order for ProMods to work.',
				USER,
				'dgatwood@aol.com'
			)
		)
		mails.push(
			_createMail(
				'Fall Flavors, Staff Favorites + New Channel',
				't comes as a bit of a surprise for us that one of the most essential genre stylings of music has been missing from our roster. We have since decided to fix this and now proudly offer you our newest DI.FM channel: Vocal House. All the delectable 4/4 House sounds with that irresistible human touch. From sultry divas to baritone bad boys, the Vocal House channel is all about song-based dancefloor grooves – complete with that unstoppable house music thump. A long overdue welcome to this great channel.',
				'ianbuck@me.com',
				USER
			)
		)
		mails.push(
			_createMail(
				'ZEN Spend Promo: Spend More for Great Prizes',
				'This weekend, starting on 10/18 at 12:01 AM, you can get ultra-rare bonuses in our ZEN spend rewards! This is your chance for a BattleAxe helmet, Emergency Relief Body Camo, the Duchess and Duchesss premium Temperate Camo skin. The heavy BattleAxe helmet is available exclusively through these spend rewards. Good spending, Agent...',
				'msloan@sbcglobal.net',
				USER
			)
		)
		mails.push(
			_createMail(
				'More related to "Why does the US Marine Corps have fighter aircraft? Being part of the US Navy, which...?"',
				'Yes, they do, though the Navy and Marines are trying to get away from that practice. For several years a few carrier air wings had Marine VMFA squadrons attached to them. There were a few different rationalizations for it, not least managing airframe trap life. Carrier arrested landings (“traps”) are extremely hard on the airframe, and aircraft have a lifetime maximum number of traps. After they hit that number, they are done going to the Boat. So there were a lot of Marine Corps Hornets with plenty of flight hours on them but relatively few traps. The solution was to try assigning some Marines to the carrier air wings and send Navy squadrons to the shore-based missions a Marine squadron would normally do.it worked fine in practice, but as the F-35 enters Fleet service and the oldest Hornets are retired, it probably won’t be repeated. The Marines would rather be ashore supporting Marines, which is what Marine Air is for.',
				'ateniese@verizon.net',
				USER
			)
		)
		mails.push(
			_createMail(
				'Were Selling Out',
				'For both twelve-hour segments, our talented hosts (including many talented Twitch streamers) will be showcasing everything from games and gaming peripherals, to kitchenware and electronics. Theyll also dive into previously unseen demos and gameplay of some of the most anticipated releases of the year. And you can buy all of it instantly on stream. Well even shine the spotlight on some of Prime Days more...unusual items for sale. Youll just have to tune in to see what we mean.',
				USER,
				'openldap@optonline.net'
			)
		)
		mails.push(_createMail('Its Crazy Free Weekends on!', 'Hello', USER, 'loscar@gmail.com'))
		mails.push(
			_createMail(
				'Fall Fixtures: Enter the new season with confidence',
				'The first day of fall is here! Which means the leaves are turning, the weather’s getting colder, and people are raving about pumpkins again. It also means the start of our brand-new Fall Fixtures Collection.Beginning today, were kicking off a collection of EDC and style staples everyone should own—whether in your pocket, at your hip, or in your closet. From our best-selling Falcon folding knife and Drop-exclusive raw denim to handsome leather belts and aluminum flashlights, these standouts will set you up right for the new season.',
				'trygstad@yahoo.com',
				USER
			)
		)
		mails.push(
			_createMail(
				'Be Interactive Fundraiser',
				'With both nights of Bass Center selling out faster than you can say “whatthefuckthesefolksreallylovebass” we decided to huck together a night of music in celebration of our non profit project “Be Interactive” – dedicated to promoting engagement and community activism to raise awareness about important issues and hopefully rally each other to make a difference :)  In the fall of 2018, we launched the nonprofit into life through a special one-night event in San Francisco accompanied by our friends, artists, and activists alike! This July we’re going to do it again, but taking it up a notch in a place we are long overdue to return: NASHVILLE!',
				'tbeck@comcast.net',
				USER
			)
		)
		mails.push(
			_createMail(
				'Updates to the eBay User Agreement',
				'At eBay, we strive to make our policies clear and our services easy to use. As part of that commitment, we’re announcing some changes to the eBay User Agreement.Our updated User Agreement will take effect on June 21, 2018 for all users. The updated User Agreement was posted on eBay.com on May 22, 2018.The key updates to the eBay User Agreement include updating language around selling fees and adding clarifying language around the Global Shipping Program.Thank you for being a part of the eBay community.Sincerely,The eBay team',
				USER,
				'danzigism@sbcglobal.net'
			)
		)
		mails.push(
			_createMail(
				'This Is How June Became Pride Month',
				'Play 150 minefield quizzes to earn the June Kaboom badge. Why not start with the most popular minefield of all time: Find the US States No Outlines?',
				'cparis@yahoo.ca',
				USER
			)
		)
		mails.push(
			_createMail(
				'Click the US Presidents by Picture (Minefield) leads our Top Ten!',
				'Crafted in the community-favorite tenkeyless layout, the Drop ENTR is a win-win for beginners and vets. Available in three colors, it comes with your choice of tactile Halo True switches or linear Gateron Yellows. The keycaps are made of fade-resistant PBT with shine-through legends to highlight the backlighting. Finally, the ENTR sports an aluminum case to stay put wherever you type.',
				USER,
				'drezet@optonline.net.com'
			)
		)
		mails.push(
			_createMail(
				'Time for some stars⭐? Or need help with your order?',
				'INKASI GERLANDHello Anton Kandyba,We are pleased to confirm your booking for Thursday 09 December 2021 at 20:00 (3 people).',
				'jbailie@hotmail.com',
				USER
			)
		)

		mails[0].isRead =
			mails[2].isRead =
			mails[3].isRead =
			mails[7].isRead =
			mails[8].isRead =
			mails[12].isRead =
			mails[13].isRead =
			mails[14].isRead =
			mails[19].isRead =
			mails[22].isRead =
			mails[23].isRead =
			mails[27].isRead =
				true

		mails[2].isStarred =
			mails[3].isStarred =
			mails[9].isStarred =
			mails[15].isStarred =
			mails[18].isStarred =
			mails[21].isStarred =
			mails[25].isStarred =
				true

		mails[2].created =
			mails[3].created =
			mails[4].created =
			mails[5].created =
				new Date(Date.now() - 180000)
		mails[6].created =
			mails[7].created =
			mails[8].created =
			mails[9].created =
				new Date('June 17, 2022')
		mails[10].created = mails[11].created = mails[12].created = new Date(1650006016976)
		mails[13].created =
			mails[14].created =
			mails[15].created =
			mails[16].created =
				new Date('May 15, 2022')
		mails[17].created =
			mails[18].created =
			mails[19].created =
			mails[20].created =
				new Date('April 27, 2022')
		mails[21].created =
			mails[22].created =
			mails[23].created =
			mails[24].created =
				new Date('April 1, 2022')
		mails[25].created =
			mails[26].created =
			mails[27].created =
			mails[28].created =
			mails[29].created =
				new Date('February 27, 2022')
		storageService.postMany(MAIL_KEY, mails)
	}
	return mails
}

function _createMail(subject, body, from, to) {
	return {
		id: utilService.makeId(),
		subject,
		body,
		from,
		to,
		created: new Date(),
		isRead: false,
		isStarred: false,
	}
}
